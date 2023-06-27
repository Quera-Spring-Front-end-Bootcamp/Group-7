import React, { useContext, useState } from "react";

const AuthContext = React.createContext({
  accessToken: "",
  refreshToken: "",
  userID: "",
  username: "",
  isLoggedIn: false,
  login: (accessToken, refreshToken, userId) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  const [userID, setUserID] = useState(null);
  const [username, setUsername] = useState("")

  const userIsLoggedIn = !!accessToken;

  const loginHandler = (accessToken, refreshToken, userID, username) => {
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    setUserID(userID);
    setUsername(username)
  };

  const logoutHandler = () => {
    setAccessToken(null);
    setRefreshToken("");
    setUserID("");
    setUsername("")
  };

  const contextValue = {
    accessToken: accessToken,
    refreshToken: refreshToken,
    userID: userID,
    username: username,
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
