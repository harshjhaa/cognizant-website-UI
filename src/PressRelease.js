import React from 'react';
import './Style.css'

const PressRelease = () => {
    return (
        <div>
            <div class="press-release-container column-container">
                <h1>PRESS RELEASES</h1>
                <div class="press-release-contents">
                    <div class="press-release-content">
                        <p>JUNE 29, 2020</p>
                        <h2>Growing Pride in LGBT+ Communities</h2>
                    </div>
                    <div class="press-release-content">
                        <p>JUNE 24, 2020</p>
                        <h2>Cognizant Named a Leading Provider of Guidewire Services to Insurers by Everest Group</h2>
                    </div>
                    <div class="press-release-content">
                        <p>JUNE 23, 2020</p>
                        <h2>Cognizant Collaborates on Verily's Nationwide Baseline COVID-19 Testing Program</h2>
                    </div>
                    <div class="press-release-content">
                        <p>JUNE 11, 2020</p>
                        <h2>Cognizant Completes Acquisition of Collaborative Solutions, One of the World’s Largest Workday
                    Services Partners</h2>
                    </div>
                    <div class="press-release-content">
                        <p>JUNE 01, 2020</p>
                        <h2>Cognizant Completes Acquisition of EI-Technologies, a Leading European Salesforce Platform
                    Specialist</h2>
                    </div>
                </div>
                <div class="press-release-btn-container">
                    <a href="#">VIEW ALL PRESS RELEASES</a>
                </div>
            </div>
            <div class="cognizant-report-press-release-container" style={{ 'overflow-x': 'hidden', 'overflow-y': 'hidden' }}>
                <div class="cognizant-report-press-release" data-aos="zoom-out-up" data-aos-duration="1000">
                    <h4>PRESS RELEASE | 05.07.2020</h4>
                    <h2>Cognizant Reports First Quarter 2020 Results</h2>
                    <div class="cognizant-report-press-release-btn">
                        <a href="#" class="feature-content-button">READ MORE</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PressRelease;