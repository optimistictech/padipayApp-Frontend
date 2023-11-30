import React from 'react'
import Chart from "react-apexcharts";

const BarGraph = () => {
    const chartData = {
        options: {
          // ApexCharts options
          chart: {
            id: 'column-chart',
          },
          xaxis: {
            categories: ['sun', 'mon', 'tues', 'wed', 'thu', 'fri', 'sat'],
          },
        },
        series: [
          {
            name: 'Series 1',
            data: [30, 40, 35, 50, 40, 90, 20],
          },
        ],
      };
    
      return (
        <div>
          <Chart options={chartData.options} bgColor='warning' series={chartData.series} type="bar" height={250} />
        </div>
      );
}

export default BarGraph