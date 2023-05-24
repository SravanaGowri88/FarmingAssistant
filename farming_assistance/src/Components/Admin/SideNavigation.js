import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './SideNavigation.css';

export const SideNav = () => {
  const navigate = useNavigate();
  
 
  
  const handlecomplaintsClick = () => {
    navigate('/GetComplaints');
  };
  const handleTipsClick = () => {
    navigate('/Farmingtips');
  };

  return (
    <nav className="SideNav">
      <ul>
      Admin
        <li>
          <NavLink to="/GetComplaints" activeClassName="active">
           Complaints
          </NavLink>
        </li>
        <li>
          <NavLink to="/Farmingtips" activeClassName="active">
           FarmingTips
          </NavLink>
        </li>
      
      </ul>
    </nav>

  );
};

export default SideNav;
