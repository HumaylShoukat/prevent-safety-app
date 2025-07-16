// src/components/HeroSection.jsx
import React from 'react';

const HeroSection = () => {
    return (
        <section className="hero-section d-flex align-items-center">
            <div className="container text-center text-white">
                <div className="hero-content">
                    <div className="hero-subtitle">Air Force Colonel Retired</div>
                    <h1 className="hero-title">BRIAN SEARCY EMPOWERS THE LEARNING TO</h1>
                    <h1 className="prevent-text">Prevent</h1>
                    <div className="hero-desc">(Taking charge of your family and community to achieve peace of mind)</div>
                    <div className="hero-quote">
                        "Brian is an exceptional speaker, captivating his audience with his timely talk on 'Safety and Situational Awareness.' He engages from the start and leaves them inspired for action!"
                        <div className="hero-quote-author"><span style={{ color: '#FFE68E' }}>- JEFF CRILLEY, CEO</span>, Real News Public Relations</div>
                    </div>
                    <a href="#" className="btn hero-btn">Speak with Brian</a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;