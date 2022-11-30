import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import MainPage from './components/mainPage/MainPage';
import MoviePage from './components/moviePage/MoviePage';
import { ContextDataProvider } from './context/index';

function App() {
    return (
        <ContextDataProvider>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<MainPage />} />
                        <Route path="movie/:id" element={<MoviePage />} />
                    </Route>
                </Routes>
            </div>
        </ContextDataProvider>
    );
}

export default App;
