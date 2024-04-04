
import React, { useState } from 'react';
import './chatwindow.css';
import ChatWindow from './ChatWindow';




const AIChat = () => {

    const [isChatEnabled, setChatEnabled] = useState(false);
    return (


        <>
            {!isChatEnabled ? <button className='button-learn' onClick={() => {
                setChatEnabled(true);
            }}>Learn using AI</button> : <ChatWindow />}



        </>

    );
};

export default AIChat;

