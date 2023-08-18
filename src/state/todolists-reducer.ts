import {TodolistType} from "../App";

export const todolistsReducer = (state: Array<TodolistType>, action: TodolistReducerType) => {
    switch (action.type) {
        case "REMOVE-TODOLIST": {
            return state.filter(el => el.id !== action.payload.id)
        }
        default:
            return state
    }
}

type TodolistReducerType = RemoveTodolistACType

type RemoveTodolistACType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (id: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {id}
    } as const
}