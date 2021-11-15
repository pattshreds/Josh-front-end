import React from 'react';

const SlideFive = () => {
    return (
        <div id='slide-five-container'>
            <div id='slide-five-header'>Privacy is paramount</div>
            <p id='slide-five-text'>
                At Josh.ai, we believe that trust makes a house a home. Josh
                Nano is equipped with a disconnect switch, which disables its
                microphones completely. Rest assured that what is said behind
                closed doors stays there.
            </p>
            <div id='slide-five-video'>
                <video autoplay='autoplay' muted>
                    <source
                        src='https://d35408cyocioye.cloudfront.net/new3/nano/nano-mute-1x.mp4'
                        type='video/mp4'
                    ></source>
                </video>
            </div>
        </div>
    );
};

export default SlideFive;
