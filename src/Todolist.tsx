import React, {ChangeEvent, useRef, useState, KeyboardEvent} from "react";
import {FilterValuesType} from "./App";

type PropsType = {
    title: string
    tasks: TaskType[]
    removeTask: (taskId: string) => void
    addTask: (title: string) => void
    changeFilter: (nextFilter: FilterValuesType) => void

}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export const Todolist = (props: PropsType) => {
    const [title,setTitle] = useState<string>('')
    console.log(title)
    // const taskTitleInput = useRef<HTMLInputElement>(null)
    // const addTaskHandler = () => {
    //     if (taskTitleInput.current) {
    //         props.addTask(taskTitleInput.current.value)
    //         taskTitleInput.current.value = ""
    //     }
    // }

    const setTitleHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const addTaskHandler = ()=>{
        props.addTask(title)
        setTitle("")
    }
    const tasksJSXElements: Array<JSX.Element> = props.tasks.map((task: TaskType) => {
        return (<li><input type="checkbox" checked={task.isDone}/>
            <span>{task.title}</span>
            <button onClick={() => props.removeTask(task.id)}>x</button>
        </li>)
    })
    const titleMaxLength: number = 25;
    const isTitleLengthTooLong: boolean = title.length > titleMaxLength
    const isAddBtnDisabled: boolean = !title.length || isTitleLengthTooLong
    const titleMaxLengthWarning = isTitleLengthTooLong ? <div style={{color: "red"}}>Title is too long</div> : null
    const handlerCreator = (filter: FilterValuesType) => () => props.changeFilter(filter)
    const addTaskOnKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && !isAddBtnDisabled && addTaskHandler()
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    placeholder="Please, enter title"
                    value={title}
                    onChange={setTitleHandler}
                    //ref={taskTitleInput}
                    onKeyDown={addTaskOnKeyPressHandler}
                />
                <button //onClick={addTaskHandler}
                    disabled={isAddBtnDisabled}
                    onClick={addTaskHandler}
                 >+</button>
                {titleMaxLengthWarning}
            </div>
            <ul>
                {tasksJSXElements}
            </ul>
            <div>
                <button onClick = {handlerCreator("all")}>All</button>
                <button onClick = {handlerCreator("active")}>Active</button>
                <button onClick = {handlerCreator("completed")}>Completed</button>
            </div>
        </div>
    )
}
export default Todolist;