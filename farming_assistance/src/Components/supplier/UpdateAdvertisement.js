// import React,{Component} from 'react';
// import {Modal,Button,Row,Col,Form} from 'react-bootstrap';
// import Snackbar from '@mui/material/Snackbar';
// import IconButton from '@mui/material/IconButton';


// export class UpdateAdvertisement extends Component{
//      constructor(props){
//         super(props);
//         this.state={snackbaropen:false,snackbarmsg:''};
//         this.handleSubmit=this.handleSubmit.bind(this);
//     }
//     snackbarClose=(event) =>{
//         this.setState({snackbaropen:false});
//     }
//     handleSubmit(event){
//         event.preventDefault();
//         fetch('https://localhost:55976/api/Advertisements/UpdateAdvertisement',{
//             method:'PUT',
//             headers:{
//                 'Accept':'application/json',
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify({
//                    Ad_ID:event.target.Ad_ID.value,
//                    Crop_Name:event.target.Crop_Name.value,
// Quantity:event.target.Quantity.value,
// Mobile:event.target.Mobile.value
//             })
//         })
//         .then(res=> res.json())
//         .then((result)=>
//         {
//            //alert(result);
//            this.setState({snackbaropen:true,snackbarmsg:result});
//         },
//         (error)=>{
//             //alert('Failed')
//             this.setState({snackbaropen:true,snackbarmsg:'failed'});
//         }
//         )
//     }  
//     render(){
//         return(
//             <div className="container">
//                 <Snackbar
//                 anchorOrigin={{vertical:'center',horizontal:'center'}}
//                 open={this.state.snackbaropen}
//                 autoHideDuration={3000}
//                 onClose={this.snackbarClose}
//                 message={<span id="message-id">{this.state.snackbarmsg}</span>}
//                 action={[
//                     <IconButton
//                     key="close"
//                     arial-label="Close"
//                     color="inherit"
//                     onClick={this.snackbarClose}
//                     >
//                         x
//                     </IconButton>
//                 ]}
//                 />
//              <Modal
//         show={this.props.show}
//         onHide={this.props.onHide}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-vcenter">
//             Add Advertisement
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={this.handleSubmit}>
//             <Form.Group controlId='CropName'>
//               <Form.Label>Crop Name</Form.Label>
//               <Form.Control
//                 type='text'
//                 name='CropName'
//                 value={this.props.CropName}
//                 onChange={this.handleChange}
//               />
//             </Form.Group>

//             <Form.Group controlId='Quantity'>
//               <Form.Label>Quantity</Form.Label>
//               <Form.Control
//                 type='text'
//                 name='Quantity'
//                 value={this.props.quantity}
//                 onChange={this.handleChange}
//               /> <h2 style={{color:'white',fontWeight:'3rem'}}>in Kg</h2>
//             </Form.Group>

//             <Form.Group controlId='Mobile'>
//               <Form.Label>Mobile</Form.Label>
//               <Form.Control
//                 type='text'
//                 name='Mobile'
//                 value={this.props.Mobile}
//                 onChange={this.handleChange}
//               />
//             </Form.Group>


//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//         <Button variant='primary' type='submit' onClick={this.handleSubmit}>
//             Post
//           </Button>

// import React, { Component } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';
// import Snackbar from '@mui/material/Snackbar';
// import IconButton from '@mui/material/IconButton';

// class UpdateAdvertisement extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       snackbarOpen: false,
//       snackbarMsg: '',
//       cropName: props.advertisement.Crop_Name,
//       quantity: props.advertisement.Quantity,
//       mobile: props.advertisement.Mobile,
//     };
//   }

//   snackbarClose = (event) => {
//     this.setState({ snackbarOpen: false });
//   };

//   handleChange = (event) => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     fetch(`https://localhost:55976/api/Advertisements/UpdateAdvertisement`, {
//       method: 'PUT',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         Ad_ID: this.props.advertisement.Ad_ID,
//         Crop_Name: this.state.cropName,
//         Quantity: this.state.quantity,
//         Mobile: this.state.mobile
//       })
//     })
//       .then(res => res.json())
//       .then(result => {
//         this.setState({ snackbarOpen: true, snackbarMsg: result });
//       })
//       .catch(error => {
//         console.error(error);
//         this.setState({ snackbarOpen: true, snackbarMsg: 'failed' });
//       });
//   };

//   render() {
//     return (
// //       <Modal
// //         show={this.props.show}
// //         onHide={this.props.onHide}
// //         size="lg"
// //         aria-labelledby="contained-modal-title-vcenter"
// //         centered
// //       >
// //         <Modal.Header closeButton>
// //           <Modal.Title id="contained-modal-title-vcenter">
// //             Update Advertisement
// //           </Modal.Title>
// //         </Modal.Header>
// //         <Modal.Body>
// //           <Form onSubmit={this.handleSubmit}>
// //             <Form.Group controlId='cropName'>
// //               <Form.Label>Crop Name</Form.Label>
// //               <Form.Control
// //                 type='text'
// //                 name='cropName'
// //                 value={this.state.cropName}
// //                 onChange={this.handleChange}
// //               />
// //             </Form.Group>

// //             <Form.Group controlId='quantity'>
// //               <Form.Label>Quantity</Form.Label>
// //               <Form.Control
// //                 type='text'
// //                 name='quantity'
// //                 value={this.state.quantity}
// //                 onChange={this.handleChange}
// //               /> <h2 style={{ color: 'white', fontWeight: '3rem' }}>in Kg</h2>
// //             </Form.Group>

// //             <Form.Group controlId='mobile'>
// //               <Form.Label>Mobile</Form.Label>
// //               <Form.Control
// //                 type='text'
// //                 name='mobile'
// //                 value={this.state.mobile}
// //                 onChange={this.handleChange}
// //               />
// //             </Form.Group>
// //             </Form>
// //        </Modal.Body>
// //        <Modal.Footer>
// //             <Button variant='primary' type='submit'>
// //               Update
// //             </Button>



// //           <Button variant="danger" onClick={this.props.onHide}>Close</Button>

// //         </Modal.Footer>
// //       </Modal>
// //    
// //     );

// //     }

// // }
// // export default UpdateAdvertisement;

// import React,{Component} from 'react';
// import {Modal,Button,Row,Col,Form} from 'react-bootstrap';
// import Snackbar from '@mui/material/Snackbar';
// import IconButton from '@mui/material/IconButton';




// export class UpdateAdvertisement extends Component{

//     constructor(props){

//         super(props);

//         this.state={snackbaropen:false,snackbarmsg:''};

//         this.handleSubmit=this.handleSubmit.bind(this);

//     }

//     snackbarClose=(event) =>{

//         this.setState({snackbaropen:false});

//     }

//     handleSubmit(event){

//         event.preventDefault();

//        

//         fetch('https://localhost:55976/api/Advertisements/UpdateAdvertisement',{

//             method:'PUT',

//             headers:{

//                 'Accept':'application/json',

//                 'Content-Type':'application/json'

//        

//             },

//             body:JSON.stringify({

//                    Ad_Id:event.target.Ad_Id.value,

//                    CropName:event.target.CropName.value,

//                    Quantity:event.target.Quantity.value,

//                    Mobile:event.target.Mobile.value

//             })

//         })

//         .then(res=> res.json())

//         .then((result)=>

//         {

//            //alert(result);

//            this.setState({snackbaropen:true,snackbarmsg:result});

//         },

//         (error)=>{

//             //alert('Failed')

//             this.setState({snackbaropen:true,snackbarmsg:'failed'});

//         }

//         )




//     }  

//     render(){

//         return(




//             <div className="container">

//                 <Snackbar

//                 anchorOrigin={{vertical:'center',horizontal:'center'}}

//                 open={this.state.snackbaropen}

//                 autoHideDuration={3000}

//                 onClose={this.snackbarClose}




//                 message={<span id="message-id">{this.state.snackbarmsg}</span>}

//                 action={[

//                     <IconButton

//                     key="close"

//                     arial-label="Close"

//                     color="inherit"

//                     onClick={this.snackbarClose}

//                     >

//                         x

//                     </IconButton>

//                 ]}

//                 />




//             <Modal

//       {...this.props}

//       size="lg"

//       aria-labelledby="contained-modal-title-vcenter"

//       centered

//     >

//       <Modal.Header closeButton>

//         <Modal.Title id="contained-modal-title-vcenter">

//          Edit Advertisement

//         </Modal.Title>

//       </Modal.Header>

//       <Modal.Body>

//        

//             <Row>

//                 <Col sm={6}>

//                     <Form onSubmit={this.handleSubmit}>




// {/*                     <Form.Group controlId="ComplaintID">

//                         <Form.Label>ComplaintID</Form.Label>

//                         <Form.Control

//                            type="text"

//                            name="ComplaintID"

//                            required

//                            disabled

//                            defaultValue={this.props.complaintid}

//                            placeholder="ComplaintID"

//                            />

//                         </Form.Group> */}

//                      <Form.Group controlId="CropName">

//                         <Form.Label>CropName</Form.Label>

//                         <Form.Control

//                            type="text"

//                            name="CropName"

//                            required

//                            disabled

//                            defaultValue={this.props.cropname}

//                            placeholder="CropName"

//                            />

//                         </Form.Group>




//                         <Form.Group controlId="Quantity">

//                         <Form.Label>Quantity</Form.Label>

//                         <Form.Control

//                            type="text"

//                            name="Quantity"

//                            required

//                            disabled

//                            defaultValue={this.props.quantity}

//                            placeholder="Quantity"

//                            />

//                         </Form.Group>




//                         <Form.Group controlId="Mobile">

//                         <Form.Label>Mobile</Form.Label>

//                         <Form.Control

//                            type="text"

//                            name="Mobile"

//                            required

//                            defaultValue={this.props.mobile}

//                            placeholder="Mobile"

//                            />

//                         </Form.Group>




//                         <Form.Group >

//                             <Button variant="primary" type="submit">

//                                 Edit

//                             </Button>




//                         </Form.Group>

//                     </Form>

//                 </Col>

//             </Row>

//        

//       </Modal.Body>

//       <Modal.Footer>

//         <Button variant="danger" onClick={this.props.onHide}>Close</Button>

//       </Modal.Footer>

//     </Modal>




//     </div>




//     );

//     }

// }
// export default UpdateAdvertisement
// import React, { useState } from "react";
// import axios from "axios";
// import Snackbar from '@mui/material/Snackbar';
// import IconButton from '@mui/material/IconButton';

// const UpdateAdvertisementForm = ({ ad, onUpdate }) => {
//   const [cropName, setCropName] = useState(ad.CropName);
//   const [quantity, setQuantity] = useState(ad.Quantity);
//   const [mobile, setMobile] = useState(ad.Mobile);
//   const [error, setError] = useState("");

//   const handleUpdate = async () => {
//     try {
//       const response = await axios.put(
//         `http://localhost:3000/api/UpdateAdvertisement`,
//         {
//           Ad_Id: ad.Ad_Id,
//           Crop_Name: cropName,
//           Quantity: quantity,
//           Mobile: mobile,
//         }
//       );
//       onUpdate(response.data);
//       setError("");
//     } catch (error) {
//       setError("Failed to update advertisement.");
//     }
//   };

//   return (
//     <>
//       <button
//         type="button"
//         className="btn btn-primary"
//         data-bs-toggle="modal"
//         data-bs-target={`#updateAdModal-${ad.Ad_Id}`}
//       >
//         Edit
//       </button>

//       <div
//         className="modal fade"
//         id={`updateAdModal-${ad.Ad_Id}`}
//         tabIndex="-1"
//         aria-labelledby={`updateAdModal-${ad.Ad_Id}-label`}
//         aria-hidden="true"
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id={`updateAdModal-${ad.Ad_Id}-label`}>
//                 Update Advertisement
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">
//               {error && <div className="alert alert-danger">{error}</div>}
//               <div className="mb-3">
//                 <label htmlFor={`cropName-${ad.Ad_Id}`} className="form-label">
//                   Crop Name
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id={`cropName-${ad.Ad_Id}`}
//                   value={cropName}
//                   onChange={(e) => setCropName(e.target.value)}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor={`quantity-${ad.Ad_Id}`} className="form-label">
//                   Quantity
//                 </label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id={`quantity-${ad.Ad_Id}`}
//                   value={quantity}
//                   onChange={(e) => setQuantity(e.target.value)}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor={`mobile-${ad.Ad_Id}`} className="form-label">
//                   Mobile Number
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id={`mobile-${ad.Ad_Id}`}
//                   value={mobile}
//                   onChange={(e) => setMobile(e.target.value)}
//                 />
//               </div>
//             </div>
//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 data-bs-dismiss="modal"
//               >
//                 Close
//               </button>
//               <button type="button" className="btn btn-primary" onClick={handleUpdate}>
//                 Update
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default UpdateAdvertisementForm;


import React,{Component} from 'react';
import {Modal,Button,Row,Col,Form} from 'react-bootstrap';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
//import './Ads.css';

export class UpdateAdvertisement extends Component{
    constructor(props){
        super(props);
        this.state={snackbaropen:false,snackbarmsg:''};
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    snackbarClose=(event) =>{
        this.setState({snackbaropen:false});
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:55976/api/Advertisement',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                   Ad_Id:event.target.Ad_Id.value,
                  CropName:event.target.CropName.value,
                  Quantity:event.target.Quantity.value,
                  Mobile:event.target.Mobile.value
            })
        })
        .then(res=> res.json())
        .then((result)=>
        {
           //alert(result);
           this.setState({snackbaropen:true,snackbarmsg:result});
        },
        (error)=>{
            //alert('Failed')
            this.setState({snackbaropen:true,snackbarmsg:'failed'});
        }
        )
    }  
    render(){
        return(
               <div className="container">
    <Snackbar
      anchorOrigin={{ vertical: "center", horizontal: "center" }}
      open={this.state.snackbaropen}
      autoHideDuration={3000}
      onClose={this.snackbarClose}
      message={<span id="message-id">{this.state.snackbarmsg}</span>}
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={this.snackbarClose}
        >
          x
        </IconButton>
      ]}
    />
    <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Complaints
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={this.handleSubmit}>
      <Modal.Body>
        
          <Form.Group controlId="Ad_Id">
            <Form.Label>Ad_Id</Form.Label>
            <Form.Control
              type="text"
              name="Ad_Id"
              required
              disabled
              defaultValue={this.props.ad_id}
              placeholder="Ad_Id"
            />
          </Form.Group>
  
          <Form.Group controlId="CropName">
            <Form.Label>Crop Name</Form.Label>
            <Form.Control
              type="text"
              name="CropName"
              required
              defaultValue={this.props.cropname}
              placeholder="Enter crop name"
            />
          </Form.Group>
  
          <Form.Group controlId="Quantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="text"
              name="Quantity"
              required
              defaultValue={this.props.quantity}
              placeholder="Enter quantity"
            />
          </Form.Group>
  
          <Form.Group controlId="Mobile">
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              type="text"
              name="Mobile"
              required
              defaultValue={this.props.mobile}
              placeholder="Enter mobile number"
            />
          </Form.Group>
          <br></br>
