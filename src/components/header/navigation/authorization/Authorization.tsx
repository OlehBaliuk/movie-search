import React, { FC } from 'react';
import saveIcon from '@images/save.svg';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { clearUserState } from '@actionsUserReducer';
import { ROUTES } from '@constants';
import { CustomButton } from '@sharedComponents';
import { NavAuthContainer, Text, SaveIcon, StyledAuthLink } from './Authorization.styled';
import { AuthorizationProps } from './types';

const Authorization: FC<AuthorizationProps> = ({ user }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogOut = () => {
        dispatch(clearUserState());
        navigate('/');
    };

    return (
        <NavAuthContainer>
            {user.email ? (
                <>
                    <Text>{user.email}</Text>
                    <Link to={ROUTES.savedList}>
                        <SaveIcon src={saveIcon} alt="movie" />
                    </Link>
                    <CustomButton title="Log Out" handleClick={handleLogOut} />
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
