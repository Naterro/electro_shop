import React from 'react';
import {NavLink} from "react-router-dom";
import {CATEGORY_ROUTE, SHOP_ROUTE} from '../utils/consts';


const NavBar = () => {

    return (
        <div className="navbar navbar-dark bg-dark">
            <NavLink className="navbar-brand" to={SHOP_ROUTE}> ElectroShop</NavLink>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link active" to={CATEGORY_ROUTE+'/freezer'}> Холодиьники</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active" to={CATEGORY_ROUTE+'/TV'}> Телевизоры</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active" to={CATEGORY_ROUTE+'/grinder'}> Мясорубки</NavLink>
                </li>
            </ul>
        </div>



    );
};

export default NavBar;