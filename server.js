const express = require('express');
const app = express();
const connectToDatabase = require('./db/db_config');
const Users = require('./model/userModel');
const Gallery = require('./model/galleryModel');
const PORT = 3000;

app.use(express.json({extended: true}));
app.use(express.urlencoded());
// useNewUrlParser, useUnifiedTopology, and useCreateIndex are true, and useFindAndModify is false. Please remove these options from your code.

async function main() {
    const db = await connectToDatabase();
    // Now you can use `db` to interact with your database
  }
  
  main();



app.get('/', (req, res) => {
    res.sendFile("page/index.html", {root: __dirname});
});

app.get('/login', (req, res) => {
    res.sendFile("page/login.html", {root: __dirname});
})

app.get('/registration', (req, res) => {
    res.sendFile("page/registration.html", {root: __dirname});
})

// Endpoint for APIs

app.post('/get_art_gallery', (req,res) => {
    const {userToken} = req.body;
    res.sendFile("page/index.html", {root: __dirname});
})

app.post('/login', (req,res) => {
    const {userToken} = req.body;
    res.sendFile("page/index.html", {root: __dirname});
})

app.post('/registration', async (req,res) => {
    const {userToken} = req.body;
    console.log(req.body);  // Requesting Data Are Display
    let user = await Users.create(req.body)
    res.status(200).json({status: true,user: user})
    
})

app.post('/add_art_gallery', (req,res) => {
    const {userToken} = req.body;
    res.sendFile("page/index.html", {root: __dirname});
})

app.post('/delete_art_gallery', (req,res) => {
    const {userToken} = req.body;
    res.sendFile("page/index.html", {root: __dirname});
})

app.listen(PORT, () => console.log(`Server Running on the http://localhost:${PORT}`))