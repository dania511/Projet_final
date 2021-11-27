import axios from "axios" ;
import {GET_PRODUCTS_LOAD, GET_PRODUCTS_SUCESS, GET_PRODUCTS_FAIL, GET_PRODUCT_LOAD, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL,GET_PRODUCTS_CATEGORY_LOAD, GET_PRODUCTS_CATEGORY_SUCCESS, GET_PRODUCTS_CATEGORY_FAIL,  POST_PRODUCT, EDIT_PRODUCT } from "../const/Product";


export const getProducts =()=> async(dispatch)=>{
    dispatch({ type : GET_PRODUCTS_LOAD});
    try {
        let result=await axios.get("/product/all");
        dispatch({ type:GET_PRODUCTS_SUCESS,payload:result.data.Products });
    } catch (error) {
        dispatch ({type:GET_PRODUCTS_FAIL,payload:error});
    }
}

export const getProduct =(_id)=> async(dispatch)=>{
    dispatch({ type : GET_PRODUCT_LOAD});
    try {
        let result=await axios.get(`/product/${_id}`);
        dispatch({ type:GET_PRODUCT_SUCCESS,payload:result.data.Products});
    } catch (error) {
        dispatch ({type:GET_PRODUCT_FAIL,payload:error});
    }
}

export const getProductByCategory=(category)=>async(dispatch)=>{
    dispatch({type:GET_PRODUCTS_CATEGORY_LOAD});
    try {
        let result=await axios.get(`/product/${category}`);
        dispatch({type:GET_PRODUCTS_CATEGORY_SUCCESS,payload:result.data.Products})
    } catch (error) {
        dispatch({type:GET_PRODUCTS_CATEGORY_FAIL,payload:error});
    }
};
// export const getProductByGovernrate=(category)=>async(dispatch)=>{
//     dispatch({type:GET_PRODUCTS_CATEGORY_LOAD});
//     try {
//         let result=await axios.get(`/product/${category}`);
//         dispatch({type:GET_PRODUCTS_CATEGORY_SUCCESS,payload:result.data.Products})
//     } catch (error) {
//         dispatch({type:GET_PRODUCTS_CATEGORY_FAIL,payload:error});
//     }
// };

export const deleteProduct=(id)=>dispatch=>{

    axios.delete(`/product/${id}`)
    .then((res)=>dispatch(getProducts()))
    .catch(err=>console.log(err));
};

export const editProduct=(id,product)=>dispatch=>{
    axios
    .put(`/product/${id}`,product)
    .then((res)=>{
        dispatch({type:EDIT_PRODUCT,payload:res.data.message});
    }).then(dispatch(getProducts()))
    .catch(err=>console.log(err))

}

export const addProduct =(product)=>async(dispatch)=>{
const options={
    headers:{
        "Content-Type":"application/json",
         Authorization:localStorage.getItem('token')
    }
}
    try {
       let res= await axios.post("product/register",product,options)
    dispatch({type:POST_PRODUCT,payload:res.data})
    dispatch(getProducts())
    } catch (error) {
        dispatch({type:EDIT_PRODUCT,payload:error})
        console.log(error)
    }
} 
  


