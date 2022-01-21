import { Container } from '@mui/material';
import React from 'react';
import Main from './components/Main';
import Login from './components/Login/Login';
import "@fontsource/roboto";
import "./App.css"
import { useSelector } from 'react-redux'
import { accountSelector } from './redux/selectors/selectors'

function App() {
  const account = useSelector(accountSelector)

  return (
    <Container style={{ paddingTop: 20, paddingBottom: 20 }}>
      {!account
        ? <Login />
        : <Main />}
    </Container>
  )
}

export default App;
