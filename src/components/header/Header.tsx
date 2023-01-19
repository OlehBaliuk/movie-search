import React from 'react';
import { HeaderContainer } from './Header.styled';
import { InputSearch } from './inputSearch/InputSearch';
import Authorization from './navigation/authorization/Authorization';
import Categories from './navigation/categories/Categories';
import useHeaderState from './useHeaderState';

export const Header = () => {
    const {
        isSearchInputVisible,
        user,
        searchMovies,
        isFetching,
        searchValue,
        handleChange,
        redirectToSearchPage,
        redirectToCategoryPage,
    } = useHeaderState();

    return (
        <HeaderContainer>
            <Categories redirectToCategoryPage={redirectToCategoryPage} />

            {isSearchInputVisible && (
                <InputSearch
                    searchValue={searchValue}
                    searchMovies={searchMovies}
                    handleChange={handleChange}
                    redirectToSearchPage={redirectToSearchPage}
                    isFetching={isFetching}
                    placeholder="Search..."
                    type="search"
                />
            )}

            <Authorization user={user} />
        </HeaderContainer>
    );
};
