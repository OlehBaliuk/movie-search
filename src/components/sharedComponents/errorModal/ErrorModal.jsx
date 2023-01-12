import React from 'react';
import { useAuthErrorHandler } from '@customHooks';
import { Modal, ModalContainer } from './ErrorModal.styled';

export const ErrorModal = ({ active, setActive, message }) => {
    const { displayCustomAuthError } = useAuthErrorHandler();

    return (
        <Modal active={active} onClick={() => setActive(false)}>
            <ModalContainer active={active} onClick={e => e.stopPropagation()}>
                {displayCustomAuthError(message)}
            </ModalContainer>
        </Modal>
    );
};
