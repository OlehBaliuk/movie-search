import React, { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUserToState } from '@actionsUserReducer';
import { AuthResponse } from '@interfaces';

const useRegistrationPageState = () => {
    const navigate = useNavigate();
    const auth = getAuth();
    const [createUserWithEmailAndPassword, , loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [modalActive, setModalActive] = useState<boolean>();
    const dispatch = useDispatch();

    const handleRegistration = async (email: string, password: string) => {
        try {
            const response = (await createUserWithEmailAndPassword(email, password)) as AuthResponse;

            dispatch(addUserToState({ email: response.user.email, uid: response.user.uid }));

            navigate('/');
        } catch {
            setModalActive(true);
        }
    };

    return { handleRegistration, modalActive, setModalActive, loading, error };
};

export default useRegistrationPageState;
