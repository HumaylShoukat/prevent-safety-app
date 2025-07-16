// src/components/SituationalAwarenessSection.jsx
import React from 'react';

const SituationalAwarenessSection = () => {
    return (
        <section className="py-5" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-2 text-center d-none d-md-flex justify-content-center align-items-center">
                        <div className="vertical-text text-warning fw-bold">BRIAN SEARCY</div>
                    </div>
                    <div className="col-md-2 text-center d-none d-md-flex justify-content-center align-items-center"></div>
                    <div className="col-md-8">
                        <div className="position-relative border rounded-3 p-4 p-md-5 bg-white shadow-sm mx-md-4">
                            <div className="corner-decor top-left"></div>
                            <div className="corner-decor bottom-right"></div>
                            <div className="text-center mb-4">
                                <h6 className="fw-semibold text-uppercase mb-2" style={{ fontSize: '0.9rem' }}>
                                    If you're looking to learn or to teach others the skills of
                                </h6>
                                <h2 className="fw-bold mb-1">
                                    <span className="text-primary">Situational</span>
                                    <span className="text-warning">Awareness,</span>
                                </h2>
                                <h6 className="fw-semibold text-uppercase" style={{ fontSize: '0.9rem' }}>
                                    You're in the right place.
                                </h6>
                            </div>
                            <div className="content-text px-2 px-md-4">
                                <p className="mb-3">
                                    Brian Searcy's programs empower those with the knowledge, skills, habits and situational awareness to be able to stay ahead of potential threats as well as be in a better position to respond when needed.
                                </p>
                                <p className="mb-3">
                                    Retired Col Brian Searcy joined the USAF in 1987, winning the Commander's Trophy in May 1988 after graduating from Undergraduate Navigator Training at Mather AFB. He worked as an AWACS instructor before transitioning to the JSTARS cadre in Melbourne Florida, then commanding the 608th Combat Operations Squadron at Barksdale AFB.
                                </p>
                                <p>
                                    He attended Air War College and served at the Pentagon for the Missile Defense Agency. Col Searcy completed his 23-year career as the Group and then active Duty/Vice Wing Commander at Robins AFB for the 116th ACW. With over 3700 flight hours as a Command Navigator and multiple deployments, he has extensive senior leadership and training experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SituationalAwarenessSection;