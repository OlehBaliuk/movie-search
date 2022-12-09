import React from 'react';
import useRegistrationPageState from './useRegistrationPageState';
import Form from '../sharedComponents/form/Form';
import Modal from '../sharedComponents/modal/Modal';
import './index.scss';

const RegistrationPage = () => {
    const { handleRegistration, modalActive, setModalActive, loading, error } = useRegistrationPageState();

    return (
        <>
            <h1>Registration</h1>
            <Form handleSubmit={handleRegistration} registration={true} loading={loading} />
            <Modal active={modalActive} setActive={setModalActive}>
                {error?.message}
            </Modal>
        </>
    );
};

export default RegistrationPage;
