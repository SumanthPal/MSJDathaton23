import React from 'react';
import './ContactBar.css';

function ContactBar() {
    return (
        <div className="contact-bar">
            <div className="contact-links">
                <a href="mailto:your.email@example.com"><i className="fas fa-envelope"></i> Email</a>
                <a href="https://www.instagram.com/your_instagram/"><i className="fab fa-instagram"></i> Instagram</a>
                <a href="https://discord.gg/your_discord"><i className="fab fa-discord"></i> Discord</a>
                {/* Add more social links here */}
            </div>
        </div>
    );
}

export default ContactBar;
