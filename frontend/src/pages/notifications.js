import React from "react";
import { MdHome, MdNotifications } from "react-icons/md";
import { Link } from "react-router-dom";
import NotificationItem from "../components/notificationitem";
import { FaArrowRight } from "react-icons/fa";

const Notification =() =>{
    return (
        <>
            <div className="w-full bg-[#EFF5FF] p-3 min-h-[100vh] ">
       
       <div className="items-center text-[#340352] mt-1 w-full p-1 flex justify-between">
         <h2 className="text-2xl font-bold">Inbox</h2>
         <div>
           <h2 className="flex items-center "><Link to='/dashboard' className="flex items-center"><MdHome />Home</Link> <FaArrowRight  className="ml-2 mr-1"/> <MdNotifications /> Inbox</h2>
         </div>
       </div>

       <div className="pb-12 mt-5">
       <NotificationItem picture='profile1.jpg' type='Booking' user='John Doe' message='Sent you a booking'/>
       <NotificationItem picture='profile1.jpg' type='System'  message='Your account has been suspended'/>
       <NotificationItem picture='profile1.jpg' type='Payment'  message='Your account has been suspended'/>
       <NotificationItem picture='profile1.jpg' type='Booking' user='John Doe' message='Sent you a booking'/>
        </div>
       </div>

    
        </>
    )
}

export default Notification