import React from 'react';
import './Style.css'

const NavTop = () => {
    return (
        <div>
            <header>
                <nav class="nav-top">
                    <ul class="nav-top-list">
                        <li><a href="#">Career</a></li>
                        <li>•</li>
                        <li><a href="#">News</a></li>
                        <li>•</li>
                        <li><a href="#">Events</a></li>
                        <li>•</li>
                        <li><a href="#">Investors</a></li>
                        <li> | </li>
                        <li><a href="#"><i class="fa fa-globe" aria-hidden="true"></i> Worldwide </a></li>
                        <li class="search-icon"> <i class="fa fa-search" aria-hidden="true"></i> </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default NavTop;