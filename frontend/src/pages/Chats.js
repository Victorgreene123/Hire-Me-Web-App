import React from "react";
import { MdChat, MdHome, MdNotifications } from "react-icons/md";
import { Link } from "react-router-dom";
import NotificationItem from "../components/notificationitem";
import { FaArrowRight } from "react-icons/fa";
import MessageListItem from "../components/messagelistitem";
const Chats = () =>{
    return(
        <>
         <div className="w-full bg-[#EFF5FF] p-3 min-h-[100vh] ">
       
       <div className="items-center text-[#340352] mt-1 w-full p-1 flex justify-between">
         <h2 className="text-2xl font-bold">Chats</h2>
         <div>
           <h2 className="flex items-center "><Link to='/dashboard' className="flex items-center"><MdHome />Home</Link> <FaArrowRight  className="ml-2 mr-1"/> <MdChat /> Chats</h2>
         </div>
       </div>
       <div className="pb-12 mt-5">
          <div className="lg:w-1/2 lg:mx-auto lg:max-h-[75vh] lg:h-[75vh]  lg:border">
            <MessageListItem  user='Adebayo Adeyinka' picture='profile3.jpg' message="I need the work to be done by tommorow" time="19:06" unread={2}/>
            <MessageListItem  user='Jane Doe' picture='profile2.jpg' message="Where are you now" time="19:01" unread={0}/>
            <MessageListItem  user='Fortune Olabode' picture='profile4.jpg' message="I need the work to be " time="10:23" unread={3}/>
            <MessageListItem  user='Akindele Paul' picture='profile1.jpg' message="I need the work to be " time="06:06" unread={0} />
 <MessageListItem  user='Oghenefejiro Marquis' picture='profile3.jpg' message="I need the work to be " time="19:06" unread={0} />
            <MessageListItem  user='Uba Johnson' picture='profile2.jpg' message="I need the work to be " time="02:06" unread={1}/>
        </div>
        
        </div>
       </div>
        </>
    )
}

export default Chats