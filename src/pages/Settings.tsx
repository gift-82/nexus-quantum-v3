import React from 'react';

const Settings = () => {
    return (
        <div>
            <h1>User Preferences</h1>
            <form>
                <label>
                    API Key:
                    <input type="text" name="apiKey" />
                </label>
                <br />
                <label>
                    Trading Parameters:
                    <input type="text" name="tradingParameters" />
                </label>
                <br />
                <button type="submit">Save Settings</button>
            </form>
        </div>
    );
};

export default Settings;
