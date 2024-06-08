import React from 'react';
import WeatherList from './components/WeatherList';
import { Container, Typography } from '@mui/material';

function App() {
    return (
        <Container>
            <Typography variant="h2" align="center" gutterBottom>
                Weather App
            </Typography>
            <WeatherList />
        </Container>
    );
}

export default App;
