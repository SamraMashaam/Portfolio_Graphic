import { useState } from "react";
import '../styles/Contact.css';

function Contact(){
    //contact page with simple form
    //any empty fields results in an error alert
    //regex is used to verify if email is in the correct format
    //emailregex = (text) @ (text) . (text), example: abc@hotmail.org

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!(name && email && message)) {
            alert("Please fill all fields");
            return; 
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Thank you!");

        setName('');
        setEmail('');
        setMessage('');
    };

    return(
        <div className="contact-page">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />

                <label>Email:</label>
                <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <label>Message:</label>
                <textarea
                name="message"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <button type="submit">Send</button>
                </form>
        </div>
    );
}

export default Contact;