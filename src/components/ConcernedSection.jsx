// src/components/ConcernedSection.jsx
import React from 'react';
import SituationalAwarenessImg from '../img/Rectangle 58.png';

const ConcernedSection = () => {
    return (
        <section className="concerned-section py-5">
            <div className="container">
                <div className="row justify-content-center mb-4">
                    <div className="col-lg-10 text-center">
                        <h5 className="concerned-title mb-3">
                            ARE YOU CONCERNED ABOUT THE SAFETY AND
                        </h5>
                        <h2 className="concerned-heading mb-4">
                            Well-Being of Your <span className="highlight-yellow">Loved Ones</span>, Your <br />
                            <span className="highlight-yellow">Organization</span>, or Your <span className="highlight-yellow">Community</span>
                        </h2>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-1 d-none d-lg-flex align-items-center justify-content-center"></div>
                    <div className="col-lg-11">
                        <div className="row mb-5 align-items-center">
                            <div className="col-md-7">
                                <div className="info-block p-4 info-block-1">
                                    <p>In today's fast-paced and ever-evolving world, staying safe has become more complex than ever before.</p>
                                    <p>It's not just about protecting ourselves from traditional threats like gun violence, kidnappings, or drug-related issues.</p>
                                    <p>The modern world presents a multitude of challenges that require a comprehensive approach to personal safety.</p>
                                    <a href="#" className="btn read-more-btn">READ MORE</a>
                                </div>
                            </div>
                            <div className="col-md-5 text-center info-block-2">
                                <img src={SituationalAwarenessImg} alt="Situational Awareness" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConcernedSection;