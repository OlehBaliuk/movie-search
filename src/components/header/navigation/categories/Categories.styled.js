import styled, { css } from 'styled-components';

const CategoriesContainer = styled.div`
    display: flex;
`;

const Logo = styled.img`
    width: 40px;
    height: 40px;
    margin: 5px 0;
`;

const Nav = styled.nav`
    margin-left: 20px;
`;

const NavOptions = styled.ul`
    display: none;
    position: absolute;
    padding: 10px;
    text-align: start;
    left: 0;
    top: 50px;
    width: 160px;
    background-color: orange;
    border: 2px solid orange;
    border-radius: 5px;
    z-index: 100;
`;

const NavList = styled.ul`
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;

    &:hover ${NavOptions} {
        display: block;
        cursor: pointer;
    }
`;

const List = styled.li`
    ${props =>
        props.active === 'true' &&
        css`
            color: black;
        `}
`;

export { CategoriesContainer, Logo, Nav, NavOptions, NavList, List };
