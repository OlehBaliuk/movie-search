import React from 'react';
import { ErrorModal, Form } from '@sharedComponents';
import useLoginPageState from './useLoginPageState';
import './index.scss';

export const LoginPage = () => {
    const { handleLogin, modalActive, setModalActive, loading, error } = useLoginPageState();

    return (
        <main>
            <div className="main-content-wrapper">
                <h1 className="login-title">Login</h1>
                <Form handleSubmit={handleLogin} loading={loading} />
                {error && <ErrorModal active={modalActive} setActive={setModalActive} message={error.message} />}
            </div>
        </main>
    );
};
