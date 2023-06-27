import React, { useContext, useState } from "react";

const DataContext = React.createContext({
  boards: [],
  setBoadrs: () => {},
});

export const DataContextProvider = (props) => {
  const [boards, setBoards] = useState([]);

  const setBoardsHandler = (boards) => {
    setBoards(boards);
  };

  const contextValue = { boards: boards, onSetBoadrs: setBoardsHandler };

  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContext;
