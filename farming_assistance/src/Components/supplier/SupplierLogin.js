import React,{Fragment,useState} from 'react';
import axios from 'axios';
import './supplierlogin.css';
import { useNavigate } from 'react-router-dom';
//import { redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function SupplierLogin()
{

    const [supplier_Name,setSupplier_Name]=useState('');
    const [password,setPassword]=useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSupplierNameChange=(value) => {setSupplier_Name(value);};
    const handlePasswordChange=(value) => {setPassword(value);};
    
    const handleLogin=() =>{
        if (!supplier_Name) {
            setErrorMessage('Please provide your phone number');
            return;
          }
        
          if (!password) {
            setErrorMessage('Please provide a password');
            return;
          }


        const data={        
        Supplier_Name:supplier_Name,
        Password:password
         };
         const url='http://localhost:55976/api/Supplier/SupplierLogin';
         axios.post(url,data).then((result) =>{
          const loginResult= result.data;
           
            alert(loginResult
              );
              navigate(loginResult === "Login Successful...!!" ? "/Advertisement" : "/Supplier");
            }).catch((error)=>
            {
            alert(error);
            });
           }
          
          //  if (isLoggedIn) {
          //   return <Navigate to="/Advertisement" />;
          // }
        
        
         return(
         <Fragment>
      
          
           
            <div className='s_login'>
                <label>Name</label> 
                <input type="text" id="txtSupplierName" placeholder='Enter Name'  onChange={(e) =>handleSupplierNameChange(e.target.value)}required/> <br></br>
                <label>Password</label>
                <input type="Password" id="Password" placeholder='Enter Password' onChange={(e) =>handlePasswordChange(e.target.value)} required /> <br></br>
                {errorMessage && <p className='error'>{errorMessage}</p>}
                <div className="s_a_login">
                    <button onClick={()=> handleLogin()}>Login</button>
                    </div>
                    </div>
                  
                   
                    
                 
                    </Fragment>
                    )
}


export default SupplierLogin;