import React from "react";
const SpinnerContext = React.createContext({
  spinnerVisibility: false,
  backEndModalVisibility: false,
  toggleSpinner: () => {},
  toggleModal: () => {},
  modalMsgHandler: () => {},
});
export default SpinnerContext;
