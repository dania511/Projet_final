import React from "react";
import { useDispatch , useSelector  } from "react-redux";
import {useEffect} from "react"
import NavBar from "../NavBar";
import ProductCard from "../Product/ProductCard";
import alloOuis from "../video/alloOuis.mp4";
import {getProducts} from "../../JS/actions/Product";
import AddProduct from "../Product/AddProduct";
import { Link ,useHistory} from 'react-router-dom'
import {Button} from 'react-bootstrap' 
 const Dashbord = () => {
//   const dispatch = useDispatch();
//   const history = useHistory();
const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts())
  },[]);
  const prod = useSelector((state) => state.productReducer.products);
  return (
    <div className="corp">
    
       <div   className="vid">
         <video autoPlay  width="250" height="200"  src={alloOuis} />
         <p style={{ heigh:"300px",fontSize:"20px", marginTop:"30px", color:"#0dcaf0"}}> Allo! Ouais propose des services immobiliers: que vous soyez bailleurs ou locataires…en fait, quel que soit vos projets, nous vous accueillons et toujours avec grand plaisir !</p>
       </div>
{/* add Product */}
       <div className="ajouter">
         <AddProduct/>     
       </div>
{/* end add product */}

      <div className="productList">
      {prod?
       prod.map(el=> <ProductCard key={el._id} produit={el}/>)
      :<h1>loading...</h1>}
      </div>
    </div>
    
  );
};

export default Dashbord;