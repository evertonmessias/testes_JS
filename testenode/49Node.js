/* 
Instalacao do Express:
sudo npm install express --save
*/

var express = require("express");

var app = express();

app.get("/",(req, res)=>{
    res.send("Bem vindo ao App");
})

app.get("/sobre",(req,res)=>{
    res.send("Minha pagina Sobre");
})

app.get("/:nome", (req,res)=>{
    res.send(`<h1>Ola ${req.params.nome}</h1>`);
})

app.listen(8081, ()=>{
    console.log("Servidor rodando na porta 8081");
});