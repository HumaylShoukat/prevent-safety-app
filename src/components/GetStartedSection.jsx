// src/components/GetStartedSection.jsx
import React from 'react';

const GetStartedSection = () => {
    return (
        <section className="get-started-section">
            <div className="container py-5">
                <div className="col-lg-12">
                    <h2 className="text-center mb-5">
                        <span className="text-navy">HOW TO </span>
                        <span className="text-gold">GET STARTED</span>
                    </h2>
                </div>
                <div className="get-started-block mb-5">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-6">
                            <h3 className="mb-4">
                                <span className="text-navy">WANT TO<br />KNOW WHAT<br /></span>
                                <span className="text-gold">NECESSARY<br /></span>
                                <span className="text-navy">SKILLS YOU'LL NEED TO PROTECT<br /></span>
                                <span className="text-gold">YOURSELF?</span>
                            </h3>
                        </div>
                        <div className="col-lg-6">
                            <p className="text-muted mb-4">There's just too much to learn! How to prioritize? Let's start with the basics - a framework which will help you understand what you need to know.</p>
                            <a href="#" className="btn btn-warning rounded-pill px-4 py-3 text-white fw-semibold">
                                GETTING STARTED INTO THE PROGRAM<br />
                                "BE AWARE STAY SAFE"
                            </a>
                        </div>
                    </div>
                </div>
                <div className="get-started-block">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-6">
                            <h3 className="mb-4">
                                <span className="text-navy">BE EMPOWERED<br /></span>
                                <span className="text-gold">TO HELP MAKE<br /></span>
                                <span className="text-navy">YOUR COMMUNITY SAFE</span>
                            </h3>
                        </div>
                        <div className="col-lg-6">
                            <p className="text-muted mb-4">Your school or organization could provide this framework and program to help keep your community safe.</p>
                            <a href="#" className="btn btn-warning rounded-pill px-4 py-3 text-white fw-semibold">
                                GETTING STARTED INTO THE PROGRAM<br />
                                "BE AWARE STAY SAFE"
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetStartedSection;