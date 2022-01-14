import React from 'react';
import { Grid } from '@mui/material';
import Todo from './Todo';
import { useSelector } from 'react-redux'
import { todoListRemainingSelector } from '../../../redux/selectors';

function TodoList() {
    const todoList = useSelector(todoListRemainingSelector) || []

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