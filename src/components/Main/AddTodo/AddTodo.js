import React from 'react';
import { useState, useRef } from 'react'
import { FormControl, TextField, Button, Select, MenuItem, InputLabel, Grid } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { todoSlice } from "../../../redux/slices/todoSlice"
import { accountSelector } from '../../../redux/selectors/selectors'
import { serverUrl } from '../../../constant/constant'

function AddTodo() {
    const [todo, setTodo] = useState("")
    const [priority, setPriority] = useState("High")
    const addTodoRef = useRef()

    const account = useSelector(accountSelector)

    const dispatch = useDispatch()

    const handleSelectChange = e => {
        setPriority(e.target.value)
    }

    const handleInputChange = e => {
        setTodo(e.target.value)
    }

    const handleSaveTodo = () => {
        if (!todo)
            return

        const todoObj = {
            id: uuidv4(),
            account_id: account.id,
            name: todo,
            priority: priority,
            completed: false
        }
        dispatch(todoSlice.actions.addTodo({
            todoObj
        }))

        const request = new Request(serverUrl + "/api/todo", {
            method: "post",
            credentials: 'include',
            body: JSON.stringify(todoObj),
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json'
            }
        })

        fetch(request)
            .then(res => res.json())
            .then(result => {
                console.log(result)
                // const todoList = result.todoList
                // dispatch(todoSlice.actions.addTodoList({
                //     todoList: todoList
                // }))
            })
            .catch(error => console.error(error))

        setTodo("")
        setPriority("High")
        // addTodoRef.current.focus()
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