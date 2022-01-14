import { Card, Grid } from '@mui/material';
import React from 'react';
import Filter from './Filter/Filter';
import AddTodo from './AddTodo/AddTodo';
import TodoList from './TodoList/TodoList';
import Sidebar from './Sidebar';

function Main() {
    return (
        <>
            <Grid container spacing={2}>
                <Grid
                    item
                    sm={4}
                    xs={12}
                >
                    <Sidebar />
                </Grid>
                <Grid
                    item
                    sm={8}
                    xs={12}
                >
                    <Card style={{ padding: 20 }}>
                        <Filter />
                        <TodoList />
                        <AddTodo />
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default Main