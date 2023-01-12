import React from 'react';
import { Input } from './Input.styled';

export const CustomInput = ({ handleSubmit, handleChange, value, type, placeholder, className }) => {
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
