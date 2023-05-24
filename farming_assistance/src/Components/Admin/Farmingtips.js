import React from 'react';
import {Card, Button, ButtonToolbar} from 'react-bootstrap';
import {AddTipModal} from './AddTipModal';
import {EditTipModal} from './EditTipModal';

export class AdminFarmingTips extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tips: [],
      addModalShow: false,
      editModalShow: false,
      selectedTip: null,
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    fetch('http://localhost:55976/api/FarminTips')
      .then(response => response.json())
      .then(data => {
        this.setState({tips: data});
      });
  }

  deleteTip(tipid) {
    if (window.confirm('Are you sure?')) {
      fetch(`http://localhost:55976/api/FarminTips/${tipid}`, {
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
    const {tips, addModalShow, editModalShow, selectedTip} = this.state;
    const addModalClose = () => this.setState({addModalShow: false});
    const editModalClose = () => this.setState({editModalShow: false, selectedTip: null});

    return (
      <div>
        <ButtonToolbar>
          <Button variant='primary' onClick={() => this.setState({addModalShow: true})}>
            Add FarmingTip
          </Button>
          <AddTipModal show={addModalShow} onHide={addModalClose}/>
        </ButtonToolbar>

        <div className='row'>
          {tips.map(tip =>
            <div className='col-md-4 mb-4' key={tip.TipID}>
              <Card>
                <Card.Body>
                  <Card.Title>{tip.FarmingTip}</Card.Title>
                  <ButtonToolbar>
                    <Button className='mr-2' variant='info'
                            onClick={() => this.setState({editModalShow: true, selectedTip: tip})}>
                      Edit
                    </Button>
                    <Button className='mr-2' variant='danger' onClick={() => this.deleteTip(tip.TipID)}>
                      Delete
                    </Button>
                    <EditTipModal show={editModalShow} onHide={editModalClose} tip={selectedTip}/>
                  </ButtonToolbar>
                </Card.Body>
              </Card>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default AdminFarmingTips;