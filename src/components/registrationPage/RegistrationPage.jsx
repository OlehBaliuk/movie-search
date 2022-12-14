import React from 'react';
import { Form, Modal } from '@sharedComponents';
import useRegistrationPageState from './useRegistrationPageState';
import './index.scss';

const RegistrationPage = () => {
    const { handleRegistration, modalActive, setModalActive, loading, error } = useRegistrationPageState();

    return (
        <>
            <h1 className="registration-title">Registration</h1>
            <Form handleSubmit={handleRegistration} registration={true} loading={loading} />
            <Modal active={modalActive} setActive={setModalActive}>
                {error?.message}
            </Modal>
        </>
    );
};

export default RegistrationPage;
