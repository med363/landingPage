import React from 'react';

function Header() {
    return (
        <nav>
            <div className="logo">Pingu coder</div>
            <ul>
                <li>Home</li>
                <li>Our Product</li>
                <li>About us</li>
                <li>Contact</li>
            </ul>
            <div className="search">
                <i className="fa fa-search"></i>
                <i className="fa fa-shopping-basket"></i>
            </div>
        </nav>
    )
}

export default Header;
