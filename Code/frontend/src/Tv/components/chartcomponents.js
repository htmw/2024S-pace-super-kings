// ChartComponent.js
'use client'
import React, {useRef} from 'react';
import Chart from 'react-apexcharts';
import html2canvas from 'html2canvas';


const ChartComponent = ({ stockData }) => {


  
  const chartRef = useRef(null);

      const options = {
        chart: {
          type: 'candlestick',
          height: 350,
          animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 200,
            animateGradually: {
                enabled: true,
                delay: 0
            },
            dynamicAnimation: {
                enabled: false,
                speed: 100
            }
        }
        },
      
        xaxis: {
          type: 'datetime'
        },
        // yaxis: {
        //   tooltip: {
        //     enabled: true
        //   }
        // }
      };

//   const series = [
//     {
//       name: 'Price',
//       data: stockData.map(data => data.close),
//     },
//   ];





const saveDivAsImage = (divId) => {
  const div = document.getElementById(divId);

  if (div) {
    html2canvas(div).then((canvas) => {
      // Convert canvas to data URL
      const imageData = canvas.toDataURL('image/png');

      // Create a temporary link element
      const link = document.createElement('a');
      link.href = imageData;
      link.download = 'div_image.png';


      // Trigger the download
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
    });
  }
};

const saveImage = () => {

  saveDivAsImage(chartRef.current.chartRef.current.childNodes[0].id)

};


       const series = [{
        data: stockData.historical.map(item => ({
          x: new Date(item.date).getTime(),
          y: [item.open, item.high, item.low, item.close]
        }))
      }];
   
  return (
    <div>
   
      <Chart options={options} series={series} type="candlestick" height={350}  ref={chartRef} />
      <button className='saveImagebtn' onClick={saveImage}>Analyze with AI</button>
 

    </div>
  );
};

export default ChartComponent;
