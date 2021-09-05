import React, { useState } from "react";
import './contact.css';

import { validateEmail } from "../../utils/helpers"

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = e => {
        let target = e.target;
        let inputType = target.name;
        let inputValue = target.value;


        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
        
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        if (!name) {
            setErrorMessage('Please put in your name');
        } else if (!validateEmail(email)) {
            setErrorMessage('Invalid email!');
        } else if (!message) {
            setErrorMessage(
                `Please fill out a message for me.`
            );
        } else {
            alert(`Thank you for sending the message. I will get back to you as soon as possible`);
            setName('');
            setEmail('');
            setMessage('');
        }
    };

    return (
        <div className="contact">
            <div className="container">
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="name"
                    placeholder="name"
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="email"
                />
                <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="message"
                    placeholder="message"
                />
                <p>{errorMessage}</p>
                <button onClick={handleFormSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Contact;