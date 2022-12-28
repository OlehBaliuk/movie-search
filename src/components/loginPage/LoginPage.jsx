import React from 'react';
import { Modal, Form } from '@sharedComponents';
import useLoginPageState from './useLoginPageState';
import './index.scss';

const LoginPage = () => {
    const { handleLogin, modalActive, setModalActive, loading, error } = useLoginPageState();

    return (
        <main>
            <div className="main-content-wrapper">
                <h1 className="login-title">Login</h1>
                <Form handleSubmit={handleLogin} loading={loading} />
                <Modal active={modalActive} setActive={setModalActive}>
                    {error?.message}
                </Modal>
            </div>
        </main>
    );
};

export default LoginPage;
