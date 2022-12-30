import React from 'react';
import './index.scss';

export const Input = ({ handleSubmit, handleChange, value, type, placeholder }) => {
    return (
        <form onSubmit={handleSubmit}>
            <input
                className="input-search"
                type={type}
                placeholder={placeholder}
                onChange={handleChange}
                value={value}
            />
        </form>
    );
};
