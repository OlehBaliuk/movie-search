import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../../constants/routes';
import './index.scss';

const InputSearch = ({ searchValue, searchMovies, setSearchValue, redirectToSearchPage, isFetching }) => {
    return (
        <div className="input-search-wrapper">
            <form onSubmit={redirectToSearchPage}>
                <input
                    className="input-search"
                    type="search"
                    placeholder="Search..."
                    onChange={e => setSearchValue(e.target.value)}
                    value={searchValue}
                />
            </form>
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

export default InputSearch;
