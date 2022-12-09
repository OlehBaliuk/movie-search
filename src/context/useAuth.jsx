import React, { createContext, useState, useContext } from 'react';

const ContextAuth = createContext();

const ContextAuthProvider = props => {
    const [user, setUser] = useState('');

    const value = { user, setUser };

    return <ContextAuth.Provider value={value} {...props} />;
};

const useAuth = () => {
    const context = useContext(ContextAuth);

    if (context === undefined) {
        throw new Error('useAuth was used outside of its Provider');
    }

    return context;
};

export { useAuth, ContextAuthProvider };
