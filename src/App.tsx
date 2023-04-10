import React, {useState} from 'react';
import './App.css';
import Todolist, {TaskType} from "./Todolist";
import {v1} from "uuid";




export type FilterValuesType = "all" | "active" | "completed"

function App() {
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
    ])

    const[filter, setFilter] = useState<FilterValuesType>("all")
    const changeFilter = (nextFilter: FilterValuesType) => {
        setFilter(nextFilter)
    }
    const removeTask = (taskId: string) => {
        setTasks(tasks.filter(t => t.id !== taskId))
    }
    const addTask = (title: string) => {
        const newTask: TaskType = {
            id: v1(),
            title: title,
            isDone: false
        }
        setTasks([newTask, ...tasks])
    }

    const getTasksForMe = (tasksList: Array<TaskType>, filterValue: FilterValuesType) => {
        switch (filterValue) {
            case "active":
                return tasks.filter(t => !t.isDone)
            case "completed":
                return tasks.filter(t => t.isDone)
            default:
                return tasks
        }
    }
    const tasksWhatIWantToSee = getTasksForMe(tasks, filter)


    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasksWhatIWantToSee}
                      removeTask={removeTask}
                      changeFilter = {changeFilter}
                      addTask={addTask}
            />
        </div>
    );
}

export default App;

