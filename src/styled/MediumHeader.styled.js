import styled from 'styled-components';

export const MediumHeader = styled.h2`
    color: ${props => props.color || 'white'};
    text-align: ${props => props.textAlign || 'start'};
`;
