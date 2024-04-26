import React from 'react'
import { Link } from 'react-router-dom'
import './managePortfolio.css'
import Navbar from '../../Navbar'
const ManagePortfolio = () => {
  return (
    <>
    <Navbar />
    <div className="introstocks">
        <div className="heading">
          <div className="num-Line">
            <div className="num">
              <span>3</span>
            </div>
            <div className="line13"></div>
          </div>

          <h2>Manage Portfolio</h2>
          <div className="linksandpara">
            <div className="linksOfItS">
            <h4>&#128970; Quick Links &#128970;</h4>
              <Link to="/investingintro">
                <span>Investing: An Introduction</span>
              </Link>
              <Link to="/measuringreturns">
                <span>Measuring Investment Returns</span>
              </Link>
              <Link to="/diversification">
                <span> Diversification</span>
              </Link>
              <Link to="/etf">
                <span>What Is An ETF?</span>
              </Link>
              {/* <Link to="/thestockmarket">
                <span>What owning a stock means</span>
              </Link>
              <Link to="/thestockmarket">
                <span>What is a penny stock?</span>
              </Link> */}
            </div>
            <div className="sideContainer">
              <p>
                Discover the essential role of the stock market in securing
                financial stability. Learn its basics, operations, and
                intermediaries in this module, providing a comprehensive
                foundation for beginners venturing into the world of stock
                trading.
              </p>
              <p>
                Understanding the stock market is essential for anyone looking
                to secure their financial stability and potentially grow their
                wealth over time. The stock market serves as a crucial component
                of the global economy, facilitating the buying and selling of
                securities such as stocks and bonds. By providing a platform for
                companies to raise capital and investors to participate in
                ownership, the stock market plays a pivotal role in allocating
                resources efficiently within the economy.
              </p>
            </div>
          </div>

          <h2 style={{ padding: "1rem 0rem" }}>Basics of Stock Market</h2>
          <p>
            <strong>Stocks:</strong>Stocks represent ownership in a company.
            When you purchase a stock, you essentially become a partial owner of
            that company.
          </p>
          <p>
            <strong>Stock Exchanges:</strong> Stock exchanges are platforms
            where stocks are bought and sold. Examples include the New York
            Stock Exchange (NYSE) and the NASDAQ.
          </p>
          <p>
            <strong>Stock Indices:</strong> Indices like the S&P 500 or the Dow
            Jones Industrial Average (DJIA) track the performance of a select
            group of stocks, giving investors a benchmark for evaluating the
            overall market.
          </p>
          <p>
            <strong>Bonds:</strong> Bonds are debt securities issued by
            governments or corporations. Investors lend money to the issuer in
            exchange for periodic interest payments and the return of the
            principal amount at maturity.
          </p>
          <p>
            <strong>Mutual Funds and Exchange-Traded Funds (ETFs):</strong>These
            are investment vehicles that pool money from multiple investors to
            invest in a diversified portfolio of stocks, bonds, or other assets.
          </p>
          <h2 style={{ padding: "1rem 0rem" }}>Operations of Stock Market</h2>
          <p>
            <strong>Trading Sessions:</strong>Stock markets typically operate
            during specific trading hours, allowing investors to buy and sell
            securities. In the U.S., trading hours are usually from 9:30 am to
            4:00 pm Eastern Time.
          </p>
          <p>
            <strong>Order Types:</strong>Investors can place different types of
            orders, such as market orders (executed at the current market price)
            or limit orders (executed only at a specified price or better).
          </p>
          <p>
            <strong>Market Participants:</strong> Market participants include
            individual investors, institutional investors (such as mutual funds
            and pension funds), traders, market makers, and investment banks.
          </p>
          <p>
            <strong>Price Determination:</strong> Stock prices are determined by
            supply and demand dynamics in the market. Factors such as company
            performance, economic indicators, and investor sentiment influence
            stock prices.
          </p>
        </div>
      </div>
      </>
  )
}

export default ManagePortfolio