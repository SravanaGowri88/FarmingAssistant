// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Card } from 'react-bootstrap';

// function CropDetails() {
//   const [cropDetails, setCropDetails] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await axios.get('http://localhost:55976/api/AcceptedCrops/GET');
//       setCropDetails(response.data);
//     }
//     fetchData();
//   }, []);

//   const updateAccept = (recId, accept) => {
//     axios.put('http://localhost:55976/api/AcceptedCrops/updateaccept', { recId, accept })
//       .then(response => {
//         // handle success and update UI
//         const updatedCropDetails = cropDetails.map(crop => {
//           if (crop.Rec_Id === recId) {
//             return {
//               ...crop,
//               Accept: accept
//             };
//           }
//           return crop;
//         });
//         setCropDetails(updatedCropDetails);
//       })
//       .catch(error => {
//         // handle error
//       });
//   };

//   return (
//     <div className="card-deck">
//       <h1>Crop Details</h1>
//       {cropDetails.map((crop, index) => (
//         <Card key={index} className="advertisement-card">
//           <Card.Body>
//             <Card.Title style={{ fontSize: 'larger' }}>
//               {crop.Name}
//             </Card.Title>
//             <Card.Text>
//               Accept:
//               <select value={crop.Accept} onChange={(e) => updateAccept(crop.Rec_Id, e.target.value)}>
//                 <option value="yes">Yes</option>
//                 <option value="no">No</option>
//               </select>
//             </Card.Text>
//             <Card.Text>Crop Name: {crop.CropName}</Card.Text>
//             <Card.Text>Quantity: {crop.Quantity}</Card.Text>
//             <Card.Text>Rupees: {crop.Rupees}</Card.Text>
//           </Card.Body>
//         </Card>
//       ))}
//     </div>
//   );
// }

// export default CropDetails;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Card, Button } from 'react-bootstrap';

// function CropDetails() {
//   const [cropDetails, setCropDetails] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await axios.get('http://localhost:55976/api/AcceptedCrops/GET');
//       setCropDetails(response.data);
//     }
//     fetchData();
//   }, []);

//   const handleAcceptChange = (crop, value) => {
//     const updatedCrop = {
//       ...crop,
//       Accept: value
//     };
//     setCropDetails(prevCropDetails => prevCropDetails.map(c => c.Rec_Id === crop.Rec_Id ? updatedCrop : c));
//   };

//   const handleSave = (crop) => {
//     axios.put(`/api/AcceptedCrops/updateaccept?recId=${crop.Rec_Id}&accept=${crop.Accept}`)
//       .then(() => {
//         alert(`Crop "${crop.CropName}" has been accepted!`);
//       })
//       .catch(error => {
//         console.error(error);
//         alert('Failed to update crop acceptance.');
//       });
//   };

//   return (
//     <div className="card-deck">
//       <h1>Crop Details</h1>
//       {cropDetails.map((crop, index) => (
//         <Card key={index} className="advertisement-card">
//           <Card.Body>
//             <Card.Title style={{ fontSize: 'large' }}>{crop.Name}</Card.Title>
//             <Card.Text>
//               Accept:
//               <select value={crop.Accept} onChange={(e) => handleAcceptChange(crop, e.target.value)}>
//                 <option value="no">No</option>
//                 <option value="yes">Yes</option>
//               </select>
//             </Card.Text>
//             <Card.Text>Name: {crop.CropName}</Card.Text>
//             <Card.Text>Quantity: {crop.Quantity}</Card.Text>
//             <Card.Text>Rupees: {crop.Rupees}</Card.Text>
//             <Button variant="primary" onClick={() => handleSave(crop)}>Accept</Button>
//           </Card.Body>
//         </Card>
//       ))}
//     </div>
//   );
// }

// export default CropDetails;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Card, Button } from 'react-bootstrap';

