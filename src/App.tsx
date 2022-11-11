import React, { useEffect } from 'react';
import './App.css';
import HTTPService from './services/HTTPService';

function App() {
    const getData = async () => {
        const response = await HTTPService.get('movie/550', 'get', { api_key: 'd37b6ddc9c46d5659d616cb6fcf9f5ba' });
        console.log(response);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="App">
            <div></div>
        </div>
    );
}

export default App;
