import axios from "axios";

const config = {
    withCredentials: true
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
})

export const todolistAPI = {
    getTodolist() {
        return instance.get<TodolistType[]>('todo-lists')
    },
    createTodolist(title: string) {
        return instance.post<ResponseType<{item: TodolistType}>>(`todo-lists/`, {title})
    },
    deleteTodolist(todolistId: string) {
       return instance.delete<ResponseType<string>>(`todo-lists/${todolistId}`)
    },
    updateTodolist(todolistId: string, title: string) {
        return instance.put<ResponseType>(`todo-lists/${todolistId}`, {title})
    }
}
type TodolistType = {
    id: number
    title: string
    addedDate: Date
    order: number
}
type ResponseType<T = {}> = {
    data: T
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}

