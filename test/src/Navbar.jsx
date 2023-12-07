import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav class="second-nav navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link to={"/"} class="nav-link">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item active">
                            <Link to={"/product"} class="nav-link">Product</Link>
                        </li>
                        <li class="nav-item active">
                            <Link to={"/about"} class="nav-link">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;