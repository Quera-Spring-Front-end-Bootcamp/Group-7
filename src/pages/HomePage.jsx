import { useContext, useEffect, useState } from "react";
import Layout from "../components/layout/Layout"
import TasksViewCalendar from "../components/TasksView/TasksView_calendar/TasksViewCalendar";
import TasksViewColumn from "../components/TasksView/TasksView_column/TasksView_list";
import TasksViewList from "../components/TasksView/TasksView_list/TasksView_list";
import { UserContext } from "../context/provider";
import persianDate from 'persian-date';

const HomePage = () => {
//   const { taskManagerState } = useContext(UserContext);

    const { taskManagerState, setCurrentDay } = useContext(UserContext);

    useEffect(()=>{
        console.log("=============================================");
        setCurrentDay(new persianDate(new Date()))
    },[])

    const ShowTasksHandler = () => {
        switch(taskManagerState){
            case "list":
                return <TasksViewList />
            case "column":
                return <TasksViewColumn />
            case "calendar":
                return <TasksViewCalendar />
            default:
                return
        }
    }
//   };

    return (
        <Layout >
            <ShowTasksHandler />
        </Layout>
    )
}

export default HomePage;
