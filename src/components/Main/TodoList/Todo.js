import React from 'react'
import { FormGroup, FormControlLabel, Checkbox, Grid, Card } from '@mui/material';
import { useState } from 'react'

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

function Todo({ name, priority }) {
    const [checked, setChecked] = useState(false)

    const handleCheckboxChange = () => {
        setChecked(!checked)
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
            <Grid item xs sm={10}>
                <FormGroup>
                    <FormControlLabel control={<Checkbox onChange={handleCheckboxChange} />} label={name} />
                </FormGroup>
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