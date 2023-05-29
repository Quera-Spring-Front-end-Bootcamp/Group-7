import { useContext, useEffect, useState } from "react";
import { UserContext } from '../../../context/provider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck, faTableColumns, faCalendarDays, faShareNodes, faMagnifyingGlass, faFilter, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import persianDate from 'persian-date';

const MainPageTopBox = () => {

    const { taskManagerState, setTaskManagerState, currentDay, setCurrentDay } = useContext(UserContext);

    const [underline, setUnderline] = useState()

    useEffect(() => {
        if (taskManagerState === "list") {
            setUnderline({ transform: `translate(-124px, 0px)`, width: "138px" })
        } else if (taskManagerState === "column") {
            setUnderline({ transform: `translate(-284px, 0px)`, width: "130px" })
        } else if (taskManagerState === "calendar") {
            setUnderline({ transform: `translate(-441px, 0px)`, width: "70px" })
        }
    }, [taskManagerState])

    const handleChangeMonth = (action) => {
        const newDate = (action === "next") ? currentDay.add("month", -1) : currentDay.add("month", +1)
        setCurrentDay(newDate)
        console.log(newDateEn, currentDay.toCalendar('gregorian').format("YYYY/M/D"));
    }

    const handleSetToday = () => {
        setCurrentDay(new persianDate())
    }

    return (
        <div className=" h-[140px] w-full flex flex-col justify-center items-center">
            <div className="h-1/2 h-full w-full flex flex-row-reverse justify-between items-center">
                <div className="flex flex-row-reverse gap-4 items-center" >
                    <p className="border-slate-500 border-l pl-4 text-2xl" >پروژه اول</p>
                    <p onClick={() => { setTaskManagerState("list") }} className={`border-slate-500 border-l pl-4 cursor-pointer text-base ${taskManagerState === "list" && "text-[#208D8E]"}`} >
                        نمایش لیستی <FontAwesomeIcon icon={faListCheck} />
                    </p>
                    <p onClick={() => { setTaskManagerState("column") }} className={`border-slate-500 border-l pl-4 cursor-pointer text-base ${taskManagerState === "column" && "text-[#208D8E]"}`} >
                        نمایش ستونی <FontAwesomeIcon icon={faTableColumns} />
                    </p>
                    <p onClick={() => { setTaskManagerState("calendar") }} className={`border-slate-500 border-l pl-4 cursor-pointer text-base ${taskManagerState === "calendar" && "text-[#208D8E]"}`} >
                        تقویم <FontAwesomeIcon icon={faCalendarDays} />
                    </p>
                </div>
                <div className="flex flex-row-reverse gap-2 cursor-pointer" >
                    <FontAwesomeIcon icon={faShareNodes} />
                    <p className="text-sm">اشتراک گذاری</p>
                </div>
            </div>
            <div className="h-[1px] w-full bg-gray-400 flex flex-row-reverse flex items-center">
                <div className="h-[3px] bg-[#208D8E] rounded transition-all ease-in-out duration-500" style={underline} ></div>
            </div>
            <div className="h-1/2 border-b h-full border-slate-500 w-full flex flex-row-reverse items-center gap-5">
                <div className="flex flex-row-reverse items-center " >
                    <FontAwesomeIcon className="absolute mr-4 text-[20px]" icon={faMagnifyingGlass} />
                    <input placeholder="جستجو بین تسک ها" className="h-[20px] w-[270px] pr-[50px] text-[12px] border-slate-500 border-l" />
                </div>
                {taskManagerState === "calendar" ?
                    <div className="flex flex-row-reverse gap-4 text-[12px] items-center">
                        <p onClick={handleSetToday} className="cursor-pointer" >امروز</p>
                        <FontAwesomeIcon onClick={() => handleChangeMonth("next")} className="text-sm mr-1 cursor-pointer" icon={faChevronRight} />
                        <FontAwesomeIcon onClick={() => handleChangeMonth("prev")} className="text-sm ml-1 cursor-pointer" icon={faChevronLeft} />
                        <p>{currentDay.toLocale('fa').format('MMMM')} {currentDay.toLocale('fa').format('YYYY')}</p>
                    </div>
                    :
                    <>
                        <div className="flex flex-row-reverse gap-2 items-center mr-6 cursor-pointer" >
                            <FontAwesomeIcon className="text-lg" icon={faFilter} />
                            <p className="text-sm"> فیلتر</p>
                        </div>
                        <p className="text-sm">دسته بندی شده با: وضعیت</p>
                    </>
                }
            </div>
        </div>
    )

}

export default MainPageTopBox