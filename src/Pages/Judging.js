// Judging.js
import React, { useEffect } from 'react';
import './Judging.css'; // Import the CSS file for styling

const Judging = () => {
    useEffect(() => {
        const handleScroll = () => {
            const backgroundColor = window.scrollY > 2100 ? '#617A55' : '#41644A';
            document.body.style.backgroundColor = backgroundColor;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="judge" id='2'>
            <div className="header">
                <h1>How will you be judged?</h1>
                <p>Our judges are experts from the field of sports analytics, including analytics professionals at companies/teams like the Los Angeles Lakers, the Washington Wizards, the NFL League Office, Apple, Zeus Analytics, and Stathletes.</p>

                <h2>Your projects will be judged on the following criteria:</h2>
                <ul>
                    <li>Creativity</li>
                    <li>Quantitative Methods</li>
                    <li>Research Report Quality</li>
                    <li>Overall Polish</li>
                </ul>
                <p>Based on this criteria, the top 6 teams (MLB, NBA, NHL, and NFL combined) will be chosen as finalists. The finalists will then present their projects at the final event to our judges on TODO:DATE. From this pool, one finalist will be awarded the grand prize.</p>
            </div>
            <div className="prizes">
                <h1>Ah yes, the good stuff.</h1>
                <div className="prize-item">
                    <i className="fas fa-trophy"></i>
                    <h2>Winning Team:</h2>
                    <p>A $400 gift card of your choosing</p>
                </div>
                <div className="prize-item">
                    <i className="fas fa-award"></i>
                    <h2>Finalist Teams (5):</h2>
                    <p>A $100 gift card of your choosing</p>
                </div>
            </div>
        </div>
    );
}

export default Judging;
