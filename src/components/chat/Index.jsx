// src/components/ChatApp.js
import React, { useState, useEffect } from 'react';
import { chatRef } from '../../firebase';

const ChatApp = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        // Event listener for new messages
        chatRef.on('child_added', snapshot => {
            const message = snapshot.val();
            setMessages(prevMessages => [...prevMessages, message]);
        });

        // Cleanup when component unmounts
        return () => {
            chatRef.off('child_added');
        };
    }, []);

    const sendMessage = () => {
        if (newMessage.trim() !== '') {
            // Get the user's name (for simplicity, you can hardcode or get from user authentication)
            const userName = 'User';

            // Push the message to the Firebase database
            chatRef.push({
                name: userName,
                text: newMessage,
            });

            // Clear the input field
            setNewMessage('');
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div>
                <ul>
                    {messages.map((message, index) => (
                        <li key={index}>
                            {message.name}: {message.text}
                        </li>
                    ))}
                </ul>
                <input
                    type="text"
                    value={newMessage}
                    onChange={e => setNewMessage(e.target.value)}
                    placeholder="Type your message"
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default ChatApp;
