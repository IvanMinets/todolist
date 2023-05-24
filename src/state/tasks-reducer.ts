import {FilterValuesType, TasksStateType, TodolistType} from '../App';
import {v1} from 'uuid';

export type RemoveTaskActionType = ReturnType<typeof removeTaskAC>
export type AddTaskActionType = ReturnType<typeof addTaskAC>
export type ChangeTaskStatusType = ReturnType<typeof changeTaskStatusAC>
export type ChangeTitleStatusType = ReturnType<typeof changeTitleStatusAC>

type ActionsType = RemoveTaskActionType | AddTaskActionType | ChangeTaskStatusType | ChangeTitleStatusType

export const tasksReducer = (state: TasksStateType, action: ActionsType) : TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            return {
                ...state,
                [action.payload.todolistId]: state[action.payload.todolistId]
                    .filter(t => t.id !== action.payload.taskId)
            }
        }
        case 'ADD-TASK':
            // const stateCopy = {...state};
            // const tasks = stateCopy[action.payload.todolistId];
            // const newTask = {id: v1(), title: action.payload.title, isDone: false}
            // const newTasks = [newTask, ...tasks]
            // stateCopy[action.payload.todolistId] = newTasks
            // return stateCopy;
            return {
                ...state, [action.payload.todolistId] : [{id: v1(), title: action.payload.title, isDone: false}, ...state[action.payload.todolistId]]}
         case 'CHANGE-TASK-STATUS':
         {
            const stateCopy = {...state};
            let tasks = stateCopy[action.payload.todolistId];
            let task = tasks.find(t => t.id === action.payload.taskId);
            if (task) {
                task.isDone = action.payload.isDone;
            }
            return stateCopy;
        }
        case 'CHANGE-TITLE-STATUS':
        {
            const stateCopy = {...state};
            let tasks = stateCopy[action.payload.todolistId];
            let task = tasks.find(t => t.id === action.payload.taskId);
            if (task) {
                task.title = action.payload.title;
            }
            return stateCopy;
        }

        default:
            throw new Error("I don't understand this type")
    }
}

export const removeTaskAC = (taskId: string, todolistId: string) => {
    return { type: 'REMOVE-TASK', payload: {taskId , todolistId}} as const
}
export const addTaskAC = (title: string, todolistId: string) => {
    return { type: 'ADD-TASK', payload: {title, todolistId}} as const
}
export const changeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string ) => {
    return { type: 'CHANGE-TASK-STATUS', payload: {taskId, isDone, todolistId}} as const
}
export const changeTitleStatusAC = (taskId: string, title: string, todolistId: string ) => {
    return { type: 'CHANGE-TITLE-STATUS', payload: {taskId, title, todolistId}} as const
}