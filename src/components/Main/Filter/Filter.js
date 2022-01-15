import {
    FormControl, TextField, IconButton, FormLabel, FormControlLabel,
    Radio, RadioGroup, Grid, InputLabel, Select, MenuItem, OutlinedInput, Box, Chip
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { filterSlice } from "../../../redux/slices/filterSlice"

function Filter() {
    const [priorityFilter, setPriorityFilter] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [statusFilter, setStatusFilter] = useState("All")

    const dispatch = useDispatch()

    const handleSearchTextChange = e => {
        setSearchText(e.target.value)
    }

    useEffect(() => {
        dispatch(filterSlice.actions.searchFilterChange(searchText))
    }, [searchText, dispatch])

    const handlePriorityFilterChange = e => {
        const value = e.target.value
        setPriorityFilter(
            typeof value === 'string' ? value.split(',') : value,
        );
    }

    useEffect(() => {
        dispatch(filterSlice.actions.priorityFilterChange(priorityFilter))
    }, [priorityFilter, dispatch])

    const handleStatusFilterChange = e => {
        setStatusFilter(e.target.value)
    }

    useEffect(() => {
        dispatch(filterSlice.actions.statusFilterChange(statusFilter))
    }, [statusFilter, dispatch])

    return (
        <div>
            <Grid
                container
                spacing={3}
                alignItems="center"
            >
                <Grid
                    item
                    sm={10}
                    xs={12}
                >
                    <FormControl fullWidth>
                        <TextField
                            id="todo-filter"
                            label="Tìm kiếm công việc"
                            variant="outlined"
                            onChange={e => handleSearchTextChange(e)}
                            value={searchText}
                        />
                    </FormControl>
                </Grid>
                <Grid
                    item
                    sm={2}
                    xs={12}
                >
                    <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                    >
                        <SearchIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid
                container
                spacing={1}
                alignItems="center"
                sx={{ m: 1 }}
            >
                <FormControl component="fieldset">
                    <FormLabel component="legend">Lọc theo trạng thái</FormLabel>
                    <RadioGroup row name="status" value={statusFilter} onChange={handleStatusFilterChange}>
                        <FormControlLabel value="All" control={<Radio />} label="Tất cả" />
                        <FormControlLabel value="Completed" control={<Radio />} label="Hoàn thành" />
                        <FormControlLabel value="To do" control={<Radio />} label="Đang làm" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid
                container
                spacing={1}
                alignItems="center"
                sx={{ m: 1 }}
            >
                <FormControl sx={{ width: 400 }}>
                    <InputLabel id="priority-filter">Độ ưu tiên</InputLabel>
                    <Select
                        labelId="priority-filter"
                        id="demo-multiple-chip"
                        multiple
                        value={priorityFilter}
                        onChange={handlePriorityFilterChange}
                        input={<OutlinedInput id="priority-filter" label="Độ ưu tiên" />}
                        renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                            </Box>
                        )}
                    >
                        <MenuItem value="High">High</MenuItem>
                        <MenuItem value="Medium">Medium</MenuItem>
                        <MenuItem value="Low">Low</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </div>
    )
}

export default Filter