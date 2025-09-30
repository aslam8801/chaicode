require('dotenv').config()

const express = require('express')
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.send("Hii, Developer, Keep hope and go all way");
})

app.get("/twitter", (req, res)=>{
    res.send("aslam@express.com")
})

app.get("/channel", (req, res) =>{
    res.send("<h1>Chai Aur code</h1>")
})

app.get("/youtube", (req, res) => {
    res.send("<a href='www.youtube.com'>youtube</a>")
})

app.listen(process.env.PORT, ()=>{
    console.log(`Port listening at ${process.env.PORT}`);
})