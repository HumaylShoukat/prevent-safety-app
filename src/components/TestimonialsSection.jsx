// src/components/TestimonialsSection.jsx
import React from 'react';
import UserIcon from '../img/user.png';

const TestimonialCard = ({ quote, author, title }) => (
    <div className="col-md-4 d-flex align-items-stretch">
        <div className="testimonial-card position-relative bg-white h-100 shadow-sm border-0 rounded-3 pt-5 pb-4 px-3">
            <div className="testimonial-icon-outer position-absolute top-0 start-50 translate-middle">
                <img src={UserIcon} alt="User Icon" className="user-icon" />
            </div>
            <div className="card-body text-center p-0">
                <p className="card-text mt-2">{quote}</p>
                <div className="fw-semibold text-primary mt-3">{author}</div>
                {title && <div className="text-muted small">{title}</div>}
            </div>
        </div>
    </div>
);

const TestimonialsSection = () => {
    const testimonials = [
        {
            quote: "Brian is an amazing speaker. His talk on 'Safety and Situational Awareness' has never been more timely. He's the type of speaker who engages his audience from the minute he takes the stage and leaves them ready to take action!",
            author: "Jeff Crilley,",
            title: "CEO, Real News Public Relations"
        },
        {
            quote: "I honestly never realized how many precautions I take now that I did not before. I used to be such a trusting person, to a fault really. Your messages are validating and let me know that I'm not becoming a paranoid, crazy old lady.",
            author: "Pam Feeney"
        },
        {
            quote: "Brian is an amazing speaker. His talk on 'Safety and Situational Awareness' has never been more timely. He's the type of speaker who engages his audience from the minute he takes the stage and leaves them ready to take action!",
            author: "D. Brown"
        }
    ];

    return (
        <section className="testimonials-section position-relative pb-5">
            <div className="container pt-5">
                <h2 className="text-center fw-bold text-uppercase mb-4" style={{ letterSpacing: '2px' }}>What People Are Saying</h2>
                <div className="row g-4 justify-content-center mb-4">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
                <div className="text-center mb-3 htp">
                    <a href="#" className="btn btn-warning rounded-pill px-4 fw-bold text-white" style={{ letterSpacing: '1px' }}>SEE MORE TESTIMONIALS</a>
                </div>
                <div className="text-center text-white-50 mt-2" style={{ letterSpacing: '1px' }}>ASSOCIATIONS</div>
            </div>
            <div className="testimonials-wave position-absolute w-100" style={{ bottom: 0, left: 0 }}>
                <svg viewBox="0 0 1440 60" width="100%" height="60" preserveAspectRatio="none">
                    <path d="M0,40 C480,80 960,0 1440,40 L1440,60 L0,60 Z" fill="#fff" />
                </svg>
            </div>
        </section>
    );
};

export default TestimonialsSection;