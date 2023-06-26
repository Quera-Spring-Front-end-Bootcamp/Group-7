import React, { useContext, useState } from "react";

const AuthContext = React.createContext({
  accessToken: "",
  refreshToken: "",
  userID: "",
  isLoggedIn: false,
  userData: {},
  login: (accessToken, refreshToken, userId) => {},
  logout: () => {},
  userDataManager: (data) => {},
});

export const AuthContextProvider = (props) => {
  const [userData, setUserData] = useState({});
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

  const userDataManager = (data) => {
    setUserData(data);
    console.log(data);
  };

  const contextValue = {
    accessToken: accessToken,
    refreshToken: refreshToken,
    userID: userID,
    userData: userData,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    userDataManager: userDataManager,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
