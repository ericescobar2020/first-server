const path = require("path");

const express = require("express");

// inicializamos un enrutador 
const router = express.Router();

// Nuestra primer ruta 
router.get("/", (req, res) => {
  const {name}= req.query;
  // file 
    res.status(200).render("vistas/home.ejs",{
     user: {
      name,
     } 
    });
});

module.exports= router; 