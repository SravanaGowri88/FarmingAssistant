// import React,{Fragment,useState} from 'react';

// import axios from 'axios';
// import "./farmRegistration.css";


// function Registration()
// {
// const [name,setName]=useState('');

// const [phoneNo,setPhoneNo]=useState('');

// const [address,setAddress]=useState('');

// const [password,setPassword]=useState('');

// const [confirmPassword, setConfirmPassword] = useState("");


// const [nameError, setNameError] = useState("");
// const [phoneNoError, setPhoneNoError] = useState("");
// const [addressError, setAddressError] = useState("");
// const [passwordError, setPasswordError] = useState("");
// const [confirmPasswordError, setConfirmPasswordError] = useState("");



// const handleNameChange = (event) => {
//     setName(event.target.value);
//     if (!event.target.value) {
//       setNameError('Name is required');
//     } else {
//       setNameError('');
//     }
//   };
// const handlePhoneNoChange = (event) => {
//     setPhoneNo(event.target.value);
//     const phoneNoPattern = /^\d{10}$/;
//     if (!phoneNoPattern.test(event.target.value)) {
//       setPhoneNoError('Phone number should be 10 digits');
//     } else {
//       setPhoneNoError('');
//     }
// };
  

// const handleAddressChange = (event) => {
//     setAddress(event.target.value);
//     if (!event.target.value) {
//       setAddressError('Address is required');
//     } else {
//       setAddressError('');
//     }
//   };


//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//     if (!event.target.value) {
//       setPasswordError('Password is required');
//     } else if (event.target.value.length < 8) {
//       setPasswordError('Password should be at least 8 characters long');
//     } else {
//       setPasswordError('');
//     }
//   };
//   const handleConfirmPasswordChange = (event) => {
//     setConfirmPassword(event.target.value);
//     if (!event.target.value) {
//       setConfirmPasswordError('Please confirm password');
//     } else if (event.target.value !== password) {
//       setConfirmPasswordError('Passwords do not match');
//     } else {
//       setConfirmPasswordError('');
//     }
//   };

//   const handleRegister = () => {
//     let nameError = '';
//     let phoneNoError = '';
//     let addressError = '';
//     let passwordError = '';
//     let confirmPasswordError = '';

//   if (!name) {
//     nameError = 'Name is required';
//   }

//   const phoneNoPattern = /^\d{10}$/;
//     if (!phoneNo) {
//       phoneNoError = 'phone number is required';
//     } else if (!phoneNoPattern.test(phoneNo)) {
//       phoneNoError = 'Phone number should be 10 digits';
//     }
//   if (!address) {
//     addressError = 'Address is required';
//   }

//   if (!password) {
//     passwordError = 'Password is required';
//   } else if (password.length < 8) {
//     passwordError = 'Password should contain at least 8 characters';
//   }

//   if (!confirmPassword) {
//     confirmPasswordError = 'Confirm Password is required';
//   } else if (confirmPassword !== password) {
//     confirmPasswordError = 'Confirm Password does not match Password';
//   }
//   if (
//     nameError ||
//     phoneNoError ||
//     addressError ||
//     passwordError ||
//     confirmPasswordError
//   ) 
//   {
//     setNameError(nameError);
//     setPhoneNoError(phoneNoError);
//     setAddressError(addressError);
//     setPasswordError(passwordError);
//     setConfirmPasswordError(confirmPasswordError);
//     return;
//   }
//     else {
//         axios.post('http://localhost:60695/api/Login/Registration', {
//           name,
//           phoneNo,
//           address,
//           password,
//         })
//           .then((response) => {
//             console.log('Farm registration successful:', response.data);
//             // Redirect to login page
//             window.location.href = '/FarmAccount';
//           })
//           .catch((error) => {
//             console.error('Error registering farm:', error);
//           });
//       }

  
// //   const data = {
// //     Name: name,
// //     PhoneNo: phoneNo,
// //     Address: address,
// //     Password: password,
// //   };

// //   const url = 'http://localhost:60695/api/Login/Registration';
// //   axios
// //     .post(url, data)
// //     .then((result) => {
// //       alert(result.data);
// //       window.location.href = '/FarmAccount';
// //     })
// //     .catch((error) => {
// //       alert(error);
// //     });
// // }

  
// return (
//     <Fragment>
//       <div className='form'>
//         <label>Name</label>
//         <input type="text" id="txtName" placeholder='Enter Name' onChange={handleNameChange} required /> <br></br>
//         <div className='error'>{nameError}</div>
//         <label>PhoneNo</label>
//         <input type="text" id="txtPhoneNo" placeholder='Enter PhoneNumber'  onChange={handlePhoneNoChange} required /> <br></br>
//         <div className='error'>{phoneNoError}</div>
//         <label>Address</label>
//         <input type="text" id="txtAddress" placeholder='Enter Address'  onChange={handleAddressChange} required/> <br></br>
//         <div className='error'>{addressError}</div>
//         <label>Password</label>
//         <input type="Password" id="Password" placeholder='Enter Password'  onChange={handlePasswordChange} required/> <br></br>
//         <div className='error'>{passwordError}</div>
//         <label htmlFor="confirmPassword">Confirm Password:</label>
//         <input type="password" id="confirmPassword" placeholder='Re-enter Password' value={confirmPassword} onChange={handleConfirmPasswordChange} /><br></br>
//         <div className='error'>{confirmPasswordError}</div>
//         <div className='actions'>
//         <button className='submit' onClick={handleRegister}>Register</button>
//         </div>
//       </div>
//     </Fragment>
//   );
  