<br></br>  
</Modal.Body>
<Modal.Footer>
          <Form.Group>
            <Button variant="primary" type="submit">
              Update Advertisement
            </Button>
            <Button variant="secondary" onClick={this.props.onHide}>
          Close
        </Button>
          </Form.Group>
          </Modal.Footer>
    
    
      
     
       </Form>
    </Modal>
  </div>
  


    );

    }

}
export default UpdateAdvertisement;


// import React, { Component } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';
// import axios from 'axios';
// import './Ads.css';

// class UpdateAdvertisement extends Component {
//     constructor(props) {

//         super(props);

//         this.state = { snackbaropen: false, snackbarmsg: '' };

//         this.handleSubmit = this.handleSubmit.bind(this);

//     }

//     snackbarClose = (event) => {

//         this.setState({ snackbaropen: false });

//     }


//     handleChange = (event) => {
//         const target = event.target;
//         const value = target.value;
//         const name = target.name;
    
//         this.setState({
//           [name]: value
//     });
//       };
//     handleSubmit(event) {
//         event.preventDefault();
//         fetch('http://localhost:55976/api/Advertisement', {
//             method: 'PUT',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 Ad_Id: event.target.Ad_Id.value,
//                 CropName: event.target.CropName.value,
//                 Quantity: event.target.Quantity.value,
//                 Mobile: event.target.Mobile.value
//             })

