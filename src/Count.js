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

const labels = ['Number of active tests', 'Average reliability percentage', 'Average test duration'];

export const data = {
  labels,
  datasets: [
    {
      label: 'List and Library',
      // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      data: [188, 97.77, 51.91],
      backgroundColor: 'rgba(255, 99, 132)',
    },
    {
      label: 'Sites and Groups',
      // data: labels.map(() => faker.datatype.number({ min: 1, max: 1000 })),
      data: [34, 99.83, 42.69],
      backgroundColor: 'rgb(255, 205, 86, 0.9)',
    },
    {
      label: 'ODB',
      // data: labels.map(() => faker.datatype.number({ min: 1, max: 1000 })),
      data: [23, 99.03, 52.40],
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
    },
    {
      label: 'Spartan',
      // data: labels.map(() => faker.datatype.number({ min: 1, max: 1000 })),
      data: [24, 99.33, 32.94],
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
    },
    {
      label: 'Athena',
      // data: labels.map(() => faker.datatype.number({ min: 1, max: 1000 })),
      data: [9, 95.78, 79.10],
      backgroundColor: 'rgba(0,128,0, 0.5)',
    },
    {
      label: 'Nucleus',
      // data: labels.map(() => faker.datatype.number({ min: 1, max: 1000 })),
      data: [39, 96.89, 0],
      backgroundColor: 'rgba(241, 90, 34, 0.5)',
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