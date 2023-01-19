import React, { useState, ChangeEvent, FC, SyntheticEvent } from 'react';
import { CustomButton, Preloader } from '@sharedComponents';
import { FormContainer, Input } from './Form.styled';
import { FormProps } from './types';

export const Form: FC<FormProps> = ({ handleSubmit, isRegistration, loading }) => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [repeatPassword, setRepeatPassword] = useState<string>('');

    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        handleSubmit(login, password);
    };

    const isDisableSubmitButtonLogin = !login || !password;
    const isDisableSubmitButtonRegistration = !login || !password || repeatPassword !== password;

    return loading ? (
        <Preloader />
    ) : (
        <FormContainer>
            <Input
                type="text"
                value={login}
                placeholder="Login"
                onChange={(e: ChangeEvent<HTMLInputElement>): void => setLogin(e.target.value)}
            />
            <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>): void => setPassword(e.target.value)}
            />
            {isRegistration && (
                <Input
                    type="password"
                    placeholder="Repeat password"
                    value={repeatPassword}
                    onChange={(e: ChangeEvent<HTMLInputElement>): void => setRepeatPassword(e.target.value)}
                />
            )}
            <CustomButton
                title={'Submit'}
                handleClick={onSubmit}
                isDisable={isRegistration ? isDisableSubmitButtonRegistration : isDisableSubmitButtonLogin}
            />
        </FormContainer>
    );
};
