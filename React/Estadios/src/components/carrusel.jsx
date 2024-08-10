import React, { useState } from "react";
import "../App.css";

const Carousel = () => {
    const slides = [
        {
        image: "/imagenes/carrusel/modelo1.png",
        title: "Adidas Four",
        },
        {
        image: "/imagenes/carrusel/modelo2.png",
        title: "Adidas 4DFWD",
        },
        {
        image: "/imagenes/carrusel/modelo3.png",
        title: "Adidas EQ21 ",
        },
        {
        image: "/imagenes/carrusel/modelo4.png",
        title: "Nike SB",
        },
        {
        image: "/imagenes/carrusel/modelo5.png",
        title: "Reebok Classic",
        }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
    };

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % slides.length);
    };

    return (
        <div className="carousel-contenedor">
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
        </div>
    );
};

export default Carousel;
