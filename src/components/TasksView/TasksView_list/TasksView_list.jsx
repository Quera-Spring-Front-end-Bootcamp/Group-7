import Img from "../../../assets/img/expandcircle.png"
import Img2 from "../../../assets/img/girl1.png"
import Img3 from "../../../assets/img/boy1.png"
import TaskExplanation from "./taskExplanation/taskExplanation"
import { useState } from "react"
const TasksViewList = () =>{
  const [show,setShow]=useState(false)
  const handleOnClick=()=>{
    setShow((show)=>!show)
  }
  const [showTask,setShowTask]=useState(false)
  const changeOnClick=()=>{
    setShowTask((showTask)=>!showTask)
  }
  
    return(
    <div>
      <div className="flex flex-row-reverse">
       <img src={Img} alt="expandmore" className="w-6 h-7 pt-1" />  
       <h2  className="mr-3 font-black text-xl">پروژه اول</h2>
    </div>
       <ul className="mt-10" style={{direction:"rtl"}}>
         <li className="mb-9 bg-slate-50">
          <div className="flex flex-column">
            
            <img src={Img} alt="expandmore" className="w-5 h-6 pt-1" onClick={handleOnClick} style={show?{transform:"rotate(180deg)"}:{transform:"rotate(0deg)"}}/>
            <button type="button" className="bg-pink-600 text-center w-16 h-8 text-white rounded mr-1 p-1">Pending</button>
            <span className="pt-1 mr-2 text-sm ">2 تسک</span>
            
            <div className="flex flex-row" >
                <span className="ml-[28px]" style={{marginRight:"480px"}}>اعضا</span>
                <span style={{marginRight:"96px"}}>ددلاین</span>
                <span style={{marginRight:"96px"}} >اولویت</span>
                <span style={{marginRight:"96px"}} >توضیحات</span>
            </div>
         </div>
        </li>
        <li>
          <TaskExplanation show={show} color={"#F92E8F"} image={[Img2,Img3]} />
        </li>
        <li>
          <TaskExplanation show={show} color={"#F92E8F"}  image={[Img3]}/>
        </li>
          <li className="mb-9 bg-slate-50">
          <div className="flex flex-column">          
            <button type="button" className="bg-orange-400 text-center rounded mr-7 p-1">In progress</button>
            <span className="pt-1 mr-2 text-sm ">2 تسک</span>
            
            <div className="flex flex-row space-x-24 > * + *" >
                <span className="ml-32" style={{marginRight:"445px"}}>اعضا</span>
                <span>ددلاین</span>
                <span>اولویت</span>
                <span>توضیحات</span>
            </div>
         </div>
        </li>
        <li className="mb-9 bg-slate-50">
          <div className="flex flex-column">
            
            <img src={Img} alt="expandmore" className="w-5 h-6 pt-1" onClick={changeOnClick} style={showTask?{transform:"rotate(180deg)"}:{transform:"rotate(0deg)"}} />
            <button type="button" className=" bg-green-500 text-center text-white rounded mr-1 p-1" >Done</button>
            <span className="pt-1 mr-2 text-sm ">2 تسک</span>
          
            <div className="flex flex-row space-x-24 > * + *" >
                <span className="ml-32" style={{marginRight:"495px"}}>اعضا</span>
                <span>ددلاین</span>
                <span>اولویت</span>
                <span>توضیحات</span>
            </div>
         </div>
        </li>
        <li>
          <TaskExplanation  show={showTask} color={"#43BB0B"} image={[Img2,Img3]}/>
        </li>
        <li>
          <TaskExplanation show={showTask} color={"#43BB0B"}  image={[Img3]}/>
        </li>
     </ul>
     
    </div>
    )
}

export default TasksViewList