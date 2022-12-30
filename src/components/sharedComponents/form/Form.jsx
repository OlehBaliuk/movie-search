import React, { useState } from 'react';
import './index.scss';
import { Button, Preloader } from '@sharedComponents';

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
        <form className="form">
            <input
                className="form__input-field"
                type="text"
                value={login}
                placeholder="Login"
                onChange={e => setLogin(e.target.value)}
            />
            <input
                className="form__input-field"
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            {registration && (
                <input
                    className="form__input-field"
                    type="password"
                    placeholder="Repeat password"
                    value={repeatPassword}
                    onChange={e => setRepeatPassword(e.target.value)}
                />
            )}
            <Button
                title={'Submit'}
                handleClick={onSubmit}
                isDisable={registration ? isDisableSubmitButtonRegistration : isDisableSubmitButtonLogin}
            />
        </form>
    );
};
