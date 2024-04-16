import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from '../network/networkInterceptor';
import ChartComponent from './ChartComponent';
import ChatWindow from './ChatWindow';
import './simulator.css'
import AIChat from './AIChat';

function checkForToken() {
  const token = localStorage.getItem('token');
  if (!token) {
    window.location.href = '/login';
  }
}

function Simulator() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedStockData, setSelectedStockData] = useState(null);

  useEffect(() => {
    checkForToken();
  }, []);

  const handleChange = async (event) => {
    const value = event.target.value;
    setQuery(value);

    try {
      const response = await axios.get(`https://finance.yahoo.com/_finance_doubledown/api/resource/searchassist;searchTerm=${value}`);
      if (response.data !== null) {
        setSuggestions(response.data.items);
      }
    } catch (error) {
      console.error('Error fetching suggestions:', error.message);
    }
  };

  async function downloadSVG(chartId) {
    console.log("chartId ", document.getElementById(chartId));
    console.log(window.Apex._chartInstances);
    const chartInstance = window.Apex._chartInstances.find(
      (chart) => chart.id === chartId
    );
    console.log("chartInstance ", chartInstance);
    const base64 = await chartInstance.chart.dataURI();
    console.log("base 64", base64.imgURI);
    const downloadLink = document.createElement("a");
    downloadLink.href = base64.imgURI;
    downloadLink.download = "image.png";

    // Add the anchor element to the document
    document.body.appendChild(downloadLink);

    // Simulate a click event to initiate the download
    downloadLink.click();

    // Remove the anchor element from the document
    document.body.removeChild(downloadLink);
  }

  const handleClick = async (stockSymbol) => {
    setSuggestions([])
    try {
      const response = await axios.get(`stocks/data/?ticker=${stockSymbol}`);
      setSelectedStockData(response.data);
    } catch (error) {
      console.error('Error fetching stock data:', error.message);
    }
  };


 

  return (
    <>
      <Navbar />
      <div>
        <h1>Search Stocks</h1>
        <input type="text" value={query} onChange={handleChange} />
        <ul>
          {suggestions.map((stock) => (
            <li key={stock.symbol} onClick={() => handleClick(stock.symbol)}>
              <span>{stock.name} ({stock.symbol})</span>
            </li>
          ))}
        </ul>
      </div>
      {selectedStockData && ( <ChartComponent stockData={selectedStockData} />)}
      <button onClick={()=>{
    downloadSVG('apexchartsygyko4hh');
   }}>Download chart</button>
     <AIChat />
    </>
  );
}

export default Simulator;
