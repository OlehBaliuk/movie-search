import styled from 'styled-components';
import { MediumHeaderProps } from './types';

export const MediumHeader = styled.h2<MediumHeaderProps>`
    color: ${props => props.color || 'white'};
    text-align: ${props => props.textAlign || 'start'};
`;
