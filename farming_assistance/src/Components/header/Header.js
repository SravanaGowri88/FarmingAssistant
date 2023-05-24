import  { Link } from "react-router-dom";
import "./Header.css";
import Button from "../UI/Button";
import "../UI/Button.css";
import Farmer from "../UI/images/Farmer1.jpg";



const Header = () => {
  
  return (
    <section id="header">
      <div className="container header">
        <div className="header-left" >
          <h1>
            <span>The world's leading</span>
            <span>platform for</span>
            <span>Farming Assistance</span>
          </h1>
          <p className="u-text-small">
          This innovative site allows for good farmer, retailer and supplier communication.
          </p>
          <div className="header-cta">
            <Button text={"Get Started"} btnClass={"btn-light"} href={"#"} />
            <Button text={"How It Works"} btnClass={"btn-light"} href={"#"} />
          </div>
        </div>
        <div className="header-right" >
          <img src={Farmer} alt="img" />
        </div>
      </div>
    
    </section>
  );
};

export default Header;