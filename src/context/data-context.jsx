import React, { useContext, useState } from "react";

const DataContext = React.createContext({
  boards: [],
  projectId: "",
  selectedProject:"",
  activeAccordionSection:"",
  setBoadrs: () => {},
  setProjectId: () => {},
  setSelectedProject: () => {},
  setActiveAccordionSection: () => {},

});

export const DataContextProvider = (props) => {
  const [boards, setBoards] = useState([]);
  const [projectId, setProjectId] = useState("");
  const [selectedProject, setSelectedProject] = useState("");
  const [activeAccordionSection, setActiveAccordionSection] = useState(-1);

  const setBoardsHandler = (boards) => {
    setBoards(boards);
  };

  const setProjectIdHandler = (id) => {
    setProjectId(id);
  };
  const setSelectedProjectHandler = (name) => {
    setSelectedProject(name);
  };

  const contextValue = {
    boards: boards,
    projectId: projectId,
    selectedProject:selectedProject,
    activeAccordionSection:activeAccordionSection,
    onSetBoadrs: setBoardsHandler,
    setProjectId: setProjectIdHandler,
    setSelectedProject: setSelectedProjectHandler,
    setActiveAccordionSection:setActiveAccordionSection
  };

  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContext;
