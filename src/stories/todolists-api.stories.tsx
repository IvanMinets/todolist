import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistAPI} from "../api/todolist-api";

export default {
    title: 'API'
}

const config = {
    withCredentials: true
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
            todolistAPI.getTodolist()
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
       todolistAPI.createTodolist(title)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = 'a938e90b-e29a-4ebc-bf02-0132461d583d'
    useEffect(() => {
        todolistAPI.deleteTodolist(todolistId)
            .then((res) => {
                setState(res)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        const todolistId = 'a938e90b-e29a-4ebc-bf02-0132461d583d'
        const title = '123dvfs'

        todolistAPI.updateTodolist(todolistId, title)
            .then((res) => {setState(res.data)})
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

