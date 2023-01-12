import styled from 'styled-components';

export const FlexContainer = styled.div`
    display: flex;
    justify-content: ${props => props.justify || 'center'};
    align-items: ${props => props.align || 'center'};
    flex-wrap: ${props => props.wpar || 'wrap'};
    flex-direction: ${props => props.direction || 'row'};
    text-align: ${props => props.textAlign || 'center'};
`;
