import React from 'react';
import './Style.css'

const Catlog = () => {
    return (
        <div class="catalog-container">
            <div class="catalog-contents">
                <div class="catalog-img">
                    <img src="catalog.png" />
                </div>
                <div class="catalog-info">
                    <br />
                    <h3 class="feature-content-info-subheading">Solving real human problems</h3>
                    <p>Today’s organizations need to do more than pursue the latest technologies. They need to enhance
                    the lives of people around the world.</p>
                    <a href="#" class="feature-content-button">READ 2019 ANNUAL REPORT</a>
                </div>
            </div>
        </div>
    );
};

export default Catlog;