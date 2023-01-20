import React, { MouseEvent } from 'react';
import { setDoc, doc, deleteDoc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { db } from '@firebaseConfig';
import { getRequestPayload } from '@helpers';
import { Movie } from '@interfaces';

export const useSavedList = (movie: Movie) => {
    const user = useSelector((state: any) => state.user);
    const { movies } = useSelector((state: any) => state.savedMovies);

    const isSavedMovie = movies.some((savedMovie: Movie) => savedMovie.id === movie.id);

    const addMovieToSavedList = async (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();

        try {
            const docRef = doc(db, `users/${user.uid}/savedMovies`, `${movie.id}`);
            await setDoc(docRef, getRequestPayload(movie));
        } catch (e) {
            console.log('Error adding document: ', e);
        }
    };

    const deleteMovieFromSavedList = async (e: MouseEvent<HTMLElement>) => {
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
