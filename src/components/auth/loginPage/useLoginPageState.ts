import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { collection, onSnapshot } from 'firebase/firestore';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addSavedMoviesToState, saveErrorMessage } from '@actionsSavedMoviesReducer';
import { addUserToState } from '@actionsUserReducer';
import { db } from '@firebaseConfig';
import { AuthResponse } from '@interfaces';
import { List } from './types';

const useLoginPageState = () => {
    const navigate = useNavigate();
    const auth = getAuth();
    const [signInWithEmailAndPassword, , loading, error] = useSignInWithEmailAndPassword(auth);
    const [modalActive, setModalActive] = useState<boolean>(false);
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user);

    const handleLogin = async (email: string, password: string) => {
        try {
            const response = (await signInWithEmailAndPassword(email, password)) as AuthResponse;

            dispatch(addUserToState({ email: response.user.email, uid: response.user.uid }));

            navigate('/');
        } catch {
            setModalActive(true);
        }
    };

    const getSavedMovies = async () => {
        onSnapshot(
            collection(db, `users/${user.uid}/savedMovies`),
            querySnapshot => {
                const list: List[] = [];
                querySnapshot.forEach(doc => {
                    list.push(doc.data() as List);
                });
                list.sort((prev, next) => next.savedTimestamp - prev.savedTimestamp);
                dispatch(addSavedMoviesToState(list));
            },
            error => {
                dispatch(saveErrorMessage(error.message));
            },
        );
    };

    useEffect(() => {
        if (user.email) {
            getSavedMovies();
        }
    }, [user.email]);

    return { handleLogin, modalActive, setModalActive, loading, error };
};

export default useLoginPageState;
