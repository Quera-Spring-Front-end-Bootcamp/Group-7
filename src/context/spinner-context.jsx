import React from "react";
const SpinnerContext = React.createContext({
  spinnerVisibility: false,
  backEndModalVisibility: false,
  toggleSpinner: () => {},
  toggleModal: () => {},
});
export default SpinnerContext;
