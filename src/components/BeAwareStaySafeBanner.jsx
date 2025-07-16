// src/components/BeAwareStaySafeBanner.jsx
import React from 'react';

const BeAwareStaySafeBanner = () => {
    return (
        <>
            <div className="safety-banner">
                <div className="blue-section">
                    <div className="top-text">BE AWARE</div>
                </div>
                <div className="white-section">
                    <div className="bottom-text">STAY SAFE</div>
                    <div className="subtitle">Stay vigilant, stay protected. Be aware and<br />prioritize your safety in all situations</div>
                </div>
            </div>

            <section>
                <div className="wave-container">
                    <div className="wave">
                        <svg className="wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 180" preserveAspectRatio="none">
                            <path fill="#ffffff" fillOpacity="1" d="M0,50 C100,60 300,180 500,90 C700,0 900,60 1000,90 L1000,0 L0,0 Z"></path>
                        </svg>
                    </div>
                    <div className="content-container">
                        <h1 className="text-white text-xl font-bold mb-1">TODAY'S TRAINING FAILS BY</h1>
                        <div className="text-gold text-2xl font-bold">FOCUSING ON "RESPONDING"</div>
                        <h2 className="text-white text-xl mt-2 mb-1">AFTER ONE'S FACED<br />WITH HARM OR THREAT.</h2>
                        <h2 className="text-white text-xl mb-1">THE <span className="text-gold text-2xl font-bold">"BE AWARE STAY SAFE"</span></h2>
                        <h2 className="text-white text-xl mt-2 mb-1">TRAINING SUCCEEDS BY<br />FOCUSING ON <span className="text-gold text-2xl font-bold">"PREPARATION"</span>...</h2>
                        <p className="text-white text-lg mt-3 mb-4">GIVING PEOPLE THE ABILITY TO PREPARE, PREVENT<br />AND PROTECT.</p>
                        <div className="text-gold text-md mt-4">BRIAN "PATTON" SEARCY</div>
                        <div className="text-white text-sm">Col (Ret) USAF, Founder - President</div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BeAwareStaySafeBanner;