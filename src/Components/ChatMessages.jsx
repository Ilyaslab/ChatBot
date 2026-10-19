
import ChatMessage from "./Chatmessage.jsx";
import "../stylecss/Chatmessages.css";
import { useEffect,useRef } from "react";
function ChatMessages({chatMessages}) {
    const chatMessagesRef = useRef(null)
    useEffect(()=>{
        const containerElem = chatMessagesRef.current
        if(containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight
        }
    } , [chatMessages])

    
    return(
        <div className="chatmessages-container" 
            ref={chatMessagesRef}>

            
        
                {   chatMessages.map((chatmessage)=>{
                    return(
                        <ChatMessage
                        message={chatmessage.message}
                        sender={chatmessage.sender}
                        key={chatmessage.id}
                        />
                        )
            })
            }


        </div>

    )
}
export default ChatMessages;