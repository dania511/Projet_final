import { useEffect } from "react";
import NavBar from "./Components/NavBar";
import Signup from "./Components/Signup/Signup";
import { Switch, Route } from "react-router-dom";
import Dashbord from "./Components/Dashbord/Dashbord";
import PrivateRoute from "./Components/router/PrivateRoute";
import { useDispatch } from "react-redux";
import { current } from "./JS/actions/user";
import "./App.css";
import AddProduct from "./Components/Product/AddProduct";
import Profile from "./Components/Dashbord/Profile";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, []);
  return (
    <div className="App">
         <NavBar/> <br/><br/><br/>
      <Switch>
        <Route exact path="/" component={Signup} />
        <PrivateRoute exact path="/dashbord" component={Dashbord} />
        <PrivateRoute path="/dashbord/AddProduct" component={AddProduct}/>
        <Route path="/dashbord/Profile" component={Profile}/>
      </Switch>
    </div>
  );
}

export default App;