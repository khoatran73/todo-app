import { FormControl, TextField, IconButton, FormLabel, FormControlLabel, Radio, RadioGroup, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

function Filter() {
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
                    <RadioGroup row name="status">
                        <FormControlLabel value="all" control={<Radio />} label="Tất cả" />
                        <FormControlLabel value="completed" control={<Radio />} label="Hoàn thành" />
                        <FormControlLabel value="todo" control={<Radio />} label="Đang làm" />
                    </RadioGroup>
                </FormControl>
            </Grid>
        </div>
    )
}

export default Filter