import React, { useState } from 'react';
import { CustomButton, Preloader } from '@sharedComponents';
import { FormContainer, Input } from './Form.styled';

export const Form = ({ handleSubmit, registration, loading }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        handleSubmit(login, password);
    };

    const isDisableSubmitButtonLogin = !login || !password;
    const isDisableSubmitButtonRegistration = !login || !password || repeatPassword !== password;

    return loading ? (
        <Preloader />
    ) : (
        <FormContainer>
            <Input type="text" value={login} placeholder="Login" onChange={e => setLogin(e.target.value)} />
            <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            {registration && (
                <Input
                    type="password"
                    placeholder="Repeat password"
                    value={repeatPassword}
                    onChange={e => setRepeatPassword(e.target.value)}
                />
            )}
            <CustomButton
                title={'Submit'}
                handleClick={onSubmit}
                isDisable={registration ? isDisableSubmitButtonRegistration : isDisableSubmitButtonLogin}
            />
        </FormContainer>
    );
};
