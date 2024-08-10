import React from "react";
import '../App.css'

const Card = ({ image, title, description, price }) => {
return (
    <div className="tarjeta">
        <img src={image} alt={title} />
            <div className="tarjeta_texto">
                <h2>{title}</h2>
                <p>{description}</p>
                <h4>{price}</h4>
            </div>
    </div>
);
};

const CardContainer = () => {
    // Ejemplo de datos para las tarjetas
    const cardsData = [
        {
            image: "../imagenes/tarjetas/adidas.png",
            title: "Tenis Adidas",
            description: "Deportivos, los mas aptos para salir a correr.",
            price: "$350.000"
        },
        {
            image: "../imagenes/tarjetas/nike.png",
            title: "Tenis Nike",
            description: "Los numero uno en estilo",
            price: "$200.000"
        },
        {
            image: "../imagenes/tarjetas/reebok.png",
            title: "Tenis Reebok",
            description: "El mejor regalo para ese ser que amas",
            price: "$175.000"
        }
    ];

    return (
        <div className="contenedor-tarjetas">
            {cardsData.map((card, index) => (
            <Card
                key={index}
                image={card.image}
                title={card.title}
                description={card.description}
                price={card.price}
            />
            ))}
        </div>
    );
};

export default CardContainer;
