import React from 'react';
import '../App.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">

                <div className="logo-container">
                    <img src="../imagenes/logo.png" alt="Logo" className="footer-logo" />
                </div>

                <div className="social-icons">
                    <a href="https://www.facebook.com/?locale=es_LA"><i class="fab fa-facebook"></i></a>
                    <a href="https://twitter.com/?lang=es"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
