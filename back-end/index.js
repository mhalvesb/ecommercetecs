const express = require("express");
const app = express();
const serverPort = 8080;






app.listen(serverPort, () =>{
    console.log(`Servidor rodando na porta ${serverPort}`);
})