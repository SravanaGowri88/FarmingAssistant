import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonToolbar,Button,Row,Col } from 'react-bootstrap';
import AddAdvertisement from './Advertisements';
import { Component } from 'react';
import AdvertisementList from './AdvertisementList';
//import UpdateAdvertisement from './UpdateAdvertisement';

export class Advertise extends Component {
    constructor(props) {
      super(props);
      this.state = { addModalShow: false };
    }
  
    render() {
      return (
          <div>
         
        
  
          
              {/* <Link to='/AdvertisementList'><button> */}
                
                {/* </button></Link> */}
         
            <AdvertisementList/>
            
         
         
       
  </div>
      );
    }
  }
  
  export default Advertise;