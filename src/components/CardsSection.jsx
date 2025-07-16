// src/components/CardsSection.jsx
import React from 'react';
import Img40 from '../img/Rectangle 40.png';
import Img41 from '../img/Rectangle 41.png';
import Img42 from '../img/Rectangle 42.png';
import Img46 from '../img/Rectangle 46.png';
import Img47 from '../img/Rectangle 47.png';
import Img48 from '../img/Rectangle 48.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const CardItem = ({ image, title, text }) => (
    <div className="col-md-4">
        <div className="card h-100">
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title text-navy">{title}</h5>
                <p className="card-text">{text}</p>
                <a href="#" className="btn btn-link text-warning px-0">
                    <span><FontAwesomeIcon icon={faEdit} style={{ color: '#d7a034' }} /></span>READ POST
                </a>
            </div>
        </div>
    </div>
);

const CardsSection = () => {
    const cardData = [
        { image: Img40, title: "Self - Mastery", text: "Learn how to become your own first Responder" },
        { image: Img41, title: "Self - Mastery", text: "Learn how to become your own first Responder" },
        { image: Img42, title: "Self - Mastery", text: "Learn how to become your own first Responder" },
        { image: Img46, title: "Self - Mastery", text: "Learn how to become your own first Responder" },
        { image: Img47, title: "Family - Mastery", text: "Learn the steps needed to make sure you and your love ones are prepared for emergencies" },
        { image: Img48, title: "Work - Mastery", text: "Be empowered to help make your community safe" },
    ];

    return (
        <section className="cards-section">
            <div className="container">
                <div className="row g-4">
                    {cardData.map((card, index) => (
                        <CardItem key={index} {...card} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CardsSection;