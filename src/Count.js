import React from 'react';
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
import {Chart} from 'chart.js';
import faker from 'faker';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ChartDataLabels);

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'STS Tests Reliability - April 2022',
    },
    datalabels: {
      backgroundColor: function(context) {
        return context.dataset.backgroundColor;
      },
      borderColor: 'white',
      borderRadius: 25,
      borderWidth: 2,
      color: 'white',
      display: function(context) {
        var dataset = context.dataset;
        var count = dataset.data.length;
        var value = dataset.data[context.dataIndex];
        return value > count * 1.5;
      },
      font: {
        weight: 'bold'
      },
      padding: 6,
      formatter: function (value, context) {
        return value;
      },
    }
  },
};

const labels = ['List and Library', 'Sites and Groups', 'ODB', 'Spartan', 'Athena', 'Nucleus'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Number of active tests',
      // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      data: [188, 34, 23, 24, 13, 39],
      backgroundColor: 'rgba(255, 99, 132)',
    },
    // {
    //   label: 'Number of active hotfixes',
    //   data: labels.map(() => faker.datatype.number({ min: 1, max: 1000 })),
    //   // data: [],
    //   backgroundColor: 'rgb(54, 162, 235)',
    // },
    {
      label: 'Average reliability percentage',
      // data: labels.map(() => faker.datatype.number({ min: 1, max: 1000 })),
      data: ['97.77', '99.83', '99.03', '99.33', '66.31', '96.89'],
      backgroundColor: 'rgb(255, 205, 86, 0.9)',
    },
    {
      label: 'Average test duration',
      // data: labels.map(() => faker.datatype.number({ min: 1, max: 1000 })),
      data: ['51.91', '42.69', '52.40', '32.94', '79.79', '0'],
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
    },
  ],
};

const element = (
  <div class="chart-container" style="position: relative; height:30vh; width:50vw">
     <canvas id="chart"></canvas>
  </div>
)

export default function Count() {
  return <Bar options={options} data={data} />;
}


// chart.canvas.parentNode.style.height = '128px';
// chart.canvas.parentNode.style.width = '128px';