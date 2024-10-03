import React from "react";
import { FaDollarSign, FaRobot } from "react-icons/fa";
import { MdBookmark, MdBookOnline, MdMoney } from "react-icons/md";

const NotificationItem = ({type , message ,user,  link , picture}) =>{
    function getPicture() {
        switch (type) {
            case "Booking":
                return(
                   
                        <div className="w-12 h-12 border rounded-full text-white bg-[#340352] flex items-center justify-center">
                            <MdBookmark className="text-2xl" />
                        </div>
    
                    
                )
                break
                case "Payment":
                    return(
                       
                            <div className="w-12 h-12 border rounded-full text-white bg-green-400 flex items-center justify-center">
                                <FaDollarSign className="text-2xl" />
                            </div>
        
                        
                    )
                    break
            case "System":
                return(
                    <div className="w-12 h-12 border rounded-full text-white bg-red-400 flex items-center justify-center">
                        <FaRobot className="text-2xl" />
                    </div>

                )
                break;
        
            default:
                return (
                    <img src={`/images/${picture}`} className="w-12 h-12 border rounded-full object-cover"></img>
                )
                break;
        }
    }
    return(
        <>
          <div className="text-sm flex items-center w-full p-2  gap-2">
             {
                getPicture()
             }
             <div className="block">
            <h2><b className="font-bold">{type} Notifications</b></h2>
             <h2><b className="font-semibold">{user}</b> {message}</h2>
        </div>
          </div>
        </>
    )
}

export default NotificationItem