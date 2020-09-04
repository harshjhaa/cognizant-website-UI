import React from 'react';
import './Style.css'

const DigitallyCognizant = () => {
    return (
        <div>
            <div class="digitally-cognizant-section">
                <h1>DIGITALLY COGNIZANT</h1>
                <div class="digitally-cognizant-section-filter">
                    <p>View: </p>
                    <p class="digitally-cognizant-section-filter-tags"> <span style={{
                        'display': 'inline-block',
                        'border-bottom': '1px solid black',
                        'padding-bottom': '.8px'
                    }}>Most Recent</span> </p>
                    <p> | </p>
                    <p class="digitally-cognizant-section-filter-tags" style={{ 'font-weight': 'bold', 'cursor': 'pointer' }}> Most Popular </p>
                </div>
                <div class="digitally-cognizant-section-contents">
                    <div class="digitally-cognizant-section-container">
                        <div class="digitally-cognizant-section-container-filter">
                            <p class="digitally-cognizant-section-filter-tags" style={{ 'cursor': 'pointer' }}> <span style={{
                                'display': 'inline-block',
                                'border-bottom': '1px solid black',
                                'padding-bottom': '.8px'
                            }}>Most Recent</span> </p>
                            <p class="digitally-cognizant-section-filter-tags"
                                style={{ 'font-weight': 'bold', 'background-color': '#ebe9e9' }}> <span style={{ 'cursor': 'pointer' }}>Most
                            Popular</span> </p>
                        </div>
                        <div class="digitally-cognizant-section-content" data-aos="fade-up" data-aos-duration="1600">
                            <div class="digitally-cognizant-section-content-date-views">
                                <p>JUNE 29, 2020</p>
                                <p>31 Views</p>
                            </div>
                            <p class="digitally-cognizant-section-content-heading">Customer Identity and Access Management in
                        the Age of COVID-19</p>
                            <p class="digitally-cognizant-section-content-info">With the surge in demand for digital services,
                            businesses are expanding their identity and access management focus from employees to customers.
                    </p>
                            <div class="digitally-cognizant-section-content-footer">
                                <img src="person1.jpg" height="60" width="60" alt="person-img" />
                                <p>By Sudhakar Chinnaswamy Kamalanathan</p>
                            </div>
                            <div class="hr-class"></div>
                        </div>
                        <div class="digitally-cognizant-section-content" data-aos="fade-up" data-aos-duration="1400">
                            <div class="digitally-cognizant-section-content-date-views">
                                <p>June 26, 2020</p>
                                <p>69 Views</p>
                            </div>
                            <p class="digitally-cognizant-section-content-heading">How Banks Can Speed Small-Business Recovery
                        in the Post-Pandemic Economy</p>
                            <p class="digitally-cognizant-section-content-info">Here's how banks can be part of the solution for
                            helping small and midsize businesses emerge successfully from the COVID shutdown.
                    </p>
                            <div class="digitally-cognizant-section-content-footer">
                                <img src="person2.jpg" height="60" width="60" alt="person-img" />
                                <p>By Jack Leach</p>
                            </div>
                            <div class="hr-class"></div>
                        </div>
                        <div class="digitally-cognizant-section-content" data-aos="fade-up" data-aos-duration="1400">
                            <div class="digitally-cognizant-section-content-date-views">
                                <p>June 25, 2020</p>
                                <p>70 Views</p>
                            </div>
                            <p class="digitally-cognizant-section-content-heading">Don’t Let IT Backlogs Stymie Digital Change
                            Amid
                        a Crisis</p>
                            <p class="digitally-cognizant-section-content-info">By taking a methodical approach, businesses can
                            refine, groom and prioritize their IT backlogs, and ensure important endeavors don't get put on
                        hold.</p>
                            <div class="digitally-cognizant-section-content-footer">
                                <img src="person3.jpg" height="60" width="60" alt="person-img" />
                                <p>By Anbu Muppidathi</p>
                            </div>
                            <div class="hr-class"></div>
                        </div>
                    </div>
                    <div class="press-release-btn-container">
                        <a href="#">VISIT THE DIGITALLY COGNIZANT BLOG</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitallyCognizant;