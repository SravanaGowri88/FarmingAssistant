//import "./CustomNav";
//import Button from '../UI/Button';

import SideNav from  './SideNavigation';




const HomeAdmin= ({ children }) => {
      return (
        <div className="container-fluid">
         
          <div className="row">
            <div className="col-md-10">
              <SideNav/>
            </div>
            <div className="col-md-9">
              { children }
            </div>
          </div>
        
        </div>
      );
    };
  
    
    export default HomeAdmin;