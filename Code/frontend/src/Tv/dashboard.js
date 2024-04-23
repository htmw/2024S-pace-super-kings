import React, { useRef, useEffect, useState } from "react";

import "./assets/vendor/datatables/css/jquery.dataTables.min.css";

import demo from "./js/functions/functions.js";
import html2canvas from "html2canvas";
import axios from "../network/networkInterceptor.js";
import ChartComponent from "./components/chartcomponents";
import ChatScreen from "./chatScreen";
import ClipLoader from "react-spinners/ClipLoader";
import "./dashboard.css";
import Navbar from "../Components/Navbar.jsx";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TabBar from "../Components/Tab-bar/TabBar.jsx";
import Orders from "../Components/Tab-bar/Orders.jsx";
import TopUpFunds from "../Components/TopUpFunds.js";
import Porfolio from "../Components/Tab-bar/Porfolio.jsx";
import ChartDefault from "../Components/Tab-bar/ChartDefault.jsx";

function Tv() {
  const location = useLocation();
  const { hash, pathname, search } = location;
  const divRef = useRef(null);
  const [query, setQuery] = useState("");
  const [stockTitle, setStockTitle] = useState("Apple INC");
  const [stockTicker, setStockTicker] = useState("AAPL");
  const [suggestions, setSuggestions] = useState([]);
  const [orders, setOrders] = useState([]);
  const [selectedStockData, setSelectedStockData] = useState(null);
  const [isStockLoading, setStockLoading] = useState(false);
  const [accountMoney, setAccountMoney] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(10);

  //ORDER RELATED VARIABLES
  const [showDialog, setShowDialog] = useState(false);
  const [orderType, setOrderType] = useState("");
  const [quantity, setQuantity] = useState("");

  const openDialog = (type) => {
    setShowDialog(true);
    setOrderType(type);
  };

  const closeDialog = () => {
    setShowDialog(false);
    setQuantity("");
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleOrderForm = async (event) => {
    event.preventDefault();
    // Do something with the quantity and orderType
    if (!quantity) {
      alert("Please enter quantity");
      return;
    }
    console.log(`Quantity: ${quantity}, Order Type: ${orderType}`);

    try {
      const response = await axios.post("/orders/place", {
        ticker: stockTicker,
        quantity: parseInt(quantity),
        price: currentPrice,

        orderTime: Date.now(),
        orderType: "BUY",
      });

      toast.success(
        `${orderType} order for ${quantity} of ${stockTicker} placed at USD${currentPrice} each`
      );
      console.log("Order placed:", response.data);
      // Handle the response data as needed
    } catch (error) {
      console.error("Error placing order:", error.response.data.error);
      if (error.response.data.error === "Insufficient funds") {
        toast.warn("Insufficient funds");
      } else {
        toast.success("Failed to place an order");
      }

      // Handle the error
    }

    getUserAccountMoney();
    getOrders();

    // Close the dialog
    closeDialog();
  };

  function formatDateTime(dateTime) {
    var currentDate = new Date();
    var targetDate = new Date(dateTime);

    // Check if the date is today
    if (
      targetDate.getDate() === currentDate.getDate() &&
      targetDate.getMonth() === currentDate.getMonth() &&
      targetDate.getFullYear() === currentDate.getFullYear()
    ) {
      // If it's today, return the hour and seconds
      var hours = targetDate.getHours();
      var minutes = targetDate.getMinutes();
      var seconds = targetDate.getSeconds();
      return hours + ":" + minutes + ":" + seconds;
    } else {
      // If it's not today, return the date
      var year = targetDate.getFullYear();
      var month = targetDate.getMonth() + 1; // January is 0
      var date = targetDate.getDate();
      return year + "-" + month + "-" + date;
    }
  }

  // Test cases
  
  //ORDER RELATED VARIABLES : END

  const handleDownloadClick = () => {
    // Get the DOM node of the div
    const divElement = divRef.current;

    // Use html2canvas to capture the div as a canvas
    html2canvas(divElement)
      .then((canvas) => {
        // Convert canvas to data URL
        const imgData = canvas.toDataURL("image/png");

        // Create a temporary link element
        const link = document.createElement("a");
        link.href = imgData;
        link.download = "screenshot.png";

        // Simulate click on the link to trigger download
        link.click();
      })
      .catch((error) => {
        console.error("Error generating screenshot:", error);
      });
  };

  async function getUserAccountMoney() {
    try {
      var response = await axios.get(`/account/money`);
      if (response.data.amount) {
        setAccountMoney(response.data.amount.toFixed(2));
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    autofetchStock();
    getUserAccountMoney();
    getOrders();
  }, []);

  async function autofetchStock() {
    setSuggestions([]);
    setQuery("");

    try {
      const response = await axios.get(`/stocks/data/?ticker=` + stockTicker);
     
      setSelectedStockData(response.data);
    } catch (error) {
      console.error("Error fetching stock data:", error.message);
    }
  }

  const getOrders = async () => {
    try {
      const response = await axios.get(`/orders`);

      var ordersTemp = response.data;

      setOrders(ordersTemp.reverse());
    } catch (error) {
      console.error("Error fetching orders:", error.message);
    }
  };

  const fetchStockBySearch = async (event) => {
    setQuery(event.target.value);
    if (event.target.value.length < 1) {
      setSuggestions([]);
      return;
    }
    try {
      const response2 = await fetch(
        `https://finance.yahoo.com/_finance_doubledown/api/resource/searchassist;searchTerm=${query}`
      );
      const response = await response2.json();

      if (response.items !== null) {
        setSuggestions(response.items);
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const getImage = (e) => {
    if (this.TradingWidget) {
      this.setState({
        divStyle: {
          width: 1440,
          height: 600,
          opacity: 0,
        },
      });

      setTimeout(() => {
        this.TradingWidget.postMessage.get(
          "imageURL",
          {},
          function (t) {
            this.downloadImage(
              `https://s3.tradingview.com/snapshots/${t
                .slice(0, 1)
                .toLowerCase()}/${t}.png`
            );
          }.bind(this)
        );
      }, 100);
    }
  };

  const handleClick = async ({ symbol, name }) => {
    setStockTicker(symbol);
    setStockLoading(true);
    setSuggestions([]);
    setStockTitle(name);

    setQuery("");
    try {
      const response = await axios.get(`/stocks/data/?ticker=${symbol}`);
      console.log(response.data);
      setSelectedStockData(response.data);
    } catch (error) {
      console.error("Error fetching stock data:", error.message);
    }
    setStockLoading(false);
  };


const [activeTab, setActiveTab] =useState('chart');

const handleTabChange=(tab)=>{
setActiveTab(tab);
} 

  return (
    <div>
      <ToastContainer />
      <div id="preloader">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>

      <div id="main-wrapper">
        <div>
          <Navbar />
		  <div>
		  <TabBar activeTab={activeTab} onTabChange={handleTabChange} />
		  {activeTab === 'chart' && <ChartDefault />}
      {activeTab === 'orders' && <Orders />}
		  {activeTab === 'portfolio' && <Porfolio />}
		  {activeTab === 'topup' && <TopUpFunds />}
		  </div>
          {/* <div className='Header'></div> */}
          {/* < ChartDefault /> */}
      </div>
      </div>
    </div>
  );
}

export default Tv;
