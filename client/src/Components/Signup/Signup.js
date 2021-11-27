import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginUser, registerUser } from "../../JS/actions/user";
import  "./Signup.css";
import image2 from "./images/image2.jpg" ;
import image3 from "./images/image3.jpg" ;
import image4 from "./images/image4.jpg" ;
import alloOuis from "../video/alloOuis.mp4";



const Signup = () => {
  const [name, setName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div>
      <div className="slide">
      <h1 className="h11">Bienvenue à Allo! Ouais </h1>
      <p className="p1">Pière de vous inscrire dans ce site pour pouvoir bénificier de nos service.</p>
      </div>
       <div   className="vid" style={{marginLeft:"480px"}}>
         <video autoPlay  width="250"  height="100"  src={alloOuis} />
       </div>
      <div className="slider-frame">
        <div className="slide-images">
         
          <div className="img-container">
          <img className="img_sign" src={image4}/>
          </div>

          <div className="img-container">
          <img className="img_sign" src={image2}/>
          </div>

          <div className="img-container">
          <img className="img_sign" src={image3}/>
          </div>

        </div>

      </div>

      {/* login */}
      <div className="login-wrap">
        <div className="login-html">
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in"
            defaultChecked
          />
          <label htmlFor="tab-1" className="tab">
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" />
          <label htmlFor="tab-2" className="tab">
            Sign Up
          </label>
          {/* Login Form */}
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label htmlFor="user" className="label">
                  Username
                </label>
                <input
                  id="user"
                  type="text"
                  className="input"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>{" "}
              <div className="group">
                <label htmlFor="pass" className="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="group">
                <input
                  id="check"
                  type="checkbox"
                  className="check"
                  defaultChecked
                />
                <label htmlFor="check">
                  <span className="icon" /> Keep me Signed in
                </label>
              </div>
              <div className="group">
                <input
                  type="submit"
                  className="button"
                  defaultValue="Sign In"
                  onClick={() =>
                    dispatch(loginUser({ email, password }, history))
                  }
                />
              </div>
              <div className="hr" />
              <div className="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>
            {/* sign up part */}
            <div className="sign-up-htm">
              <div className="group">
                <label htmlFor="user" className="label">
                  Username
                </label>
                <input
                  id="user"
                  type="text"
                  className="input"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="group">
                <label htmlFor="LastName" className="label">
                  lastName
                </label>
                <input
                  id="user"
                  type="text"
                  className="input"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Email Address
                </label>
                <input
                  id="pass"
                  type="text"
                  className="input"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="group">
                <input
                  type="submit"
                  className="button"
                  defaultValue="Sign Up"
                  onClick={() =>
                    dispatch(
                      registerUser({ name, LastName, email, password }, history)
                    )
                  }
                />
              </div>
              <div className="hr" />
              <div className="foot-lnk">
                <label htmlFor="tab-1">Already Member?</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;