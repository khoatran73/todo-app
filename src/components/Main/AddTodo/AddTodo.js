import React from 'react';
import { useState, useRef } from 'react'
import { FormControl, TextField, Button, Select, MenuItem, InputLabel, Grid } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addTodo } from "../../../redux/slices/todoSlice"
import { accountSelector } from '../../../redux/selectors/selectors'

function AddTodo() {
    const [todoName, setTodoName] = useState("")
    const [priority, setPriority] = useState("High")
    const addTodoRef = useRef()

    const account = useSelector(accountSelector)

    const dispatch = useDispatch()

    const handleSelectChange = e => {
        setPriority(e.target.value)
    }

    const handleInputChange = e => {
        setTodoName(e.target.value)
    }

    const handleSaveTodo = async () => {
        if (!todoName)
            return

        const todo = {
            id: uuidv4(),
            account_id: account.id,
            name: todoName,
            priority: priority,
            completed: false
        }

        await dispatch(addTodo(todo))

        setTodoName("")
        setPriority("High")
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
                        ref={addTodoRef}
                        id="todo-filter"
                        label="Thêm công việc"
                        variant="outlined"
                        value={todoName}
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