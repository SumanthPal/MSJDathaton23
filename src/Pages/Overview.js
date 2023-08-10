import React, { useEffect } from 'react';
import './Overview.css'; // Import the CSS file for styling

const Overview = () => {
    useEffect(() => {
        const handleScroll = () => {
            const backgroundColor = window.scrollY > 0 ? '#617A55' : '#406661';
            document.body.style.backgroundColor = backgroundColor;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="overview-container" id='1'>
            <section className="section title-section">
                <h1 className="title">What's MSJ Datathon???</h1>
                <p>We are the first nationwide high school sports analytics research competition. Whether you are looking for a place to test your quantitative skills or are merely a sports fan looking to better understand the MLB, NBA, NHL, or NFL, competing in the MSJ Datathon will allow you to learn and compete!
                </p>
            </section>

            <section className="section">
                <div className="subsection">
                    <h2 className="subsection-title">What's gonna happen?</h2>
                    <p>Participants will find a creative problem in sports and compile a research paper to answer their question.
                        Find a creative problem in sports! We encourage you to pose and answer a research question in NBA, NFL, NHL, or MLB for us to properly understand the game. Be creative!
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="subsection">
                    <h2 className="subsection-title">Some example questions if you're lost.</h2>
                    <ul>
                        <li>How does player contract value affect a player's play?</li>
                        <li>Can social media chatter affect a player's play?</li>
                        <li>What team/player strategies correlate with strong performance on the court/field?</li>
                        <li>How does a player's age affect their performance?</li>
                    </ul>
                </div>
            </section>

            <section className="section">
                <div className="subsection">
                    <h2 className="subsection-title">What's in the report?</h2>
                    <p>We would like your research paper to be formal. We have professional judges who will look and evaluate your submission. Look at the following criteria:</p>
                    <ul>
                        <li>It will be <b>one PDF</b> report</li>
                        <li>Maximum of 1000 words explaining your research and quantitative methods</li>
                        <li>Minimum of 3 graphs</li>
                    </ul>
                    <div className='ps-pps'>
                    <p>PS: This report must be submitted to the form on the "Submit" tab, by TODO:DATE</p>
                    <p>PPS: Make sure to use <b>quantitative evidence</b> while answering your question</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Overview;
