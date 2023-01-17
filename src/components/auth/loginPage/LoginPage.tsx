import React from 'react';
import { ErrorModal } from '@sharedComponents';
import { LargeHeader } from '@sharedStyledComponents';
import { Form } from '../form/Form';
import useLoginPageState from './useLoginPageState';

export const LoginPage = () => {
    const { handleLogin, modalActive, setModalActive, loading, error } = useLoginPageState();

    return (
        <>
            <LargeHeader>Login</LargeHeader>
            <Form handleSubmit={handleLogin} loading={loading} />
            {error && <ErrorModal active={modalActive} setActive={setModalActive} message={error.message} />}
        </>
    );
};
