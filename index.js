const cors = require('cors');
const { query } = require('express');
const express = require('express');
const app = express()
const port = process.env.PORT || 5000
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

//middleware
app.use(cors())
app.use(express.json());





const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ha8yc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
  try {
    await client.connect();
    const productCollection = client.db("warehouseProducts").collection('products');
    // get all product
    app.get('/products', async (req, res) => {
      const query = {};
      const cursor = productCollection.find(query);
      const result = await cursor.toArray()
      res.send(result)
    });
    // get product by id
    app.get('/product/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) }
      const result = await productCollection.findOne(query);
      res.send(result)

    });
    // update item
    app.put('/item/:id',async(req,res)=>{
      const id = req.params.id;
      const updateItems = req.body;
      const quantity = updateItems.newQuantity
      const filter = {  _id: ObjectId(id)};
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          quantity :quantity
        },
      };
      const result = await productCollection.updateOne(filter, updateDoc, options);
      res.send(result)


    })
    // delete item by id
    app.delete('/item/:id', async (req,res)=>{
      const id =  req.params.id
      const query = { _id: ObjectId(id) };
      const result = await productCollection.deleteOne(query);
      res.send(result)

    });
    // post product with user email
    app.post('/product',async(req,res)=>{
      const product = req.body;
      const result = await productCollection.insertOne(product)
      res.send(result)

    });
    // get item by email 
    app.get('/myitems',async(req,res)=>{
      const email = req.query.email
      const  query = {email:email}
      const cursor = productCollection.find(query) 
      const result = await cursor.toArray()
      res.send(result)
    })

  } finally {
    //   await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('elecktric warhouse server is running')
})
app.listen(port, () => {
  console.log('lesten port ', port);
})