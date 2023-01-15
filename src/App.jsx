import React from 'react';
import { store } from '@store';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import {
    RegistrationPage,
    MoviePage,
    MainPage,
    LoginPage,
    Layout,
    SearchMoviesPage,
    SavedMoviesPage,
    CategoryPage,
} from '@components';
import { ROUTES } from '@constants';
import { ContextMoviesProvider } from '@context';
import '@firebaseConfig';

function App() {
    return (
        <Provider store={store}>
            <ContextMoviesProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<MainPage />} />
                        <Route path={`${ROUTES.movie}/:id`} element={<MoviePage />} />
                        <Route path={ROUTES.registration} element={<RegistrationPage />} />
                        <Route path={ROUTES.login} element={<LoginPage />} />
                        <Route path={ROUTES.search} element={<SearchMoviesPage />} />
                        <Route path={ROUTES.savedList} element={<SavedMoviesPage />} />
                        <Route path={ROUTES.category} element={<CategoryPage />} />
                    </Route>
                </Routes>
            </ContextMoviesProvider>
        </Provider>
    );
}

export default App;
