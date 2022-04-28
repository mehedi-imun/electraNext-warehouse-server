const cors = require('cors');
const express = require('express');
const app = express()
const port = process.env.PORT || 5000
const { MongoClient, ServerApiVersion } = require('mongodb');
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
      app.get('/products',async(req,res)=>{
        const query = {};
        const cursor = productCollection.find(query);
        const result = await cursor.toArray()
        res.send(result)
      })


    } finally {
    //   await client.close();
    }
}
  run().catch(console.dir);


app.get('/',(req,res)=>{
    res.send('elecktric warhouse server is running')
})
app.listen(port,()=>{
    console.log('lesten port ',port);
})