// }
// }

// export default Registration;

// import React, { Component } from 'react';  
// import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
  
// class reg extends Component {  
  
//   constructor() {  
//     super(); 
//     this.state = {  
//         Name: '',  
//         PhoneNo: '',  
//         Address: '',  
//         Password: ''
//     }


//         this.Name = this.Name.bind(this);  
//         this.PhoneNo = this.PhoneNo.bind(this);  
//         this.Address = this.Address.bind(this);    
//         this.Password = this.Password.bind(this); 
//         this.register = this.register.bind(this);  
//   }     
      
//       Name(event) {  
//         this.setState({ Name: event.target.value })  
//       }  
//       PhoneNo(event) {  
//         this.setState({ PhoneNo: event.target.value })  
//       }
//       Address(event) {  
//         this.setState({ Address: event.target.value })  
//       } 
      
//       Password(event) {  
//         this.setState({ Password: event.target.value })  
//       } 
//       register(event) {  
         
  
//       fetch('http://localhost:60695/api/Test/Registration', {  
//           method: 'post',  
//           headers: {  
//             'Accept': 'application/json',  
//             'Content-Type': 'application/json'  
//           },
//           body: JSON.stringify({  
  
  
//             Name: this.state.Name,  
//             PhoneNo: this.state.PhoneNo,
//             Address:this.state.Address,
//             Password: this.state.Password,
//             register: this.state.register 
            
             
//           })  
//         }).then((Response) => Response.json())  
//           .then((Result) => {  
//             if (Result.Status == 'Success')  {
//                     this.props.history.push("/FarmerAccount"); 
                   
//             }

//                     else  
//                     alert('Sorrrrrry !!!! Un-authenticated User !!!!!');
//                 })  
//             }  
//             render() {  
  
//                 return (  
//                   <div className="app flex-row align-items-center">  
//                     <Container>  
//                       <Row className="justify-content-center">  
//                         <Col md="9" lg="7" xl="6">  
//                           <Card className="mx-4">  
//                             <CardBody className="p-4">  
//                               <Form>  
//                                 <div class="row" className="mb-2 pageheading">  
                               
//                                 </div>  
                                 
//                                   <Input type="text"  onChange={this.Name} placeholder="Enter Name" required/>  
                               
                               
//                                   <Input type="text"  onChange={this.PhoneNo} placeholder="Enter PhoneNo" required />  
                               
                                
//                                   <Input type="text"  onChange={this.Address} placeholder="Enter Address" required />  
                               
                               
//                                   <Input type="password"  onChange={this.Password} placeholder="Enter Password" required/>  
                               
                               
                               
//                                 <Button  onClick={this.register}  color="success" block>Register</Button>  
//                               </Form>  
//                             </CardBody>  
//                           </Card>  
//                         </Col>  
//                       </Row>  
//                     </Container>  
//                   </div>  
//                 );  
             
//         }
//     }

//         export default reg;

// import React, { useState } from 'react';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import './farmRegistration.css';

// function MyForm() {
//   const [name, setName] = useState('');
//   const [phoneNo, setPhoneNo] = useState('');
//   const [address, setAddress] = useState('');
//   const [password, setPassword] = useState('');
//   const [nameError, setNameError] = useState('');
//   const [phoneNoError, setPhoneNoError] = useState('');
//   const [addressError, setAddressError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [formValid, setFormValid] = useState(false);
//   const [isValid, setIsValid] = useState(false);
//   const [submitting, setSubmitting] = useState(false);
//   //const history = useHistory();

//   function handleNameChange(event) {
//     const newName = event.target.value;
//     setName(newName);
//     if (newName === '') {
//         setNameError('Please provide your name');
//         setFormValid(false);
//     }
//     else
//     {
//         setNameError('');
//     setFormValid(phoneNo !== '' && address !== '' && password !== '');
//     }
//   }

//   function handlePhoneNoChange(event) {
//     const newPhoneNo = event.target.value;
//     setPhoneNo(newPhoneNo);
//     if (newPhoneNo === '') {
//         setPhoneNoError('Please provide your phone number');
//         setFormValid(false);
//       }
//       else {
//         setPhoneNoError('');
//     setFormValid(name !== ''  && address !== '' && password !== '');
//       }
//   }

