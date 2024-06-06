import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const CompetenceChart = () => {
  const data = {
    labels: ['Python', 'Spark', 'Machine Learning', 'Visualisation' , 'Statistiques'],
    datasets: [
      {
        data: [45, 20, 60, 80, 50],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF9800'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF9800'],
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Mes Compétences en tant que Data Scientist Junior',
        color: 'black',
        font: { size: 16, weight: 'bold' },
      },
      legend: {
        display: true,
        labels: {
          color: 'white',
          font: { size: 14, weight: 'bold' },
        },
      },
    },
    tooltips: {
      enabled: true,
      callbacks: {
        label: (tooltipItem, data) => {
          const dataset = data.datasets[tooltipItem.datasetIndex];
          const value = dataset.data[tooltipItem.index];
          const label = data.labels[tooltipItem.index];
          return `${label}: ${value}%`;
        },
      },
      bodyFontColor: 'black',
      titleFontColor: 'black',
      backgroundColor: '#f0f0f0',
      borderColor: 'black',
      borderWidth: 1,
    },
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default CompetenceChart;
  