const path = require("path")

// requerimos dotenv para acceder a nuestro .env
require("dotenv").config();

// Requerimos express para utilizarlo 
const express = require('express');

// Inicializamos nuestra aplicacion express
const app = express();




// //Creamos nuestro primer GET
app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname,"views/home.html"));
});

//Comenzamos a escuchar con nuestro servidor 
app.listen(process.env.PORT,() => {
    console.log("server listening on port " + process.env.PORT);
});

//Exportamos nuestra aplicacion para utilizarlo como modulo 
// module.exports=app.router; 