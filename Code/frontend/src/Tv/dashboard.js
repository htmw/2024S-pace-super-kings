import React, {useRef, useEffect, useState } from 'react';
import './assets/css/style.css';
import './assets/vendor/datatables/css/jquery.dataTables.min.css';
import profileimg from './assets/images/1.png';
import demo from './js/functions.js';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import axios from 'axios';
import ChartComponent from './components/chartcomponents';
import ChatScreen from './chatScreen';

function Tv() {
	const divRef = useRef(null);
	const [query, setQuery] = useState('');
	const [suggestions, setSuggestions] = useState([]);
	const [selectedStockData, setSelectedStockData] = useState(null);

	const handleDownloadClick = () => {
		// Get the DOM node of the div
		const divElement = divRef.current;
	
		// Use html2canvas to capture the div as a canvas
		html2canvas(divElement)
		  .then((canvas) => {
			// Convert canvas to data URL
			const imgData = canvas.toDataURL('image/png');
	
			// Create a temporary link element
			const link = document.createElement('a');
			link.href = imgData;
			link.download = 'screenshot.png';
	
			// Simulate click on the link to trigger download
			link.click();
		  })
		  .catch((error) => {
			console.error('Error generating screenshot:', error);
		  });
	  };
	  


	
    useEffect(() => {
		autofetchStock();
      }, []);

	  async function autofetchStock(){
		setSuggestions([])
		try {
		  const response = await axios.get(`https://160e-198-105-46-191.ngrok-free.app/stocks/data/?ticker=AAPL`);
		  console.log(response.data);
		  setSelectedStockData(response.data);
		} catch (error) {
		  console.error('Error fetching stock data:', error.message);
		}
	  }


	  const fetchStocksName = async (event) => {
		const value = event.target.value;
		console.log(value);
		try {
			const response = await axios.get(`https://finance.yahoo.com/_finance_doubledown/api/resource/searchassist;searchTerm=${value}`);
			if (response.data !== null) {
			  console.log(response.data.items);
			  setSuggestions(response.data.items);
			}
		  } catch (error) {
			console.error('Error fetching suggestions:', error.message);
		  }
	  }






	  

	  const getImage = (e) => {
        if (this.TradingWidget) {
            this.setState({
                divStyle: {
                    width: 1440,
                    height: 600,
                    opacity: 0
                }
            });

            setTimeout(() => {
                this.TradingWidget.postMessage.get("imageURL", {}, ((function (t) {
                    this.downloadImage(`https://s3.tradingview.com/snapshots/${t.slice(0, 1).toLowerCase()}/${t}.png`);
                }).bind(this)));
            }, 100)

        }
    }

	const handleClick = async (stockSymbol) => {
		setSuggestions([])
		try {
		  const response = await axios.get(`https://4dac-98-109-149-177.ngrok-free.app/stocks/data/?ticker=${stockSymbol}`);
		  console.log(response.data);
		  setSelectedStockData(response.data);
		} catch (error) {
		  console.error('Error fetching stock data:', error.message);
		}
	  };
	

  return (
    <div >
   	<div id="preloader">
		<div class="lds-ripple">
			<div></div>
			<div></div>
		</div>
    </div>


    <div id="main-wrapper">

    <div class="">        
    	  <div style={{ height: '80px', position:'fixed'}} className="header">
		           <div class="header-content">
                <nav class="navbar navbar-expand">
                    <div class="collapse navbar-collapse justify-content-between">
                        <div class="header-left">
							<div style={{display:'inline-flex', gap:'50px'}} class="">
                            {/* <li>
                                <a href='' className='url_links'>Identify Graph Pattern</a>
                            </li>
                            <li>
                                <a href='' className='url_links'>My Trade History</a>
                            </li> */}
                            
							</div>
                        </div>
                        
                        <ul class="navbar-nav header-right">

                          <li>
                            <a href='' className='dummy_amount'>$8530</a>
                            <div className='row'>
                                <div className='col-4'>
                                    <a className='earn_money' href=''>+800</a>
                                </div>
                                <div className='col-4'>
                                    <a className='lose_money' href=''>-635</a>
                                </div>
                            </div>
                          </li>
							
							<li>
								<div class="dropdown header-profile2">
									<a class="nav-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">
										<div class="header-info2 d-flex align-items-center">
											<div class="d-flex align-items-center sidebar-info">
												<div>
													<h4 class="text-white mb-1">Hi, Ankit</h4>
												
												</div>
											</div>
											<img src={profileimg} alt=""/>
										</div>
									</a>
									<div class="dropdown-menu dropdown-menu-end" >
										<a href="app-profile.html" class="dropdown-item ai-icon ">
										
											<span class="ms-2">Profile </span>
										</a>
									
										<a href="javascript:void(0);" class="dropdown-item ai-icon ">											
											<span class="ms-2">Settings </span>
										</a>
										<a href="page-login.html" class="dropdown-item ai-icon">
											<svg class="logout" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fd5353" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
											<span class="ms-2 text-danger">Logout </span>
										</a>
									</div>
								</div>
							</li>
                        </ul>
                    </div>
				</nav>
			</div>
			<div class="page-titles">
				
				
			</div>
		</div>
		<br/><br/><br/>
        {/* <div className='Header'></div> */}
            <br/><br/>
			<div style={{"height":"500px"}} class="container-fluid">
				<div  class="row">
					<div class="col-xl-8">
						<div class="card">
							<div class="card-body">
								<input style={{"width":"100%", "height":"45px", "border":"1px solid #B3C0CD", "margin-bottom":"15px", "border-radius":"5px", "padding-left":"10px"}} type="text" placeholder='Search Stock Name..' onChange={fetchStocksName}/>
							
								

								<ul className='stockSuggestionlist-ul'>
										{suggestions.map((stock) => (
											<li key={stock.symbol} onClick={() => handleClick(stock.symbol)}>
											<span>{stock.name} ({stock.symbol})</span>
											</li>
										))}
										</ul>




								{/* <div id="tradingview_85dc0" class="" ref={divRef}></div> */}

								{selectedStockData && ( <ChartComponent stockData={selectedStockData} />)}

							</div>
							{/* <button onClick={getImage}>Download Screenshot</button> */}
						</div>
						
					</div>
					<div class="col-xl-4">
						<div class="card" id='chatscreen'>
							<div class="card-header border-0 pb-0">
								<h4 class="card-title mb-0">Chatbot</h4>
							</div>
							<div class="card-body pt-2">
								 

                                 <div className='chat-content'>
									
										<ChatScreen/>


								 </div>
								<form>
									
									
									
									{/* <div class="mt-3 d-flex justify-content-between">
										<input className='askinput' type='text'/>
										<a href="javascript:void(0)" class="btn btn-danger btn-sm light text-uppercase btn-block">Sell</a>
									</div> */}

                                    <div className='row'>
                                        <div className='col-8'>
                                        <input className='askinput form-control' id='prompt_text' type='text' placeholder='ASk..'/>
                                        </div>
                                        <div className='col-4'>
                                            <button className='btn btn-success btn-sm light text-uppercase btn-block' onClick={demo}>Send</button>
                                        </div>
                                    </div>
								</form>
							</div>
						</div>
					</div>
				</div>
			
	











            <div class="row">
					<div class="col-xl-4">
						<div class="card">
							<div class="card-header border-0 pb-0">
								<h4 class="card-title mb-2">Today's Stock History</h4>
							</div>
							<div class="card-body pt-2 dlab-scroll height400">
								<table class="table shadow-hover orderbookTable">
									<thead>
										<tr>
											<th>Stock Name</th>
											<th>Rate (USD)</th>
											<th>Earn</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<span>INFY</span>
											</td>
											<td>1500</td>
											<td><span class="text-danger">-2650 (150%)</span></td>
										</tr>
										<tr>
											<td>
												<span>IBM</span>
											</td>
											<td>2560</td>
											<td><span class="text-success">+2650 (10%)</span></td>
										</tr>
										<tr>
											<td>
												<span>IBM</span>
											</td>
											<td>2560</td>
											<td><span class="text-success">+3652 (80%)</span></td>
										</tr>
										
								
									</tbody>
								</table>
							</div>
						</div>
					</div>


					{/* <div class="col-xl-8">
						<div class="card">
							<div class="card-header border-0 pb-3 flex-wrap">
								<h4 class="card-title">Trade Status</h4>
								<nav>
								  <div class="nav nav-pills light" id="nav-tab" role="tablist">
									<button class="nav-link active" id="nav-order-tab" data-bs-toggle="tab" data-bs-target="#nav-order" type="button" role="tab"  aria-selected="true">Order</button>
									<button class="nav-link" id="nav-histroy-tab" data-bs-toggle="tab" data-bs-target="#nav-history" type="button" role="tab"  aria-selected="false">Order History</button>
									<button class="nav-link" id="nav-trade-tab" data-bs-toggle="tab" data-bs-target="#nav-trade" type="button" role="tab"  aria-selected="false">Trade Histroy</button>
								  </div>
								</nav>
							</div>
							<div class="card-body pt-0">
								<div class="tab-content" id="nav-tabContent">
									<div class="tab-pane fade show active" id="nav-order" role="tabpanel" aria-labelledby="nav-order-tab">
										<div class="table-responsive dataTabletrade">
											<table id="example-2" class="table display orderbookTable">
												<thead>
													<tr>
														<th>Name</th>
														<th>Trade</th>
														<th>Location</th>
														<th>Price</th>
														<th>Date</th>
														<th class="text-end">Amount</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>Tiger Nixon</td>
														<td>System Architect</td>
														<td>Edinburgh</td>
														<td>61</td>
														<td>2011/04/25</td>
														<td class="text-end">$320,800</td>
													</tr>
													<tr>
														<td>Garrett Winters</td>
														<td>Accountant</td>
														<td>Tokyo</td>
														<td>63</td>
														<td>2011/07/25</td>
														<td class="text-end">$170,750</td>
													</tr>
													<tr>
														<td>Ashton Cox</td>
														<td>Junior Technical Author</td>
														<td>San Francisco</td>
														<td>66</td>
														<td>2009/01/12</td>
														<td class="text-end">$86,000</td>
													</tr>
													<tr>
														<td>Cedric Kelly</td>
														<td>Senior Javascript Developer</td>
														<td>Edinburgh</td>
														<td>22</td>
														<td>2012/03/29</td>
														<td class="text-end">$433,060</td>
													</tr>
													<tr>
														<td>Airi Satou</td>
														<td>Accountant</td>
														<td>Tokyo</td>
														<td>33</td>
														<td>2008/11/28</td>
														<td class="text-end">$162,700</td>
													</tr>
													<tr>
														<td>Brielle Williamson</td>
														<td>Integration Specialist</td>
														<td>New York</td>
														<td>61</td>
														<td>2012/12/02</td>
														<td class="text-end">$372,000</td>
													</tr>
													
												</tbody>
											</table>
										</div>
									</div>
									<div class="tab-pane fade" id="nav-history" role="tabpanel">
										<div class="table-responsive dataTabletrade">
											<table id="example-history-1" class="table display">
												<thead>
													<tr>
														<th>Name</th>
														<th>Trade</th>
														<th>Location</th>
														<th>Price</th>
														<th>Date</th>
														<th class="text-end">Amount</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>Tiger Nixon</td>
														<td>System Architect</td>
														<td>Edinburgh</td>
														<td>61</td>
														<td>2011/04/25</td>
														<td class="text-end">$320,800</td>
													</tr>
													<tr>
														<td>Garrett Winters</td>
														<td>Accountant</td>
														<td>Tokyo</td>
														<td>63</td>
														<td>2011/07/25</td>
														<td class="text-end">$170,750</td>
													</tr>
													<tr>
														<td>Ashton Cox</td>
														<td>Junior Technical Author</td>
														<td>San Francisco</td>
														<td>66</td>
														<td>2009/01/12</td>
														<td class="text-end">$86,000</td>
													</tr>
													<tr>
														<td>Cedric Kelly</td>
														<td>Senior Javascript Developer</td>
														<td>Edinburgh</td>
														<td>22</td>
														<td>2012/03/29</td>
														<td class="text-end">$433,060</td>
													</tr>
													<tr>
														<td>Airi Satou</td>
														<td>Accountant</td>
														<td>Tokyo</td>
														<td>33</td>
														<td>2008/11/28</td>
														<td class="text-end">$162,700</td>
													</tr>
													<tr>
														<td>Brielle Williamson</td>
														<td>Integration Specialist</td>
														<td>New York</td>
														<td>61</td>
														<td>2012/12/02</td>
														<td class="text-end">$372,000</td>
													</tr>
													
												</tbody>
											</table>
										</div>
									</div>
									<div class="tab-pane fade" id="nav-trade" role="tabpanel" aria-labelledby="nav-trade-tab">
										<div class="table-responsive dataTabletrade">
											<table id="example-history-2" class="table display">
												<thead>
													<tr>
														<th>Name</th>
														<th>Trade</th>
														<th>Location</th>
														<th>Price</th>
														<th>Date</th>
														<th class="text-end">Amount</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>Tiger Nixon</td>
														<td>System Architect</td>
														<td>Edinburgh</td>
														<td>61</td>
														<td>2011/04/25</td>
														<td class="text-end">$320,800</td>
													</tr>
													<tr>
														<td>Garrett Winters</td>
														<td>Accountant</td>
														<td>Tokyo</td>
														<td>63</td>
														<td>2011/07/25</td>
														<td class="text-end">$170,750</td>
													</tr>
													<tr>
														<td>Ashton Cox</td>
														<td>Junior Technical Author</td>
														<td>San Francisco</td>
														<td>66</td>
														<td>2009/01/12</td>
														<td class="text-end">$86,000</td>
													</tr>
													<tr>
														<td>Cedric Kelly</td>
														<td>Senior Javascript Developer</td>
														<td>Edinburgh</td>
														<td>22</td>
														<td>2012/03/29</td>
														<td class="text-end">$433,060</td>
													</tr>
													<tr>
														<td>Airi Satou</td>
														<td>Accountant</td>
														<td>Tokyo</td>
														<td>33</td>
														<td>2008/11/28</td>
														<td class="text-end">$162,700</td>
													</tr>
													<tr>
														<td>Brielle Williamson</td>
														<td>Integration Specialist</td>
														<td>New York</td>
														<td>61</td>
														<td>2012/12/02</td>
														<td class="text-end">$372,000</td>
													</tr>
													<tr>
														<td>Tiger Nixon</td>
														<td>System Architect</td>
														<td>Edinburgh</td>
														<td>61</td>
														<td>2011/04/25</td>
														<td class="text-end">$320,800</td>
													</tr>
													<tr>
														<td>Garrett Winters</td>
														<td>Accountant</td>
														<td>Tokyo</td>
														<td>63</td>
														<td>2011/07/25</td>
														<td class="text-end">$170,750</td>
													</tr>
													<tr>
														<td>Ashton Cox</td>
														<td>Junior Technical Author</td>
														<td>San Francisco</td>
														<td>66</td>
														<td>2009/01/12</td>
														<td class="text-end">$86,000</td>
													</tr>
													<tr>
														<td>Cedric Kelly</td>
														<td>Senior Javascript Developer</td>
														<td>Edinburgh</td>
														<td>22</td>
														<td>2012/03/29</td>
														<td class="text-end">$433,060</td>
													</tr>
													<tr>
														<td>Airi Satou</td>
														<td>Accountant</td>
														<td>Tokyo</td>
														<td>33</td>
														<td>2008/11/28</td>
														<td class="text-end">$162,700</td>
													</tr>
													
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div> */}

<div class="col-xl-4">
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
										<input type="text" class="form-control"/>
										<span class="input-group-text">USDT</span>
									</div>
									<div class="input-group mb-3">
										<span class="input-group-text">Size</span>
										<input type="text" class="form-control"/>
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
											<input type="text" class="form-control" placeholder="Take Profit"/>
											<button class="btn btn-primary btn-primary btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Mark</button>
											<ul class="dropdown-menu dropdown-menu-end">
												<li><a class="dropdown-item" href="#">Last</a></li>
												<li><a class="dropdown-item" href="#">Mark</a></li>
											</ul>
										</div>
										<div class="input-group mb-3"><input type="text" class="form-control" placeholder="Stop Loss"/>
											<button class="btn btn-primary btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Mark</button>
											<ul class="dropdown-menu dropdown-menu-end">
												<li><a class="dropdown-item" href="#">Last</a></li>
												<li><a class="dropdown-item" href="#">Mark</a></li>
											</ul>
										</div>
									</div>
									<div class="input-group mb-3">
										<span class="input-group-text">Stop Price</span>
										<input type="text" class="form-control"/>
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
					</div>















				</div>




                </div>
















        </div>

        </div>
    </div>
  );
}



export default Tv;
