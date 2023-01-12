import React from 'react';
import saveIcon from '@images/save.svg';
import { Link } from 'react-router-dom';
import { ROUTES } from '@constants';
import { CustomButton } from '@sharedComponents';
import { NavAuthContainer, Text, SaveIcon, StyledAuthLink } from './Authorization.styled';

const Authorization = ({ user, setUser }) => {
    return (
        <NavAuthContainer>
            {user ? (
                <>
                    <Text>{user.email}</Text>
                    <Link to={ROUTES.savedList}>
                        <SaveIcon src={saveIcon} alt="movie" />
                    </Link>
                    <CustomButton title="Log Out" handleClick={() => setUser(null)} />
                </>
            ) : (
                <>
                    <StyledAuthLink to={ROUTES.registration}>Registration</StyledAuthLink>
                    <StyledAuthLink to={ROUTES.login}>Login</StyledAuthLink>
                </>
            )}
        </NavAuthContainer>
    );
};

export default Authorization;
