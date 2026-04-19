// src/types/market.ts

// Interface for OHLC (Open, High, Low, Close) data
export interface OHLC {
    open: number;
    high: number;
    low: number;
    close: number;
    timestamp: number;
}

// Interface for ticker data
export interface Ticker {
    symbol: string;
    lastPrice: number;
    bid: number;
    ask: number;
    volume: number;
    timestamp: number;
}

// Interface for order book data
export interface OrderBook {
    symbol: string;
    bids: Array<{ price: number; quantity: number; }>; // List of buy orders
    asks: Array<{ price: number; quantity: number; }>; // List of sell orders
    timestamp: number;
}

// Interface for real-time market streams
export interface MarketStream {
    type: 'ticker' | 'orderBook';
    data: Ticker | OrderBook;
    timestamp: number;
}