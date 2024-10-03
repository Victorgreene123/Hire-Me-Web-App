import React from "react";
import DashNav from "./dashnav";
import { Link, Outlet } from "react-router-dom";
import { MdChat, MdDashboard, MdLogout, MdNotifications, MdNotificationsActive } from "react-icons/md";
import { FaChartBar } from "react-icons/fa";
import DashFooter from "./dashfooter";


const DashLayout = () =>{
    
        return(
            <>
            <DashNav />
            <Outlet />
           <DashFooter />

            
            </>
        )
}

export default DashLayout