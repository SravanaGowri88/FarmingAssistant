

import { Link } from "react-router-dom/dist";
import "./farmer.css";
import "./farmerRegistration";
import Login from "./farmerlogin";



const farmer = () => {
  
    return (
        <section id="farmer">
          <div className="full-screen-container">
            <div className= "Farmer-header">
        <div className="Farmer-header-left" >
          <h1>
            <span>To those who </span>
            <span>work in Acres,</span>
            <span>Not in Hours..!</span>
            <span>We thank You..!</span>
          </h1>
          <p className="u-text-small">
          Once in your lifetime you need a Doctor,
           a Policeman and a Preacher, but everyday,<br></br>
            three times a day, you need a FARMER.
          </p>
        </div>
        <div className="Farmer-header-right" >
         <div className="box1">
            <Login /><br></br>
            <div className="register">
            New User?  <Link to="/farmerRegistration">  <button>Register</button>  </Link>
            </div>
        </div>
        </div>
        </div>
        </div>
        </section>
              
   
    );
}

export default farmer;