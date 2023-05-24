import React, {useState} from "react";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import Button from '../UI/Button';
import { Link } from "react-router-dom";
import "../UI/Button.css"; 
import {CiWheat} from "react-icons/ci";
import "./NavBar.css";



const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
  
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };

  return (
    
    <nav className='container navbar'>
        <div className='logo'>
       
            <CiWheat size={40}/>
            <p className="logo-text">
          Farm<span>Assist</span>
        </p>
        </div>
       
        <menu>
        <ul className="nav-links" id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"} >
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/farmer">Farmer</Link>
          </li>
          <li>
            <Link to="/Supplier">Supplier</Link>
          </li>
          <li>
            <Link to="/AdminCover">Admin</Link>
          </li>
        
         
          
          <li className="nav-btn">
            <Button text={"Learn More"} btnClass={"btn-dark"} />
            
          </li>
          
          </ul>
          </menu>
        <div className="menu-icons" onClick={toggleMenu}>
        {showMenu ? (
          <RiCloseLine color="black" size={30} />
        ) : (
          <AiOutlineBars color="black" size={27} />
        )}
        </div>
        
    </nav>
   
  );
};

export default NavBar;