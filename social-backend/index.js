const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors');
require('dotenv').config();

// middleware 
app.use(express.json())
app.use(cors())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6ke0m0t.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run(){
    try{
        const usersCollection = client.db('Social-Lab').collection("users");
        
        app.post('/createuser', async(req, res) => {
            const userDetail = req.body;
            console.log(userDetail)
            const result = await usersCollection.insertOne(userDetail);
            res.send(result)
        })

        app.get('/userdata', async(req, res) => {
          const email = req.query.email
          const query = {email: email};
          const getuser = await usersCollection.findOne(query)
          res.send(getuser) 
        })

        app.get('/getAllUsers', async(req, res) => {
            const result = await usersCollection.find({}).toArray()
            res.send(result)
        })
    }

    finally{}
}
run().catch(error => console.error(error))





app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to the Social-Lab server 0.1</h1>
  `)
})

app.listen(port, () => {
  console.log(`social-lab server listening on port ${port}`)
})