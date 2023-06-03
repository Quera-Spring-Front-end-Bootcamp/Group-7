import { useState } from "react";
import BackDrop from "../mostlyUsed/BackDrop/BackDrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import WorkeSpaceStepOne from "./WorkeSpaceStepOne";
import WorkeSpaceStepTwo from "./WorkeSpaceStepTwo";
import WorkeSpaceStepThree from "./WorkeSpaceStepThree";

const NewWorkSpace = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [spaceInfo, setSpaceInfo] = useState({ name: "", color: "" });

  const onPrevStepHandler = () => {
    setCurrentStep((prevState) => --prevState);
  };

  const selectNameHandler = (e) => {
    setSpaceInfo((prevState) => {
      return { ...prevState, name: e };
    });
    setCurrentStep((prevState) => ++prevState);
  };
  const selectColorHandler = (e) => {
    setSpaceInfo((prevState) => {
      return { ...prevState, color: e };
    });
    setCurrentStep((prevState) => ++prevState);
  };
  return (
    <BackDrop>
      <div className="w-[500px] relative">
        <button className="absolute text-[#323232] top-[24px] right-[16px]">
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <button
          className={`absolute text-[#323232] top-[24px] left-[16px] ${
            currentStep === 1 ? "hidden" : ""
          }`}
          onClick={onPrevStepHandler}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        {currentStep === 1 && (
          <WorkeSpaceStepOne onSelectName={selectNameHandler} />
        )}
        {currentStep === 2 && (
          <WorkeSpaceStepTwo onSelectColor={selectColorHandler} />
        )}
        {currentStep === 3 && <WorkeSpaceStepThree spaceInfo={spaceInfo} />}
      </div>
    </BackDrop>
  );
};
export default NewWorkSpace;
