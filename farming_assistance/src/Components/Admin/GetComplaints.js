// import React from 'react';

// import {Table} from 'react-bootstrap';

// import { Component } from 'react';

// import {Button,ButtonToolbar} from 'react-bootstrap';


// import EditCompModal from './ComplaintEdit';



// export class GetComplaints extends Component {

//     constructor(props){

//     super(props);

//     this.state={cmplts:[], addModalShow :false, editModalShow :false}

//     }

//     componentDidMount(){

//         this.refreshList();

//     }




//     refreshList(){

//         fetch('http://localhost:55976/api/Complaints')

//         .then(response=> response.json())

//         .then(data =>{

//             this.setState({cmplts:data});

//         }

//         );

//     }

//     componentDidUpdate(){

//         this.refreshList();

//     }




//     deletecmplt(cmpltid)

//     {

//         if(window.confirm('Are you sure?'))

//         {

//             fetch('https://localhost:55976/api/Complaints/'+cmpltid, {

//                 method:'DELETE',

//                 header:{'Accept':'application/json',

//                 'Content-Type':'application/json'

//             }

//             })

//         }

//     }




//     render(){

//        

//         const {cmplts,complaint_id,complaint_desp,complaint_status}=this.state;

//        

//         let editModalClose=() =>this.setState({editModalShow:false});

//         return(

//             <div>

//             <Table className="mt-2" striped bordered hover size="sm" >

//             <thead>

//                 <tr>

//                <th>Complaint_Id</th>
//                 <th>Complaint_Desp</th>
//               <th>Complaint_Status</th>

//               

//                 </tr>

//             </thead>

//             <tbody>

//                 {cmplts.map(cmplt=>

//                 <tr key={cmplt.Complaint_Id}>
//    
//                 <td>{cmplt.Complaint_Id}</td>
//                 <td>{cmplt.Complaint_Desp}</td>
//                 <td>{cmplt.Complaint_Status}</td>
//                 <td>
//                     <ButtonToolbar>
//                         <Button
//                             className="mr-2" variant="info"
//                              onClick={()=> this.setState({editModalShow:true,complaint_id:cmplt.Complaint_Id,complaint_desp:cmplt.Complaint_Desp,complaint_status:cmplt.Complaint_Status})}
//                             >
//                                 Edit
//                         </Button>
//                         <Button className="mr-2"

//                         onClick={() => this.deleteCmplt(cmplt.Complaint_Id)}

//                         variant="danger"

//                         >Delete</Button>




//                         <EditCompModal

//                         show={this.state.editModalShow}

//                         onHide={editModalClose}
//                         complaint_id={complaint_id}
//                         complaint_desp={complaint_desp}

//                         complaint_status={complaint_status}

//                         />

//                     </ButtonToolbar>

//                 </td>

//                 </tr>

//                 )}

//             </tbody>

//             </Table>


//     </div>

//         )

//     }

// }
// export default  GetComplaints;


import { Card, Button, ButtonToolbar } from 'react-bootstrap';
import { Component } from 'react';
import EditCompModal from './ComplaintEdit';

export class GetComplaints extends Component {

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

  deleteCmplt(compid) {
    if (window.confirm('Are you sure?')) {
      fetch('http://localhost:55976/api/Complaints/' + compid, {
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

    let editModalClose = () => this.setState({ editModalShow: false });

    return (
      <div className="d-flex flex-wrap justify-content-center">
        {cmplts.map(cmplt =>
          <div className="m-3" key={cmplt.CompId}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{cmplt.Compdesp}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{cmplt.Status}</Card.Subtitle>
                <Card.Footer><ButtonToolbar>
                  <Button
                    className="mr-2" variant="info"
                    onClick={() => this.setState({ editModalShow: true, compid: cmplt.CompId, compdesp: cmplt.Compdesp, status: cmplt.Status })}
                  >
                    Edit
                  </Button>
                  <Button className="mr-2" variant="danger" onClick={() => this.deleteCmplt(cmplt.CompId)}>Delete</Button>
                  <EditCompModal
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
      </div>
    )
  }
}

export default GetComplaints;
