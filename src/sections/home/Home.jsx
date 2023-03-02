import React, { useState } from 'react';
import Plane from '../../assets/image/plane-home.jpg';
import FormHome from '../../components/formHome/FormHome';
import './styles.scss';

import IconCredit1 from '../../assets/icons/Amex.svg';
import IconCredit2 from '../../assets/icons/paypal.svg';
import IconCredit3 from '../../assets/icons/Mastercard.svg';
import IconCredit4 from '../../assets/icons/Visa.svg';
import IconCredit5 from '../../assets/icons/banco.jpg';
import IconEfective1 from '../../assets/icons/oxxo.svg';
import IconEfective2 from '../../assets/icons/7-eleven.svg';
import IconEfective3 from '../../assets/icons/walmart.svg';

const Home = () => {
    const arrayServices = [
        {
            icon: (
                <span class="material-symbols-outlined">airport_shuttle</span>
            ),
            name: 'transporte',
            description: 'Renta un auto o reserva un shuttle',
        },
        {
            icon: <span class="material-symbols-outlined">flight_takeoff</span>,
            name: 'Vuelos + Hoteles',
            description: 'Encuentra las mejores ofertas para tu viaje',
        },
        {
            icon: <span class="material-symbols-outlined">group</span>,
            name: 'Grupos',
            description:
                'obten una cotización para grupos de mas de 9 personas',
        },
        {
            icon: <span class="material-symbols-outlined">hotel</span>,
            name: 'Hoteles',
            description:
                'Reserva cualquier habitación en cualquier parte del mundo',
        },
        {
            icon: <span class="material-symbols-outlined">package</span>,
            name: 'carga',
            description: 'Contamos con un servicio de carga y mensajeria',
        },
    ];
    return (
        <>
            <header className="header">
                <section className="header__section">
                    <article className="header__article">
                        <h1>Busca un nuevo destino y comienza la aventura.</h1>
                        <span>
                            descubre vuelos al mejor precio y perfectos para
                            cualquier viaje.
                        </span>
                        <FormHome />
                    </article>
                    <figure className="header__figure">
                        <img src={Plane} alt="plane" />
                    </figure>
                </section>
            </header>
            <section className="pago__seguro">
                <h2>Pago seguro</h2>
                <article className="pago__seguro--container">
                    <aside className="pago__seguro--container--creditcards">
                        <span>
                            Tarjeta de crédito, tarjeta de débito y pago
                            electronico
                        </span>
                        <figure>
                            <img src={IconCredit1} alt="" />
                            <img src={IconCredit2} alt="" />
                            <img src={IconCredit3} alt="" />
                            <img src={IconCredit4} alt="" />
                            <img className="invex" src={IconCredit5} alt="" />
                        </figure>
                    </aside>

                    <aside className="pago__seguro--container--efective">
                        <span>
                            Efectivo en cualquiera de las sucursales
                            participantes
                        </span>
                        <figure className="pago__seguro--container--efective--icons">
                            <img src={IconEfective1} alt="" />
                            <img src={IconEfective2} alt="" />
                            <img src={IconEfective3} alt="" />
                        </figure>
                    </aside>
                </article>
            </section>
            <section className="services">
                <h2>Servicios disponibles</h2>
                <div className="services__container">
                    {arrayServices.map((service, index) => (
                        <div className="services__container--card" key={index}>
                            {service.icon}
                            <h3 className="services__container--card--title">
                                {service.name}
                            </h3>
                            <p className="services__container--card--description">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Home;
