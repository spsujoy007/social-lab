const express = require('express')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const port = process.env.PORT || 5000
// https://sociallab-be.vercel.app/
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
        const postCollection = client.db('Social-Lab').collection("posts");
        const likesCollection = client.db('Social-Lab').collection("PostLikes");
        
        app.post('/createuser', async(req, res) => {
            const userDetail = req.body;
            const result = await usersCollection.insertOne(userDetail);
            res.send(result)
        }) //create account and get data of user


        app.post('/createpost', async(req, res) => {
          const email = req.query.email;
          const verifieduser = usersCollection.findOne({email: email});
          if(verifieduser){
              const post_data = req.body;
              const result = await postCollection.insertOne(post_data);
              res.send(result)
          }
          else{
            res.send("not verified user")
          }
        }) // to create a post

        app.post('/likepost', async(req, res) => {
          const id = req.query.id;
          const query = {_id: new ObjectId(id)};
          const likeInfo = req.body;
          const result = await likesCollection.insertOne(likeInfo)
          res.send(result)
        }) // click to like post



        app.get('/allposts', async(req, res) => {
          const allposts = await postCollection.find({}).sort({_id: -1}).toArray()
          res.send(allposts)
        }) // to get all user posts

        app.get('/myposts', async(req, res) => {
          const username = req.query.username;
          const query = {username: username}
          const myposts = await postCollection.find(query).sort({_id: -1}).toArray()
          res.send(myposts)
        })

        app.delete('/deletepost', async(req, res) => {
          const id = req.query.id;
          const query = {_id: new ObjectId(id)}
          const result = await postCollection.deleteOne(query)
          res.send(result)
        })

        app.get('/userdata', async(req, res) => {
          const email = req.query.email
          const query = {email: email};
          const getuser = await usersCollection.findOne(query)
          res.send(getuser)
        }) //get single user data

        app.get('/userPersonaldata/:username', async(req, res) => {
          const username = req.params.username
          const query = {username: username};
          const getuser = await usersCollection.findOne(query)
          res.send(getuser)
        }) //get single user data


        app.get('/getAllUsers', async(req, res) => {
            const result = await usersCollection.find({}).sort({_id: -1}).toArray()
            res.send(result)
        }) //get all user data

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