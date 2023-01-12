import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@components';
import { LayoutContainer, Main, MainContainer } from './Layout.styled';

export const Layout = () => {
    return (
        <LayoutContainer>
            <Header />
            <Main>
                <MainContainer>
                    <Outlet />
                </MainContainer>
            </Main>
        </LayoutContainer>
    );
};
