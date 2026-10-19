import { useState } from "react";
import '../stylecss/chatinput.css';
import { Chatbot } from "supersimpledev";
function ChatInput({chatMessages,setChatMessages}) {
    const[inputText,setInputText]=useState('')
    
    function sendMessage() {
        const newChatMessages=[...chatMessages,
         {
         message:inputText , 
         sender:"user" ,
         id:crypto.randomUUID()
    }
    ]
         setChatMessages(newChatMessages)
    const response= Chatbot.getResponse(inputText);

        setChatMessages([
           ...newChatMessages,
         {
         message:response , 
         sender:"robot" ,
         id:crypto.randomUUID()
    }
        ])

    
        setInputText('')

     
    }
    
  function bord (e) {
         if(e.key==="Enter") {
            sendMessage()
         }
       }

    return (
       
            <div className="container">
                <input 
                    placeholder="Send a message to Chatbot "
                    onChange={(e)=>setInputText(e.target.value)}
                    value={inputText}
                    onKeyDown={bord}
                />
                <button onClick={sendMessage} >Send</button>
            </div>
    )
}
export default ChatInput ;
