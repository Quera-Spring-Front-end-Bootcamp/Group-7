import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
const year1402 = [
  {
    monthName: "فروردین",
    startingDay: "سه‌شنبه",
    startDate: "2023-3-1",
    endDate: "2023-4-20",
    monthLength: 31,
  },
  {
    monthName: "اردیبهشت",
    startingDay: "جمعه",
    startDate: "2023-4-21",
    endDate: "2023-5-21",
    monthLength: 31,
  },
  {
    monthName: "خرداد",
    startingDay: "دوشنبه",
    startDate: "2023-5-22",
    endDate: "2023-6-21",
    monthLength: 31,
  },
  {
    monthName: "تیر",
    startingDay: "پنجشنبه",
    startDate: "2023-6-22",
    endDate: "2023-7-22",
    monthLength: 31,
  },
  {
    monthName: "مرداد",
    startingDay: "یکشنبه",
    startDate: "2023-7-23",
    endDate: "2023-8-22",
    monthLength: 31,
  },
  {
    monthName: "شهریور",
    startingDay: "چهارشنبه",
    startDate: "2023-8-23",
    endDate: "2023-9-22",
    monthLength: 31,
  },
  {
    monthName: "مهر",
    startingDay: "شنبه",
    startDate: "2023-9-23",
    endDate: "2023-10-22",
    monthLength: 30,
  },
  {
    monthName: "آبان",
    startingDay: "دوشنبه",
    startDate: "2023-10-23",
    endDate: "2023-11-21",
    monthLength: 30,
  },
  {
    monthName: "آذر",
    startingDay: "چهارشنبه",
    startDate: "2023-11-22",
    endDate: "2023-12-21",
    monthLength: 30,
  },
  {
    monthName: "دی",
    startingDay: "جمعه",
    startDate: "2023-12-22",
    endDate: "2024-1-20",
    monthLength: 30,
  },
  {
    monthName: "بهمن",
    startingDay: "یکشنبه",
    startDate: "2024-1-21",
    endDate: "2024-2-19",
    monthLength: 30,
  },
  {
    monthName: "اسفند",
    startingDay: "سه‌شنبه",
    startDate: "2024-2-20",
    endDate: "2024-3-19",
    monthLength: 29,
  },
];
const FaWeekDays = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
];

