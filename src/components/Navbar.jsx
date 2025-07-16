// src/components/Navbar.jsx
import React, { useEffect } from 'react';
import Logo from '../img/Logo 2.png';
import HomeIcon from '../img/Rectangle 1.png';

const Navbar = () => {
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                document.querySelector('.navbar').classList.add('scrolled');
            } else {
                document.querySelector('.navbar').classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img src={Logo} alt="Paratus Logo" height="45" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link px-2" href="#">
                                <img src={HomeIcon} alt="Home" className="home-icon" />
                            </a>
                        </li>
                        <li className="nav-item"><a className="nav-link px-2" href="#">ABOUT</a></li>
                        <li className="nav-item"><a className="nav-link px-2" href="#">SPEAKING</a></li>
                        <li className="nav-item"><a className="nav-link px-2" href="#">BOOTCAMPS</a></li>
                        <li className="nav-item"><a className="nav-link px-2" href="#">COURSES</a></li>
                        <li className="nav-item"><a className="nav-link px-2" href="#">BLOG</a></li>
                        <li className="nav-item"><a className="nav-link px-2" href="#">MEDIA</a></li>
                        <li className="nav-item"><a className="nav-link px-2" href="#">SUCCESS STORIES</a></li>
                        <li className="nav-item"><a className="nav-link px-2" href="#">CONTACT</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;