import React, {Component} from 'react';
import Navbar from '../containers/navbar.js';
import Drawing from './drawing.js';

function App() {
    return (
        <div>
            <h1> FandG</h1>
            <Navbar />
            <Drawing width="100" height="200" />
        </div>
    )
}

export default App;