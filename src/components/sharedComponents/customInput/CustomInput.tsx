import React, { FC } from 'react';
import { Input } from './Input.styled';
import { CustomInputProps } from './types';

export const CustomInput: FC<CustomInputProps> = ({
    handleSubmit,
    handleChange,
    value,
    type,
    placeholder,
    className,
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Input
                className={`${className || 'input-search'}`}
                type={type}
                placeholder={placeholder}
                onChange={handleChange}
                value={value}
            />
        </form>
    );
};
