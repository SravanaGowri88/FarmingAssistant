// import React, { useState } from 'react';
// import { FaBars } from 'react-icons/fa';
// import { NavLink } from 'react-router-dom';
// import './Design.css';

// export const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   const menuItems = [
//     {
//       path: '/Advertise',
//       name: 'Advertise',
//     },
//     {
//       path: '/about',
//       name: 'Crop Recieved',
//     },
   
//   ];

//   return (
//     <div className={isOpen ? 'sidebar open' : 'sidebar'}>
//       <div className="sidebar-toggle" onClick={toggle}>
//         <FaBars />
//       </div>
//       <div className="sidebar-container">
//       <ul className="sidebar-menu">
//         {menuItems.map((item) => (
//           <li key={item.path}>
//             <NavLink
//               to={item.path}
//               exact
//               activeClassName="active"
//               onClick={toggle}
//             >
//               {item.name}
//             </NavLink>
//           </li>
//         ))}
//       </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


// import React, { Component } from 'react';
// import { Container, Row, Col, Nav } from 'react-bootstrap';

// export class Design extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activeLink: ''
//     };
//   }

//   setActiveLink = (link) => {
//     this.setState({ activeLink: link });
//   }

//   render() {
//     return (
//       <Col md={3} className="sidebar">
//         <Nav defaultActiveKey="/" className="flex-column">
//           <Nav.Link href="/Advertise" onClick={() => this.setActiveLink('Advertise')}>Home</Nav.Link>
//           <Nav.Link href="/about" onClick={() => this.setActiveLink('about')}>About</Nav.Link>
//           <Nav.Link href="/contact" onClick={() => this.setActiveLink('contact')}>Contact</Nav.Link>
//         </Nav>
//       </Col>
//     );
//   }
// }

// class Content extends Component {
//   render() {
//     const { activeLink } = this.props;
//     let content = null;

//     if (activeLink === 'home') {
//       content = (
//         <div>
//           <h1>Home</h1>
//           <p>Welcome to the homepage</p>
//         </div>
//       );
//     } else if (activeLink === 'about') {
//       content = (
//         <div>
//           <h1>About</h1>
//           <p>Learn more about us</p>
//         </div>
//       );
//     } else if (activeLink === 'contact') {
//       content = (
//         <div>
//           <h1>Contact</h1>
//           <p>Get in touch with us</p>
//         </div>
//       );
//     }

//     return (
//       <Col md={9} className="content">
//         {content}
//       </Col>
//     );
//   }
// }

// class App extends Component {
//   render() {
//     const { activeLink } = this.state;
//     return (
//       <Container>
//         <Row>
//           <Sidebar setActiveLink={this.setActiveLink} />
//           <Content activeLink={activeLink} />
//         </Row>
//       </Container>
//     );
//   }
// }

// export default App;

import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './a.css';

export const Design = () => {
  const navigate = useNavigate();
  
  const handleAdvertiseClick = () => {
    navigate('/Advertise');
  };
  
  const handleAcceptedCropsClick = () => {
    navigate('/Crop_Recieved');
  };

  return (
    <nav className="SSidebar">
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Advertise" activeClassName="active">
            Advertise
          </NavLink>
        </li>
        <li>
          <NavLink to="/Crop_Recieved" activeClassName="active">
            Accepted Crops
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Design;
