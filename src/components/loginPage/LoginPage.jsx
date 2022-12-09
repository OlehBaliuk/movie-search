import React from 'react';
import useLoginPageState from './useLoginPageState';
import Form from '../sharedComponents/form/Form';
import Modal from '../sharedComponents/modal/Modal';
import './index.scss';

const LoginPage = () => {
    const { handleLogin, modalActive, setModalActive, loading, error } = useLoginPageState();

    return (
        <>
            <h1>Login</h1>
            <Form handleSubmit={handleLogin} loading={loading} />
            <Modal active={modalActive} setActive={setModalActive}>
                {error?.message}
            </Modal>
        </>
    );
};

export default LoginPage;
