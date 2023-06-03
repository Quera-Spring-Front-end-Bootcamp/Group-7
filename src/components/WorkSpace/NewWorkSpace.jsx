import BackDrop from "../mostlyUsed/BackDrop/BackDrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import WorkeSpaceStepOne from "./WorkeSpaceStepOne";
import WorkeSpaceStepTwo from "./WorkeSpaceStepTwo";
import WorkeSpaceStepThree from "./WorkeSpaceStepThree";

const NewWorkSpace = () => {
  return (
    <BackDrop>
      <div className="w-[500px] relative">
        <button className="absolute text-[#323232] top-[24px] right-[16px]">
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <button className="absolute text-[#323232] top-[24px] left-[16px]">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        {/* <WorkeSpaceStepOne /> */}
        {/* <WorkeSpaceStepTwo /> */}
        <WorkeSpaceStepThree />
      </div>
    </BackDrop>
  );
};
export default NewWorkSpace;
