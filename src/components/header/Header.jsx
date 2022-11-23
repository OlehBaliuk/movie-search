import React, { useEffect, useContext, useState } from 'react';
import './index.scss';
import { useContextData } from '../../context/index';
import movieLogo from '../../images/movieLogo.svg';

const Header = () => {
    const [categoriesList] = useState(['Popular', 'Top', 'Upcoming', 'Now in the cinema']);
    const { setCategory } = useContextData();

    return (
        <header className="header">
            <div className="header__nav-wrapper">
                <img
                    className="logo"
                    src={movieLogo}
                    alt="movie"
                />
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__list-item">
                            <strong className="nav__list-item-title">Movies</strong>
                            <ul className="nav__options">
                                {categoriesList.map((category, i) => (
                                    <li
                                        className="nav__options-item"
                                        onClick={() => setCategory(category)}
                                        key={i}
                                    >
                                        {category}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>

            <input
                className="input-search"
                type="text"
                placeholder="Search..."
            />

            <div className="header__profile-wrapper">
                <div className="header__profile-avatar"></div>
            </div>
        </header>
    );
};

export default Header;
