import styled, { css } from 'styled-components';
import { FlexContainerProps } from './types';

export const FlexContainer = styled.div<FlexContainerProps>`
    display: flex;
    justify-content: ${props => props.justify || 'center'};
    align-items: ${props => props.align || 'center'};
    flex-wrap: ${props => props.wpar || 'wrap'};
    flex-direction: ${props => props.direction || 'row'};
    text-align: ${props => props.textAlign || 'center'};

    ${props =>
        props.padding &&
        css`
            padding: ${props.padding};
        `}
`;
