import React from 'react';

const EconomicCalendar: React.FC = () => {
    // Sample data representing live trading sessions and high-impact events
    const tradingSessions = [
        { session: 'Asian Session', time: '00:00 - 09:00 UTC' },
        { session: 'European Session', time: '08:00 - 17:00 UTC' },
        { session: 'North American Session', time: '13:00 - 22:00 UTC' }
    ];

    const highImpactEvents = [
        { date: '2026-04-19', event: 'FOMC Meeting', impact: 'High' },
        { date: '2026-04-20', event: 'CPI Release', impact: 'High' },
    ];

    return (
        <div>
            <h1>Economic Calendar</h1>
            <h2>Live Trading Sessions</h2>
            <ul>
                {tradingSessions.map((session, index) => (
                    <li key={index}>{session.session}: {session.time}</li>
                ))}
            </ul>
            <h2>High-Impact Events</h2>
            <ul>
                {highImpactEvents.map((event, index) => (
                    <li key={index}>{event.date}: {event.event} (Impact: {event.impact})</li>
                ))}
            </ul>
        </div>
    );
};

export default EconomicCalendar;
