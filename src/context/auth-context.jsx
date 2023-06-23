import React, { useContext, useState } from "react";

const AuthContext = React.createContext({
  accessToken: "",
  refreshToken: "",
  userID: "",
  isLoggedIn: false,
  login: (accessToken, refreshToken, userId) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  const [userID, setUserID] = useState(null);

  const userIsLoggedIn = !!accessToken;

  const loginHandler = (accessToken, refreshToken, userID) => {
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    setUserID(userID);
  };

  const logoutHandler = () => {
    setAccessToken(null);
    setRefreshToken("");
    setUserID("");
  };

  const contextValue = {
    accessToken: accessToken,
    refreshToken: refreshToken,
    userID: userID,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
