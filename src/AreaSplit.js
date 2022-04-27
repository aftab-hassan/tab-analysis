import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie, Doughnut } from 'react-chartjs-2';
import "chartjs-plugin-datalabels";
import {Chart} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './App.css';

Chart.register(ChartDataLabels);

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['List and Library', 'Sites and Groups', 'ODB', 'Spartan', 'Athena', 'Nucleus'],
  datasets: [
    {
      label: 'Tests count',
      data: [188, 34, 23, 24, 13, 39],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgba(75, 192, 192, 0.2)',
        'rgb(0,128,0, 0.2)',
        'rgba(241, 90, 34, 0.3)',
      ],
      borderColor: [
        'rgb(255, 99, 132, 1)',
        'rgb(54, 162, 235, 1)',
        'rgb(255, 205, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(0, 128, 0, 1)',
        'rgba(241, 90, 34, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

var options = {
  // maintainAspectRatio: false,
  // showTooltips: true,
  // responsive: true,
  render: function (args) {
    return args.value + '%';
  },
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'STS Tests Area split - April 2022',
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
        return context.chart.data.labels[
            context.dataIndex
        ] + ' : ' + value;
      },
    }
  },
}

export default function AreaSplit() {
  return (
    <div className="doughnutParent">
      <Doughnut data={data} 
      options={options} 
      />;
    </div>
  )
}

