import React from 'react';
import { useEffect } from 'react'
import { Grid } from '@mui/material';
import Todo from './Todo';
import { useSelector, useDispatch } from 'react-redux'
import { todoListRemainingSelector } from '../../../redux/selectors/selectors';
import { accountSelector } from '../../../redux/selectors/selectors'
import { getTodoList } from "../../../redux/slices/todoSlice"

function TodoList() {
    const todoList = useSelector(todoListRemainingSelector) || []

    const account = useSelector(accountSelector)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTodoList(account))
    }, [account, dispatch])

    return (
        <Grid
            container
            direction="column"
            wrap="nowrap"
            sx={{ m: 1 }}
            style={{ marginTop: 30, marginBottom: 30 }}
            className="todo-list"
        >
            {todoList.map(todo => (
                <Todo
                    key={todo.id}
                    id={todo.id}
                    name={todo.name}
                    priority={todo.priority}
                    completed={todo.completed}
                />
            ))}
        </Grid>
    )
}

export default TodoList