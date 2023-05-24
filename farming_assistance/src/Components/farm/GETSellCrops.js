// import React, { Component } from 'react';
// import { Card, Button, Modal, Form, ButtonToolbar } from 'react-bootstrap';
// import AddSellCrops from './AddSellCrops';
// import './GETSellCrops.css';
// import SideBar from './SideBar';

// export class SellCropList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//       editModalShow: false,
//       editedAdvertisement: null,
  
//     }
//   }
  

//   fetchData = () => {
//     fetch('http://localhost:55976/api/SellCrop/GET')
//       .then(response => response.json())
//       .then(data => {
//         this.setState({
//           data: data,
//         });
//       })
//       .catch(error => console.log(error));
//   };

  
  

  
 
//   render(){
//    let addModalClose = () => this.setState({ addModalShow: false });
//     return (
//         <div className="SellCrop-list-container">
//           <ButtonToolbar>
//               <Button
//                 variant='primary'
//                onClick={() => this.setState({ addModalShow: true })}
//               >
//                 Add crop
//               </Button>
//               <AddSellCrops
//                 show={this.state.addModalShow}
//                 onHide={addModalClose}
//               />
//                 {/* <Button
//                   variant="danger"
//                   onClick={() => this.handleDelete(advertisement.Ad_Id)}
//                 >
//                   Delete
//                 </Button> */}
//                  </ButtonToolbar>
//         <Button onClick={this.fetchData}>Advertisements</Button>
//         <div className="card-deck" >
//           {this.state.data.map(sellCrop => (
//             <Card key={sellCrop.CropId} className="sellCrop_card">
//               <Card.Body>
//                 <Card.Title style={{fontSize:'large'}}>{sellCrop.Name}</Card.Title>
//                 <Card.Text>CropName: {sellCrop.CropName}</Card.Text>
//                 <Card.Text>Quantity: {sellCrop.Quantity} in Kg</Card.Text>
//                 <Card.Text >Rupees: Rs{sellCrop.Rupees} </Card.Text>
                
//               </Card.Body>
//             </Card>
//           ))}
//         </div>
       

//       </div>
//     );
  
//   }
// }

// export default SellCropList;


// import React, { Component } from 'react';
// import { Card, Button, Modal, Form ,ButtonToolbar} from 'react-bootstrap';
// import AddSellCrops from './AddSellCrops';
// import './GETSellCrops.css';

// class EditCropModal extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       CropName: props.crop.CropName,
//       Quantity: props.crop.Quantity,
//       Rupees: props.crop.Rupees,
//     };
//   }
 
//   handleInputChange = (event) => {
//     const target = event.target;
//     const name = target.name;
//     const value = target.value;

//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const { CropName, Quantity, Rupees } = this.state;
//     const updatedCrop = {
//       ...this.props.crop,
//       CropName,
//       Quantity,
//       Rupees,
//     };
//     fetch(
//       `http://localhost:55976/api/SellCrop/Update/${this.props.crop.Rec_Id}`,
//       {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updatedCrop),
//       }
//     )
//       .then((response) => {
//         if (response.ok) {
//           this.props.onHide();
//           this.props.handleUpdate();
//         } else {
//           throw new Error('Failed to update crop data');
//         }
//       })
//       .catch((error) => console.log(error));
//   };

//   render() {
//     const { CropName, Quantity, Rupees } = this.state;
//     return (
//       <Modal
//         {...this.props}
//         size='lg'
//         aria-labelledby='contained-modal-title-vcenter'
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id='contained-modal-title-vcenter'>
//             Edit crop details
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={this.handleSubmit}>
//             <Form.Group controlId='formCropName'>
//               <Form.Label>Crop name</Form.Label>
//               <Form.Control
//                 type='text'
//                 name='CropName'
//                 value={CropName}
//                 onChange={this.handleInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId='formQuantity'>
//               <Form.Label>Quantity in Kg</Form.Label>
//               <Form.Control
//                 type='number'
//                 name='Quantity'
//                 value={Quantity}
//                 onChange={this.handleInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId='formRupees'>
//               <Form.Label>Price per Kg (in Rupees)</Form.Label>
//               <Form.Control
//                 type='number'
//                 name='Rupees'
//                 value={Rupees}
//                 onChange={this.handleInputChange}
//               />
//             </Form.Group>
//             <Button variant='primary' type='submit'>
//               Save changes
//             </Button>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={this.props.onHide}>Close</Button>
//         </Modal.Footer>
//       </Modal>
//     );
//   }
// }
//  export {EditCropModal}
// class SellCropList extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         data: [],
//         addModalShow: false,
//         showCards: false,
//         cropAcceptance: {} // new state variable
//       }
//     }
   
    
//     fetchData = () => {
//       Promise.all([
//         fetch('http://localhost:55976/api/SellCrop/GET'),
//         fetch('http://localhost:55976/api/AcceptedCrops/GET')
//       ])
//       .then(([sellCropsResponse, acceptedCropsResponse]) => Promise.all([sellCropsResponse.json(), acceptedCropsResponse.json()]))
//       .then(([sellCrops, acceptedCrops]) => {
//         const cropAcceptance = acceptedCrops.reduce((acc, crop) => {
//           acc[crop.Rec_Id] = crop.Accept;
//           return acc;
//         }, {});
//         const data = sellCrops.map(crop => ({...crop, Status: cropAcceptance[crop.Rec_Id] || 'Not Accepted'}));
//         this.setState({
//           data: data,
//           showCards: true,
//           cropAcceptance: cropAcceptance
//         });
//       })
//       .catch(error => console.log(error));
//     };
    
