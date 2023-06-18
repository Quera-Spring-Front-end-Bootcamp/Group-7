import { useState } from "react";
import SpinnerContext from "./spinner-context";

const SpinnerProvider = (props) => {
  const [showSpinner, setShowSpinner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("some text");

  const spinnerValue = {
    modalMessage: modalMessage,
    spinnerVisibility: showSpinner,
    backEndModalVisibility: showModal,
    toggleSpinner: () => {
      setShowSpinner((prev) => !prev);
    },
    toggleModal: () => {
      setShowModal((prev) => !prev);
    },
    modalMsgHandler: (msg) => {
      setModalMessage(msg);
    },
  };

  return (
    <SpinnerContext.Provider value={spinnerValue}>
      {props.children}
    </SpinnerContext.Provider>
  );
};

export default SpinnerProvider;
