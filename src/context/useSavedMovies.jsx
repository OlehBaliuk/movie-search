import React, { createContext, useState, useContext, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { db } from '@firebaseConfig';

const ContextSavedMovies = createContext();

const ContextSavedMoviesProvider = props => {
    const user = useSelector(state => state.user);
    const [savedMovies, setSavedMovies] = useState([]);

    const getSavedMovies = async () => {
        try {
            onSnapshot(collection(db, `users/${user.uid}/savedMovies`), querySnapshot => {
                const list = [];
                querySnapshot.forEach(doc => {
                    list.push(doc.data());
                });
                setSavedMovies(list);
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (user.email) {
            getSavedMovies();
        }
    }, [user.email]);

    const value = { savedMovies };

    return <ContextSavedMovies.Provider value={value} {...props} />;
};

const useSavedMovies = () => {
    const context = useContext(ContextSavedMovies);

    if (context === undefined) {
        throw new Error('useSavedMovies was used outside of its Provider');
    }

    return context;
};

export { useSavedMovies, ContextSavedMoviesProvider };
