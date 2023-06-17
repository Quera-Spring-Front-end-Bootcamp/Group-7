import { useReducer, useState } from "react";
import SpinnerContext from "./spinner-context";

const SpinnerProvider = (props) => {
  const [showSpinner, setShowSpinner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const spinnerValue = {
    spinnerVisibility: showSpinner,
    backEndModalVisibility: showModal,
    toggleSpinner: () => {
      setShowSpinner((prev) => !prev);
    },
    toggleModal: () => {
      setShowModal((prev) => !prev);
    },
  };

  return (
    <SpinnerContext.Provider value={spinnerValue}>
      {props.children}
    </SpinnerContext.Provider>
  );
};

export default SpinnerProvider;
