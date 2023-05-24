import { Card, Button, ButtonToolbar } from 'react-bootstrap';
import { Component } from 'react';
import EditComp from './EditCompModal';
import AddCompModal from './AddCompModal';

export class ViewComplaints extends Component {

  constructor(props) {
    super(props);
    this.state = { cmplts: [], addModalShow: false, editModalShow: false };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    fetch('http://localhost:55976/api/Complaints')
      .then(response => response.json())
      .then(data => {
        this.setState({ cmplts: data });
      });
  }

  componentDidUpdate() {
    this.refreshList();
  }

  deleteCmplt(cmpltid) {
    if (window.confirm('Are you sure?')) {
      fetch('http://localhost:55976/api/Complaints/' + cmpltid, {
        method: 'DELETE',
        header: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
    }
  }

  render() {
    const { cmplts, compid, compdesp, status } = this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
    let editModalClose = () => this.setState({ editModalShow: false });

    return (
      <div className="d-flex flex-wrap justify-content-center">
        {cmplts.map(cmplt =>
          <div className="m-3" key={cmplt.CompId}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{cmplt.Compdesp}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{cmplt.Status}</Card.Subtitle>
                <Card.Footer>
                    <ButtonToolbar>
                  <Button
                    className="mr-2" variant="info"
                    onClick={() => this.setState({ editModalShow: true, compid: cmplt.CompId, compdesp: cmplt.Compdesp, status: cmplt.Status })}
                  >
                    Edit
                  </Button>
                  <Button className="mr-2" variant="danger" onClick={() => this.deleteCmplt(cmplt.CompId)}>Delete</Button>
                  <EditComp
                    show={this.state.editModalShow}
                    onHide={editModalClose}
                    compid={compid}
                    compdesp={compdesp}
                    status={status}
                  />
                </ButtonToolbar>
                </Card.Footer>
              </Card.Body>
            </Card>
         
          </div>
           
        )}
           <div className="text-center mt-3">
          <Button variant='primary'
            onClick={() => this.setState({ addModalShow: true })}
          >
            Add Complaint
          </Button>
          <AddCompModal
            show={this.state.addModalShow}
            onHide={addModalClose}
          />
        </div>
      </div>
    )
  }
}

export default ViewComplaints;
