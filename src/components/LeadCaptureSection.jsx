// src/components/LeadCaptureSection.jsx
import React from 'react';
import LaptopImage from '../img/Rectangle 52.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

const LeadCaptureSection = () => {
    return (
        <section className="learn-skills-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <img src={LaptopImage} alt="Critical Preparedness Skills" className="img-fluid" />
                    </div>
                    <div className="col-lg-6">
                        <div className="text-center mb-4">
                            <p className="title-text">
                                Looking for easy things you can do right now to keep<br />
                                your Family, Students, and Community safe?
                            </p>
                        </div>
                        <div className="text-center mb-4 bgimgh">
                            <div className="skills-text text-center mb-2">
                                <span>
                                    <FontAwesomeIcon icon={faAngleDoubleLeft} />
                                </span>LEARN 10 CRITICAL PREPAREDNESS SKILLS FOR FREE
                            </div>
                        </div>
                        <p className="text-center description-text">
                            Download our free guide on the 10 critical skills every person, young or old, can learn in order to keep themselves or their families and communities safe.
                        </p>
                        <div className="form-wrapper">
                            <input type="text" className="form-control mb-3" placeholder="Full Name" />
                            <input type="email" className="form-control mb-3" placeholder="Email" />
                            <button type="submit" className="btn btn-download w-100">DOWNLOAD NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeadCaptureSection;