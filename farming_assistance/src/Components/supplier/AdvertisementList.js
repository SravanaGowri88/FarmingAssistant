// import React, { Component } from 'react';
// import { Card, Button, Modal, Form, Container, Row, Col, ButtonToolbar } from 'react-bootstrap';
// import './AdvertisementList.css';
// import UpdateAdvertisement from './UpdateAdvertisement';
// import { Link } from 'react-router-dom';

// export class AdvertisementList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cmplts: [],
//       editedAdvertisement: null,
//       editModalShow: false,
//     };
//   }

//   componentDidMount() {
//     this.refreshList();
//   }

//   refreshList() {
//     fetch('http://localhost:55976/api/Advertisement')
//       .then(response => response.json())
//       .then(data => {
//         console.log('Data:', data);
//         this.setState({ cmplts: data });
//       })
//       .catch(error => console.log(error));
//   }

//   handleEdit = (advertisement) => {
//     this.setState({
//       editedAdvertisement: advertisement,
//       showEditModal: true
//     });
//   };

//   fetchData = () => {
//     fetch('http://localhost:55976/api/Advertisement/Advertisement_Details')
//       .then(response => response.json())
//       .then(data => {
//         this.setState({ data: data });
//       })
//       .catch(error => console.log(error));
//   };

//   render() {
//     const { cmplts, cropname, quantity, mobile } = this.state;
//     console.log('cmplts:', cmplts);
//     let editModalClose = () => this.setState({ editModalShow: false });

//     if (!Array.isArray(cmplts)) {
//       return <div>Loading...</div>;
//     }
//     return (
//       <div>
//         <Container>
//           <Row>
//             {cmplts.map(cmplt => (
//               <Col md="3" key={cmplt.Ad_Id}>
//                 <Card className="my-3">
//                   <Card.Header>{cmplt.CropName}</Card.Header>
//                   <Card.Body>
//                     <Card.Text>Quantity:{cmplt.Quantity}</Card.Text>
//                     <Card.Text>Mobile: {cmplt.Mobile}</Card.Text>
//                     <ButtonToolbar>
//                       <Button
//                         className="mr-2"
//                         variant="info"
//                         onClick={() =>
//                           this.setState({
//                             editModalShow: true,
//                             cropname: cmplt.CropName,
//                             quantity: cmplt.Quantity,
//                             mobile: cmplt.Mobile,
//                           })
//                         }
//                       >
//                         Edit
//                       </Button>
//                       <UpdateAdvertisement
//                         show={this.state.editModalShow}
//                         onHide={editModalClose}
//                         cropname={cropname}
//                         quantity={quantity}
//                         mobile={mobile}
//                       />
//                     </ButtonToolbar>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </Container>
//       </div>
//     );
//   }
// }

// export default AdvertisementList;

// import React, { Component } from 'react';
// import { Card, Button, Modal, Form, Container, Row, Col, ButtonToolbar, Table } from 'react-bootstrap';
// import './AdvertisementList.css';
// import UpdateAdvertisement from './UpdateAdvertisement';
// import { Link } from 'react-router-dom';

// export class AdvertisementList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cmplts: [],
//       editedAdvertisement: null,
//       editModalShow: false,
//       isLoading: true // add a new state variable to indicate when the data is loading
//     };
//   }

//   componentDidMount() {
//     this.refreshList();
//   }

//   refreshList() {
//     fetch('http://localhost:55976/api/Advertisement')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data); // Add this line to see what data you are receiving
//         this.setState({ cmplts: data });
//       }
//       );
//   }

//   handleEdit = (advertisement) => {
//     this.setState({
//       editedAdvertisement: advertisement,
//       showEditModal: true
//     });
//   };

//   render() {
//     const { cmplts, ad_id, cropname, quantity, mobile } = this.state;
//     let editModalClose = () => this.setState({ editModalShow: false });
//     return (
//       <div>
//         <Table className="mt-4" striped bordered hover size="sm" >

//           <thead>

