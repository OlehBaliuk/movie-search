import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';

const useRegistrationPageState = () => {
    const navigate = useNavigate();
    const auth = getAuth();
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const { setUser } = useAuth();
    const [modalActive, setModalActive] = useState();

    const handleRegistration = async (email, password) => {
        try {
            const response = await createUserWithEmailAndPassword(email, password);
            setUser(response.user.email);
            navigate('/');
        } catch {
            setModalActive(true);
        }
    };

    return { handleRegistration, modalActive, setModalActive, loading, error };
};

export default useRegistrationPageState;
