import { useContext } from "react";
import { UserContext } from '../../../context/provider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck, faTableColumns, faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const MainPageTopBox = () => {

    const { taskManagerState, setTaskManagerState } = useContext(UserContext);

    return (
        <div className=" h-[164px] w-full flex flex-col justify-center items-center">
            <div className="p-3 h-1/2 h-full w-full flex flex-row-reverse justify-between items-center">
                <div className="flex flex-row-reverse gap-4 items-center" >
                    <p className="border-slate-500 border-l pl-4 text-2xl" >پروژه اول</p>
                    <p onClick={() => { setTaskManagerState("list") }} className={`border-slate-500 border-l pl-4 cursor-pointer text-lg ${taskManagerState === "list" && "text-[#208D8E]"}`} >
                        نمایش لیستی <FontAwesomeIcon icon={faListCheck} />
                    </p>
                    <p onClick={() => { setTaskManagerState("column") }} className={`border-slate-500 border-l pl-4 cursor-pointer text-lg ${taskManagerState === "column" && "text-[#208D8E]"}`} >
                        نمایش ستونی <FontAwesomeIcon icon={faTableColumns} />
                    </p>
                    <p onClick={() => { setTaskManagerState("calendar") }} className={`border-slate-500 border-l pl-4 cursor-pointer text-lg ${taskManagerState === "calendar" && "text-[#208D8E]"}`} >
                        تقویم <FontAwesomeIcon icon={faCalendarDays} />
                    </p>
                </div>
            </div>
            <div className="h-1/2 border-b h-full border-slate-500 w-full">
            </div>
        </div>
    )

}

export default MainPageTopBox