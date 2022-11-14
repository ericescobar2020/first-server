const path = require("path");
const express = require("express");

const router = express.Router();

const products= [
    {
        id:1,
        name: "Product 1",
        description: "This is the first product",
        image: 
        "https://www.mundomotero.com/wp-content/uploads/2020/04/HONDA_CB125F_2021-7.jpg"
    },
    {
        id:2,
        name: "Product 2",
        description: "This is the first product",
        image: 
        "https://www.mundomotero.com/wp-content/uploads/2020/04/HONDA_CB125F_2021-7.jpg"
    },
    {   
        id:3,
        name: "Product 3",
        description: "This is the first product",
        image: 
        "https://www.mundomotero.com/wp-content/uploads/2020/04/HONDA_CB125F_2021-7.jpg"
    },  
    {   
        id:4,
        name: "Product 4",
        description: "This is the first product",
        image: 
        "https://www.mundomotero.com/wp-content/uploads/2020/04/HONDA_CB125F_2021-7.jpg"
    }
    
]

router.get("/", (req, res) => {
  return res.status(200).render("vistas/list.ejs", {
    products,
  });
});

router.get("/:id", (req, res) => {
    const {id} = req.params;
    
   const product =products.find((product)=>product.id ==id);
  return res.status(200).render("vistas/details.ejs", {product});
});

module.exports = router;
