import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './SideBar.css';

export const SideBar = () => {
  const navigate = useNavigate();
  
  const handleSellCropsClick = () => {
    navigate('/GETSellCrops');
  };
  
  // const handleAcceptedCropsClick = () => {
  //   navigate('/EditCropModal');
  // };
  const handleAdvertisementsClick = () => {
    navigate('/ViewAdvertisements');
  };
  const handlecomplaintsClick = () => {
    navigate('/Viewcomplaints');
  };
  const handleTipsClick = () => {
    navigate('/ViewFarmingTips');
  };

  return (
    <nav className="Sidebar">
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/GETSellCrops" activeClassName="active">
           Sell Crops
          </NavLink>
        </li>
        <li>
          <NavLink to="/ViewComplaints" activeClassName="active">
            Complaints
          </NavLink>
        </li>
        <li>
          <NavLink to="/ViewAdvertisements" activeClassName="active">
           Advertisements
          </NavLink>
        </li>
        <li>
          <NavLink to="/ViewFarmingTips" activeClassName="active">
           Advertisements
          </NavLink>
        </li>
      </ul>
    </nav>

  );
};

export default SideBar;
