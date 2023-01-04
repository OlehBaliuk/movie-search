import React from 'react';
import movieLogo from '@images/movieLogo.svg';
import saveIcon from '@images/save.svg';
import { Link } from 'react-router-dom';
import { ROUTES, CATEGORIES } from '@constants';
import { getCapitalize } from '@helpers';
import { InputSearch, Button } from '@sharedComponents';
import useHeaderState from './useHeaderState';
import './index.scss';

export const Header = () => {
    const {
        isSearchInputVisible,
        user,
        setUser,
        searchMovies,
        isFetching,
        searchValue,
        handleChange,
        redirectToSearchPage,
        redirectToCategoryPage,
    } = useHeaderState();

    return (
        <header className="header">
            <div className="header__nav-wrapper">
                <Link to="/">
                    <img className="logo" src={movieLogo} alt="movie" />
                </Link>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__list-item">
                            <strong>Movies</strong>
                            <ul className="nav__options">
                                {Object.values(CATEGORIES).map((category, index) => (
                                    <li
                                        onClick={e => redirectToCategoryPage(e, category)}
                                        className="nav__options-item"
                                        key={index}
                                    >
                                        {getCapitalize(category)}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>

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

            <div className="header__profile-wrapper">
                {user ? (
                    <>
                        <p className="header__user-name">{user.email}</p>
                        <Link to={ROUTES.savedList}>
                            <img className="header-save-icon" src={saveIcon} alt="movie" />
                        </Link>
                        <Button title="Log Out" handleClick={() => setUser(null)} />
                    </>
                ) : (
                    <>
                        <Link to={ROUTES.registration} className="header__auth">
                            Registration
                        </Link>
                        <Link to={ROUTES.login} className="header__auth">
                            Login
                        </Link>
                    </>
                )}
            </div>
        </header>
    );
};
