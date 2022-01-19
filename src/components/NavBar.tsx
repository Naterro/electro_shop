import React from 'react';
import {NavLink} from "react-router-dom";
import {CATEGORY_ROUTE, SHOP_ROUTE} from '../utils/consts';


const NavBar = () => {

    return (
        <div className="navbar navbar-dark bg-dark">
            <NavLink className="navbar-brand" to={SHOP_ROUTE}> ElectroShop</NavLink>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link active" to={CATEGORY_ROUTE+'/0'}> Холодиьники</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active" to={CATEGORY_ROUTE+'/1'}> Телевизоры</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active" to={CATEGORY_ROUTE+'/2'}> Мясорубки</NavLink>
                </li>
            </ul>
        </div>



    );
};

export default NavBar;