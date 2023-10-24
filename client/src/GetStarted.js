import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import './GetStarted.css'

function GetStarted() {
    const [sentence, setSentence] = useState('');
    const [tone, setTone] = useState('');
    const [response, setResponse] = useState([]);

    const handleToneChange = (event) => {
        setTone(event.target.value);
    };

    const handleInputChange = (event) => {
        setSentence(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .get(`http://127.0.0.1:5000/formal_words/${tone}/${sentence}`)
            .then((res) => {
                const filteredResponse = res.data.filter(Boolean);
                setResponse(filteredResponse);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <Header />
            <div className="card-get-started">
                <form onSubmit={handleSubmit}>
                    <div className="form-container">
                        <h4 className="h4">Speak your mind</h4>
                        <label>
                            <textarea
                                value={sentence}
                                onChange={handleInputChange}
                                rows={5}
                            />
                        </label>
                        
                        <h4 className="h4">Set the tone</h4>
                        <label>
                            <select value={tone} onChange={handleToneChange}>
                                <option value="" disabled>Select</option>
                                <option value="professional yet helpful">Professional</option>
                                <option value="friendly">Friendly</option>
                                <option value="sarcastic">Sarcastic</option>
                                <option value="humorous">Humorous</option>
                            </select>
                        </label>
                        <button type="submit" className="button button1">
                            Submit
        </button>
                        
                    </div>
                </form>
            </div>
            <div>

                {response.length > 0 && (
                    <div className="card-output">
                        <h4 className="h4">Profess AI sets the mood</h4>
                        {response.filter(Boolean)}

                    </div>
                )}
                {response.length > 0 && (
                    <div className="card-condition">
                        <p>Not satisfied? Click on Submit again.</p>
                </div>
            )}
            </div>
            <Footer />
        </div>
    );
}

export default GetStarted;

