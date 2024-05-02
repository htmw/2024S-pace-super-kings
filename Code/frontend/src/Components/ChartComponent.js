// ChartComponent.js
'use client'
import React, {useRef} from 'react';
import Chart from 'react-apexcharts';
import html2canvas from 'html2canvas';
import './chartComponent.css';
import axios from '../network/networkInterceptor';
const FormData = require('form-data');


const ChartComponent = ({ stockData , imageUploadChartToChat}) => {


function callDown(){

  imageUploadChartToChat(chartRef.current.chartRef.current.childNodes[0].id)
}

  const chartRef = useRef(null);

      const options = {
        chart: {
          type: 'candlestick',
          height: 350
        },
      
        xaxis: {
          type: 'datetime'
        },

      };

//   const series = [
//     {
//       name: 'Price',
//       data: stockData.map(data => data.close),
//     },
//   ];






       const series = [{
        data: stockData.historical.map(item => ({
          x: new Date(item.date).getTime(),
          y: [item.open, item.high, item.low, item.close]
        }))
      }];
   
  return (
    <div>
   
      <Chart options={options} series={series} type="candlestick" height={350}  ref={chartRef} />
      <button onClick={callDown} className='saveBtn'>Analyze wiht AI</button>
    </div>
  );
};

export default ChartComponent;