//             <tr>
//               <th>Ad_Id</th>

//               <th>CropName</th>

//               <th>Quantity</th>

//               <th>Mobile</th>



//             </tr>

//           </thead>

//           <tbody>

//             {cmplts.map(cmplt =>

//               <tr key={cmplt.Ad_Id}>
//                 <td>{cmplt.Ad_Id}</td>

//                 <td>{cmplt.CropName}</td>
//                 <td>{cmplt.Quantity}</td>

//                 <td>{cmplt.Mobile}</td>


//                 <td>

//                   <ButtonToolbar>

//                     <Button

//                       className="mr-2" variant="info"

//                       onClick={() => this.setState({ editModalShow: true, ad_id: cmplt.Ad_Id, cropname: cmplt.CropName, quantity: cmplt.Quantity, mobile: cmplt.Mobile })}

//                     >

//                       Edit

//                     </Button>




//                     {/*                         <Button className="mr-2"

//                         onClick={() => this.deleteCmplt(cmplt.ComplaintID)}

//                         variant="danger"

//                         >Delete</Button>
//  */}



//                     <UpdateAdvertisement

//                       show={this.state.editModalShow}

//                       onHide={editModalClose}
//                       ad_id={ad_id}

//                       cropname={cropname}

//                       quantity={quantity}

//                       mobile={mobile}


//                     />

//                   </ButtonToolbar>

//                 </td>

//               </tr>

//             )}

//           </tbody>

//         </Table>
//       </div>
//     );
//   }
// }

// export default AdvertisementList;


import React, { Component } from 'react';
import { Card, Button, Modal, Form, Container, Row, Col, ButtonToolbar, Table } from 'react-bootstrap';
import './AdvertisementList.css';
import AddAdvertisement from './Advertisements';
import UpdateAdvertisement from './UpdateAdvertisement';
import { Link } from 'react-router-dom';

export class AdvertisementList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cmplts: [],
      addModalShow: false,
      editModalShow: false,
      isLoading: true // add a new state variable to indicate when the data is loading
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    fetch('http://localhost:55976/api/Advertisement')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Add this line to see what data you are receiving
        this.setState({ cmplts: data });
      }
      );
  }
  deleteCmplt(ad_id) {
    if (window.confirm('Are you sure?')) {
      fetch(`http://localhost:55976/api/Advertisement/${ad_id}`, {
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
    const { cmplts, ad_id, cropname, quantity, mobile } = this.state;
    let editModalClose = () => this.setState({ editModalShow: false });
    let addModalClose = () => this.setState({ addModalShow: false });
    return (
      <div className="advertisement-list-container">
        <div className="card-deck">
          {cmplts.map(cmplt =>
            <div key={cmplt.Ad_Id} className="advertisement-card">
              <Card.Body>
                <Card.Title>{cmplt.CropName}</Card.Title>
                <Card.Text>
                  Quantity: {cmplt.Quantity}
                  <br />
                  Mobile: {cmplt.Mobile}
                </Card.Text>
                <ButtonToolbar>
                  <Button
                    className="mr-2"
                    variant="info"
                    onClick={() => this.setState({ editModalShow: true, ad_id: cmplt.Ad_Id, cropname: cmplt.CropName, quantity: cmplt.Quantity, mobile: cmplt.Mobile })}
                  >
                    Edit
                  </Button>
                  <Button
                    className="mr-2"
                    onClick={() => this.deleteCmplt(cmplt.Ad_Id)}
                    variant="danger"
                  >
                    Delete
                  </Button>
                  <UpdateAdvertisement
                    show={this.state.editModalShow}
                    onHide={editModalClose}
                    ad_id={ad_id}
                    cropname={cropname}
                    quantity={quantity}
                    mobile={mobile}
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
            Add Advertisement
          </Button>
          <AddAdvertisement
            show={this.state.addModalShow}
            onHide={addModalClose}
          />
        </div>
      </div>
    );
  }
}

export default AdvertisementList;
