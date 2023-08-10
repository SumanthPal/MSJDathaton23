import React from 'react';
import './HomePage.css';

function HomePage() {
    return (
        <div className="landing-page">
            <h1 className="big-text">
                Welcome to MSJ Datathon
            </h1>
            <p className="motto">
                Learn with Data.
            </p>
            <a href="#" className="pink">Submit</a>
        </div>
    );
}

export default HomePage;