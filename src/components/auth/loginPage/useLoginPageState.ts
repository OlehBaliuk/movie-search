import React, { useState, useEffect } from 'react';
import { IAuthResponse } from '@interfaces';
import { getAuth } from 'firebase/auth';
import { collection, onSnapshot } from 'firebase/firestore';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addSavedMoviesToState } from '@actionsSavedMoviesReducer';
import { addUserToState } from '@actionsUserReducer';
import { db } from '@firebaseConfig';

interface IList {
    id: number;
    overview: string;
    poster_path: string;
    release_date: string;
    savedTimestamp: number;
    title: string;
    vote_average: number;
}

const useLoginPageState = () => {
    const navigate = useNavigate();
    const auth = getAuth();
    const [signInWithEmailAndPassword, , loading, error] = useSignInWithEmailAndPassword(auth);
    const [modalActive, setModalActive] = useState<boolean>(false);
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user);

    const handleLogin = async (email: string, password: string) => {
        try {
            const response = (await signInWithEmailAndPassword(email, password)) as IAuthResponse;

            dispatch(addUserToState({ email: response.user.email, uid: response.user.uid }));

            navigate('/');
        } catch {
            setModalActive(true);
        }
    };

    const getSavedMovies = async () => {
        try {
            onSnapshot(collection(db, `users/${user.uid}/savedMovies`), querySnapshot => {
                const list: IList[] = [];
                querySnapshot.forEach(doc => {
                    list.push(doc.data() as IList);
                });
                list.sort((prev, next) => next.savedTimestamp - prev.savedTimestamp);
                dispatch(addSavedMoviesToState(list));
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

    return { handleLogin, modalActive, setModalActive, loading, error };
};

export default useLoginPageState;
