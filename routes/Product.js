const express = require("express");
const router = express.Router();
const Product = require("../Models/Product");
const isAuth =require('../middlware/passport')
//test
router.get("/",(req,res)=>{
    res.send("hello world !");
});

//@Method Post
//@desc post a Product 
//@path : http://localhost:5000/Product/register
//@params : body
router.post("/register",isAuth(),async(req,res)=>{
    const {catégorie, image, meuble,adresse,gouvernerat,prix,bailleur,tel,description,postedBy}=req.body
    try {
        const newProduct=await new Product({catégorie, image, meuble,adresse,gouvernerat,prix,bailleur,tel,description,postedBy:req.user});
        const searched = await Product.findOne({adresse:req.body.adresse})
        if (searched){
            return  res.status(400).send({message:"product existe déjà!"});
            }
       const newPro= await newProduct.save();
       res.status(200).send({product:newPro}); 
    } catch (error) {
        console.log(error)
        res.status(500).send({message:"Échec de l'enregistrement du produit  ! "})
    }
}) 

//@Method Get
//@desc get all products
//@path : http://localhost:5000/product/all
//@params : body

router.get("/all",async(req,res)=>{
       
    try {
     const result = await Product.find();
     res.status(200).send({Products:result, message:"Afficher tous les produits !"});
    } catch (error) {
        res.status(400).send({message:"impossible d'afficher les produits !"});
    }
});

//@Method Get
//@desc product by id
//@path : http://localhost:5000/product/:id
//@params : id

router.get("product/:_id", async(req,res)=>{
    try {
        const result = await Product.findOne({_id:req.params._id})
        if (!result){return res.send({message:" Product not found!"})}
        res.status(200).send({Product:result, message:" Product found !"});
    } catch (error) {
        res.status(400).send({message :"can not getting contact !"});
    }
});
//@Method Get
//@desc products by category
//@path : http://localhost:5000/product/category
//@params : catégorie

router.get("/:category",async(req,res)=>{
    try {
        const Category= req.params.category
        const result = await Product.find({catégorie:Category});
        res.status(200).send({  Products:result, message:`Getting all ${Category} !`})
        
    } catch (error) {
        res.status(400).send({message:"can not getting products!"});
        console.log(error);
    }
});
//@Method Get
//@desc products by gouvernerat
//@path : http://localhost:5000/product/gouvernerat
//@params : gouvernerat

// router.get("/:governorate",async(req,res)=>{
//     try {
//         const Governorate= req.params.Governorate
//         const result = await Product.find({gouvernerat:Governorate});
//         res.status(200).send({  Product:result, message:`Getting all ${Governorate} !`})
        
//     } catch (error) {
//         res.status(400).send({message:"can not get products!"});
//         console.log(error);
//     }
// });


//@Method Delete
//@desc : delete a product 
//@path : http://localhost:5000/product/:id
//@params : id

router.delete("/:_id",async(req,res)=>{
     
    try {
        const ident = req.params._id
      const result =await Product.deleteOne({_id: ident});
       console.log(result)
       result.deletedCount ? res.status(200).send({message:"product deleted"}) : res.status(400).send({message:"there is no product with this id!"});
      
    } catch (error) {
         res.status(400).send({message: "Can not delete this product !"}) ;
    }
});

//@Method Put
//@desc : update a product 
//@path : http://localhost:5000/product/:id
//@params : id
  
router.put('/:id',async(req,res)=>{
    try {
      let result= await Product.updateOne({_id:req.params.id},{$set:{...req.body}});
      if(result.nModified>0){res.status(200).send({result,msg:'product updated'})}
       else{res.status(200).send({result,msg:'product already updated'})}
    } catch (error) {
      res.status(400).send({msg:'product not updated'})
      console.log(error)
    }
  })





module.exports=router;