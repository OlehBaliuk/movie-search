import React from 'react';
import movieLogo from '@images/movieLogo.svg';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '@constants';
import { getCapitalize } from '@helpers';
import { CategoriesContainer, Logo, Nav, NavOptions, NavList } from './Categories.styled';

const Categories = ({ redirectToCategoryPage }) => {
    return (
        <CategoriesContainer>
            <Link to="/">
                <Logo src={movieLogo} alt="movie" />
            </Link>
            <Nav>
                <NavList>
                    <li>
                        <strong>Movies</strong>
                        <NavOptions>
                            {Object.values(CATEGORIES).map((category, index) => (
                                <li onClick={e => redirectToCategoryPage(e, category)} key={index}>
                                    {getCapitalize(category)}
                                </li>
                            ))}
                        </NavOptions>
                    </li>
                </NavList>
            </Nav>
        </CategoriesContainer>
    );
};

export default Categories;
