import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import HomePage from './HomePage';
import GetStarted from './GetStarted';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/getstarted" element={<GetStarted />} />
            </Routes>
        
    );
}

export default App;
