
import { GET_PRODUCTS_LOAD,GET_PRODUCTS_SUCESS,GET_PRODUCTS_FAIL, GET_PRODUCT_LOAD, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL, GET_PRODUCTS_CATEGORY_LOAD, GET_PRODUCTS_CATEGORY_SUCCESS, GET_PRODUCTS_CATEGORY_FAIL,  POST_PRODUCT, EDIT_PRODUCT} from "../const/Product";
const initialState={
    products : [],
    loadProducts : false ,
    errors : null ,
    loadProduct:false,
    product:{},
    postProduct:{},
    editProduct:"",

}
export const productReducer = (state=initialState,{type,payload})=>{
    switch (type){
        case GET_PRODUCTS_LOAD : return {...state,loadProducts : true};
        case GET_PRODUCTS_SUCESS : return {...state,products:payload ,loadProducts:false };
        case GET_PRODUCTS_FAIL : return {...state,errors:payload,loadProducts:false};
        case GET_PRODUCT_LOAD : return {...state,loadProduct : true};
        case GET_PRODUCT_SUCCESS : return {...state,loadProduct:false,product:payload};
        case GET_PRODUCT_FAIL : return {...state,loadProduct:false,errors:payload};
        case GET_PRODUCTS_CATEGORY_LOAD:return{...state,loadProducts:true};
        case GET_PRODUCTS_CATEGORY_SUCCESS:return{...state,products:payload,loadProducts:false};
        case GET_PRODUCTS_CATEGORY_FAIL:return{...state,loadProducts:false,errors:payload};
        case POST_PRODUCT: return {...state,postProduct:payload};
        case EDIT_PRODUCT: return {...state,editProduct:payload};
        default : return state ;

    };
};