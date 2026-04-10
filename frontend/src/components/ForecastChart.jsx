import React from 'react';
import { Line } from 'react-chartjs-2';

const ForecastChart = ({ forecastData }) => {
    const data = {
        labels: forecastData.map(item => item.date),
        datasets: [{
            label: 'Forecast',
            data: forecastData.map(item => item.value),
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
        }],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return <Line data={data} options={options} />;
};

export default ForecastChart;