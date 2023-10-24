import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom'

function Card() {
    return (
        <div className="card">
            <h2 className="card-title">Make every word count</h2>
            <h4 className="card-subtitle">Whether you're crafting an email to your boss or posting on social media, Profess AI helps you find the right words and tone to convey your message with confidence and clarity.</h4>
            <Link to="/getstarted"><button className="card-button">GET STARTED</button></Link>
        </div>
    );
}

export default Card;

