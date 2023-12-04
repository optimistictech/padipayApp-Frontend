import React from 'react';
import Chart from "react-apexcharts";

const LineGraph = () => {
    const chartData = {
        options: {
          // ApexCharts options
          chart: {
            id: 'line-chart',
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
        },
        series: [
          {
            name: 'Series 1',
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 110, 90, 80],
          },
        ],
      };
    
      return (
        <div>
          <Chart options={chartData.options} series={chartData.series} type="line" height={250}/>
        </div>
      );
}

export default LineGraph