import React, { Component } from 'react';
import { Card, Button, Modal, Form ,ButtonToolbar} from 'react-bootstrap';
import AddSellCrops from './AddSellCrops';
import EditCropModal from './EditCropModal';
import './GETSellCrops.css';

class SellCropList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      addModalShow: false,
      showCards: false,
      cropAcceptance: {} // new state variable
    }
  }
  
  // ...

  handleEdit = (crop) => {
    this.setState(prevState => ({
      editModalShow: true,
      selectedCrop: crop,
      data: prevState.data.map(c => c.Rec_Id === crop.Rec_Id ? {...c, isEditing: true} : c)
    }));
  };

  handleUpdate = () => {
    this.fetchData();
  };

  handleCancel = (crop) => {
    this.setState(prevState => ({
      editModalShow: false,
      selectedCrop: null,
      data: prevState.data.map(c => c.Rec_Id === crop.Rec_Id ? {...c, isEditing: false} : c)
    }));
  };

  render(){
    let addModalClose = () => this.setState({ addModalShow: false });
    let editModalClose = () => this.setState({ editModalShow: false });
    return (
      <div className="SellCrop-list-container">
        <ButtonToolbar>
          <Button
            variant='primary'
            onClick={() => this.setState({ addModalShow: true })}
          >
            Add crop
          </Button>
          <AddSellCrops
            show={this.state.addModalShow}
            onHide={addModalClose}
            onAddCrop={() => {
              addModalClose();
              this.fetchData();
            }}
          />
        </ButtonToolbar>
        <Button onClick={this.fetchData}>Advertisements</Button>
        {this.state.showCards && ( 
          <div className="card-deck" >
            {this.state.data.map(sellCrop => (
              <Card key={sellCrop.CropId} className="sellCrop_card">
                <Card.Body>
                  <Card.Title style={{fontSize:'large'}}>{sellCrop.Name}</Card.Title>
                  <Card.Text>CropName: {sellCrop.CropName}</Card.Text>
                  <Card.Text>Quantity: {sellCrop.Quantity} in Kg</Card.Text>
                  <Card.Text>Rupees: Rs{sellCrop.Rupees}</Card.Text>
                  <Card.Text>Status: {sellCrop.Status}</Card.Text>
                  {sellCrop.isEditing ?
                    <EditCropModal
                      crop={sellCrop}
                      show={this.state.editModalShow}
                      onHide={editModalClose}
                      handleUpdate={this.handleUpdate}
                      onCancel={() => this.handleCancel(sellCrop)}
                    />
                    :
                    <div>
                      <Button variant="primary" onClick={() => this.handleEdit(sellCrop)}>Edit</Button>
                      <Button variant="danger" onClick={() => this.handleDelete(sellCrop)}>Delete</Button>
                    </div>
                  }
                </Card.Body>
              </Card>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default SellCropList;
