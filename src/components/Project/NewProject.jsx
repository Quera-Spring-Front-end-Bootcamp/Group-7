import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../context/provider";
import useHttp from "../../hooks/use-http";
import BackDrop from "../mostlyUsed/BackDrop/BackDrop";

const NewProject = ({ handleClose, spaceId }) => {
  // const spaceNameRef = useRef();

  const [projectName, setProjectName] = useState("");
  const { sendServerRequest: createNewProject } = useHttp();

  const contextData = useContext(UserContext)

  useEffect(() => {
    console.log(projectName);
  }, [projectName]);

  const projectSubmitHandler = () => {

    const createdProject = (val) =>{
      console.log("project created!");
      const spaceIndex = contextData.spaces.map(e => e._id).indexOf(spaceId)
      contextData.spaces[spaceIndex].projects.push(val.data)
      contextData.setSpaces((prev) =>  [...prev])
      handleClose(false)
    }

    createNewProject(
      {
        url: "http://localhost:3000/api/projects",
        method: "POST",
        body: {
          name: projectName,
          workspaceId: spaceId,
        },
      },
      createdProject
    );
  };
  return (
    <BackDrop handleClose={handleClose}>
      <div className="p-4 pb-0 w-[400px]">
        <p className="text-center text-2xl">ساختن پروژه جدید </p>
        <div className="my-4">
          <label htmlFor="work-space__name" className="block text-sm mb-2">
            نام پروژه
          </label>
          <input
            type="text"
            id="work-space__name"
            className="w-full border border-solid border-slate-500 rounded h-[40px] p-1"
            // ref={spaceNameRef}
            onChange={(e) => setProjectName(e.target.value)}
            value={projectName}
          />
          <button
            className="w-full bg-[#208D8E] p-2.5 rounded mt-8 text-white text-center text-sm"
            onClick={projectSubmitHandler}
          >
            تایید
          </button>
        </div>
      </div>
    </BackDrop>
  );
};
export default NewProject;
