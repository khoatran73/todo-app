import React from 'react'
import { FormGroup, FormControlLabel, Checkbox, Grid, Card, IconButton, Typography } from '@mui/material';
import { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todoSlice, deleteTodo } from "../../../redux/slices/todoSlice"
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { accountSelector } from '../../../redux/selectors/selectors'

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

    const account = useSelector(accountSelector)

    const [checked, setChecked] = useState(completed)
    const [editable, setEditable] = useState(false)
    const [todoName, setTodoName] = useState(todoRef.current?.innerHTML.toString().trim() || "")

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
            dispatch(todoSlice.actions.todoChange({ id: id, todo: todoName }))
        }
    }, [editable, dispatch, id, todoName])

    const handleTodoChange = () => {
        setTodoName(todoRef.current.innerHTML.toString().trim())
    }

    const handleDeleteButtonClick = () => {
        const accountId = account.id
        dispatch(deleteTodo({ id, accountId }))
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
            <Grid item xs sm={8}>
                <FormGroup style={{ marginLeft: 12, display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <FormControlLabel
                        style={{ width: "42px", marginRight: 0 }}
                        control={<Checkbox checked={checked} onChange={handleCheckboxChange} />}
                        label=""
                    />
                    <Typography style={{ width: "calc(100% - 42px)" }} ref={todoRef} onKeyUp={handleTodoChange} className="todo" variant="body2">{name}</Typography>
                </FormGroup>
            </Grid>
            <Grid
                item
                xs
                sm={2}
                container
                direction="row"
                justifyContent="center"
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
                <IconButton
                    color="error"
                    aria-label="upload picture"
                    component="span"
                    onClick={handleDeleteButtonClick}
                >
                    <DeleteIcon />
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