//   function handleAddressChange(event) {
//     const newAddress = event.target.value;
//     setAddress(newAddress);
//     if (newAddress === '') {
//       setAddressError('Please provide your address');
//       setFormValid(false);
//     } else {
//       setAddressError('');
//       setFormValid(name !== '' && phoneNo !== '' && password !== '');
//     }
//   }
//   function handlePasswordChange(event) {
//     const newPassword = event.target.value;
//     setPassword(newPassword);
//     if (newPassword === '') {
//       setPasswordError('Please provide your password');
//       setFormValid(false);
//     } else {
//       setPasswordError('');
//       setFormValid(name !== '' && phoneNo !== '' && address !== '');
//     }
//   }

  
//   function handleSubmit(event) {
//     event.preventDefault();
//     setSubmitting(true);
//     const data = new FormData(event.target);
//     fetch('http://localhost:60695/api/Login/Registration', {
//       method: 'POST',
//       body: data,
//     })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data); // Handle the response from the API
//       if (data.status === "success") {
//         setIsValid(true);
//         alert("Registration successful!"); // Show a success message to the user
//         if (isValid) {
//             window.location.href = "/FarmAccount"; // Redirect to success page
//           }// Redirect to success page
//       } else {
//         alert("Registration failed. Please try again later."); // Show an error message to the user
//       }
//     })
//     .catch((error) => {
//       console.error(error); // Handle any errors
//       alert("An error occurred. Please try again later."); // Show an error message to the user
//     })
//     .finally(() => {
//       setSubmitting(false);
//     });
//   }
  
//   if (isValid) {
//     window.location.href = "/FarmAccount"; // Redirect to success page
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//         <div className='form'>
//       <label>
//         Name:
//         <input type="text" value={name} onChange={handleNameChange} required />
//       </label>
//       <label>
//         Phone No:
//         <input type="tel" value={phoneNo} onChange={handlePhoneNoChange} required />
//       </label>
//       <label>
//         Address:
//         <input type="text" value={address} onChange={handleAddressChange} required />
//       </label>
//       <label>
//         Password:
//         <input type="password" value={password} onChange={handlePasswordChange} required />
//       </label>
//       <div className="actions">
//       <Button type="submit" disabled={!formValid || submitting}>Register</Button>
//       </div>
//       </div>
//     </form>
//   );
// }
// export default MyForm;


import React, { Fragment, useState } from 'react';

import axios from 'axios';
import "./farmRegistration.css";

function Registration(props) {
  const [name, setName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isValid,setIsValid]=useState(false);
  const [submitting,setSubmitting]=useState(false);

  const handleNameChange = (value) => {
    setName(value);
  };

  const handlePhoneNoChange = (value) => {
    setPhoneNo(value);
  };

  const handleAddressChange = (value) => {
    setAddress(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleRegister = (value) => {
   // const errors = {};
    
    if (!name) {
      setErrorMessage('Please provide your name');
      return;
    }
    //const phoneNoPattern = /^\d{10}$/;
    if (!phoneNo) {
      setErrorMessage('Please provide your phone number');
      return;
    } else if (!/^\d{10}$/.test(phoneNo)) {
      setErrorMessage('Phone number must be 10 digits long');
      return;
    }
    // else if(!phoneNoPattern.test(value.phoneNo)){
    //   setErrorMessage('Enter valid Mobile Number');
    //   return;
    // }
  

    if (!address) {
      setErrorMessage('Please provide your address');
      return;
    }

    if (!password) {
      setErrorMessage('Please provide a password');
      return;
    }  else if (!/[\W_]/.test(password) || password.length >= 10) {
      setErrorMessage(
        'Password must contain a special character and be less than 8 characters long'
      );
      return;
    }

    const data = {
      Name: name,
      PhoneNo: phoneNo,
      Address: address,
      Password: password,
    };
    const url='http://localhost:55976/api/Test/Registration';
        axios.post(url,data).then((result) =>{
          alert(result.data);
          window.location.href = "/FarmAccount";
          }).catch((error)=>
          {
          alert(error);
          })
           }

  return (
    <Fragment>
      <div className='form'>
        <label>Name</label>
        <input type="text" id="txtName" placeholder='Enter Name' onChange={(e) => handleNameChange(e.target.value)} required={true} /> <br></br>
        <label>PhoneNo</label>
        <input type="text" id="txtPhoneNo" placeholder='Enter PhoneNumber' onChange={(e) => handlePhoneNoChange(e.target.value)} required={true} /> <br></br>
        <label>Address</label>
        <input type="text" id="txtAddress" placeholder='Enter Address' onChange={(e) => handleAddressChange(e.target.value)} required={true} /> <br></br>
        <label>Password</label>
        <input type="Password" id="Password" placeholder='Enter Password' onChange={(e) => handlePasswordChange(e.target.value)} required={true} /> <br></br>
        {errorMessage && <p className='error'>{errorMessage}</p>}
        <div className="actions">
          <button onClick={() => handleRegister()}>Register</button>
        </div>
      </div>
    </Fragment>
  );
}

export default Registration;
