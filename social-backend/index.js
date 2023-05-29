const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors');
require('dotenv').config();

// middleware 
app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to the Social-Lab server 0.1</h1>
  `)
})

app.listen(port, () => {
  console.log(`social-lab server listening on port ${port}`)
})