import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@constants';
import { Input } from '@sharedComponents';
import './index.scss';

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
        <div className="input-search-wrapper">
            <Input
                handleSubmit={redirectToSearchPage}
                handleChange={handleChange}
                value={searchValue}
                type={type}
                placeholder={placeholder}
            />
            {searchValue && !isFetching && (
                <ul className="input-search__list">
                    {searchMovies?.map(movie => (
                        <li className="input-search__item" key={movie.id}>
                            <Link to={`${ROUTES.movie}/${movie.id}`}>{movie.title}</Link>
                        </li>
                    ))}
                    {!searchMovies?.length && !isFetching && <li>no result..</li>}
                </ul>
            )}
        </div>
    );
};
