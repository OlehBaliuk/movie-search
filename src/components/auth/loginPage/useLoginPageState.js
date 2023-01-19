import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { collection, onSnapshot } from 'firebase/firestore';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addSavedMoviesToState, saveErrorMessage } from '@actionsSavedMoviesReducer';
import { addUserToState } from '@actionsUserReducer';
import { db } from '@firebaseConfig';

const useLoginPageState = () => {
    const navigate = useNavigate();
    const auth = getAuth();
    const [signInWithEmailAndPassword, , loading, error] = useSignInWithEmailAndPassword(auth);
    const [modalActive, setModalActive] = useState();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const handleLogin = async (email, password) => {
        try {
            const response = await signInWithEmailAndPassword(email, password);

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
                const list = [];
                querySnapshot.forEach(doc => {
                    list.push(doc.data());
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
