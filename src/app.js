const path = require("path");

// requerimos dotenv para acceder a nuestro .env
require("dotenv").config();

// Requerimos express para utilizarlo 
const express = require('express');

// Inicializamos nuestra aplicacion express
const app = express();

// Configurar nuestro app 
app.use(express.static(path.join(__dirname, "../public")));
app.set("view engine","ejs");


// Requerimos los enrutadores 
const homeRoutes = require("./routes/home");
const productsRoutes = require("./routes/products");
// Utilizar nuestro enrutadores
app.use("/", homeRoutes);
app.use("/products", productsRoutes);

// // //Creamos nuestro primer GET (ruta) // nuestro primer ruta
// app.get("/", (req, res) => {
//     // json 
//     //res.json({key: value})
//     //plain text
//     //res.send ("asd")
//     //HTTP status
//     //res.status(200).send()
//     // files
//     res.sendFile(path.join(__dirname,"views/home.html"));
// });

//Comenzamos a escuchar con nuestro servidor 
app.listen(process.env.PORT,() => {
    console.log("server listening on port " + process.env.PORT);
});

//Exportamos nuestra aplicacion para utilizarlo como modulo 
// module.exports=app.router; 