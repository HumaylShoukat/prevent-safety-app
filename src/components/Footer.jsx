// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-black py-3">
            <div className="container">
                <div className="text-center text-white small">
                    Copyright © 2023. BeAwareStaySAFE.com All Right Reserved. |
                    <a href="#" className="text-white text-decoration-none">Terms & Conditions</a> |
                    <a href="#" className="text-white text-decoration-none">Privacy Policy</a> |
                    <span className="text-white-50">Innovated by</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;