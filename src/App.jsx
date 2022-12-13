import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoginPage from './components/loginPage/LoginPage';
import MainPage from './components/mainPage/MainPage';
import MoviePage from './components/moviePage/MoviePage';
import RegistrationPage from './components/registrationPage/RegistrationPage';
import SearchMoviesPage from './components/SearchMoviesPage/SearchMoviesPage';
import { ContextAuthProvider } from './context/useAuth';
import { ContextMoviesProvider } from './context/useMovies';
import './firebase/firebase';

function App() {
    return (
        <ContextMoviesProvider>
            <ContextAuthProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<MainPage />} />
                        <Route path="movie/:id" element={<MoviePage />} />
                        <Route path="registration" element={<RegistrationPage />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route path="search" element={<SearchMoviesPage />} />
                    </Route>
                </Routes>
            </ContextAuthProvider>
        </ContextMoviesProvider>
    );
}

export default App;
