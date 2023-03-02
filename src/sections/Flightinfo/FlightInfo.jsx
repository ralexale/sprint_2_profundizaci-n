import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadData } from '../../services/saveData';
import moment from 'moment';
import 'moment/locale/es';
import './style.scss';
import Luggage from '../../components/flightInfo/Luggage';

const FlightInfo = () => {
    const formData = loadData();
    const [price, setPrice] = useState(localStorage.getItem('price') || '');

    useEffect(() => {
        const handlePriceChange = () => {
            setPrice(localStorage.getItem('price') || '');
        };

        window.addEventListener('storage', handlePriceChange);

        return () => {
            window.removeEventListener('storage', handlePriceChange);
        };
    }, []);
    return (
        <>
            <div className="info">
                <header className="info__header">
                    <aside className="info__header--flight">
                        <h2>Vuelo de salida</h2>
                        <Link to={'/'}>
                            <button>Cambiar vuelo</button>
                        </Link>
                    </aside>
                    <div className="info__header--review">
                        <span className="info__header--review--salida">
                            <p>
                                {moment(formData.departureDate).format(
                                    'D [de] MMMM [de] YYYY'
                                )}
                            </p>
                        </span>
                        <span className="info__header--review--destino">
                            <p>de</p>
                            <span> {formData.origin.substring(0, 3)}</span>
                            <p>a</p>
                            <span> {formData.destination}</span>
                        </span>
                    </div>
                    <span className="info__header--equipaje">
                        Selección de horarios y equipajes
                    </span>
                </header>
                <aside className="info__reservación">
                    <h2>Tu reservación</h2>
                    <div className="info__reservación--card">
                        <div className="info__reservación--card--pasajeros">
                            <p>Número de pasajeros: </p>
                            <p>{formData.passengers}</p>
                        </div>

                        <p className="info__reservación--card--salida">
                            Vuelo de salida
                        </p>
                        <p className="info__reservación--card--paises">
                            {formData.origin.substring(0, 3)} ___ {''}
                            {formData.destination.substring(0, 3)}
                        </p>
                        <div className="info__reservación--card--fecha">
                            <p>
                                {moment(formData.departureDate).format(
                                    'D [de] MMMM [de] YYYY'
                                )}
                            </p>
                        </div>
                        <div className="info__reservación--card--type">
                            <p>Tipo de viaje:</p>
                            <p> {formData.tripType}</p>
                        </div>
                    </div>
                </aside>
                <section className="info__price">
                    <h2>Costo del vuelo</h2>
                    <span>{price}</span>
                </section>
                <Luggage />
            </div>
        </>
    );
};
export default FlightInfo;
