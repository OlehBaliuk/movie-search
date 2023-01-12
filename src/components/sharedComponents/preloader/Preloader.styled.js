import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
 0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}
`;

const PreloaderContainer = styled.img`
    animation: ${rotate} 4s linear infinite;
    width: 90px;
    height: 90px;
    margin: 200px auto;
`;

export { PreloaderContainer };
