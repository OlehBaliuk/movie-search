import React from 'react';
import { db } from '@firebaseConfig';
import { setDoc, doc, deleteDoc } from 'firebase/firestore';
import { useAuth, useSavedMovies } from '@context';
import { getRequestPayload } from '@helpers';

export const useSavedList = movie => {
    const { user } = useAuth();
    const { savedMovies } = useSavedMovies();

    const isSavedMovie = savedMovies.some(savedMovie => savedMovie.id === movie.id);

    const addMovieToSavedList = async e => {
        e.preventDefault();

        try {
            const docRef = doc(db, `users/${user.uid}/savedMovies`, `${movie.id}`);
            await setDoc(docRef, getRequestPayload(movie));
        } catch (e) {
            console.log('Error adding document: ', e);
        }
    };

    const deleteMovieFromSavedList = async e => {
        e.preventDefault();

        try {
            const docRef = doc(db, `users/${user.uid}/savedMovies`, `${movie.id}`);
            await deleteDoc(docRef);
        } catch (error) {
            console.log(error);
        }
    };

    return { user, isSavedMovie, addMovieToSavedList, deleteMovieFromSavedList };
};
