import React from 'react';

import { Form, ErrorModal } from '@sharedComponents';
import useRegistrationPageState from './useRegistrationPageState';
import './index.scss';

export const RegistrationPage = () => {
    const { handleRegistration, modalActive, setModalActive, loading, error } = useRegistrationPageState();

    return (
        <main>
            <div className="main-content-wrapper">
                <h1 className="registration-title">Registration</h1>
                <Form handleSubmit={handleRegistration} registration={true} loading={loading} />
                {error && <ErrorModal active={modalActive} setActive={setModalActive} message={error.message} />}
            </div>
        </main>
    );
};
