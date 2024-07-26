import React, { useState } from "react";
import "../App.css";

const Carousel = ({ slides }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
    };

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % slides.length);
    };

    return (
        <div className="carousel">
            <button onClick={prevSlide} className="carousel-button left">
                &#10094;
            </button>
            <div className="carousel-slides">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`carousel-slide ${index === currentIndex ? "active" : ""}`}
                    >
                        <img src={slide.image} alt={slide.title} className="carousel-image" />
                        <div className="carousel-caption">
                            <h2>{slide.title}</h2>
                            <p>{slide.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={nextSlide} className="carousel-button right">
                &#10095;
            </button>
        </div>
    );
};

export default Carousel;
