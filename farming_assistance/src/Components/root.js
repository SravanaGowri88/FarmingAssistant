import { Outlet } from "react-router-dom/dist";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";


function RootLayout(){
return(
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    
    </>
);
}

export default RootLayout;