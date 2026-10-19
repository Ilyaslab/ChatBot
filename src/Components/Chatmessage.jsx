import  '../stylecss/Chatmessage.css';

function ChatMessage({message, sender}) {

    /*
    if(sender==='robot') {
        return(
             <div>
                <img src="robot.png" width="50" /> 
                {message}
                
            </div>
        )
    } 
        */



    return (
        <div 
         className={sender==='robot'
            ?'robot-css' 
            : 'user-css'

         }
         >
           {sender==='robot' && (
                <img src="robot.png" width="50" />
            ) }

            <div className='text'>
                {message}
           </div>

           {sender==='user' && (
            <img src="user.png" width="50" />
            ) }
        </div>
    )
}
export default ChatMessage ;