import React, { FC } from 'react';
import { Button } from './CustomButton.styled';
import { CustomButtonProps } from './types';

export const CustomButton: FC<CustomButtonProps> = ({ title, handleClick, isDisable }) => {
    return (
        <Button type="submit" onClick={e => handleClick(e)} disabled={isDisable}>
            {title}
        </Button>
    );
};
