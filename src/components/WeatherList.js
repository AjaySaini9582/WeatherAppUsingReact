import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Card, CardContent, Typography, Grid } from '@mui/material';

const WeatherList = () => {
    const [weatherData, setWeatherData] = useState([]);
    const [city, setCity] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() => {
        if (city) {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=93690777ae477c9787dbccbeb4b849be&units=metric`)
                .then(response => setWeatherData([response.data]))
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [city]);

    return (
        <div>
            <TextField 
                label="Enter City" 
                variant="outlined" 
                fullWidth 
                margin="normal"
                onChange={(e) => setSearch(e.target.value)} 
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        setCity(search);
                    }
                }}
            />
            <Grid container spacing={2}>
                {weatherData.map((weather) => (
                    <Grid item xs={12} sm={6} md={4} key={weather.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">
                                    {weather.name}
                                </Typography>
                                <Typography variant="body2">
                                    Temperature: {weather.main?.temp}°C
                                </Typography>
                                <Typography variant="body2">
                                    Weather: {weather.weather?.[0]?.description}
                                </Typography>
                                <Typography variant="body2">
                                    Humidity: {weather.main?.humidity}%
                                </Typography>
                                <Typography variant="body2">
                                    Wind Speed: {weather.wind?.speed} m/s
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default WeatherList;
