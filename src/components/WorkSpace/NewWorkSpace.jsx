import { useContext, useState } from "react";
import BackDrop from "../mostlyUsed/BackDrop/BackDrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import WorkeSpaceStepOne from "./WorkeSpaceStepOne";
import WorkeSpaceStepTwo from "./WorkeSpaceStepTwo";
import WorkeSpaceStepThree from "./WorkeSpaceStepThree";
import useHttp from "../../hooks/use-http";
import AuthContext from "../../context/auth-context";
import { UserContext } from "../../context/provider";

const NewWorkSpace = ({ handleClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [spaceInfo, setSpaceInfo] = useState({ name: "", color: "" });
  const [wokspaceName, setWorkspaceName] = useState("");
  const [workspaceColor, setWorkspaceColor] = useState("");
  const authContext = useContext(AuthContext);
  const spaceContext = useContext(UserContext);

  const { sendServerRequest: createNewWorkspace } = useHttp();
  const { sendServerRequest: editWorkspace } = useHttp();

  const onSubmitWorkspace = () => {

    const editedWorkspace = (val) => {
      console.log("vallllll", val);
      handleClose(false)
      spaceContext.setSpaces((e)=>[...e, val.data])
    };

    const createdWorkspace = (val) => {
      console.log(val);
      editWorkspace(
        {
          url: `http://localhost:3000/api/workspace/${val.data._id}`,
          method: "PATCH",
          body: {
            usernameOrId: authContext.username,
            image: workspaceColor,
          },
        },
        editedWorkspace
      );
    };

    createNewWorkspace(
      {
        url: "http://localhost:3000/api/workspace/create",
        method: "POST",
        body: {
          name: wokspaceName,
        },
      },
      createdWorkspace
    );

    
  };

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
    <BackDrop handleClose={handleClose}>
      <div className="w-[500px] relative">
        <div className="flex justify-center items-center gap-x-2 absolute left-[50%] bottom-[-55px] translate-x-[-50%]">
          <div
            className={`w-[8px] h-[8px] rounded-full ${
              currentStep === 1 ? "bg-[#fff]" : "bg-[#bbb]"
            }`}
          ></div>
          <div
            className={`w-[8px] h-[8px] rounded-full ${
              currentStep === 2 ? "bg-[#fff]" : "bg-[#bbb]"
            }`}
          ></div>
          <div
            className={`w-[8px] h-[8px] rounded-full ${
              currentStep === 3 ? "bg-[#fff]" : "bg-[#bbb]"
            }`}
          ></div>
        </div>
        <button
          onClick={() => handleClose(false)}
          className="absolute text-[#323232] top-[24px] right-[16px]"
        >
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
          <WorkeSpaceStepOne
            wokspaceName={wokspaceName}
            setWorkspaceName={setWorkspaceName}
            onSelectName={selectNameHandler}
          />
        )}
        {currentStep === 2 && (
          <WorkeSpaceStepTwo
            setWorkspaceColor={setWorkspaceColor}
            onSelectColor={selectColorHandler}
          />
        )}
        {currentStep === 3 && (
          <WorkeSpaceStepThree
            onSubmitWorkspace={onSubmitWorkspace}
            spaceInfo={spaceInfo}
          />
        )}
      </div>
    </BackDrop>
  );
};
export default NewWorkSpace;
