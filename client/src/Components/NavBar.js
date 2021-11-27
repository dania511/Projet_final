import React from 'react'


//import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../JS/actions/user";

import { Link ,useHistory} from 'react-router-dom'


const NavBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    return (
        <div className="nav">
             
            
        <h1>Allo! Ouais </h1>
     

        <ul >
            <li>Contact</li>
            <li>Filtrer</li>
                <Link to={{pathname:"/"}} onClick={() => {
                 dispatch(logout());
                 history.push("/");}}>
            <li>logout</li></Link>
            
                 <Link to="/Dashbord/Profile" >
            <li>Profile</li></Link>
        </ul>
    </div>
    );
  };
  
  export default NavBar;
