import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@constants';
import { CustomInput } from '@sharedComponents';
import { InputSearchContainer, SearchList } from './InputSearch.styled';

export const InputSearch = ({
    searchValue,
    searchMovies,
    handleChange,
    redirectToSearchPage,
    isFetching,
    type,
    placeholder,
}) => {
    return (
        <InputSearchContainer>
            <CustomInput
                handleSubmit={redirectToSearchPage}
                handleChange={handleChange}
                value={searchValue}
                type={type}
                placeholder={placeholder}
            />
            {searchValue && !isFetching && (
                <SearchList>
                    {searchMovies?.map(movie => (
                        <li key={movie.id}>
                            <Link to={`${ROUTES.movie}/${movie.id}`}>{movie.title}</Link>
                        </li>
                    ))}
                    {!searchMovies?.length && !isFetching && <li>no result..</li>}
                </SearchList>
            )}
        </InputSearchContainer>
    );
};
