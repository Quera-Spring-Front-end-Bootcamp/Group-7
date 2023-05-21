import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const MyProvider = ({ children }) => {

    const [loginFormState, setLoginFormState] = useState("login")
    const [isLogin, setIsLogin] = useState(false)

    return (
        <UserContext.Provider value={
            {
                loginFormState, setLoginFormState,
                isLogin, setIsLogin,
            }}>
            {children}
        </UserContext.Provider>
    );
}

export default MyProvider;
