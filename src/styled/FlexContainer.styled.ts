import styled, { css } from 'styled-components';

interface IFlexContainerProps {
    justify?: string;
    direction?: string;
    wpar?: string;
    align?: string;
    textAlign?: string;
    padding?: string;
}

export const FlexContainer = styled.div<IFlexContainerProps>`
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
