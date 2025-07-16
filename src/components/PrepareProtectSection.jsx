// src/components/PrepareProtectSection.jsx
import React from 'react';

const PrepareProtectSection = () => {
    return (
        <section className="prepare-hero-section position-relative bgimg">
            <div className="prepare-overlay"></div>
            <div className="container py-5">
                <div className="text-center text-white">
                    <h2 className="display-4 fw-bold mb-4">
                        <span className="text-white">PREPARE</span><br />
                        <span className="text-warning">PREVENT</span><br />
                        <span className="text-white">PROTECT</span>
                    </h2>
                    <p className="lead mb-4">
                        You can't protect them if you aren't prepared. They can't learn<br />
                        to be prepared unless you are prepared and train them.
                    </p>
                    <p className="text-white-50">
                        Here are a few places you can start to help you prepare yourself for the real world.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PrepareProtectSection;