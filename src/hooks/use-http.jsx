import { useContext, useCallback } from "react";
import SpinnerContext from "../context/spinner-context";

const useHttp = () => {
  const spinnerCtx = useContext(SpinnerContext);

  const sendServerRequest = useCallback(async (requestConfig, applyData) => {
    spinnerCtx.toggleSpinner();
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      if (!response.ok) {
        console.log(response);
        if (
          response.statusText === "Conflict" ||
          response.statusText === "Bad Request"
        ) {
          const data = await response.json();
          console.log(data);
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
  }, []);

  return {
    sendServerRequest,
  };
};

export default useHttp;
