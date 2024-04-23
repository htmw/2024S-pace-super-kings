import React from 'react'
import { useState,useEffect } from 'react';
import axios from "../../network/networkInterceptor.js";

const Orders = () => {

    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        getOrders();
      }, []);
    
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

    const getOrders = async () => {
        try {
          const response = await axios.get(`/orders`);
          console.log(response.data);
          var ordersTemp = response.data;
            console.log('ordercheck')
          setOrders(ordersTemp.reverse());
        } catch (error) {
          console.error("Error fetching orders:", error.message);
        }
      };

  return (
    <div className='orderss' style={{}}>
        <div class="roww" style={{marginRight:'0rem !important', marginLeft:'0rem important'}}>
              <div class="col-xl-12 order-card-box" style={{padding:'0rem !important',margin:'0rem 0rem',overflowY:'hidden'}}>
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
    
  )
}

export default Orders