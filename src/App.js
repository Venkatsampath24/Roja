import React, { useState, useRef } from 'react';
import './App.css'; // You can create your CSS styles here

function App() {
    const [showRose, setShowRose] = useState(false);
    const audioRef = useRef(null);

    const handleClick = () => {
        setShowRose(true);
        if (audioRef.current) {
            audioRef.current.play(); // Play music when the rose is shown
        }
    };

    const handleClose = () => {
        setShowRose(false);
        if (audioRef.current) {
            audioRef.current.pause(); // Pause music when the rose is closed
            audioRef.current.currentTime = 0; // Reset the music to the start
        }
    };

    return (
        <div className="App">
            <h1>🌹 Surprise for You, Roja!</h1>
            <button onClick={handleClick}>Click here to see Surprise!!!!!</button>

            {showRose && (
                <div className="modal">
                    <span className="close" onClick={handleClose}>&times;</span>
                    <img src="Roja.gif" alt="Animated Rose" className="rose-gif" />
                    <h1>Just like this rose blooms beautifully!</h1>
                </div>
            )}

            {/* Add the audio element */}
            <audio ref={audioRef} src="Rojabgm.mp3" />
        </div>
    );
}

export default App;
