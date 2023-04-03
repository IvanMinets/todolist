import React from "react";
import {FilterValuesType} from "./App";

type PropsType = {
    title: string
    tasks: TaskType[]
    removeTask: (taskId: number) => void
    changeFilter: (nextFilter: FilterValuesType) => void
}

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist = (props: PropsType) => {


    const tasksJSXElements: Array<JSX.Element> = props.tasks.map((task:TaskType) => {
        return (<li><input type ="checkbox" checked={task.isDone}/>
            <span>{task.title}</span>
            <button onClick={() =>props.removeTask(task.id)}>x</button>
        </li>)
    })

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasksJSXElements}
            </ul>
            <div>
                <button onClick={() =>props.changeFilter("all")}>All</button>
                <button onClick={() =>props.changeFilter("active")}>Active</button>
                <button onClick={() =>props.changeFilter("completed")}>Completed</button>
            </div>
        </div>
    )
}
export default Todolist;