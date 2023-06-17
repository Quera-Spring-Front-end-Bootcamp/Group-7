import { useContext } from "react";
import SpinnerContext from "../context/spinner-context";

const useHttp = (requestConfig, applyData) => {
  const spinnerCtx = useContext(SpinnerContext);

  const sendRequest = async () => {
    spinnerCtx.toggleSpinner();
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      if (!response.ok) {
        if (response.statusText === "Conflict") {
          const data = await response.json();
          throw new Error(data.message);
        } else {
          throw new Error(
            "someThing went wrong please try a few seconds later."
          );
        }
      }
      const data = await response.json();

      applyData(data);
    } catch (err) {
      spinnerCtx.modalMsgHandler(err.message);
      spinnerCtx.toggleModal();
    }
    spinnerCtx.toggleSpinner();
  };

  return {
    sendRequest,
  };
};

export default useHttp;
