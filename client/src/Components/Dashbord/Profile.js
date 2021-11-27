import { useSelector,useDispatch  } from "react-redux";
import {useEffect} from "react";
import { current } from "../../JS/actions/user";
import  "./Profile.css";
import { getProducts } from "../../JS/actions/Product";
import ProfileProductCard from "../Product/ProfileProductCard";

const Profile = () => {
    const dispatch = useDispatch()
     useEffect(() => {
      dispatch(current())
      dispatch(getProducts())

      },[]);
    
    const user = useSelector((state) => state.userReducer.user);
    const prod = useSelector((state) => state.productReducer.products);  
       console.log(user)
    return (
        <div >
          <p  style={{fontSize:"60px",fontFamily:"papyrus", marginTop:"50px", color:"red"}}>Profil de {user?.name} </p>
      <div className="clas">
        <div className="container">
          <div className="row">
            
            <div className="col-lg-5 col-md-6">
              <div className="mb-2">
                <img className="w-100" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" />
              </div>
              <div className="mb-2 d-flex">
               <h4 className="font-weight-normal"></h4> 
                <div className="social d-flex ml-auto">
                  <p className="pr-2 font-weight-normal">Informations sur l'utilisateur:</p>
                  
                </div>
              </div>
              <div className="mb-2">
                <ul className="list-unstyled">
                  <li className="media">
                    <span className="w-25 text-black font-weight-normal">Nom:</span>
                    <label className="media-body">{user?.name}</label>
                  </li>
                  <li className="media">
                    <span className="w-25 text-black font-weight-normal">Prénom: </span>
                    <label className="media-body">{user?.LastName}</label>
                  </li>
                  <li className="media">
                    <span className="w-25 text-black font-weight-normal">Email: </span>
                    <label className="media-body">{user?.email}</label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7 col-md-6 pl-xl-3 ddd">
                     <p style={{width:"600px",fontSize:"35px",fontFamily:"papyrus", margin:"0px  0px 30px 0px ",textAlign:"left",  color:"black"}}> Locaux que vous avez proposé:</p>
            {prod?
                prod.filter((el)=>el?.postedBy==user._id).map(el=> <ProfileProductCard key={el._id} produit={el}/>)
                :<h1>loading...</h1>}
             </div>
          </div>
        </div>
      </div>
 
        </div>
        );
    };

    export default Profile