//     componentDidMount() {
//       this.fetchData();
//     }
  
//     render(){
      
//       let addModalClose = () => this.setState({ addModalShow: false });
//       return (
//         <div classmane="Container">
//         <div className="SellCrop-list-container">
          
//           {/* <Button onClick={this.fetchData}>Advertisements</Button> */}
//           {this.state.showCards && ( 
//           <div className="card-deck" >
//             {this.state.data.map(sellCrop => (
//               <Card key={sellCrop.CropId} className="sellCrop_card">
//                 <Card.Body>
//                   <Card.Title style={{fontSize:'large'}}>{sellCrop.Name}</Card.Title>
//                   <Card.Text>CropName: {sellCrop.CropName}</Card.Text>
//                   <Card.Text>Quantity: {sellCrop.Quantity} in Kg</Card.Text>
//                   <Card.Text>Rupees: Rs{sellCrop.Rupees}</Card.Text>
//                   <Card.Text className={sellCrop.Status === "Accepted" ? "green-text" : ""}>Status: {sellCrop.Status}</Card.Text>
//                   <Button
//                     variant="outline-primary"
//                     onClick={() => this.props.handleEdit(sellCrop)}
//                   >
//                     Edit
//                   </Button>
//                 </Card.Body>
//               </Card>
             
           
//             ))}
//           </div>
//           )}
//         </div>
//         <div className='button'>
//         <ButtonToolbar>
//               <Button
//                 variant='primary' align='center'
//                 onClick={() => this.setState({ addModalShow: true })}
//               >
//                 Add crop
//               </Button>
//               <AddSellCrops
//                 show={this.state.addModalShow}
//                 onHide={addModalClose}
//                 onAddCrop={() => {
//                   addModalClose();
//                   this.fetchData();
//                 }}
//               />
//             </ButtonToolbar>
//             </div>
//         </div>
//       );
//     }
//   }
  
//   export default SellCropList;




// import React, { Component } from 'react';
// import { Card, Button, Modal, Form, ButtonToolbar } from 'react-bootstrap';
// import AddSellCrops from './AddSellCrops';
// import './GETSellCrops.css';
// import SideBar from './SideBar';
// //import Sell_Crop from './Sell_Crop';

// export class SellCropList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//       addModalShow: false,
//       showCards: false,
//       editModalShow: false,
//       editedAdvertisement: null,
//     }
//   }

//   fetchData = () => {
//     fetch('http://localhost:55976/api/SellCrop/GET')
//       .then(response => response.json())
//       .then(data => {
//         this.setState({
//           data: data,
//           showCards: true,
//         });
//       })
//       .catch(error => console.log(error));
//   };

//   handleAcceptClick = (sellCrop) => {
//     const requestOptions = {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         CropId: sellCrop.CropId,
//         Name: sellCrop.Name,
//         CropName: sellCrop.CropName,
//         Quantity: sellCrop.Quantity,
//         Rupees: sellCrop.Rupees,
//         Status: 'Accepted', // set status to "Accepted"
//         ReceiverId: sellCrop.ReceiverId
//       })
//     };
//     fetch(`http://localhost:55976/api/SellCrop/PUT/${sellCrop.CropId}`, requestOptions)
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         this.fetchData();
//       })
//       .catch(error => console.log(error));
//   }

//   componentDidMount() {
//     this.fetchData();
//   }

