import React from 'react';
import './App.css';
import Nav from './components/Nav';
import SlideOne from './components/SlideOne';
import SlideTwo from './components/SlideTwo';
import SlideThree from './components/SlideThree';
import SlideFour from './components/SlideFour';
import SlideFive from './components/SlideFive';
import SlideSix from './components/SlideSix';
import SlideSeven from './components/SlideSeven';
import SlideEight from './components/SlideEight';

function App() {
    return (
        <div id='app'>
            <Nav />
            <SlideOne />
            <SlideTwo />
            <SlideThree />
            <SlideFour />
            <SlideFive />
            <SlideSix />
            <SlideSeven />
            <SlideEight />
        </div>
    );
}

export default App;
