import React from 'react';
import LiveCharts from '../components/LiveCharts';
import MarketOverview from '../components/MarketOverview';
import Signals from '../components/Signals';
import AIAnalysis from '../components/AIAnalysis';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <LiveCharts />
            <MarketOverview />
            <Signals />
            <AIAnalysis />
        </div>
    );
};

export default Dashboard;