import React, { useState } from 'react';
import { addUserToState } from '@store';
import { getAuth } from 'firebase/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useLoginPageState = () => {
    const navigate = useNavigate();
    const auth = getAuth();
    const [signInWithEmailAndPassword, , loading, error] = useSignInWithEmailAndPassword(auth);
    const [modalActive, setModalActive] = useState();
    const dispatch = useDispatch();

    const handleLogin = async (email, password) => {
        try {
            const response = await signInWithEmailAndPassword(email, password);

            dispatch(addUserToState({ email: response.user.email, uid: response.user.uid }));

            navigate('/');
        } catch {
            setModalActive(true);
        }
    };

    return { handleLogin, modalActive, setModalActive, loading, error };
};

export default useLoginPageState;
