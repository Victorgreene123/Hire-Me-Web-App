import react from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./footer";
const Layout = () =>{
    return(
        <>
    
    <Outlet />
    {/* <Footer /> */}
   
    </>
    )
}
export default Layout;