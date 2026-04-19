import React from 'react';

const strategies = [
    { name: 'Strategy A', export: '//@version=4
strategy("Strategy A", overlay=true)

// Add your Pine Script strategy logic here
' },
    { name: 'Strategy B', export: '//@version=4
strategy("Strategy B", overlay=true)

// Add your Pine Script strategy logic here
' },
    { name: 'Strategy C', export: '//@version=4
strategy("Strategy C", overlay=true)

// Add your Pine Script strategy logic here
' }
];

const StrategyLibrary = () => {
    return (
        <div>
            <h1>Trading Strategies</h1>
            <ul>
                {strategies.map((strategy, index) => (
                    <li key={index}>
                        <h2>{strategy.name}</h2>
                        <pre>{strategy.export}</pre>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StrategyLibrary;