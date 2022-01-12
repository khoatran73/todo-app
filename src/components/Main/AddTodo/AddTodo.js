import React from 'react';
import { useState } from 'react'
import { FormControl, TextField, Button, Select, MenuItem, InputLabel, Grid } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save'

function AddTodo() {
    const [todo, setTodo] = useState("")
    const [priority, setPriority] = useState("High")

    const handleSelectChange = e => {
        setPriority(e.target.value)
    }

    const handleInputChange = e => {
        setTodo(e.target.value)
    }

    const handleSaveTodo = () => {
        console.log(todo, priority)
    }

    return (
        <Grid
            container
            spacing={3}
            alignItems="center"
        >
            <Grid
                item
                sm={7}
                xs={12}

            >
                <FormControl fullWidth>
                    <TextField
                        id="todo-filter"
                        label="Thêm công việc"
                        variant="outlined"
                        value={todo}
                        onChange={e => handleInputChange(e)}
                    />
                </FormControl>
            </Grid>
            <Grid
                item
                sm={3}
                xs={12}
            >
                <FormControl fullWidth>
                    <InputLabel id="priority">Độ ưu tiên</InputLabel>
                    <Select
                        id="priority"
                        label="Độ ưu tiên"
                        value={priority}
                        onChange={e => handleSelectChange(e)}
                    >
                        <MenuItem value="High">High</MenuItem>
                        <MenuItem value="Medium">Medium</MenuItem>
                        <MenuItem value="Low">Low</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid
                item
                sm={2}
                xs={12}
            >
                <Button
                    variant="contained"
                    size="large"
                    startIcon={<SaveIcon />}
                    onClick={handleSaveTodo}
                >
                    Lưu
                </Button>
            </Grid>
        </Grid>
    )
}

export default AddTodo