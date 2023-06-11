import Img2 from "../../../../assets/img/girl1.png"
import Img3 from "../../../../assets/img/boy1.png"
import Img4 from "../../../../assets/img/flagnew.png"
import Img5 from "../../../../assets/img/formatalignright.png"
const TaskExplanation = ({show,color,image}) =>{
  let styles={}
    return(
    <div>
        {show?
        <div className="flex flex-row mb-9" style={{direction:"rtl"}}>
       <button className=" text-transparent  w-4 h-4 rounded mr-10 ml-2 mt-1" style={{backgroundColor:color}}>hi</button>
       <span>این یک تیتر برای این تسک است</span>
       <div className="mr-[300px] ml-4 flex flex-row justify-between w-[500px] items-center">
      <div className="flex flex-row w-[25%] ml-10 ">
        {image.map((item,Idx)=>{

         if(Idx===1){
         
          return <img src={item}  style={{marginRight:"-30px"}} className="rounded-full" />
          }
         
      return <img src={item}  style={{marginRight:"0px",zIndex:"10"}} className="rounded-full" />
      }

      )}</div> 
      
       <span className="mr-[80px] w-[25%]">6 آبان</span>
       <div className="flex flex-row w-[25%] mr-28 ">
         <img src={Img4} alt="flag" className=" w-5 h-5" />
       </div>
       <div className="flex flex-row w-[25%] ">
       <img src={Img5} alt="description" className="mr-28 w-5 h-5" />
       </div>
      
       </div>
       </div>:null}
       
      
    </div>
    )
}

export default TaskExplanation;
 //<img src={Img2} alt="girlpicture" style={{marginRight:"300px"}} className="rounded-full relative right-5 bottom-3 z-30" />
 //<img src={Img3} alt="boypicture" className="rounded-full relative right-0 bottom-3 z-0" />