// function CropDetails() {
//   const [cropDetails, setCropDetails] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await axios.get('http://localhost:55976/api/AcceptedCrops/GET');
//       setCropDetails(response.data);
//     }
//     fetchData();
//   }, []);

//   const handleAcceptChange = (crop, value) => {
//     const updatedCrop = {
//       ...crop,
//       Accept: value
//     };
//     setCropDetails(prevCropDetails => prevCropDetails.map(c => c.Rec_Id === crop.Rec_Id ? updatedCrop : c));
//   };

//   const handleSave = (crop) => {
//     axios.put(`/api/AcceptedCrops/updateaccept?recId=${crop.Rec_Id}&accept=${crop.Accept}`)
//       .then(() => {
//         alert(`Crop "${crop.CropName}" has been accepted!`);
//         setCropDetails(prevCropDetails => prevCropDetails.filter(c => c.Rec_Id !== crop.Rec_Id));
//       })
//       .catch(error => {
//         console.error(error);
//         alert('Failed to update crop acceptance.');
//       });
//   };

//   return (
//     <div className="card-deck">
//       <h1>Crop Details</h1>
//       {cropDetails.map((crop) => (
//         <Card key={crop.Rec_Id} className="advertisement-card">
//           <Card.Body>
//             <Card.Title style={{ fontSize: 'large' }}>{crop.Name}</Card.Title>
//             <Card.Text>
//               Accept:
//               <select value={crop.Accept} onChange={(e) => handleAcceptChange(crop, e.target.value)}>
//                 <option value="no">No</option>
//                 <option value="yes">Yes</option>
//               </select>
//             </Card.Text>
//             <Card.Text>Name: {crop.CropName}</Card.Text>
//             <Card.Text>Quantity: {crop.Quantity}</Card.Text>
//             <Card.Text>Rupees: {crop.Rupees}</Card.Text>
//             {crop.Accept === 'no' && (
//               <Button variant="primary" onClick={() => handleSave(crop)}>Accept</Button>
//             )}
//             {crop.Accept === 'yes' && (
//               <Button variant="success" disabled>Accepted</Button>
//             )}
//           </Card.Body>
//         </Card>
//       ))}
//     </div>
//   );
// }

// export default CropDetails;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Card, Button } from 'react-bootstrap';

// function CropDetails() {
//   const [cropDetails, setCropDetails] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await axios.get('http://localhost:55976/api/AcceptedCrops/GET');
//       setCropDetails(response.data);
//     }
//     fetchData();
//   }, []);

//   const handleAcceptChange = (crop, value) => {
//     const updatedCrop = {
//       ...crop,
//       Accept: value
//     };
//     setCropDetails(prevCropDetails => prevCropDetails.map(c => c.Rec_Id === crop.Rec_Id ? updatedCrop : c));
//   };

//   const handleSave = (crop) => {
//     axios.put(`/api/AcceptedCrops/updateaccept?recId=${crop.Rec_Id}&accept=${crop.Accept}`)
//       .then(() => {
//         alert(`The "${crop.CropName}" is accepted from the "${crop.Name}"!`);
//       })
//       .catch(error => {
//         console.error(error);
//         alert('Failed to update crop acceptance.');
//       });
//   };

//   return (
//     <div className="Container">
//    <h1>Crops</h1>
  
//     <div className="card-deck">
      
//       {cropDetails.map((crop, index) => (
//         <Card key={index} className="advertisement-card">
//           <Card.Body>
//             <Card.Title style={{ fontSize: 'large' }}>{crop.Name}</Card.Title>
//             <Card.Text>
//               Accept:
//               <select value={crop.Accept} onChange={(e) => handleAcceptChange(crop, e.target.value)} disabled={crop.Accept === 'yes'}>
//                 <option value="no">Not Accepted</option>
//                 <option value="yes">Accepted</option>
//               </select>
//             </Card.Text>
//             <Card.Text>Name: {crop.CropName}</Card.Text>
//             <Card.Text>Quantity: {crop.Quantity}</Card.Text>
//             <Card.Text>Rupees: {crop.Rupees}</Card.Text>
//             {crop.Accept === 'no' && <Button variant="primary" onClick={() => handleSave(crop)}>Accept</Button>}
//             {crop.Accept === 'yes' && <p>The "{crop.CropName}" is accepted from the "{crop.Name}"!</p>}
//           </Card.Body>
//         </Card>
//       ))}
//     </div>
//     </div>
//   );
// }

