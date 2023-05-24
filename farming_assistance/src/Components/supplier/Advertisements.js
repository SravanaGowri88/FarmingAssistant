// import React, { Component } from 'react';  
// import { Modal,Button ,Form} from 'react-bootstrap';
// // import axios from 'axios';  
// // import Table from './Table';  
// import './Ads.css'

// export class AddAdvertisement extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       cropName: '',
//       quantity: '',
//       mobile: ''
//     };
//   }
//   handleChange = (event) => {
//     const target = event.target;
//     const value = target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
//   };
//   handleSubmit = (event) => {
//     event.preventDefault();
//     fetch('http://localhost:55976/api/Advertisement/AddAdvertisement', {
//       method:'POST',
//       headers:{
//         'Accept':'application/json',
//         'Content-Type':'application/json'
//       },
//       body:JSON.stringify({
//         Ad_Id:null,
//         Crop_Name:event.target.Crop_Name.value,
//         Quantity:event.target.Quantity.value,
//         Mobile:event.target.Mobile.value
//       })
//     })
//     .then(res=>res.json())
//     .then((result)=>
//     {
//       alert(result);
    
//     },
//     (error)=>{
//       alert('Failed');
//     }
//     )
//     // console.log('Crop Name: ', this.state.cropName);
//     // console.log('Quantity: ', this.state.quantity);
//     // console.log('Mobile: ', this.state.mobile);
//     // this.props.onHide();
//   };

//   render(){
//     return (
//       <Modal
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
//         <Form onSubmit={this.handleSubmit}>
//             <Form.Group controlId='cropName'>
//               <Form.Label>Crop Name</Form.Label><br></br>
//               <Form.Control
//                 type='text'
//                 name='cropName'
//                 value={this.state.cropName}
//                 onChange={this.handleChange}
//               />
//             </Form.Group>

//             <Form.Group controlId='quantity'>
//               <Form.Label>Quantity</Form.Label><br></br>
//               <Form.Control
//                 type='text'
//                 name='quantity'
//                 value={this.state.quantity}
//                 onChange={this.handleChange}
//               />
//             </Form.Group>

//             <Form.Group controlId='mobile'>
//               <Form.Label>Mobile</Form.Label><br></br>
//               <Form.Control
//                 type='text'
//                 name='mobile'
//                 value={this.state.mobile}
//                 onChange={this.handleChange}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
       
//           <Button variant='primary' type='submit' onClick={this.handleSubmit}>
//             Post
//           </Button>
//           <Button variant="danger" onClick={this.props.onHide}>Close</Button>
//         </Modal.Footer>
//       </Modal>
//     );
//   }
// }

// export default AddAdvertisement;
// import React, { Component } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';
// import axios from 'axios';
// import './Ads.css';
// import Table from './Table';
// import ParentComponent from './TextArea';

// export class AddAdvertisement extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cropName: '',
//       quantity: '',
//       mobile: ''
//     };
//   }
//   handleChange = (event) => {
//     const target = event.target;
//     const value = target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
//   };
//   handleSubmit = (event) => {
//     event.preventDefault();
//     axios.post('http://localhost:55976/api/Advertisement/AddAdvertisement', {
//       Crop_Name: this.state.cropName,
//       Quantity: this.state.quantity,
//       Mobile: this.state.mobile
//     })
//       .then((response) => {
//         console.log(response);
//         alert('Advertisement added successfully!');
//         this.props.onHide();
//       })
//       .catch((error) => {
//         console.log(error);
//         alert('Failed to add advertisement!');
//       });
//   };

//   render() {
//     return (
//       <Modal
//         show={this.props.show}
//         onHide={this.props.onHide}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//         className="custom-modal"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-vcenter">
//             Post Advertisement
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={this.handleSubmit}>
//             <Form.Group controlId='cropName'>
//               <TextArea name='crop-name' label='Crop Name' value={this.state.cropName} handleChange={this.handleChange}/>
//             </Form.Group>
//             <br></br>

//             <Form.Group controlId='quantity'>
//               <TextArea name='quantity' label='Quantity' value={this.state.quantity} handleChange={this.handleChange}/>
//             </Form.Group>
//             <br></br>

//             <Form.Group controlId='mobile'>
//               <TextArea name='mobile' label='Mobile' value={this.state.mobile} handleChange={this.handleChange}/>
//             </Form.Group>
//             <br></br>

//             <Button type="submit">Post</Button>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     );
//   }
// }

// export default AddAdvertisement;

import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import './Ads.css';


export class AddAdvertisement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ads:[],
      cropName: '',
      quantity: '',
      mobile: ''
    };
  }
  componentDidMount(){
    this.refreshList();
  }
  refreshList(){
    fetch('http://localhost:55976/api/Advertisement')
    .then(response=>response.json())
    .then(data=>{
      this.setState({ads:data});
  }
  );
}
componentDidUpdate(){
  this.refreshList();
}
  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:55976/api/Advertisement', {
      Crop_Name: this.state.cropName,
      Quantity: this.state.quantity,
      Mobile: this.state.mobile
    })
      .then((response) => {
        console.log(response);
        alert('Advertisement added successfully!');
        this.props.onHide();
      })
      .catch((error) => {
        console.log(error);
        alert('Failed to add advertisement!');
      });
  };

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Advertisement
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId='cropName'>
              <Form.Label>Crop Name</Form.Label>
              <Form.Control
                type='text'
                name='cropName'
                value={this.state.cropName}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId='quantity'>
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type='text'
                name='quantity'
                value={this.state.quantity}
                onChange={this.handleChange}
              /> <h2 style={{color:'white',fontWeight:'3rem'}}>in Kg</h2>
            </Form.Group>

            <Form.Group controlId='mobile'>
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type='text'
                name='mobile'
                value={this.state.mobile}
                onChange={this.handleChange}
              />
            </Form.Group>

          
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant='primary' type='submit' onClick={this.handleSubmit}>
            Post
          </Button>
          <Button variant="danger" onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AddAdvertisement;
