import React, { useEffect, useState } from 'react';
import './chatwindow.css';
import { socket } from '../socket';

function ChatWindow() {

  const [message, setMessage] = useState('');
  const [allMessages, setAllMessages] = useState([
    {"userId": "bot", "type" :"text", "data" : "Hello", "timeStamp" : new Date}
  ]);

  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

const[email, setEmail] = useState(null);
  useEffect(() => {
    

    setEmail(localStorage.getItem("email"));
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }


    function onFooEvent(value) {
      setFooEvents(previous => [...previous, value]);
    }
    function onFooEvent(value) {
        setFooEvents(previous => [...previous, value]);
      }

      function onReceiveMessage(value) {
        console.log('Received message:', value);
      }

      function onReceiveMessage2(value) {
        console.log('Received message2:', value);
      }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('chat', onReceiveMessage);
    socket.on('ankitmhatre@hotmail.com', onReceiveMessage2);


    
    socket.on("connection", function(socket){
      console.log("A user connected +  connection");
      //socket.to("room1").emit("some event");
    });

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);

    };
    }, []);
  
     

  const sendMessage =  () => {
    
    if (socket && message.trim() !== '') {
      var msg = {"userId": email, "type" :"text", "data" : message, "timeStamp" : new Date};
       socket.emit('chat', msg); // Emit the 'message' event with the message
      setMessage(''); // Clear the message input field after sending
    }
  };

  const handleInputChange = (event) => {
    setMessage(event.target.value); // Update the state with the input value
  };


  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]); // Update the state with the selected image file
  };
 const uploadImage = () => {
    if (selectedImage) {
      const reader = new FileReader();

      reader.onload = (event) => {

        const imageData = event.target.result;
        var msg = {"userId": email, "type" :"chat", "data" : imageData, "timeStamp" : new Date};
        socket.emit('chat', msg ); // Emit the 'image' event with the image data
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  

  return (
    <div className="chat-container">
      {isConnected ? (
        <span style={{color:'#00ff00', fontWeight: '600'}}>ONLINE</span>
      ) : null}

      {allMessages.map((msg, index) => (
        <div key={index} className={`message ${msg.userId === 'bot' ? 'sent' : 'received'}`}>
          {msg.type === 'text' ? (
            <span>{msg.data}</span>
          ) : (
            <img src={msg.data} alt="Received" />
          )}
        </div>
      ))
      }


      <div className="input-area">
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={handleInputChange}
        />
        <button onClick={sendMessage}>Send</button>
 
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <button onClick={uploadImage}>Upload Image</button> 


      </div>
    </div>
  );
}

export default ChatWindow;
