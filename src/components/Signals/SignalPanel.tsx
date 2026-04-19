import React from 'react';

const SignalPanel: React.FC = () => {
    // Sample data; in a real application this should come from props or state
    const signals = [
        { id: 1, alert: 'BUY', confluenceScore: 80 },
        { id: 2, alert: 'SELL', confluenceScore: 70 },
        { id: 3, alert: 'BUY', confluenceScore: 90 },
    ];

    return (
        <div>
            <h2>Real-Time Trading Signals</h2>
            <ul>
                {signals.map(signal => (
                    <li key={signal.id}>
                        <span style={{color: signal.alert === 'BUY' ? 'green' : 'red'}}>{signal.alert}</span> - Confluence Score: {signal.confluenceScore}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SignalPanel;