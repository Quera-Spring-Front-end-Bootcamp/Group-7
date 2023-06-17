import { useContext } from "react";
import SpinnerContext from "../../../context/spinner-context";

const HttpRequestModal = (props) => {
  const spinnerCtx = useContext(SpinnerContext);

  const modalCloseHandler = () => {
    spinnerCtx.toggleModal();
  };
  return (
    <div className="h-screen w-screen fixed top-0 left-0 bg-black/30 z-50  flex justify-center items-center">
      <div className="w-[400px] bg-white py-4 px-2 rounded shadow-[0_2px_8px_rgba(255,255,255,0.18)] ">
        <p className="text-sm mb-4">{spinnerCtx.modalMessage}</p>
        <button
          className=" bg-[#208D8E] text-white text-sm text-center px-3 py-1 rounded cursor-pointer"
          onClick={modalCloseHandler}
        >
          متوجه شدم
        </button>
      </div>
    </div>
  );
};
export default HttpRequestModal;
