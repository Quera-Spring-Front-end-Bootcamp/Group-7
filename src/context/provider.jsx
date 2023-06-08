import React, { createContext, useId, useState } from 'react';
import persianDate from 'persian-date';

export const UserContext = createContext();

const MyProvider = ({ children }) => {

    const id = useId()

    const [loginFormState, setLoginFormState] = useState("login")
    const [isLogin, setIsLogin] = useState(true)
    const [taskManagerState, setTaskManagerState] = useState("list")
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
            projects:[]
        },
        {
            title: "کار های شخصی",
            sideColor: "#DE88FD",
            projects:[
                {
                    title: "پروژه اول",
                    apiData: ""
                },
                {
                    title: "پروژه دوم",
                    apiData: ""
                },
                {
                    title: "پروژه سوم",
                    apiData: ""
                },
            ]
        },
        {
            title: "درس کامپایلر",
            sideColor: "#FC0733",
            projects:[
                {
                    title: "پروژه من",
                    apiData: ""
                },
                {
                    title: "پروژه تو",
                    apiData: ""
                },
            ]
        },
        {
            title: "درس طراحی الگوریتم",
            sideColor: "#92FF07",
            projects:[
                {
                    title: "پروژه الگریتم",
                    apiData: ""
                },
            ]
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
