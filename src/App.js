import { Container, Grid } from '@mui/material';
import React from 'react';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import "@fontsource/roboto";
import "./App.css"

function App() {
  return (
    <Container style={{ paddingTop: 20, paddingBottom: 20 }}>
      <Grid container spacing={2}>
        <Grid
          item
          sm={3}
          xs={12}
        >
          <Sidebar />
        </Grid>
        <Grid
          item
          sm={9}
          xs={12}
        >
          <Main />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App;
