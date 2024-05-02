
import React, { useEffect } from "react";


function ChatScreen({msgs}) {






    return (
      <>
                                       
  <div class="Chat__wrapper">
    <ul class="Chat">



{
  msgs.length >0 && msgs.map((msg) => {



if(msg.type === "image"){
  return (
    <li class="Chat_item Chat_item_l">
    <div class="ImageMessage"> 
    <div class="i_man">
        <img src="https://img.lovepik.com/free-png/20220125/lovepik-artificial-intelligence-png-image_401746343_wh1200.png" class="i_man-image" />
      </div> 
    </div>
    <div class="Chat_msgs">
      <div class="msg">
        <div class="msg-content">
        
        <img style={{"width":"100%"}} src={msg.data}/>
        <br/><br/>
        <label>{msg.title}</label>
        </div>
      </div>
      </div>
      </li>);
}
else if(msg.type === "text"){


if(msg.from === "bot"){


return(  <li class="Chat_item Chat_item_l">
      <div class="i_man">
        <img src="https://img.lovepik.com/free-png/20220125/lovepik-artificial-intelligence-png-image_401746343_wh1200.png" class="i_man-image" />
      </div>
      <div class="Chat_msgs">
        <div class="msg">
          <div class="msg-content">
          {msg.title}
          </div>
        </div>
      </div>
    </li>	);


}else{

return ( <li class="Chat_item Chat_item_r">
      <div class="Chat_msgs">
        <div class="msg">
          <div class="msg-content" >
          {msg.title}
          </div>
        </div>
        <div class="i_man">
        <img src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png" class="i_man-image" />
      </div>
       
      </div>
    </li>);
}

}else if(msg.type== "mcq"){
return(<li class="Chat_item Chat_item_l">
      <div class="i_man">
        <img src="https://img.lovepik.com/free-png/20220125/lovepik-artificial-intelligence-png-image_401746343_wh1200.png" class="i_man-image" />
      </div>
      <div class="Chat_msgs">
        <div class="msg">
          <div class="msg-content">
           {msg.title}
          </div>
        </div>
        {
          msg.options.map((option) => {
            return(
              <div class="msg">
          <div class="msg-content answers">
            {option}
          </div>
          </div>
            );
          })
        }
        </div>
    </li>);
}

else{
return(<div />);
}



})

}




    
      								
  
  
  
  
      
  
      
   
  
  
  
    </ul>
  </div>
      </>
    );
  }
  
  
  
  export default ChatScreen;