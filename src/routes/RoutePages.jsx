import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Cart } from '../pages/Cart';
import { Catalog } from '../pages/Catalog';
import { Home } from '../pages/Home';
import { Products } from '../pages/Products';
export const Routepages = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route
                    path="/catalog:slug"
                    element={<Products></Products>}
                ></Route>
                <Route
                    path="/catalog"
                    element={<Catalog></Catalog>}
                ></Route>
                <Route path="/cart" element={<Cart></Cart>}></Route>
            </Routes>
        </div>
    );
};
