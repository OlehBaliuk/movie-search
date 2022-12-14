import React, { useEffect, useState } from 'react';
import movieLogo from '@images/movieLogo.svg';
import { useNavigate, createSearchParams, useLocation, Link } from 'react-router-dom';
import { ROUTES, CATEGORIES } from '@constants';
import { useAuth } from '@context';
import { useSearchMovies } from '@customHooks';
import { InputSearch, Button } from '@sharedComponents';
import './index.scss';

const Header = () => {
    const [categoriesList] = useState(CATEGORIES);
    const { user, setUser } = useAuth();
    const [searchValue, setSearchValue] = useState('');
    const [searchMovies, setSearchMovies] = useState(null);
    const { isFetching } = useSearchMovies(searchValue, setSearchMovies);
    const navigate = useNavigate();
    let location = useLocation();

    useEffect(() => {
        return () => {
            setSearchValue('');
        };
    }, [location.pathname, location.search]);

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

            <InputSearch
                searchValue={searchValue}
                searchMovies={searchMovies}
                setSearchValue={setSearchValue}
                redirectToSearchPage={redirectToSearchPage}
                isFetching={isFetching}
            />

            <div className="header__profile-wrapper">
                <p className="header__user-name">{user}</p>
                {user ? (
                    <Button title={'Log Out'} handleClick={() => setUser(null)} />
                ) : (
                    <>
                        <Link to={`${ROUTES.registration}`} className="header__auth">
                            Registration
                        </Link>
                        <Link to={`${ROUTES.login}`} className="header__auth">
                            Login
                        </Link>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
