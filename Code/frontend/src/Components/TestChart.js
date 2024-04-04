import React, {useRef} from 'react';
import html2canvas from 'html2canvas';

function TestChart() {
    const chartRef = useRef(null);

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
      //console.log("chartRef", chartRef.current.contentWindow.window.parent.document.body.querySelectorAll('div')[0].id);
       saveDivAsImage(chartRef.current.contentWindow.window.parent.document.body.querySelectorAll('div')[0].id)
      
      };

      

  return (
    <>
    <iframe  ref={chartRef} title="advanced chart TradingView widget" lang="en" id="tradingview_74399" frameborder="0" allowtransparency="true" scrolling="no" allowfullscreen="true" src="https://s.tradingview.com/widgetembed/?hideideas=1&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en#%7B%22symbol%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22frameElementId%22%3A%22tradingview_74399%22%2C%22interval%22%3A%22D%22%2C%22hide_side_toolbar%22%3A%220%22%2C%22allow_symbol_change%22%3A%221%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22Light%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22withdateranges%22%3A%221%22%2C%22show_popup_button%22%3A%221%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22localhost%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22page-uri%22%3A%22localhost%3A3000%2Fdashboard%22%7D" style={{width: '100%', height: '400px', margin: '0px !important', padding: '0px !important'}}></iframe>
    <button onClick={saveImage}>Save Image</button>
    </>
  );
}


export default TestChart;