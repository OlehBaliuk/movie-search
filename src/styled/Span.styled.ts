import styled from 'styled-components';
import { SpanProps } from './types';

export const Span = styled.span<SpanProps>`
    font-size: ${props => props.fontSize || '1rem'};
`;
