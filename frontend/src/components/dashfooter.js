import React from "react";
import { Link, Outlet } from "react-router-dom";
import { MdChat, MdDashboard, MdLogout, MdNotifications, MdNotificationsActive } from "react-icons/md";
import { FaChartBar } from "react-icons/fa";

const DashFooter  = () =>{
    return(
        <>
         <div className="lg:hidden flex items-center fixed bottom-0 p-2 bg-[#340352] w-full gap-10 px-4">


<div className="relative flex flex-col items-center w-auto mx-auto">
<Link to="/dashboard" className="relative">
<FaChartBar className="text-white text-2xl" />
{/* Notification Dot */}

</Link>
<h5 className="text-[0.7rem] text-white mt-1">Dashboard</h5>
</div>
{/* Notifications Icon */}
<div className="relative flex flex-col items-center">
<Link to="notifications" className="relative">
<MdNotificationsActive className="text-white text-2xl" />
{/* Notification Dot */}
<span className="absolute top-0 right-0 h-2 w-2 bg-red-600 rounded-full"></span>
</Link>
<h5 className="text-[0.7rem] text-white mt-1">Notifications</h5>
</div>

{/* Message Icon */}
<div className="relative flex flex-col items-center">
<MdChat className="text-white text-2xl" />
<span className="absolute top-0 right-0 h-2 w-2 bg-red-600 rounded-full"></span>
<h5 className="text-[0.7rem] text-white mt-1">Inbox</h5>
</div>

{/* Profile Icon */}
<Link to='/profile/JohnDoe'><div className="flex flex-col items-center">
<img
src="/images/profile1.jpg"
className="border-2 border-white w-12 h-12 rounded-full object-cover "
alt="Profile"
/>
{/* <h5 className="text-sm text-white mt-1">Profile</h5> */}

</div></Link>
</div>

        
        </>
    )
}

export default DashFooter