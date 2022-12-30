import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
    RegistrationPage,
    MoviePage,
    MainPage,
    LoginPage,
    Layout,
    SearchMoviesPage,
    SavedMoviesList,
} from '@components';
import { ROUTES } from '@constants';
import { ContextAuthProvider, ContextMoviesProvider, ContextSavedMoviesProvider } from '@context';
import '@firebaseConfig';
import './App.scss';

function App() {
    return (
        <ContextMoviesProvider>
            <ContextAuthProvider>
                <ContextSavedMoviesProvider>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<MainPage />} />
                            <Route path={`${ROUTES.movie}/:id`} element={<MoviePage />} />
                            <Route path={ROUTES.registration} element={<RegistrationPage />} />
                            <Route path={ROUTES.login} element={<LoginPage />} />
                            <Route path={ROUTES.search} element={<SearchMoviesPage />} />
                            <Route path={ROUTES.savedList} element={<SavedMoviesList />} />
                        </Route>
                    </Routes>
                </ContextSavedMoviesProvider>
            </ContextAuthProvider>
        </ContextMoviesProvider>
    );
}

export default App;