//   render(){
//     let addModalClose = () => this.setState({ addModalShow: false });
//     return (
//       <div className="SellCrop-list-container">
//         <ButtonToolbar>
//           <Button
//             variant='primary'
//             onClick={() => this.setState({ addModalShow: true })}
//           >
//             Add crop
//           </Button>
//           <AddSellCrops
//             show={this.state.addModalShow}
//             onHide={addModalClose}
//             onAddCrop={() => {
//               addModalClose();
//               this.fetchData();
//             }}
//           />
//         </ButtonToolbar>
//         <Button onClick={this.fetchData}>Advertisements</Button>
      
//         {this.state.showCards && ( 
//         <div className="card-deck" >
//           {this.state.data.map(sellCrop => (
//             <Card key={sellCrop.CropId} className="sellCrop_card">
//               <Card.Body>
//                 <Card.Title style={{fontSize:'large'}}>{sellCrop.Name}</Card.Title>
//                 <Card.Text>CropName: {sellCrop.CropName}</Card.Text>
//                 <Card.Text>Quantity: {sellCrop.Quantity} in Kg</Card.Text>
//                 <Card.Text>Rupees: Rs{sellCrop.Rupees}</Card.Text>
//                 <Card.Text>Status: {sellCrop.Status}</Card.Text>
//                 {sellCrop.Status !== 'Accepted' && ( // only show accept button if status is not already "Accepted"
//                   <Button variant="success" onClick={() => this.handleAcceptClick(sellCrop)}>Accept</Button>
//                 )}
//               </Card.Body>
//             </Card>
//           ))}
//         </div>
//         )}
//       </div>
//     );
//   }
// }

// export default SellCropList;



import React, { Component } from 'react';
import { Card, Button, Modal, Form, Container, Row, Col, ButtonToolbar, Table } from 'react-bootstrap';
import './GETSellCrops.css';
import AddSellCrops from './AddSellCrops';
import EditSellCrops from './EditSellCrops';
import { Link } from 'react-router-dom';

export class GETSellCrops extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cmplts: [],
      addModalShow: false,
      editModalShow: false,
     
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    fetch('http://localhost:55976/api/Sellcrops')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Add this line to see what data you are receiving
        this.setState({ cmplts: data });
      }
      );
  }
  deleteCmplt(cropid) {
    if (window.confirm('Are you sure?')) {
      fetch(`http://localhost:55976/api/Sellcrops/${cropid}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(() => {
        this.refreshList();
      });
    }
  }


  render() {
    const { cmplts, cropid,name,cropname, quantity, rupees,status} = this.state;
    let editModalClose = () => this.setState({ editModalShow: false });
    let addModalClose = () => this.setState({ addModalShow: false });
    return (
      <div className="advertisement-list-container">
        <div className="card-deck">
          {cmplts.map(cmplt =>
            <div key={cmplt.CropId} className="advertisement-card">
              <Card.Body>
                
                <Card.Title>{cmplt.Name}</Card.Title>
                <Card.Text>
                 
                  Crop : {cmplt.CropName}
                  <br/>
                  Quantity: {cmplt.Quantity}
                  <br />
                  Rupees: {cmplt.Rupees}
                  <br/>
                  Status:{cmplt.Status}
                </Card.Text>
                <ButtonToolbar>
                  <Button
                    className="mr-2"
                    variant="info"
                    onClick={() => this.setState({ editModalShow: true, cropid: cmplt.CropId,name: cmplt.Name, cropname: cmplt.CropName, quantity: cmplt.Quantity, rupees: cmplt.Rupees,status:cmplt.Status })}
                  >
                    Edit
                  </Button>
                  <Button
                    className="mr-2"
                    onClick={() => this.deleteCmplt(cmplt.CropId)}
                    variant="danger"
                  >
                    Delete
                  </Button>
                  <EditSellCrops
                    show={this.state.editModalShow}
                    onHide={editModalClose}
                    cropid={cropid}
                    name={name}
                    cropname={cropname}
                    quantity={quantity}
                    rupees={rupees}
                    status={status}
                  />
                </ButtonToolbar>
               
              </Card.Body>
            </div>
          )}
        </div>
        <div className="text-center mt-3">
          <Button variant='primary'
            onClick={() => this.setState({ addModalShow: true })}
          >
            Add Crop
          </Button>
          <AddSellCrops
            show={this.state.addModalShow}
            onHide={addModalClose}
          />
        </div>
      </div>
    );
  }
}

export default GETSellCrops;