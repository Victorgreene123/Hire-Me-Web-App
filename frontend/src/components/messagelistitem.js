import React from "react";

const MessageListItem = ({picture , user , message , unread , time }) =>{
    return(
        <>
        <div className="hover:bg-gray-300 relative text-sm flex  w-full p-2  gap-2">
        <img src={`/images/${picture}`} className="w-12 h-12 border rounded-full object-cover"></img>
            
             <div className="block">
            <h2><b className="font-bold">{user}</b></h2>
             <h2 className="truncate-text"> {message}</h2>
             
        </div>
        <div className="absolute right-0 text-center">
        <h2 className=" font-semibold text-[#340352]">{time}</h2>
        {unread > 0 && <h2 className="border text-white bg-[#340352] rounded-full  text-[0.7rem] w-5 h-5">{unread}</h2>}
         </div>
          </div>
        </>
    )
}

export default MessageListItem