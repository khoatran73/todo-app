import { Card } from '@mui/material';
import React from 'react';
import Filter from './Filter/Filter';
import AddTodo from './AddTodo/AddTodo';
import TodoList from './TodoList/TodoList';

function Main() {
    return (
        <Card style={{ padding: 20 }}>
            <Filter />
            <TodoList />
            <AddTodo /> 
        </Card>
    )
}

export default Main