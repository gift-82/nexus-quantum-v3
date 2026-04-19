import React from 'react';

const PerformanceAnalytics = ({ results }) => {
    const { winRate, profitFactor, sharpeRatio, equityCurve } = results;

    return (
        <div>
            <h2>Backtest Performance Analytics</h2>
            <div>
                <h3>Win Rate: {winRate}%</h3>
                <h3>Profit Factor: {profitFactor}</h3>
                <h3>Sharpe Ratio: {sharpeRatio}</h3>
            </div>
            <div>
                <h3>Equity Curve</h3>
                <img src={equityCurve} alt="Equity Curve" />
            </div>
        </div>
    );
};

export default PerformanceAnalytics;