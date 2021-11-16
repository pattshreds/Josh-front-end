import React from 'react';

const SlideEight = () => {
    return (
        <div
            style={{ backgroundImage: 'url("/media/luxury.jpg")' }}
            id='slide-eight-container'
        >
            <img id='lutron' src='/media/group.png' alt='group'></img>
            <div id='slide-eight-text'>
                The first of its kind voice-integrated keypad solution minimizes
                technology's footprint in the smart home, enabling the natural
                and architectural beauty of every environment to shine brightly.
            </div>
            <button id='learn-more'>
                <a href='https://www.josh.ai/declare'>LEARN MORE</a>
            </button>
        </div>
    );
};

export default SlideEight;
