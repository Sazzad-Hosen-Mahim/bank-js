import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        
           <nav className='nav-bar'>
            <img src={logo} alt=""/>
            <div>
                <a href="/Shop">Shop</a>
                <a href="/Orders">Orders</a>
                <a href="/Inventory">Inventory</a>
                <a href="/Contact">Contact</a>
            </div>
           </nav>
    );
};

export default Header;