import { useContext } from "react";
import AuthContext from "../context/auth-context";
import SpinnerContext from "../context/spinner-context";

const useHttp = (requestConfig, applyData) => {
  const spinnerCtx = useContext(SpinnerContext);
  const authCtx = useContext(AuthContext);

  const sendRequest = async () => {
    spinnerCtx.toggleSpinner();
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: { "Content-Type": "application/json", "x-auth-token": authCtx.accessToken },
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      if (!response.ok) {
        if (response.statusText === "Conflict" || response.status === 404) {
          const data = await response.json();
          throw new Error(data.message);
        } else {
          throw new Error(
            "someThing went wrong please try a few seconds later."
          );
        }
      }

      // if(response){
      //   console.log(response);
      //   const data = await response.json();
      //   console.log(data);
      //   if(!response.ok){
      //     if(data.message){
      //       throw new Error(data.message);
      //     }else{
      //       throw new Error(
      //         "someThing went wrong please try a few seconds later."
      //       );
      //     }
      //   }
      // }else{
      //   throw new Error(
      //     "check your internet connection."
      //   );
      // }
       
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
