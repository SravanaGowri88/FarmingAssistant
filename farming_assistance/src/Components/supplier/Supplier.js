import { Link } from "react-router-dom/dist";
import "./supplierRegistration";
import Login from "./SupplierLogin";
import './Supplier.css';

const supplier= () => { 
    return (
        <section id="supplier">
            <div className="supplier-header">
            <div className="supplier-header-left">
            <h1>
            <span>If you tickle the  </span><br></br>
            <span>earth with a hoe,</span><br></br>
            <span>She laughs with</span><br></br>
            <span>a Harvest..!</span><br></br>
          </h1>
          <p className="u-text-small">
          Once in your lifetime you need a Doctor,
           a Policeman and a Preacher, but everyday,<br></br>
            three times a day, you need a FARMER.
          </p>
            </div>
            <div className="supplier-header-right" >
            <div className="box">
                <Login /><br></br>
                <div className="register">
                    New User?  <Link to="/supplierRegistration">  <button>Register</button>  </Link>
                </div>
                </div>
            </div> 
            </div>
        </section>
    )


}
  export default supplier;


