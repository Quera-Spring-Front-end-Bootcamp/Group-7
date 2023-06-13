import { useContext, useEffect, useState } from "react";
import persianDate from 'persian-date';
import { UserContext } from "../../../context/provider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus, faFlag } from '@fortawesome/free-regular-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const TasksViewCalendar = () => {

    // console.log(currentDay);

    const { currentDay, setCurrentDay } = useContext(UserContext);

    const [handleShowPlus, setHandleShowPlus] = useState(false);
    const [clickedCellId, setClickedCellId] = useState(null);
    const [clickedCell, setClickedCell] = useState(null);
    const [clickCoordinates, setClickCoordinates] = useState({ x: 0, y: 0 });

    const [currentCalendarMain, setCurrentCalendarMain] = useState([]);

    useEffect(() => {
        console.log("clickedCell +=+=+=+=+=+=", clickedCell);
    }, [clickedCell])
    useEffect(() => {
        console.log("Position +=+=+=+=+=+=", clickCoordinates);
    }, [clickCoordinates])
    // persianDate.toLocale('fa');
    persianDate.toLocale('en');

    const daysOfWeek = persianDate.rangeName().weekdays;;
    const daysOfWeekFa = ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهار شنبه", "پنج‌شنبه", "جمعه"]

    function toFarsiNumber(n) {
        const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

        return n
            .toString()
            .replace(/\d/g, x => farsiDigits[x]);
    }

    function ComponentUnderCell({ selectedDay }) {
        // logic to determine which component to render based on the clicked cell ID
        // ...
        const style = {
            bottom: (window.innerHeight - clickCoordinates.y - 140) < 0 ? 108 : window.innerHeight - clickCoordinates.y - 140,
            left: (clickCoordinates.x - 150) < 23 ? 23 : clickCoordinates.x - 150,
        };
        console.log("rendered");

        return (
            <div className="h-[120px] w-[350px] bg-white p-5 rounded absolute z-10 shadow-[0px_0px_10px_rgba(0,0,0,0.3)] border border-[#208D8E] flex flex-col justify-between " style={style}>
                <div className=" flex flex-row-reverse gap-4 items-center " >
                    <FontAwesomeIcon className="text-[15px] p-0 m-0 opacity-40 cursor-pointer " icon={faXmark} onClick={() => setClickedCell(null)} />
                    <input placeholder="نام تسک را وارد کنید" />
                </div>
                <div className=" flex flex-row-reverse justify-between " >
                    <div className=" flex flex-row-reverse gap-4 items-center " >
                        <FontAwesomeIcon className="text-[15px] p-0 m-0 opacity-40 cursor-pointer " icon={faFlag} onClick={() => { }} />
                        <p className=" text-[#208D8E] " >{toFarsiNumber(selectedDay.format("D"))} {selectedDay.toLocale('fa').format("MMMM")}</p>
                    </div>
                    <button className=" bg-[#208D8E] rounded text-white text-[10px] p-2 px-4 " onClick={() => setClickedCell(null)} >
                        ساختن تسک
                    </button>
                </div>
            </div>
        );
    }

    const handleSelectDay = (date, index,) => {
        // const dateEn = new Date(date.toCalendar('gregorian').format("YYYY/M/D"))
        console.log("clickedddddddd", date)
        setCurrentDay(date)
    }

    const addTaskButtonClick = (event, item, index) => {
        event.stopPropagation();
        setClickedCell(item);
        setClickCoordinates({ x: event.clientX, y: event.clientY });
        setClickedCellId(index)
    }

    useEffect(() => {

        // const [currentDay, setCurrentDay] = useState(new persianDate(new Date()))
        const firstDayOfMonth = new persianDate([currentDay.year(), currentDay.month(), 1]);
        const weekdayOfFirstDay = daysOfWeek.indexOf(firstDayOfMonth.format('dddd'))

        console.log(firstDayOfMonth.format());

        const firstDayOfMonthEn = new Date(firstDayOfMonth.toCalendar('gregorian').format("YYYY/M/D"))

        let currentCalendar = []

        console.log(weekdayOfFirstDay);
        for (let day = 0; day < 42; day++) {

            if (day === 0) {
                firstDayOfMonthEn.setDate(firstDayOfMonthEn.getDate() + (day - weekdayOfFirstDay));
            } else {
                firstDayOfMonthEn.setDate(firstDayOfMonthEn.getDate() + 1);
            }

            // console.log(new persianDate(firstDayOfMonthEn).format());
            const firstDayOfMonthFa = new persianDate(firstDayOfMonthEn)

            // console.log("---------", firstDayOfMonthFa);

            let calendarDay = {
                currentMonth: (firstDayOfMonthFa.format("M") === currentDay.toLocale('en').format("M")),
                date: firstDayOfMonthFa.format("YYYY/M/D"),
                month: firstDayOfMonthFa.format("M"),
                number: firstDayOfMonthFa.format("D"),
                selected: (firstDayOfMonthFa.format("YYYY/M/D") === currentDay.toLocale('en').format("YYYY/M/D")),
                year: firstDayOfMonthFa.format("YYYY"),
                rawDate: firstDayOfMonthFa,
            }

            currentCalendar.push(calendarDay)
        }
        setCurrentCalendarMain(currentCalendar)
        // console.log(JSON.stringify(currentCalendar));
    }, [currentDay])

    const testtt = "2"
    // contextData.setCurrentDays(currentCalendar)

    // this.state = {
    //   currentDay: new Date()
    // }
    //   }
    // console.log(new Date(currentDay.getFullYear(), currentDay.getMonth(), 1).toLocaleDateString('fa-IR'));
    return (
        <div className="flex flex-col items-center h-[80%]">
            {/* <h1>Calendar Component</h1> */}
            <div className="w-full flex flex-row-reverse flex-wrap h-full mt-4 ">
                {currentCalendarMain.map((item, index) => {
                    return (
                        <>

                            {/* // index < 7 ? */}
                            <div className="w-[14.24%] h-[20%] min-h-[80px] flex flex-col justify-end items-end border border-slate-200 cursor-pointer relative"
                                style={item.selected ? { border: "solid 1px #208D8E" } : {}}
                                onClick={(event) => handleSelectDay(item.rawDate, index, event, item)}
                                onMouseOver={() => setHandleShowPlus(index)}
                                onMouseLeave={() => setHandleShowPlus(false)}
                            >
                                <p className="m-2 text-[13px] absolute top-0" >{daysOfWeekFa[index]}</p>
                                <div
                                    onClick={(event) => addTaskButtonClick(event, item, index)}
                                    className="m-2 text-[13px] absolute bottom-0 bg-[#208D8E] p-1 rounded h-7 hidden" style={handleShowPlus === index ? { display: "block" } : {}} >
                                    <FontAwesomeIcon className="text-[20px] text-[#fff] p-0 m-0 " icon={faSquarePlus} />
                                </div>
                                <div className="w-full flex">
                                    <p className="m-2 text-[12px]" style={item.currentMonth ? {} : { opacity: "0.3" }}>{toFarsiNumber(item.number)}</p>
                                </div>
                            </div>
                            {(clickedCell && clickedCellId === index) && (
                                <ComponentUnderCell
                                    selectedDay={item.rawDate}
                                />
                            )}

                            {/* // <div className="w-[14.24%] h-[20%] min-h-[80px] flex justify-start items-end border border-slate-200 cursor-pointer"
                                    //     style={item.selected ? { border: "solid 1px #208D8E" } : {}}
                                    //     onClick={() => handleSelectDay(item.rawDate, index)}
                                    // >
                                    //     {index < 7 && <p className="m-2 text-[13px] absolute" >{daysOfWeekFa[index]}</p>}
                                    //     <p className="m-2 text-[12px]" style={item.currentMonth ? {} : { opacity: "0.3" }}>{toFarsiNumber(item.number)}</p>
                                    // </div> */}

                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default TasksViewCalendar