import React, { Component } from 'react';  
import axios from 'axios';  
//import { Link } from 'react-router-dom';  
class Table extends Component {  
  constructor(props) {  
    super(props);  
    }  
      
    DeleteStudent= () =>{  
     axios.delete('http://localhost:55976/api/Advertisement/Advertisement_Details?Ad_Id'+this.props.obj.Id)  
    .then(json => {  
    if(json.data.Status==='Delete'){  
    alert('Record deleted successfully!!');  
    }  
    })  
    }  
  render() {  
    return (  
        <tr>  
          <td>  
            {this.props.obj.Crop_Name}  
          </td>  
          <td>  
            {this.props.obj.Quantity}  
          </td>  
          <td>  
            {this.props.obj.Mobile}  
          </td>  
          
          <td>  
          {/*<Link to={"/edit/"+this.props.obj.Id} className="btn btn-success">Edit</Link>  */}
          </td>  
          <td>  
            <button type="button" onClick={this.DeleteStudent} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  
  
export default Table;  