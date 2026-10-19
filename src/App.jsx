import './stylecss/App.css'
import { useState } from 'react';
import ChatInput from './Components/Chatinput.jsx'
import ChatMessages from './Components/ChatMessages.jsx';

function App() {
   const[chatMessages,setChatMessages]=useState([
  
  ])
  
  return (
    <>
    <div className='app-container'>
     
      <ChatMessages 
        chatMessages={chatMessages}
      />

       <ChatInput
      chatMessages={chatMessages}
      setChatMessages={setChatMessages}
      
      
      />
      </div>
    </>
  )
}

export default App ;
