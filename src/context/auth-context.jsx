import React, { useContext } from "react";

const AuthContext = React.createContext({
  accessToken: "",
  refreshToken: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState("");

  const userIsLoggedIn = !!accessToken;

  const loginHandler = (accessToken, refreshToken) => {
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
  };

  const logoutHandler = () => {
    setAccessToken(null);
    setRefreshToken("");
  };

  const contextValue = {
    accessToken: accessToken,
    refreshToken: refreshToken,
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
