// src/components/EmpowerSection.jsx
import React from 'react';
import Img1 from '../img/Rectangle 61.png';
import Img2 from '../img/Rectangle 62.png';

const EmpowerSection = () => {
    return (
        <section>
            <div className="container empowersection">
                <div className="row mb-4">
                    <div className="col-md-6">
                        <div className="image-wrapper">
                            <img src={Img1} alt="Traveler" className="img-fluid custom-image" />
                            <div className="corner-decor corner-top-left"></div>
                            <div className="corner-decor corner-bottom-right"></div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h5>Empower Yourself: <br /> Navigating Personal <br />Safety Risks in <br />Today's World</h5><br />
                        <p>From workplace harassment to sexual harassment, peer pressure, and other forms of personal safety risks, our communities face a wide range of potential dangers.</p>
                        <br />
                        <p>These threats can impact people of all ages, backgrounds, and walks of life.</p>
                        <br />
                        <p>It's crucial that we equip ourselves with the knowledge and skills necessary to navigate these risks effectively.</p>
                    </div>
                </div>

                <section style={{ marginTop: '50px' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <p>To not only respond with focus and a lack of panic, but also to be aware of and avoid these kinds of modern day threats, it takes a program that focuses on more than just the traditional training methods.</p>
                            </div>
                            <div className="col-md-6">
                                <div className="image-wrapper">
                                    <img src={Img2} alt="" className="img-fluid custom-image" />
                                    <div className="corner-decor corner-top-left"></div>
                                    <div className="corner-decor corner-bottom-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default EmpowerSection;