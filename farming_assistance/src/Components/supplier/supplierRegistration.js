import React,{Fragment,useState} from 'react';
import axios from 'axios';
import './SupplierRegistration.css';


function SupplierRegistration()
{
    const [supplier_Name,setSupplier_Name]=useState('');
    const [mobileNo,setMobileNo]=useState('');
    const [address,setAddress]=useState('');
    const [password,setPassword]=useState('');
    const [errorMessage, setErrorMessage] = useState('');
   


  const handleSupplier_NameChange = (value) => {
    setSupplier_Name(value);
  };

  const handleMobileNoChange = (value) => {
    setMobileNo(value);
  };

  const handleAddressChange = (value) => {
    setAddress(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleSupplierRegister=() =>{
    if (!supplier_Name) {
      setErrorMessage('Please provide your name');
      return;
    }

    if (!mobileNo) {
      setErrorMessage('Please provide your phone number');
      return;
    }else if (!/^\d{10}$/.test(mobileNo)) {
      setErrorMessage('Phone number must be 10 digits long');
      return;
    }

    if (!address) {
      setErrorMessage('Please provide your address');
      return;
    }

    if (!password) {
      setErrorMessage('Please provide a password');
      return;
    }
    else if (!/[\W_]/.test(password) || password.length <= 10) {
      setErrorMessage(
        'Password must contain a special character and be less than 8 characters long'
      );
      return;
    }
        const data={
            Supplier_Name:supplier_Name,
            MobileNo:mobileNo,
            Address:address,
            Password:password
        };
        const url='http://localhost:55976/api/Supplier/SupplierRegistration';
        axios.post(url,data).then((result) =>{
          
          alert(result.data);
          window.location.href = "/Advertisement";
          }).catch((error)=>
          {
          alert(error);
          })
           };
       

    return(
        <Fragment>
        <div className='supplier'>
        <label>Supplier Name</label>
        <input type="text" id="txtSupplierName" placeholder='Enter Supplier Name' required onChange={(e) =>handleSupplier_NameChange(e.target.value)} /> <br></br>
        <label>PhoneNo</label>
        <input type="text" id="txtMobileNo" placeholder='Enter PhoneNumber' required onChange={(e) =>handleMobileNoChange(e.target.value)} /> <br></br>
        <label>Address</label>
        <input type="text" id="txtAddress" placeholder='Enter Address' required onChange={(e) =>handleAddressChange(e.target.value)}/> <br></br>
        <label>Password</label>
        <input type="Password" id="Password" placeholder='Enter Password' required onChange={(e) =>handlePasswordChange(e.target.value)}/> <br></br>
        <div className='error'><h4>{errorMessage && <p className='error'>!{errorMessage}</p>}</h4></div>
        <div className="a_supplier">
        <button onClick={()=> handleSupplierRegister()}>Register</button>
        </div>
        </div>
        </Fragment>
        )
        }


export default SupplierRegistration;


