import React, { useState } from 'react';

const BacktestingEngine = () => {
    const [replaySpeed, setReplaySpeed] = useState(1);
    const [isPaused, setIsPaused] = useState(true);

    const handleSpeedChange = (event) => {
        setReplaySpeed(event.target.value);
    };

    const handlePauseToggle = () => {
        setIsPaused(!isPaused);
    };

    const handleReset = () => {
        setReplaySpeed(1);
        setIsPaused(true);
    };

    return (
        <div>
            <h1>Backtesting Engine</h1>
            <div>
                <label>Replay Speed:</label>
                <input 
                    type="number" 
                    value={replaySpeed} 
                    onChange={handleSpeedChange} 
                    min={0.1} 
                    step={0.1} 
                />
            </div>
            <div>
                <button onClick={handlePauseToggle}>{isPaused ? 'Play' : 'Pause'}</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

export default BacktestingEngine;