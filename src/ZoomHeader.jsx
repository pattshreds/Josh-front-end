import React, { useState } from 'react';

// Images Arrays

const ZoomHeader = () => {
    const [background, setBackground] = useState(
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero00.jpg'
    );
    const [key, setKey] = useState('');

    const fullsizeImages = [
        // 'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero00.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero01.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero02.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero03.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero04.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero05.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero06.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero07.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero08.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero09.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero10.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero11.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero12.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero13.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero14.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero15.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero16.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero17.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero18.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero19.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero20.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero21.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero22.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero23.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero24.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero25.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero26.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero27.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero28.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero29.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero30.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero31.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero32.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero33.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero34.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero35.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero36.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero37.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero38.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero39.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero40.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero41.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero42.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero43.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero44.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero45.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero46.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero47.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero48.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero49.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero50.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero51.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero52.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero53.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero54.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero55.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero56.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero57.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero58.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero59.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero60.jpg',
    ];

    const mobileImages = [
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-00.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-01.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-02.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-03.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-04.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-05.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-06.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-07.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-08.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-09.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-10.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-11.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-12.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-13.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-14.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-15.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-16.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-17.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-18.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-19.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-20.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-21.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-22.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-23.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-24.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-25.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-26.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-27.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-28.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-29.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-30.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-31.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-32.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-33.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-34.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-35.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-36.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-37.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-38.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-39.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-40.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-41.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-42.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-43.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-44.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-45.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-46.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-47.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-48.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-49.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-50.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-51.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-52.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-53.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-54.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-55.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-56.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-57.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-58.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-59.jpg',
        'https://d35408cyocioye.cloudfront.net/new3/nano/nano-hero-mobile-60.jpg',
    ];

    // End Images Arrays

    let scrollPos = 0;
    let res = '';

    // Setting up a function that will change the background state with each incrememnt of scrollPos.

    return (
        <>
            <div id='imgbox'>
                <img src={background} key={key} alt='images' className='imgs' />
            </div>
            <div id='textbox1'>
                <h1>
                    Say Hello <br /> to Josh Nano
                </h1>
            </div>
        </>
    );
};

export default ZoomHeader;
