import { useContext, useEffect, useState } from "react";
import persianDate from 'persian-date';
import { UserContext } from "../../../context/provider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'

const TasksViewCalendar = () => {

    // console.log(currentDay);

    const { currentDay, setCurrentDay } = useContext(UserContext);

    const [handleShowPlus, setHandleShowPlus] = useState(false)

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

    const handleSelectDay = (date, index) => {
        // const dateEn = new Date(date.toCalendar('gregorian').format("YYYY/M/D"))
        console.log("clickedddddddd", date.format())
        setCurrentDay(date)
    }

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

    console.log(currentCalendar);

    // contextData.setCurrentDays(currentCalendar)

    // this.state = {
    //   currentDay: new Date()
    // }
    //   }
    // console.log(new Date(currentDay.getFullYear(), currentDay.getMonth(), 1).toLocaleDateString('fa-IR'));
    return (
        <div className="flex flex-col items-center h-[70%]">
            {/* <h1>Calendar Component</h1> */}
            <div className="w-full flex flex-row-reverse flex-wrap h-full mt-4 ">
                {currentCalendar.map((item, index) => {
                    return (
                        <>

                            {/* // index < 7 ? */}
                            <div className="w-[14.24%] h-[20%] min-h-[80px] flex flex-col justify-end items-end border border-slate-200 cursor-pointer relative"
                                style={item.selected ? { border: "solid 1px #208D8E" } : {}}
                                onClick={() => handleSelectDay(item.rawDate, index)}
                                onMouseOver = {() => setHandleShowPlus(index)}
                                onMouseLeave = {() => setHandleShowPlus(false)}
                            >
                                <p className="m-2 text-[13px] absolute top-0" >{daysOfWeekFa[index]}</p>
                                <div className="m-2 text-[13px] absolute bottom-0 bg-[#208D8E] p-1 rounded h-7 hidden" style={handleShowPlus === index ? {display: "block"} : {}} >
                                    <FontAwesomeIcon className="text-[20px] text-[#fff] p-0 m-0 " icon={faSquarePlus} />
                                </div>
                                <div className="w-full flex">
                                    <p className="m-2 text-[12px]" style={item.currentMonth ? {} : { opacity: "0.3" }}>{toFarsiNumber(item.number)}</p>
                                </div>
                            </div>

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