import React from 'react';
import { ErrorModal } from '@sharedComponents';
import { LargeHeader } from '@sharedStyledComponents';
import { Form } from '../form/Form';
import useRegistrationPageState from './useRegistrationPageState';

export const RegistrationPage = () => {
    const { handleRegistration, modalActive, setModalActive, loading, error } = useRegistrationPageState();

    return (
        <>
            <LargeHeader>Registration</LargeHeader>
            <Form handleSubmit={handleRegistration} registration={true} loading={loading} />
            {error && <ErrorModal active={modalActive} setActive={setModalActive} message={error.message} />}
        </>
    );
};
