
import React, { useEffect } from "react";


function ChatScreen() {








    return (
      < >
                                       
  <div class="Chat__wrapper">
    <ul class="Chat">
      <li class="Chat_item Chat_item_l">
        <div class="i_man">
          <img src="https://img.lovepik.com/free-png/20220125/lovepik-artificial-intelligence-png-image_401746343_wh1200.png" class="i_man-image" />
        </div>
        <div class="Chat_msgs">
          <div class="msg">
            <div class="msg-content">
            <img style={{"width":"100%"}} src={'https://www.amcharts.com/wp-content/uploads/2019/10/demo_14592_none-11.png'}/>
            <br/><br/>
            <label>Analyzing...</label>
            </div>
          </div>
        </div>
      </li>
  
      <li class="Chat_item Chat_item_l">
        <div class="i_man">
          <img src="https://img.lovepik.com/free-png/20220125/lovepik-artificial-intelligence-png-image_401746343_wh1200.png" class="i_man-image" />
        </div>
        <div class="Chat_msgs">
          <div class="msg">
            <div class="msg-content">
             Q. What do you think does the current chart depicts?
            </div>
          </div>
          <div class="msg">
            <div class="msg-content answers">
              1] Head and Shoulder
            </div>
          </div>
          <div class="msg">
            <div class="msg-content answers">
             2] Hanging man
            </div>
          </div>
          <div class="msg">
            <div class="msg-content answers">
              3] Hammer
            </div>
          </div>
        </div>
      </li>								
  
  
  
  
      <li class="Chat_item Chat_item_r">
        <div class="Chat_msgs">
          <div class="msg">
            <div class="msg-content" >
               Hammer
            </div>
          </div>
          <div class="i_man">
          <img src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png" class="i_man-image" />
        </div>
         
        </div>
      </li>
  
      <li class="Chat_item Chat_item_l">
        <div class="i_man">
          <img src="https://img.lovepik.com/free-png/20220125/lovepik-artificial-intelligence-png-image_401746343_wh1200.png" class="i_man-image" />
        </div>
        <div class="Chat_msgs">
          <div class="msg">
            <div class="msg-content">
             Oh Sorry, that was a wrong answer?
            </div>
          </div>
        </div>
      </li>	
   
  
  
  
    </ul>
  </div>
      </>
    );
  }
  
  
  
  export default ChatScreen;