import React,{Component} from 'react';
import {Modal,Button,Row,Col,Form} from 'react-bootstrap';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';


export class AddCompModal extends Component{

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


        fetch('http://localhost:55976/api/Complaints',{

            method:'POST',

            headers:{

                'Accept':'application/json',

                'Content-Type':'application/json'

            },

            body:JSON.stringify({

                      CompId:null,
                   Compdesp:event.target.Compdesp.value,
                   Status:event.target.Status.value,
            })

        })

        .then(res=> res.json())

        .then((result)=>

        {

           alert(result);

           this.setState({snackbaropen:true,snackbarmsg:result});

        },

        (error)=>{

            alert('Failed')

            this.setState({snackbaropen:true,snackbarmsg:'failed'});

        }

        )
    }    

    render(){
        return(
            <div className="container">
                <Snackbar
                anchorOrigin={{vertical:'bottom',horizontal:'center'}}
                open={this.state.snackbaropen}
                autoHideDuration={3000}
                onClose={this.snackbarClose}
                message={<span id="message-id">{this.state.snackbarmsg}</span>}
                action={[
                    <IconButton
                    key="close"
                    arial-label="Close"
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

          Add Complaint

        </Modal.Title>

      </Modal.Header>

      <Modal.Body>

       

            <Row>

                <Col sm={6}>

                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="Compdesp">

                        <Form.Label>Compdesp</Form.Label>

                        <Form.Control

                           type="text"

                           name="Compdesp"

                           required

                           placeholder="Compdesp"
                        />
                        </Form.Group>
                        <Form.Group controlId="Status">
                        <Form.Label>Status</Form.Label>
                        <Form.Control
                           type="text"
                           name="Status"
                           required
                           disabled
                           placeholder="Status"


                        />
                        </Form.Group>
                        <Form.Group >
                            <Button variant="primary" type="submit">
                                Add Complaint
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
      </Modal.Body>

      <Modal.Footer>

        <Button variant="danger" onClick={this.props.onHide}>Close</Button>

      </Modal.Footer>
    </Modal>
    </div>
    );
    }
}
export default AddCompModal;