function miladi_be_shamsi(gy, gm, gd) {
  var g_d_m, jy, jm, jd, gy2, days;
  g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  gy2 = gm > 2 ? gy + 1 : gy;
  days =
    355666 +
    365 * gy +
    ~~((gy2 + 3) / 4) -
    ~~((gy2 + 99) / 100) +
    ~~((gy2 + 399) / 400) +
    gd +
    g_d_m[gm - 1];
  jy = -1595 + 33 * ~~(days / 12053);
  days %= 12053;
  jy += 4 * ~~(days / 1461);
  days %= 1461;
  if (days > 365) {
    jy += ~~((days - 1) / 365);
    days = (days - 1) % 365;
  }
  if (days < 186) {
    jm = 1 + Math.round(days / 31);
    jd = 1 + (days % 31);
  } else {
    jm = 7 + Math.round((days - 186) / 30);
    jd = 1 + ((days - 186) % 30);
  }
  return [jy + "/" + jm + "/" + jd];
}
const DatePicker = (props) => {
  return (
    <li className="flex justify-between items-center mb-4">
      <p className="text-[#CCCFD5] text-xs">{props.dateValue}</p>
      <p className="text-sm">{props.dateTitle}</p>
    </li>
  );
};
const NewTaskCalendar = (props) => {
  const today = new Date();
  const [calendarOutput, setCalendarOutput] = useState({
    currentDay: 0,
    monthArray: [],
  });
  const calendarHideHandler = (e) => {
    props.onClickCalendar();
    e.stopPropagation();
  };
  useEffect(() => {
    const shamsiDate = miladi_be_shamsi(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    const currentMonth = +shamsiDate[0].split("/")[1];
    const currentDay = +shamsiDate[0].split("/")[2];

    const monthStartingDay = FaWeekDays.findIndex(
      (day) => day === year1402[currentMonth].startingDay
    );
    let cal = [];
    for (let i = 1; i <= 42; i++) {
      if (i <= monthStartingDay) {
        cal.push("-");
      } else if (
        i <=
        monthStartingDay + year1402[currentMonth - 1].monthLength
      ) {
        cal.push(i - monthStartingDay);
      } else {
        cal.push("-");
      }
    }

    setCalendarOutput({
      currentDay: +currentDay + +monthStartingDay - 1,
      monthArray: cal,
    });
  }, []);

  //find today week name
  const todayValueHandler = (num) => {
    let helper = today.getDay() + (num + 1);
    if (helper > 6) {
      helper = helper - 7;
    }
    return FaWeekDays[helper];
  };
  //finf month name
  const findMonthName = () => {
    const shamsiDate = miladi_be_shamsi(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    const currentMonth = +shamsiDate[0].split("/")[1];
    return year1402[currentMonth].monthName;
  };
  return (
    <>
      <div
        className="fixed z-10 left-0 top-0 h-screen w-screen opacity-10"
        onClick={calendarHideHandler}
      ></div>
      <div className=" absolute w-[720px] h-[380px] z-10 absolute bg-white shadow-[0_4px_16px_0_rgba(0,0,0,0.16)] rounded-lg p-4 bottom-0 right-0">
        <div className="w-full h-[50px] flex justify-between items-center text-xl border-solid border-slate-400 border-b">
          <div className="w-1/2 flex justify-end items-center gap-2 border-solid border-slate-400 border-r pr-2">
            <p>زمان پایان</p>
            <FontAwesomeIcon icon={faCalendar} className="text-[#BDBDBD]" />
          </div>
          <div className="w-1/2 flex justify-end items-center gap-2 ">
            <p>زمان شروع</p>
            <FontAwesomeIcon icon={faCalendar} className="text-[#BDBDBD]" />
          </div>
        </div>
        <div className="flex justify-between items-start ">
          <div id="calendar-right-side" className="w-2/3">
            <div className="flex justify-end items-center gap-3 py-2 px-4">
              <p>امروز</p>
              <button>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
              <p>{findMonthName()} ۱۴۰۲</p>
            </div>
            <div className="flex flex-row-reverse items-center px-4 ">
              <p className="text-[#CCCFD5] text-xs text-center mr-1">شنبه</p>
              <p className="text-[#CCCFD5] text-xs text-center mr-[35px]">
                یکشنبه
              </p>
              <p className="text-[#CCCFD5] text-xs text-center mr-[30px]">
                دوشنبه
              </p>
              <p className="text-[#CCCFD5] text-xs text-center  mr-[30px]">
                سه‌شنبه
              </p>
              <p className="text-[#CCCFD5] text-xs text-center mr-[20px]">
                چهارشنبه
              </p>
              <p className="text-[#CCCFD5] text-xs text-center  mr-[20px]">
                پنجشنبه
              </p>
              <p className="text-[#CCCFD5] text-xs text-center  mr-[28px]">
                جمعه
              </p>
            </div>
            <div
              id="calendar-section"
              className=" h-[200px] mt-2 flex gap-x-10 px-4 flex-row-reverse justify-between  items-center flex-wrap"
            >
              {calendarOutput.monthArray.map((day, idx) => {
                if (idx === calendarOutput.currentDay) {
                  return (
                    <p className="w-[25px] h-[25px] flex items-start justify-center text-base border rounded-full border-[#208D8E]">
                      {day}
                    </p>
                  );
                } else {
                  return (
                    <p className="w-[25px] h-[25px] flex items-center justify-center">
                      {day}
                    </p>
                  );
                }
              })}
            </div>
            <div className="text-left mt-1">
              <button
                className="text-white text-center text-xs bg-[#208D8E] rounded w-[100px] h-[30px] bottom-0 left-0"
                onClick={calendarHideHandler}
              >
                بستن
              </button>
            </div>
          </div>
          <div id="calendar-left-side" className="w-1/3 bg-[#F7F8F9] py-2 px-4">
            <ul>
              <DatePicker dateTitle="امروز" dateValue={todayValueHandler(0)} />
              <DatePicker dateTitle="کمی بعد" dateValue="یکشنبه" />
              <DatePicker dateTitle="فردا" dateValue={todayValueHandler(1)} />
              <DatePicker dateTitle="این آخر هفته" dateValue="جمعه" />
              <DatePicker
                dateTitle="هفته آینده"
                dateValue={todayValueHandler(0)}
              />
              <DatePicker dateTitle="آخر هفته آینده" dateValue="جمعه" />
              <DatePicker
                dateTitle="دو هفته دیگر"
                dateValue={todayValueHandler(0)}
              />
              <DatePicker
                dateTitle="چهار هفته دیگر"
                dateValue={todayValueHandler(0)}
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewTaskCalendar;
