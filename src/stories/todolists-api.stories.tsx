import React, {useEffect, useState} from 'react'
import axios from "axios";

export default {
    title: 'API'
}

const config = {
    withCredentials: true
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)

    useEffect(() => {
       const promise = axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', config)
        promise
            .then((res) => {
                setState(res.data)
            })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    const title = 'Hello!'
    useEffect(() => {
        const promise = axios.post(`https://social-network.samuraijs.com/api/1.1/todo-lists`, {title: title}, config)
        promise
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = '499eed97-95b8-4df8-a7ec-2205b9e971ca'
    useEffect(() => {
        const promise = axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, config)
        promise
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = '499eed97-95b8-4df8-a7ec-2205b9e971ca'
    const title = 'Hello2343'
    useEffect(() => {
        const promise = axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {title: title}, config)
        promise
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

