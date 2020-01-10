/* 
Instalacao do Sequelize:
npm install --save sequelize
npm install --save mysql2
*/

var express = require("express");

var app = express();

// Rotas

app.get("/",(req, res)=>{
    res.send("Bem vindo ao App");
})

app.get("/site",(req,res)=>{
    res.sendFile(__dirname+"/html/index.html");
})

app.get("/:nome", (req,res)=>{
    res.send(`<h1>Ola ${req.params.nome}</h1>`);
})

app.listen(8082, ()=>{
    console.log("Servidor rodando na porta 8082");
});