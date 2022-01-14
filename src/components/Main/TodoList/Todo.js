import React from 'react'
import { FormGroup, FormControlLabel, Checkbox, Grid, Card, IconButton, Typography } from '@mui/material';
import { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { todoSlice } from "./todoSlice"
import EditIcon from '@mui/icons-material/Edit'

const priorityCheck = {
    High: {
        padding: 4,
        color: "#cf1322",
        border: "0.5px solid #ffa39e",
        backgroundColor: "#fff1f0"
    },
    Medium: {
        padding: 4,
        color: "#096dd9",
        border: "0.5px solid #91d5ff",
        backgroundColor: "#e6f7ff"
    },
    Low: {
        padding: 4,
        color: "#fff",
        border: "0.5px solid gray",
        backgroundColor: "gray"
    }
}

function Todo({ name, priority, completed, id }) {
    const todoRef = useRef()

    const [checked, setChecked] = useState(completed)
    const [editable, setEditable] = useState(false)
    const [todo, setTodo] = useState(todoRef.current?.innerHTML.toString().trim() || "")

    const dispatch = useDispatch()

    const handleCheckboxChange = () => {
        setChecked(!checked)
        dispatch(todoSlice.actions.statusTodoChange(id))
    }

    const handleEditButtonClick = () => {
        setEditable(!editable)
    }

    useEffect(() => {
        const element = todoRef.current
        element.contentEditable = editable
        if (element.classList.contains("editable") && !editable) {
            element.classList.remove("editable")
        }

        if (!element.classList.contains("editable") && editable) {
            element.classList.add("editable")
            element.focus()
        }

        if (!editable) {
            dispatch(todoSlice.actions.todoChange({ id: id, todo: todo }))
        }
    }, [editable, dispatch, id, todo])

    const handleTodoChange = () => {
        setTodo(todoRef.current.innerHTML.toString().trim())
    }

    return (
        <Grid
            style={{
                marginBottom: 3,
                ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
            }}
            container
            item
            xs
            justifyContent="space-between">
            <Grid item xs sm={9}>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={checked} onChange={handleCheckboxChange} />}
                        label={<Typography ref={todoRef} onKeyUp={handleTodoChange} className="todo" variant="body2">{name}</Typography>}
                    />
                </FormGroup>
            </Grid>
            <Grid
                item
                xs
                sm={1}
                container
                alignItems="center"
            >
                <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    onClick={handleEditButtonClick}
                >
                    <EditIcon />
                </IconButton>
            </Grid>
            <Grid
                item
                xs
                sm={2}
                container
                alignItems="center"
            >
                <Card variant="outlined" style={priorityCheck[priority]}>
                    {priority}
                </Card>
            </Grid>
        </Grid>
    )
}

export default Todo