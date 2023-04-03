import React, {useState} from 'react';
import './App.css';
import Todolist, {TaskType} from "./Todolist";

export type FilterValuesType = "all" | "active" | "completed"

function App() {
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
    ])

    const[filter, setFilter] = useState<FilterValuesType>("completed")
    const changeFilter = (nextFilter: FilterValuesType) => {
        setFilter(nextFilter)
    }



    const removeTask = (taskId: number) => {
        setTasks(tasks.filter(t => t.id !== taskId))

    }
    const getTasksForMe = (tasksList: Array<TaskType>, filterValue: FilterValuesType) => {
        switch (filterValue) {
            case "active":
                return tasks.filter(t => t.isDone === false)
            case "completed":
                return tasks.filter(t => t.isDone === true)
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
            />
        </div>
    );
}

export default App;

