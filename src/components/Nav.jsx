import React from 'react';
import { useSpring, animated } from 'react-spring';

const Nav = () => {
    return (
        <>
            <nav id='navbox'>
                <ul id='navul'>
                    <li className='navli'>
                        <a className='navlink' href=''>
                            PRODUCTS
                        </a>
                    </li>
                    <li className='navli'>
                        <a className='navlink' href=''>
                            ABOUT
                        </a>
                    </li>
                    <li className='navli'>
                        <a className='navlink' href=''>
                            INTEGRATIONS
                        </a>
                    </li>
                    <li className='navli'>
                        <a className='navlink' href=''>
                            CONTACT
                        </a>
                    </li>
                </ul>
                <a href='' id='navloginlink'>
                    LOG IN
                </a>
            </nav>
        </>
    );
};

export default Nav;
