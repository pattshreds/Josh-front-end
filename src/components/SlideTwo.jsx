import React from 'react';

const SlideTwo = () => {
    return (
        <div
            style={{ backgroundImage: 'url("/media/nano-kitchen.jpg")' }}
            id='slide-two-container'
        >
            <div id='slide-two-header'>
                <h1>Hands-free control in every room</h1>
            </div>
            <div id='slide-two-text'>
                <p>
                    Josh nano knows what room you are in and what devices to
                    control. Effortlessly set the mood throughout your day by
                    tuning lights, adjusting shades, playing music, and more!
                </p>
            </div>
        </div>
    );
};

export default SlideTwo;
