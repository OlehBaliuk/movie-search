import React, { useState } from 'react';
import { addUserToState } from '@store';
import { getAuth } from 'firebase/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useRegistrationPageState = () => {
    const navigate = useNavigate();
    const auth = getAuth();
    const [createUserWithEmailAndPassword, , loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [modalActive, setModalActive] = useState();
    const dispatch = useDispatch();

    const handleRegistration = async (email, password) => {
        try {
            const response = await createUserWithEmailAndPassword(email, password);

            dispatch(addUserToState({ email: response.user.email, uid: response.user.uid }));

            navigate('/');
        } catch {
            setModalActive(true);
        }
    };

    return { handleRegistration, modalActive, setModalActive, loading, error };
};

export default useRegistrationPageState;
