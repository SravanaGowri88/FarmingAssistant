import React, { Component } from 'react';
import { Card, Button, Modal, Form, ButtonToolbar } from 'react-bootstrap';
import './ViewAdvertisement.css';

export  class ViewAdvertisements extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        
      };
    }
    componentDidMount() {
        this.fetchData();
      }
    
      fetchData = () => {
        fetch('http://localhost:55976/api/Advertisement')
          .then((response) => response.json())
          .then((data) => {
            this.setState({
              data: data,
            });
          })
          .catch((error) => console.log(error));
      };
      render() {
        return (
           
            <div className="advertisement-list-container">
                
              {/* <Button onClick={this.fetchData}>Advertisements</Button> */}
              <div className="card-deck">
                {this.state.data.map((advertisement) => (
                  <Card key={advertisement.Ad_Id} className="advertisement-card">
                    <Card.Body>
                      <Card.Title style={{ fontSize: 'large' }}>
                        {advertisement.CropName}
                      </Card.Title>
                      <Card.Text>Quantity: {advertisement.Quantity} in Kg</Card.Text>
                      <Card.Text>Mobile: {advertisement.Mobile}</Card.Text>
                     
                        {/* {/* <Button variant="primary">Edit</Button>
                        <Button variant="danger">Close</Button> */}
                        {/* <ButtonToolbar>
                         <Button
                          variant="primary"
                          text="Edit"
                          onClick={() => this.handleEdit(advertisement)}
                        >
                          <UpdateAdvertisement/>
                        </Button>
        
                         <Button
                          variant="danger"
                          onClick={() => this.handleDelete(advertisement.Ad_Id)}
                        >
                          Delete
                        </Button>
                        </ButtonToolbar>  */} 
                      
                    </Card.Body>
                  </Card>
                ))}
              </div>
              </div>
          )
    }
}
export default ViewAdvertisements;