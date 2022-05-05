const cors = require('cors');
const { query } = require('express');
const express = require('express');
const app = express()
const port = process.env.PORT || 5000
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const jwt = require('jsonwebtoken');

//middleware
app.use(cors())
app.use(express.json());

const jwtVerifyUser = (req, res, next) => {
  const authToken = req.headers.authorization;
  const token = authToken?.split(' ')[1];
  // console.log(token);
  if (token === 'null') {
    return res.status(401).send({ massage: ('unauthorize') })
  } else {

    jwt.verify(token, process.env.ACCESS_JWT_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).send({ massage: ('forbidden access') })
      } else {
        req.decoded = decoded
        next()
      }
    })
  }
};


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ha8yc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
  try {
    await client.connect();
    const productCollection = client.db("warehouseProducts").collection('products');
    const serviceCollection = client.db("warehouseProducts").collection('service');
    // get 6 product for home page 
    app.get('/product', async (req, res) => {
      const query = {};
      const cursor = productCollection.find(query);
      const result = await cursor.limit(6).toArray()
      res.send(result)
    });
    // get all product for manage inventory with pagination
    app.get('/allproduct', async (req, res) => {
      const query = {};
      const page = parseInt(req.query.page);
      const cursor = productCollection.find(query);
      const result = await cursor.skip(page * 10).limit(10).toArray()
      res.send(result)
    });

    // product count 
    app.get('/productcount', async (req, res) => {
      const count = await productCollection.estimatedDocumentCount ()
      res.send({ count })
    });

    // get product by id
    app.get('/product/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) }
      const result = await productCollection.findOne(query);
      res.send(result)

    });
    // update item
    app.put('/product/:id', async (req, res) => {
      const id = req.params.id;
      const updateItems = req.body;
      const quantity = updateItems.newQuantity
      const filter = { _id: ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          quantity: quantity
        },
      };
      const result = await productCollection.updateOne(filter, updateDoc, options);
      res.send(result)


    })
    // delete item by id
    app.delete('/product/:id', async (req, res) => {
      const id = req.params.id
      const query = { _id: ObjectId(id) };
      const result = await productCollection.deleteOne(query);
      res.send(result)

    });
    // post product with user email
    app.post('/product', async (req, res) => {
      const product = req.body;
      const result = await productCollection.insertOne(product)
      res.send(result)

    });
    // get item by email 
    app.get('/myitems', jwtVerifyUser, async (req, res) => {
      const decodedEmail = req.decoded.email
      // console.log(decodedEmail);
      const email = req.query.email
      if (decodedEmail === email) {
        const query = { email: email }
        const cursor = productCollection.find(query)
        const result = await cursor.toArray()
        res.send(result)
      } else {
        res.status(403).send({ massage: 'forbidden access' })
      }
    });
    // warehouse management service data
    app.get('/service', async (req, res) => {
      const query = {};
      const cursor = serviceCollection.find(query);
      const result = await cursor.toArray()
      res.send(result)
    });

    // authentication send token
    app.post('/gettoken', async (req, res) => {
      const user = req.body
      const accessToken = jwt.sign(user, process.env.ACCESS_JWT_TOKEN_SECRET, {
        expiresIn: '2d'
      });
      res.send(accessToken)
    })

  } finally {
    //   await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('electraNext warehouse server is running')
})
app.listen(port, () => {
  console.log('lesten port ', port);
})