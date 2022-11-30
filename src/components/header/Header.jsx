import React, { useEffect, useContext, useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import api from '../../api/api';
import { useContextData } from '../../context/index';
import movieLogo from '../../images/movieLogo.svg';

const Header = () => {
    const [categoriesList] = useState(['Popular', 'Top', 'Upcoming', 'Now in the cinema']);
    const { setCategory } = useContextData();
    const [searchValue, setSearchValue] = useState('');
    const [searchMovies, setSearchMovies] = useState([]);

    useEffect(() => {
        if (searchValue) {
            async function fetchData(searchValue) {
                const response = await api.getSearchMovie(searchValue);
                setSearchMovies(response.results);
            }
            fetchData(searchValue);
        }
    }, [searchValue]);

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
                                    <li className="nav__options-item" onClick={() => setCategory(category)} key={i}>
                                        <Link to="/">{category}</Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="input-search-wrapper">
                <input
                    className="input-search"
                    type="search"
                    placeholder="Search..."
                    onChange={e => setSearchValue(e.target.value)}
                    value={searchValue}
                />
                {searchValue && (
                    <ul className="input-search__list">
                        {searchMovies?.map(movie => (
                            <li className="input-search__item" key={movie.id}>
                                <Link to={`/movie/${movie.id}`} onClick={() => setSearchValue('')}>
                                    {movie.title}
                                </Link>
                            </li>
                        ))}
                        {!searchMovies.length && <li>no result..</li>}
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