// export default CropDetails;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Card, Button } from 'react-bootstrap';
// import React, { useState, useEffect } from 'react';


// function CropDetails() {
//   const [cropDetails, setCropDetails] = useState([]);
  
//   const handleAccept = async (crop) => {
//     try {
//       const response = await axios.put(`http://localhost:55976/api/AcceptedCrops/UpdateStatus`, {
//         Rec_Id: crop.Rec_Id,
//         Status: true,
//       });
//       console.log(response.data);
//       // Update the crop status in state
//       const updatedCrops = [...cropDetails];
//       const index = updatedCrops.findIndex((c) => c.Rec_Id === crop.Rec_Id);
//       updatedCrops[index].Status = true;
//       setCropDetails(updatedCrops);
//       // Display a success message to the user
//       alert(`The "${crop.CropName}" is accepted from the "${crop.Name}"!`);
//     } catch (error) {
//       console.error(error);
//       // Display an error message to the user
//       alert('Failed to update crop acceptance.');
//     }
//   };

//   useEffect(() => {
//     async function fetchData() {
//       const response = await axios.get('http://localhost:55976/api/AcceptedCrops/GET');
//       setCropDetails(response.data);
//     }
//     fetchData();
//   }, []);

//   return (
//     <div className="Container">
//       <h1>Crops</h1>
  
//       <div className="card-deck">
//         {cropDetails.map((crop, index) => (
//           <Card key={index} className="advertisement-card">
//             <Card.Body>
//               <Card.Title style={{ fontSize: 'large' }}>{crop.Name}</Card.Title>
//               <Card.Text>
//                 Status:
//                 {crop.Status === 'no' && (
//                   <Button variant="primary" onClick={() => handleAccept(crop)}>Accept</Button>
//                 )}
//                 {crop.Status === 'yes' && <p>The "{crop.CropName}" is accepted from the "{crop.Name}"!</p>}
//               </Card.Text>
//               <Card.Text>Name: {crop.CropName}</Card.Text>
//               <Card.Text>Quantity: {crop.Quantity}</Card.Text>
//               <Card.Text>Rupees: {crop.Rupees}</Card.Text>
//             </Card.Body>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CropDetails;


import React, { Component } from 'react';
import { Card, Button, Modal, Form, Container, Row, Col, ButtonToolbar, Table } from 'react-bootstrap';
import Editstatus from './EditCropRecieved';

export class CropsRecieved extends Component {
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
  render() {
    const { cmplts, cropid,name,cropname, quantity, rupees,status} = this.state;
    let editModalClose = () => this.setState({ editModalShow: false });
    
    return (
      <div className="advertisement-list-container">
        <div className="card-deck">
          {cmplts.map(cmplt =>
            <div key={cmplt.CropId} className="advertisement-card">
              <Card.Body>
                
                <Card.Title>{cmplt.Name}</Card.Title>
                <Card.Text>
                 
                  Crop : {cmplt.CropName}
                  </Card.Text>
                  <Card.Text>
                  Quantity: {cmplt.Quantity}
                 
                  </Card.Text>
                  <Card.Text>
                  Rupees: {cmplt.Rupees}
                  </Card.Text>
                  <Card.Text>
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
                  {/* <Button
                    className="mr-2"
                    onClick={() => this.deleteCmplt(cmplt.ComplaintID)}
                    variant="danger"
                  >
                    Delete
                  </Button> */}
                  <Editstatus
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
        </div>
      </div>
    );
  }
}

export default CropsRecieved;
