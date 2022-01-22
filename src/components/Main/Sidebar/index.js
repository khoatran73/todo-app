import { Avatar, Typography, Card } from '@mui/material';
import React from 'react';
import { GoogleLogout } from 'react-google-login';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector } from 'react-redux'
import { accountSelector } from '../../../redux/selectors/selectors'
import { useDispatch } from 'react-redux'
import { accountSlice } from '../../../redux/slices/accountSlice'
import { deepOrange } from '@mui/material/colors';
import { clientId } from '../../../constant/constant'

function Sidebar() {
    const account = useSelector(accountSelector)

    const dispatch = useDispatch()

    const logout = () => {
        dispatch(accountSlice.actions.logout())
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
                clientId={clientId}
                buttonText={<LogoutIcon />}
                onLogoutSuccess={logout}
            >
            </GoogleLogout>
        </Card>
    )
}

export default Sidebar