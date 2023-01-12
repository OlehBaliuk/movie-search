import background from '@images/background.jpg';
import styled from 'styled-components';

const LayoutContainer = styled.div`
    text-align: center;
    background-image: url(${background});
    background-attachment: fixed;
    background-size: cover;
    min-height: 100vh;
`;

const Main = styled.main`
    padding: 0 10%;
`;

const MainContainer = styled.div`
    background: rgba(0, 0, 0, 0.5);
    min-height: calc(100vh - 50px);
`;

export { LayoutContainer, Main, MainContainer };
