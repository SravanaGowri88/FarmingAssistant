import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
//import './Ads.css';

export class EditCompModal extends Component {
  constructor(props) {
    super(props);
    this.state = { snackbaropen: false, snackbarmsg: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  snackbarClose = (event) => {
    this.setState({ snackbaropen: false });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:55976/api/Complaints', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        CompId: event.target.CompId.value,
        Compdesp: event.target.Compdesp.value,
        Status: event.target.Status.value
      })
    })
      .then(res => res.json())
      .then((result) => {
        //alert(result);
        this.setState({ snackbaropen: true, snackbarmsg: result });
      },
        (error) => {
          //alert('Failed')
          this.setState({ snackbaropen: true, snackbarmsg: 'failed' });
        }
      )
  }
  render() {
    return (
      <div className="container">
        <Snackbar
          anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
          open={this.state.snackbaropen}
          autoHideDuration={3000}
          onClose={this.snackbarClose}
          //message={<span id="message-id">{this.state.snackbarmsg}</span>}
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
              Edit CropDetails
            </Modal.Title>
          </Modal.Header>
          <Form onSubmit={this.handleSubmit}>
            <Modal.Body>

              <Form.Group controlId="CompId">
                <Form.Label>CompId</Form.Label>
                <Form.Control
                  type="text"
                  name="CompId"
                  required
                  disabled
                  defaultValue={this.props.compid}
                  placeholder="compid"
                />
              </Form.Group>
              <Form.Group controlId="Compdesp">
                <Form.Label>Compdesp</Form.Label>
                <Form.Control
                  type="text"
                  name="Compdesp"
                  required
                  disabled
                  defaultValue={this.props.compdesp}
                  placeholder="compdesp"
                />
              </Form.Group>
              <Form.Group controlId="Status">
                <Form.Label>Status</Form.Label>
                <Form.Control
                  type="text"
                  name="Status"
                  required
                 
                  defaultValue={this.props.status}
                  placeholder="status"
                />
              </Form.Group>
              <br></br>
              <br></br>
            </Modal.Body>
            <Modal.Footer>
              <Form.Group>
                <Button variant="primary" type="submit">
                  Update
                </Button>
              </Form.Group>



              <Button variant="secondary" onClick={this.props.onHide}>
                Close
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>



    );

  }

}
export default EditCompModal;