import React from 'react';
import { Button } from './CustomButton.styled';

export const CustomButton = ({ title, handleClick, isDisable }) => {
    return (
        <Button type="submit" onClick={e => handleClick(e)} disabled={isDisable}>
            {title}
        </Button>
    );
};
