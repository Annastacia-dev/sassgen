/* eslint-disable react/prop-types */
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useContext } from 'react';
import { DarkModeContext } from '../../contexts/Dark';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart({ chartData }) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className="chart-container"
      style={{
        width: window.innerWidth < 480 ? '0px' : '400px ',
        padding: '10px',
      }}
    >
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: false,
              text: 'Fitness Activity',
            },
            legend: {
              display: true,
              labels: {
                usePointStyle: true,
                color: darkMode ? '#fff' : '#000',
                font: {
                  size: 11,
                },
                fontFamily: 'Poppins',
              },
            },
          },
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
            },
          },
          borderRadius: 20,
          responsive: true,
          maintainAspectRatio: false,
          color: darkMode ? '#fff' : '#000',
        }}
      />
    </div>
  );
}

export default BarChart;
