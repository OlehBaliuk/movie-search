import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import MainPage from './components/mainPage/MainPage';
import { ContextDataProvider } from './context/index';

function App() {
    return (
        <ContextDataProvider>
            <div className="App">
                <Header />
                <MainPage />
            </div>
        </ContextDataProvider>
    );
}

export default App;
