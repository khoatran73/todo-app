import React from 'react';
import { Grid} from '@mui/material';
import Todo from './Todo';


function TodoList() {
    return (
        <Grid
            container
            direction="column"
            sx={{ m: 1 }}
        >
            <Todo name="cv 1" priority="High" />
            <Todo name="cv 2" priority="Medium" />
            <Todo name="cv 3" priority="Low" />
        </Grid>
    )
}

export default TodoList