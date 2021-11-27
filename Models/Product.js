const mongoose=require('mongoose')
const schema= mongoose.Schema
const {ObjectId}=mongoose.Schema.Types

const ProductSchema=new schema({
catégorie:{
    type:String,
    required:true
},
image:{
    type:String,
    required:true
},
meuble:{
    type:String,
    required:true
},
adresse:{
    type:String,
    required:true
},
gouvernerat:{
    type:String,
    required:true
},
prix:{
    type:String,
    required:true
},
bailleur:{
    type:String,
    required:true
},
tel:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true
},
postedBy:{
    type:ObjectId,
    ref:"user"
}



// ,
// isAdmin:{
//     type:Boolean,
//     default:false
// }
});


module.exports=mongoose.model("product",ProductSchema);