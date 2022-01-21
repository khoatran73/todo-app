import React from 'react'
import { Container, Avatar, Card, Typography } from "@mui/material"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux'
import { login } from '../../redux/slices/accountSlice'
import { clientId } from '../../constant/constant'

function Login() {
    const dispatch = useDispatch()

    const responseGoogle = async (res) => {
        const account = {
            id: res.profileObj?.googleId,
            email: res.profileObj?.email,
            name: res.profileObj?.name,
            url: res.profileObj?.imageUrl
        }

        dispatch(login(account))
    }

    return (
        <Container component="main" maxWidth="xs">
            <Card variant="outlined"
                sx={{
                    marginTop: 8,
                    padding: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h4" sx={{ marginBottom: 2 }}>
                    Đăng nhập
                </Typography>
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Đăng nhập bằng Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </Card>
        </Container>
    )
}

export default Login