import React from "react";
import { testimonials } from "./data"; // your data file
import './index.css'

const Testimonials = () => {
    // Take only the first 3 testimonials
    const displayedTestimonials = testimonials.slice(0, 3);

    return (
        <section className="py-5 px-5 testimonial-container" id='testimonials'>
            {/* Header */}
            <div className="text-center mb-4">
                <h2 className="fw-bold testi-header heading-dark">What Our Clients Say</h2>
                <p className="testi-header-desc heading-light">
                    Hear from our trusted partners and customers about their experience with us.
                </p>
            </div>
            {/* Testimonial Cards */}
            <div className="row">
                {displayedTestimonials.map((testimonial, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card h-100 shadow-sm" style={{border:'none'}}>
                            <div className="card-body d-flex flex-column">
                                <h6 className="card-subtitle mb-2 text-success">{testimonial.type}</h6>
                                <p className="card-text flex-grow-1 font-manrope" style={{color:'#1581BF '}}>"{testimonial.text}"</p>
                                <h6 className="mt-3 mb-0" style={{color:'#78C841'}}>{testimonial.name}</h6>
                                <small className="text-muted font-manrope">{testimonial.designation}</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
