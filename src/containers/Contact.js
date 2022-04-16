import React from 'react';
import About from './About';

const Contact = () => {

    return (
        <div id="contact">
            <h2>Contact</h2>
            <form>
                <label htmlFor="name" id="name">Name *</label>
                <input type="text" name="name" placeholder="Full name" required/>
                <br/>
                <label htmlFor="email" id="email">Email * </label>
                <input type="email" name="email" placeholder="youremail@example.com" required/>
                <br/>
                <label htmlFor="message" id="message">Message *</label>
                <br/>
                <textarea name="message" rows="8" placeholder="Your message here *" />
                <button type="submit">Send</button>
            </form>
        </div>
    );

}

export default Contact;