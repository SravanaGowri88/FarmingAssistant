//import "./CustomNav";
//import Button from '../UI/Button';
import "./farm.account.css";
import SideBar from  './SideBar';




const Side = ({ children }) => {
      return (
        <div className="container-fluid">
         
          <div className="row">
            <div className="col-md-10">
              <SideBar/>
            </div>
            <div className="col-md-9">
              { children }
            </div>
          </div>
        
        </div>
      );
    };
  
    
    export default Side;
 