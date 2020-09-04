import React from 'react';
import './Style.css'

const Footer = () => {
    return (
        <footer>
            <div class="footer-bar-container column-container">
                <div class="footer-bar-social-media-icons">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                    <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
                <div class="footer-bar-links-container">
                    <p class="footer-bar-links">Sitemaps</p>
                    <p class="footer-bar-links">Terms</p>
                    <p class="footer-bar-links">Privacy Notice</p>
                    <p class="footer-bar-links">Cookie Notice</p>
                    <p>©2020 Cognizant, all rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;