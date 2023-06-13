import React, { createContext, useId, useState } from 'react';
import persianDate from 'persian-date';

export const UserContext = createContext();

const MyProvider = ({ children }) => {

    const id = useId()

    const [loginFormState, setLoginFormState] = useState("login")
    const [isLogin, setIsLogin] = useState(true)
    const [taskManagerState, setTaskManagerState] = useState("column")
    const [currentDays, setCurrentDays] = useState(false)
    const [currentDay, setCurrentDay] = useState(new persianDate(new Date()))

    const [filters, setFilters] = useState([
        {
            id: id,
            option: "",
            tag: "",
            is: ""
        }
    ])

    const [spaces, setSpaces] = useState([
        {
            title: "درس مدیریت پروژه",
            sideColor: "#71FDA9",
            projects:[],
            id: 0,
        },
        {
            title: "کار های شخصی",
            sideColor: "#DE88FD",
            projects:[
                {
                    title: "پروژه اول",
                    apiData: "",
                    id: 0,
                },
                {
                    title: "پروژه دوم",
                    apiData: "",
                    id: 1,
                },
                {
                    title: "پروژه سوم",
                    apiData: "",
                    id: 2,
                },
            ],
            id: 1,
        },
        {
            title: "درس کامپایلر",
            sideColor: "#FC0733",
            projects:[
                {
                    title: "پروژه من",
                    apiData: "",
                    id: 3,
                },
                {
                    title: "پروژه تو",
                    apiData: "",
                    id: 4,
                },
            ],
            id: 2,
        },
        {
            title: "درس طراحی الگوریتم",
            sideColor: "#92FF07",
            projects:[
                {
                    title: "پروژه الگریتم",
                    apiData: "",
                    id: 5,
                },
            ],
            id: 3,
        },
    ])

    return (
        <UserContext.Provider value={
            {
                loginFormState, setLoginFormState,
                isLogin, setIsLogin,
                taskManagerState, setTaskManagerState,
                spaces, setSpaces,
                currentDays, setCurrentDays,
                currentDay, setCurrentDay,
                filters, setFilters,
            }}>
            {children}
        </UserContext.Provider>
    );
}

export default MyProvider;
