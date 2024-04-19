import React, { useRef, useEffect, useState } from "react";

import "./assets/vendor/datatables/css/jquery.dataTables.min.css";

import demo from "./js/functions.js";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
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
  console.log(formatDateTime(new Date())); // Output: current hour and seconds
  console.log(formatDateTime("2024-04-15T12:30:45")); // Output: 2024-4-15
  console.log(formatDateTime("2024-04-16T08:15:30")); // Output: current hour and seconds

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
      console.log(response.data);
      setSelectedStockData(response.data);
    } catch (error) {
      console.error("Error fetching stock data:", error.message);
    }
  }

  const getOrders = async () => {
    try {
      const response = await axios.get(`/orders`);
      console.log(response.data);
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


const [activeTab, setActiveTab] =useState('orders');

const handleTabChange=(tab)=>{
setActiveTab(tab);
} 

  return (
    <div>
      <ToastContainer />
      <div id="preloader">
        <div class="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>

      <div id="main-wrapper">
        <div>
          <Navbar />
		  <div>
		  <TabBar activeTab={activeTab} onTabChange={handleTabChange} />
		  {activeTab === 'orders' && <Orders />}
		  {activeTab === 'portfolio' && <Porfolio />}
		  {activeTab === 'topup' && <TopUpFunds />}
		  </div>
          {/* <div className='Header'></div> */}
          <br />
          <br />
          <div style={{ height: "500px" }} class="container-fluid">
            <div class="row">
              <div class="col-xl-8">
                <div class="card">
                  <div
                    className="stockTitle"
                    style={{
                      color: "#a98898",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "right",
                      textAlign: "right",
                    }}
                  >
                    <span> Balance : USD {accountMoney}</span>
                  </div>
                  <div class="card-body">
                    <input
                      style={{
                        width: "100%",
                        height: "45px",
                        border: "1px solid #B3C0CD",
                        "margin-bottom": "15px",
                        "border-radius": "5px",
                        "padding-left": "10px",
                      }}
                      type="text"
                      placeholder="Search Stock Name.."
                      value={query}
                      onChange={fetchStockBySearch}
                    />

                    {suggestions.length > 0 ? (
                      <ul className="stockSuggestionlist-ul">
                        {suggestions.map((stock) => (
                          <li
                            className="stockSuggestionlist-li"
                            key={stock.symbol}
                            onClick={() => handleClick(stock)}
                          >
                            <span>
                              {stock.name} ({stock.symbol})
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div />
                    )}

                    <div
                      className="stockTitle"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      {/* <div id="tradingview_85dc0" class="" ref={divRef}></div> */}
                      <div className="stockTitle">
                        {stockTitle}{" "}
                        {isStockLoading ? (
                          <ClipLoader
                            color="#00ff00"
                            loading={isStockLoading}
                            size={30}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                          />
                        ) : (
                          <div />
                        )}
                      </div>
                    </div>
                    {selectedStockData && (
                      <ChartComponent stockData={selectedStockData} />
                    )}

                    <div className="stock-button-holder">
                      <button
                        className="stock-button buy-button"
                        onClick={() => openDialog("buy")}
                      >
                        Buy
                      </button>
                      <button
                        className="stock-button sell-button"
                        onClick={() => openDialog("sell")}
                      >
                        Sell
                      </button>
                    </div>

                    {showDialog && (
                      <div className="dialog">
                        <div className="dialog-content">
                          <span className="close" onClick={closeDialog}>
                            &times;
                          </span>
                          <h2>{stockTitle}</h2>
                          <h5>Enter Quantity</h5>

                          <label htmlFor="quantity">Quantity:</label>
                          <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            value={quantity}
                            onChange={handleQuantityChange}
                            min="1"
                            required
                          />
                          <br />
                          <br />
                          <div
                            className="place-button"
                            onClick={handleOrderForm}
                          >
                            {orderType}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* <button onClick={getImage}>Download Screenshot</button> */}
                </div>
              </div>

              <div class="col-xl-4">
                <div class="card" id="chatscreen">
                  <div class="card-header border-0 pb-0">
                    <h4 class="card-title mb-0">Chatbot</h4>
                  </div>
                  <div class="card-body pt-2">
                    <div className="chat-content">
                      <ChatScreen />
                    </div>
                    <form>
                      {/* <div class="mt-3 d-flex justify-content-between">
										<input className='askinput' type='text'/>
										<a href="javascript:void(0)" class="btn btn-danger btn-sm light text-uppercase btn-block">Sell</a>
									</div> */}

                      <div className="row">
                        <div className="col-8">
                          <input
                            className="askinput form-control"
                            id="prompt_text"
                            type="text"
                            placeholder="ASk.."
                          />
                        </div>
                        <div className="col-4">
                          <button
                            className="btn btn-success btn-sm light text-uppercase btn-block"
                            onClick={demo}
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-xl-6">
                <div class="card">
                  <div class="card-header border-0 pb-0">
                    <h2 class="card-title mb-2">Orders</h2>
                  </div>
                  <div class="card-body pt-2 dlab-scroll height400">
                    <table class="table shadow-hover orderbookTable">
                      <thead>
                        <tr>
                          <th>Stock Name</th>
                          <th>Rate (USD)</th>
                          <th>Quantity</th>
                          <th>Time</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((order) => (
                          <tr>
                            <td>
                              {order.ticker} ({order.orderType})
                            </td>
                            <td>{order.price}</td>
                            <td>{order.quantity}</td>
                            <td>{formatDateTime(order.orderTime)}</td>

                            <td>
                              {order.orderStatus === "COMPLETED" ? (
                                <div className="completed">completed</div>
                              ) : (
                                <div className="pending">pending</div>
                              )}
                            </td>

                            <td></td>
                            <td></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* <div class="col-xl-4">
								<div class="card">
									<div class="card-header border-0 pb-0">
										<h4 class="card-title mb-0">Future Trade</h4>
									</div>
									<div class="card-body pt-2">
										<div class="d-flex align-items-center justify-content-between mt-3 mb-2">
											<span class="small text-muted">Avbl Balance</span>
											<span class="text-dark">210.800 USDT</span>
										</div>
										<form>
											<div class="input-group mb-3">
												<span class="input-group-text">Price</span>
												<input type="text" class="form-control" />
												<span class="input-group-text">USDT</span>
											</div>
											<div class="input-group mb-3">
												<span class="input-group-text">Size</span>
												<input type="text" class="form-control" />
												<button class="btn btn-primary btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">USDT
												</button>
												<ul class="dropdown-menu dropdown-menu-end">
													<li><a class="dropdown-item" href="#">USDT</a></li>
													<li><a class="dropdown-item" href="#">BTC</a></li>
												</ul>
											</div>
											<div class="mb-3 mt-4">
												<label class="form-label">TP/SL</label>
												<div class="input-group mb-3">
													<input type="text" class="form-control" placeholder="Take Profit" />
													<button class="btn btn-primary btn-primary btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Mark</button>
													<ul class="dropdown-menu dropdown-menu-end">
														<li><a class="dropdown-item" href="#">Last</a></li>
														<li><a class="dropdown-item" href="#">Mark</a></li>
													</ul>
												</div>
												<div class="input-group mb-3"><input type="text" class="form-control" placeholder="Stop Loss" />
													<button class="btn btn-primary btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Mark</button>
													<ul class="dropdown-menu dropdown-menu-end">
														<li><a class="dropdown-item" href="#">Last</a></li>
														<li><a class="dropdown-item" href="#">Mark</a></li>
													</ul>
												</div>
											</div>
											<div class="input-group mb-3">
												<span class="input-group-text">Stop Price</span>
												<input type="text" class="form-control" />
												<button class="btn btn-primary btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Mark</button>
												<ul class="dropdown-menu dropdown-menu-end">
													<li><a class="dropdown-item" href="#">Limit</a></li>
													<li><a class="dropdown-item" href="#">Mark</a></li>
												</ul>
											</div>
											<div class="d-flex justify-content-between flex-wrap">
												<div class="d-flex">
													<div class="">Cost</div>
													<div class="text-muted px-1"> 0.00 USDT</div>
												</div>
												<div class="d-flex">
													<div class="">Max</div>
													<div class="text-muted px-1"> 6.00 USDT </div>
												</div>
											</div>
											<div class="mt-3 d-flex justify-content-between">
												<a href="javascript:void(0)" class="btn btn-success btn-sm light text-uppercase me-3 btn-block">BUY</a>
												<a href="javascript:void(0)" class="btn btn-danger btn-sm light text-uppercase btn-block">Sell</a>
											</div>
										</form>
									</div>
								</div>
							</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tv;
