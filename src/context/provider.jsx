import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const MyProvider = ({ children }) => {

    const [loginFormState, setLoginFormState] = useState("login")
    const [isLogin, setIsLogin] = useState(true)
    const [taskManagerState, setTaskManagerState] = useState("list")

    return (
        <UserContext.Provider value={
            {
                loginFormState, setLoginFormState,
                isLogin, setIsLogin,
                taskManagerState, setTaskManagerState,
            }}>
            {children}
        </UserContext.Provider>
    );
}

export default MyProvider;
