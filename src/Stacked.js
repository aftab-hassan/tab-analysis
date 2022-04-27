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
    title: {
      display: true,
      text: 'STS Test Reliability - Number of tests in each Percentage Reliability bucket - April 2022',
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
        console.log(context);
        return context.dataset.label + '% : ' + value + ' tests';
      },
    }
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['STS Test Reliability'];

export const data = {
  labels,
  datasets: [
    {
      label: '90-95',
      data: [7],
      backgroundColor: 'rgba(255, 99, 132, 1)',
    },
    {
      label: '95-98',
      data: [20],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: '98-99',
      data: [17],
      backgroundColor: 'rgb(241, 90, 34, 1)',
    },
    {
      label: '99-99.5',
      data: [9],
      backgroundColor: 'rgb(249, 180, 45)',
    },
    {
      label: '99.5-100',
      data: [29],
      backgroundColor: 'rgb(154, 205, 50, 1)',
    },
    {
      label: '100',
      data: [230],
      backgroundColor: 'rgb(0, 128, 0, 1)',
    }
  ],
};

export default function Stacked() {
  return <Bar options={options} data={data} />;
}
