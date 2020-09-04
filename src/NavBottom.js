import React from 'react';
import './Style.css'

const NavBottom = () => {
    return (
        <div class="nav-bottom-container">
            <div class="nav-bottom">
                <img class="cts-logo-text" src="cts-logo-name.svg" />
                <ul class="nav-bottom-list">
                    <div class="nav-bottom-list-content">
                        <li><a href="#">Industries
                            {/* <img class="triangle-img-down" src="triangle-down.PNG" /> */}
                            <i class="fa fa-caret-down triangle-fa" aria-hidden="true"></i></a>
                        </li>
                        <li><a href="#">Services <i class="fa fa-caret-down triangle-fa" aria-hidden="true"></i></a>
                        </li>
                        <li><a href="#">Latest Thinking <i class="fa fa-caret-down triangle-fa" aria-hidden="true"></i></a>
                        </li>
                        <li><a href="#">About <i class="fa fa-caret-down triangle-fa" aria-hidden="true"></i></a></li>
                    </div>
                    <img src="option-icon.PNG" />
                </ul>
            </div>
        </div >
    );
};

export default NavBottom;