import React, { useState, useRef } from 'react';
import './App.css';
import './index.css';

function App() {
    const [showRose, setShowRose] = useState(false);
    const audioRef = useRef(null);

    const handleClick = () => {
        setShowRose(true);
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    const handleClose = () => {
        setShowRose(false);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-300 to-rose-500 text-white sparkle-bg relative overflow-hidden">
            <h1 className="text-4xl font-extrabold mb-6 animate-bounce">🌹 Surprise for You, Roja!</h1>
            <button
                onClick={handleClick}
                className="px-6 py-3 bg-rose-600 rounded-full text-xl font-semibold shadow-lg hover:bg-rose-700 transition duration-300 ease-in-out transform hover:scale-105 pulse-button"
            >
                Click here to see Surprise!!!!!
            </button>

            {showRose && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div className="relative bg-white text-black p-8 rounded-lg shadow-lg max-w-lg mx-auto transform transition-transform duration-500 animate-fade-in float-animation">
                        <span
                            className="absolute top-2 right-2 text-2xl font-bold text-rose-600 cursor-pointer hover:text-red-800"
                            onClick={handleClose}
                        >
                            &times;
                        </span>
                        <img src="Roja.gif" alt="Animated Rose" className="w-full rounded-lg mb-4 rose-glow" />
                        <h2 className="text-2xl font-semibold text-center mb-4 text-rose-600">
                            Just like this rose blooms beautifully... Today...You are!!!
                        </h2>
                    </div>
                </div>
            )}

            {/* Add the audio element */}
            <audio ref={audioRef} src="Rojabgm.mp3" />
        </div>
    );
}

export default App;
