import styled, { css } from 'styled-components';
import { ModalProps } from './types';

const Modal = styled.div<ModalProps>`
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: 0.5s;

    ${props =>
        props.active &&
        css`
            opacity: 1;
            pointer-events: all;
        `}
`;

const ModalContainer = styled.div<ModalProps>`
    padding: 20px;
    border-radius: 10px;
    background-color: white;
    width: 30%;
    min-height: 150px;
    transform: scale(0.5);
    transition: 0.4s all;
    display: flex;
    align-items: center;
    justify-content: center;

    ${props =>
        props.active &&
        css`
            transform: scale(1);
            color: red;
        `}
`;

export { Modal, ModalContainer };
