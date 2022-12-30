import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@components';

export const Layout = () => {
    return (
        <div className="App">
            <Header />
            <Outlet />
        </div>
    );
};
