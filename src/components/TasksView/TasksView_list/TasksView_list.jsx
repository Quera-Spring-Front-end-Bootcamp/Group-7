import Img from "../../../assets/img/expandcircle.png";
import Img2 from "../../../assets/img/girl1.png";
import Img3 from "../../../assets/img/boy1.png";
import { useState } from "react";
import ListViewProject from "./ListViewProject";
import ListViewBoard from "./ListViewBoard";
import ListViewTask from "./ListViewTask";
const TasksViewList = () => {
  return (
    <div className="w-full h-full mt-4">
      <ListViewProject title="پروژه اول"></ListViewProject>
      <ListViewBoard />
    </div>
  );
};

export default TasksViewList;
