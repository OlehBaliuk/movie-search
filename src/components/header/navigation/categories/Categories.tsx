import React, { FC } from 'react';
import movieLogo from '@images/movieLogo.svg';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { CATEGORIES } from '@constants';
import { getCapitalize } from '@helpers';
import { CategoriesContainer, Logo, Nav, NavOptions, NavList, List } from './Categories.styled';
import { CategoriesProps } from './types';

const Categories: FC<CategoriesProps> = ({ redirectToCategoryPage }) => {
    const [searchParams] = useSearchParams();
    const categoryQuery = searchParams.get('category');

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
                                <List
                                    active={`${category === categoryQuery}`}
                                    onClick={e => redirectToCategoryPage(e, category)}
                                    key={index}
                                >
                                    {getCapitalize(category)}
                                </List>
                            ))}
                        </NavOptions>
                    </li>
                </NavList>
            </Nav>
        </CategoriesContainer>
    );
};

export default Categories;
