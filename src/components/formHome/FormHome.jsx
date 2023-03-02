import './style.scss';
import React, { useEffect, useState } from 'react';
import { saveData } from '../../services/saveData';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const countries = ['Estados Unidos', 'México', 'Canada', 'Argentina', 'Brasil'];
const countriesDestination = [
    'Inglaterra',
    'Venezuela',
    'España',
    'Ecuador',
    'Uruguays',
];

const FormHome = () => {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [passengers, setPassengers] = useState('');
    const [tripType, setTripType] = useState('viaje redondo');

    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState('boton1');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (origin && destination && departureDate && passengers) {
            const formData = {
                // creamos un objeto con los datos del formulario
                origin,
                destination,
                departureDate,
                returnDate,
                passengers,
                tripType,
            };
            saveData(formData); // llamamos a la función saveData y pasamos el objeto formData como argumento
            navigate('/Flightinfo');
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Por favor completa todos campos',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    };

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__buttons">
                    <button
                        type="button"
                        onClick={() => {
                            setActiveButton('boton1');
                            setTripType('viaje redondo');
                        }}
                        className={activeButton === 'boton1' ? 'active' : ''}
                    >
                        viaje redondo
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            setActiveButton('boton2');
                            setTripType('viaje sencillo');
                        }}
                        className={activeButton === 'boton2' ? 'active' : ''}
                    >
                        viaje sencillo
                    </button>
                </div>
                <label>
                    Origen:
                    <select
                        value={origin}
                        onChange={(event) => setOrigin(event.target.value)}
                    >
                        {countries.map((country) => (
                            <option key={country} value={country}>
                                {country}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Destino:
                    <select
                        value={destination}
                        onChange={(event) => setDestination(event.target.value)}
                    >
                        {countriesDestination.map((country) => (
                            <option key={country} value={country}>
                                {country}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Fecha de salida:
                    <input
                        type="date"
                        value={departureDate}
                        onChange={(event) =>
                            setDepartureDate(event.target.value)
                        }
                    />
                </label>
                <label>
                    Fecha de regreso:
                    <input
                        type="date"
                        value={returnDate}
                        onChange={(event) => setReturnDate(event.target.value)}
                    />
                </label>
                <label>
                    Número de pasajeros:
                    <input
                        type="number"
                        value={passengers}
                        onChange={(event) => setPassengers(event.target.value)}
                    />
                </label>
                <button className="submitBtn" type="submit">
                    <span className="material-symbols-outlined">flight</span>
                    Buscar Vuelos
                </button>
            </form>
        </>
    );
};

export default FormHome;
