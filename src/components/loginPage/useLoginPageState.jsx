import React, { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@context';

const useLoginPageState = () => {
    const navigate = useNavigate();
    const auth = getAuth();
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const { setUser } = useAuth();
    const [modalActive, setModalActive] = useState();

    const handleLogin = async (email, password) => {
        try {
            const response = await signInWithEmailAndPassword(email, password);
            setUser(response.user.email);
            navigate('/');
        } catch {
            setModalActive(true);
        }
    };

    return { handleLogin, modalActive, setModalActive, loading, error };
};

export default useLoginPageState;
