import React from 'react';
import { Grid } from '@mui/material';
import Todo from './Todo';
import { useSelector } from 'react-redux'
import { todoListRemainingSelector } from '../../../redux/selectors';

function TodoList() {
    const todoList = useSelector(todoListRemainingSelector)

    return (
        <Grid
            container
            direction="column"
            sx={{ m: 1 }}
            style={{ paddingTop: 20, paddingBottom: 20 }}
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