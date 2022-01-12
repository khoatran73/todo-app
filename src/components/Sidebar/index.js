import { Avatar, Typography, Card } from '@mui/material';
import React from 'react';

function Sidebar() {
    return (
        <Card style={{ display: 'flex', alignItems: 'center', padding: 10 }}>
            <Avatar
                alt="Anh Khoa"
                src="/public/logo192.png"
                // sx={{ width: 24, height: 24 }}
                style={{ marginRight: 10 }}
            />
            <Typography component="p" variant="body2" style={{ fontSize: 18, fontWeight: 'bold' }}>
                Tran Anh Khoa
            </Typography>
        </Card>
    )
}

export default Sidebar