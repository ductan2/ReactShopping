import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Routepages } from '../routes/RoutePages';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="main">
                    <Routepages></Routepages>
                </div>
            </div>
            <Footer />
        </div>
    );
};
