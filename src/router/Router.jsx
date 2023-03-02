import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FlightInfo from '../sections/Flightinfo/FlightInfo';

import Home from '../sections/home/Home';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Flightinfo" element={<FlightInfo />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
