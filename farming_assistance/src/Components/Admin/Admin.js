import React,{Fragment,useState} from 'react';
import axios from 'axios';


function Admin() {

    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleNameChange=(value)=> {setName(value);};
    const handlePasswordChange=(value)=> {setPassword(value);};
    
    const handleAdminLogin=() =>{
        if (!name) {
            setErrorMessage('Please provide your Name');
            return;
          }
        
          if (!password) {
            setErrorMessage('Please provide a password');
            return;
          }
        const data={
            Name:name,
            Password:password
        };
        const url="http://localhost:55976/api/Admin/AdminLogin";
        axios.post(url,data).then((result) =>{
            alert(result.data);
            window.location.href = "/AdminHomePage";
            }).catch((error)=>
            {
            alert(error);
            })
           }
        return(
          
          
            <Fragment>
                <div classname="a_login">
                    <label>Name</label><br></br>
                    <div className='inputBox'>
                    <input type="Name" id="txtName" placeholder='Enter Name' required onChange={(e) => handleNameChange(e.target.value)}/><br></br>
                    </div>
                    <label>Password</label><br></br>
                 <br></br>
                    <input type="Password" id="Password" placeholder='Enter Password' required onChange={(e) => handlePasswordChange(e.target.value)}/><br></br>
                    {errorMessage && <p className='error'>{errorMessage}</p>}
                    </div>
                    <div className="admin">
                        <button onClick={()=> handleAdminLogin()}>Login</button>
                    </div>
                
                   
            </Fragment>
         
        )
    }
    export default Admin;