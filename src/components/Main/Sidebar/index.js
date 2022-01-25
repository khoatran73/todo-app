import { Avatar, Typography, Card } from '@mui/material';
import React from 'react';
import { GoogleLogout } from 'react-google-login';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector } from 'react-redux'
import { accountSelector } from '../../../redux/selectors/selectors'
import { useDispatch } from 'react-redux'
import { deepOrange } from '@mui/material/colors'
import { logout } from '../../../redux/slices/accountSlice'

function Sidebar() {
    const { CLIENT_ID } = process.env

    const account = useSelector(accountSelector)

    const dispatch = useDispatch()

    const logoutGoogleAccount = () => {
        dispatch(logout())
    }

    return (
        <Card style={{ display: 'flex', justifyContent: 'space-between', padding: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Avatar
                    sx={{ bgcolor: deepOrange[500] }}
                    alt={account.name}
                    src={account.url}
                    style={{ marginRight: 10 }}
                />
                <Typography component="p" variant="body2" style={{ fontSize: 18, fontWeight: 'bold' }}>
                    {account.name}
                </Typography>
            </div>
            <GoogleLogout
                clientId={CLIENT_ID}
                buttonText={<LogoutIcon />}
                onLogoutSuccess={logoutGoogleAccount}
            >
            </GoogleLogout>
        </Card>
    )
}

export default Sidebar