import React from 'react';
import { Card, Button, ButtonToolbar } from 'react-bootstrap';
import { Component } from 'react';

export class FarmingTips extends Component {
  constructor(props){
    super(props);
    this.state = { tips: [] };
  }
  
  componentDidMount() {
    this.refreshList();
  }
  
  refreshList() {
    fetch('http://localhost:55976/api/FarminTips')
      .then(response => response.json())
      .then(data => {
        this.setState({ tips: data });
      });
  }
  
  componentDidUpdate() {
    this.refreshList();
  }
  
  render() {
    const { tips, tipid, farmingtip } = this.state;

    return (
      <div>
        {tips.map(tip => (
          <Card key={tip.TipID} className="mt-4">
            <Card.Body>
              <Card.Title>Tip {tip.TipID}</Card.Title>
              <Card.Text>{tip.FarmingTip}</Card.Text>
             
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}
export default FarmingTips;