//         })
//             .then(res => res.json())
//             .then((result) => {
//                 //alert(result);
//                 this.setState({ snackbaropen: true, snackbarmsg: result });
//             },
//                 (error) => {
//                     //alert('Failed')
//                     this.setState({ snackbaropen: true, snackbarmsg: 'failed' });
//                 }
//             )
//     }
//     render() {
//         const { cropName, quantity, mobile } = this.state;
//         return (
//             <Modal show={this.props.show}
//                 onHide={this.props.onHide}
//                 size="lg"
//                 aria-labelledby="contained-modal-title-vcenter"
//                 centered>
                    
//                 <Modal.Header closeButton>
//                     <Modal.Title id="contained-modal-title-vcenter">
//                         Edit Advertisement</Modal.Title>
//                 </Modal.Header>
                
//                 <Modal.Body>
//                 <Form onSubmit={this.handleSubmit}>
//                         <Form.Group controlId="cropName">
//                             <Form.Label>Crop Name</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 name="cropName"
//                                 value={cropName}
//                                 onChange={this.handleChange}
//                             />
//                         </Form.Group>
//                         <Form.Group controlId="quantity">
//                             <Form.Label>Quantity</Form.Label>
//                             <Form.Control
//                                 type="number"
//                                 name="quantity"
//                                 value={quantity}
//                                 onChange={this.handleChange}
//                             />
//                             <h2 style={{ color: 'white', fontWeight: '3rem' }}>in Kg</h2>
//                         </Form.Group>
//                         <Form.Group controlId="mobile">
//                             <Form.Label>Mobile</Form.Label>
//                             <Form.Control
//                                 type="number"
//                                 name="mobile"
//                                 value={mobile}
//                                 onChange={this.handleChange}
//                             />
//                         </Form.Group>
//                         <Button variant="primary" type="submit">
//                         Update Advertisement
//                     </Button>
//                     <Button variant="danger" onClick={this.props.onHide}>Close</Button>
//                         </Form>
//                 </Modal.Body>
               
                   
              
                
             
//             </Modal>
          
//         );
//     }
// }

// export default UpdateAdvertisement;

