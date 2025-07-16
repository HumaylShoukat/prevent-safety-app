// src/components/StorySection.jsx
import React from 'react';
import TrainingPresentation from '../img/Rectangle 27.png';

const StorySection = () => {
    return (
        <section className="story-section">
            <div className="story-container">
                <div className="story-image">
                    <img src={TrainingPresentation} alt="Training Presentation" />
                </div>
                <div className="story-content">
                    <h2>
                        <span className="story-blue">Responding Is</span><br />
                        <span className="story-gold">No Substitute<br />For Preparation</span>
                    </h2>
                    <p className="story-desc">
                        We are a unique training that empowers the learning of habits, behaviors and mindset.
                    </p>
                    <p className="story-quote">
                        You have 2 choices: Become Prepared to Protect your family and to teach them how to protect themselves. Be Unprepared and use "HOPE" as a Strategy.
                    </p>
                    <a href="#" className="story-btn">CLICK HERE TO READ OUR STORY...</a>
                </div>
            </div>
        </section>
    );
};

export default StorySection;