import React from 'react';
import './Style.css'

const Form = () => {
    return (
        <div class="form-container">
            <h1>TAKE THE FIRST STEP</h1>
            <p>Serving customers by looking forward as well as back is a big promise, but the power of today’s new digital
            capabilities is vast and growing.</p>
            <p style={{'font-weight':'bold'}}>Let’s talk about how digital can work for your business.</p>
            <form>
                <div class="form-input-set-1">
                    <input type="text" placeholder="NAME*" />
                    <input type="email" placeholder="EMAIL*" />
                    <input type="text" placeholder="ORGANIZATION*" />
                    <input type="text" placeholder="CONTACT*" />
                    <input type="text" placeholder="REGION*" />
                    <input type="text" placeholder="INQUIRY TYPE*" />
                </div>
                <textarea rows="4" cols="50" placeholder="MESSAGE"></textarea>
                <div class="form-submit-btn">
                    <a class="feature-content-button" href="#">SUBMIT</a>
                </div>
            </form>
        </div>
    );
};

export default Form;