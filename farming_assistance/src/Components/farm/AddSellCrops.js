import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

class AddSellCrops extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      name: '',
      cropName: '',
      quantity: '',
      rupees: '',
    
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:55976/api/Sellcrops', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
       
        Name: this.state.name,
        CropName: this.state.cropName,
        Quantity: this.state.quantity,
        Rupees: this.state.rupees,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.props.onHide();
      })
      .catch((error) => console.log(error));
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <Modal
        {...this.props}
        size='md'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            Add Crop Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
           
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                name='name'
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Form.Group>

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
              <Form.Label>Quantity in Kg</Form.Label>
              <Form.Control
                type='number'
                name='quantity'
                value={this.state.quantity}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId='rupees'>
              <Form.Label>Rupees</Form.Label>
              <Form.Control
                type='number'
                name='rupees'
                value={this.state.rupees}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Modal.Footer>
              <Button variant='secondary' onClick={this.props.onHide}>
                Close
              </Button>
              <Button variant='primary' type='submit'>
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default AddSellCrops;

