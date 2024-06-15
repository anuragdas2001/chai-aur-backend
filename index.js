require('dotenv').config()
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World! Yup");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login at chai aur code</h1>");
});

app.get("/chai",(req,res)=>{
    res.send("<h2>Chai aur code</h2>")
})

app.get("/github",(req,res)=>{
    res.json({name:"Anurag Das"}); 
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
