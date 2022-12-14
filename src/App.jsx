import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RegistrationPage, MoviePage, MainPage, LoginPage, Layout, SearchMoviesPage } from '@components';
import { ContextAuthProvider, ContextMoviesProvider } from '@context';
import './firebase/firebase';
import './App.scss';

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
