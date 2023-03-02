import React, { useState } from 'react';
import './style.scss';

const Luggage = () => {
    const arrayObjects = [
        {
            icon: <span className="material-symbols-outlined">luggage</span>,
            object: '1 objeto personal',
            price: '$300',
        },
        {
            icon: <span className="material-symbols-outlined">luggage</span>,
            object: 'Equipaje de mano',
            price: '$1,500',
        },
        {
            icon: <span className="material-symbols-outlined">luggage</span>,
            object: 'Equipaje 25kg',
            price: '$1,800',
        },
    ];

    const handleObjectClick = (index) => {
        const selectedObject = arrayObjects[index];
        localStorage.setItem('price', selectedObject.price);
        window.dispatchEvent(new Event('storage'));
    };

    return (
        <>
            <section className="first__card">
                <div className="date">
                    <span>0:50 PM</span>
                    <span> 0----0 </span> <span>06:47 PM</span>
                </div>
                {arrayObjects.map((equipaje, index) => (
                    <div
                        className="first__card--objects"
                        key={index}
                        onClick={() => handleObjectClick(index)}
                    >
                        {equipaje.icon}
                        <p>{equipaje.object}</p>
                        <span className="first__card--objects--price">
                            {equipaje.price}
                        </span>
                    </div>
                ))}
            </section>
            <section className="first__card">
                <div className="date">
                    <span>0:50 PM</span>
                    <span> 0----0 </span> <span>06:47 PM</span>
                </div>
                {arrayObjects.map((equipaje, index) => (
                    <div
                        className="first__card--objects"
                        key={index}
                        onClick={() => handleObjectClick(index)}
                    >
                        {equipaje.icon}
                        <p>{equipaje.object}</p>
                        <span className="first__card--objects--price">
                            {equipaje.price}
                        </span>
                    </div>
                ))}
            </section>
        </>
    );
};

export default Luggage;
