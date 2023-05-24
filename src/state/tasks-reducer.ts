import {FilterValuesType, TasksStateType, TodolistType} from '../App';
import {v1} from 'uuid';

export type RemoveTaskActionType = ReturnType<typeof removeTaskAC>
export type SActionType = ReturnType<typeof secondAC>


type ActionsType = RemoveTaskActionType | SActionType

export const tasksReducer = (state: TasksStateType, action: ActionsType) : TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            return {
                ...state,
                [action.payload.todolistId]: state[action.payload.todolistId]
                    .filter(t => t.id !== action.payload.taskId)
            }
        }
        case '':
            return state;
        default:
            throw new Error("I don't understand this type")
    }
}

export const removeTaskAC = (taskId: string, todolistId: string) => {
    return { type: 'REMOVE-TASK', payload: {taskId , todolistId}} as const
}
export const secondAC = (title: string) => {
    return { type: ''} as const
}
