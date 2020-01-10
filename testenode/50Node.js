/* 
Instalacao do Sequelize:
npm install --save sequelize
npm install --save mysql2
*/

const Sequelize = require("sequelize");
const sequelize = new Sequelize('temp', 'root', 'efc2505xx', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => console.log("SUCESSO")
        .catch(() => console.log("ERRO")));

/*

app.get("/",(req, res)=>{
    res.send("Bem vindo ao App");
})

app.get("/site",(req,res)=>{
    res.sendFile(__dirname+"/html/index.html");
})

app.get("/:nome", (req,res)=>{
    res.send(`<h1>Ola ${req.params.nome}</h1>`);
})

app.listen(8081, ()=>{
    console.log("Servidor rodando na porta 8081");
});

*/