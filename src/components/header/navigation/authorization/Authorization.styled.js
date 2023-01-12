import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavAuthContainer = styled.nav`
    display: flex;
`;

const Text = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SaveIcon = styled.img`
    width: 40px;
    height: 40px;
    margin: 5px;
`;

const StyledAuthLink = styled(Link)`
    display: flex;
    align-items: center;
    padding-left: 10px;
    color: white;
    font-weight: 500;
`;

export { NavAuthContainer, Text, SaveIcon, StyledAuthLink };
