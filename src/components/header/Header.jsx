import React, { useEffect, useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import api from '../../api/api';
import CATEGORIES from '../../constants/categories';
import ROUTES from '../../constants/routes';
import { useAuth } from '../../context/useAuth';
import { useMovies } from '../../context/useMovies';
import useSearchMovies from '../../customHooks/useSearchMovies';
import movieLogo from '../../images/movieLogo.svg';
import Button from '../sharedComponents/button/Button';
import InputSearch from '../sharedComponents/inputSearch/InputSearch';

const Header = () => {
    const [categoriesList] = useState(CATEGORIES);
    const { setCategory } = useMovies();
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
