import React, { useEffect, useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import CATEGORIES from '../../constants/categories';
import useSearchMovies from '../../customHooks/useSearchMovies';
import movieLogo from '../../images/movieLogo.svg';

const Header = () => {
    const [categoriesList] = useState(CATEGORIES);
    const [searchValue, setSearchValue] = useState('');
    const [searchMovies, setSearchMovies] = useState(null);
    const { isFetching } = useSearchMovies(searchValue, setSearchMovies);
    const navigate = useNavigate();
    let location = useLocation();

    useEffect(() => {
        return () => {
            setSearchValue('');
        };
    }, [location.pathname]);

    const redirectToSearchPage = e => {
        e.preventDefault();
        if (searchValue) {
            navigate({
                pathname: 'search',
                search: `${createSearchParams({ filmName: searchValue })}`,
            });
        }
    };

    return (
        <header className="header">
            <div className="header__nav-wrapper">
                <Link to="/">
                    <img className="logo" src={movieLogo} alt="movie" />
                </Link>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__list-item">
                            <strong className="nav__list-item-title">Movies</strong>
                            <ul className="nav__options">
                                {categoriesList.map((category, i) => (
                                    <li className="nav__options-item" key={i}>
                                        <Link to="/">{category}</Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="form-container">
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
                                <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                            </li>
                        ))}
                        {!searchMovies?.length && !isFetching && <li>no result..</li>}
                    </ul>
                )}
            </div>

            <div className="header__profile-wrapper">
                <div className="header__profile-avatar"></div>
            </div>
        </header>
    );
};

export default Header;
