// import React from 'react';  
// import axios from 'axios';  
// import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'; 

// class AddAdvertisement extends React.Component{
//     constructor(props){
//         super(props)
//         // this.state = {
//         //     Crop_Name:'',
//         //     Quantity:'',
//         //     Mobile:'',
            
//         }
//         handleSubmit(event){
//             event.preventDefault();
//             fetch('http://localhost:55976/api/Advertisement/AddAdvertisement',{
//                 method:'Post',
//                 headers:{
//                     'Accept':'application/json',
//                     'Content-Type':'application/json'
//                 },
//                 body:JSON.stringify({
                    
//                     Crop_Name: Crop_Name.current.value,
//                     Quantity:Quantity.current.value,
//                     Mobile:Mobile.current.value
//                 })
//             })
//             .then(res=> res.json())
//             .then((result)=>
//             {
//                 alert(result);
//             },
//             (error)=>
//             {
//                 alert('failed')
//             })
//         }
        
//         // AddAdvertisement=()=>{  
//         //     axios.post('http://localhost:55976/api/Advertisement/AddAdvertisement/', {Crop_Name:this.state.Crop_Name,Quantity:this.state.Quantity,  
//         //     Mobile:this.state.Mobile})  
//         //   .then(json => {  
//         //   if(json.data.Status==='Success'){  
//         //     console.log(json.data.Status);  
//         //     alert("Data Save Successfully");  
//         //   this.props.history.push('/Advertisements')  
//         //   }  
//         //   else{  
//         //   alert('Data not Saved');  
//         //   debugger;  
//         //   this.props.history.push('/Advertisements')  
//         //   }  
//         //   })  
//         //   }  
//         handleChange= (e)=> {  
//            this.setState({[e.target.name]:e.target.value});  
//             }  
               
//             render(){  
//             return (  
//                <Container className="App">  
//                 <h4 className="PageHeading">Enter Advertisement Details</h4>  
//                 <Form className="form">  
//                   <Col>  
//                     <FormGroup row>  
//                       <Label for="name" sm={2}>Crop_Name</Label>  
//                       <Col sm={10}>  
//                         <Input type="text" name="Name" onChange={this.handleChange} value={this.state.Crop_Name} placeholder="Enter Crop_Name" />  
//                       </Col>  
//                     </FormGroup>  
//                     <FormGroup row>  
//                       <Label for="address" sm={2}>Quantity</Label>  
//                       <Col sm={10}>  
//                         <Input type="text" name="Quantity" onChange={this.handleChange} value={this.state.Quantity} placeholder="Enter Quantity" />  
//                       </Col>  
//                     </FormGroup>  
//                     <FormGroup row>  
//                       <Label for="PhoneNumner" sm={2}>Mobile</Label>  
//                       <Col sm={10}>  
//                         <Input type="text" name="Mobile" onChange={this.handleChange} value={this.state.Mobile} placeholder="Enter Mobile No" />  
//                       </Col>  
//                     </FormGroup>  
                   
//                   </Col>  
//                   <Col>  
//                     <FormGroup row>  
//                       <Col sm={5}>  
//                       </Col>  
//                       <Col sm={1}>  
//                       <button type="button" onClick={this.AddAdvertisement} className="btn btn-success">Post</button>  
//                       </Col>  
//                       <Col sm={1}>  
//                         <Button color="danger">Cancel</Button>{' '}  
//                       </Col>  
//                       <Col sm={5}>  
//                       </Col>  
//                     </FormGroup>  
//                   </Col>  
//                 </Form>  
//               </Container>  
//             );  
//      }  
// }  
// export default AddAdvertisement;import {Link} from react-router-dom;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { ButtonToolbar,Button,Row,Col } from 'react-bootstrap';
// import {AdvertisementList} from './AdvertisementList';
// //import Button from '../UI/Button';
// import { Component } from 'react';
// import { Sidebar }from './Design';
// import AddAdvertisement from './Advertisements';
// import './a.css';

// 

// 

import React from 'react';
import { Route } from 'react-router-dom';
import Design from './Design';

const Layout = ({ children }) => {
  return (
    <div className="container-fluid">
     
      <div className="row">
        <div className="col-md-10">
          <Design />
        </div>
        <div className="col-md-9">
          { children }
        </div>
      </div>
    </div>
  );
};

export default Layout;
