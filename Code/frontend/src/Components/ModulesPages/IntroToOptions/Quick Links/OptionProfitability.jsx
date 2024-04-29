import React from "react";
import Navbar from "../../../Navbar";
import ScrollToTop from "../../ScrollToTop";
import TableOfContent from "../../TableofContent";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../IntroToStocks/introToStocks.css";


const OptionProfitability = () => {
    const headings = [
      {
        id: "section1",
        title: "Overview",
      },
      { id: "section2", title: "Key Takeaways" },
      {
        id: "section3",
        title: "Basics of Option Profitability",
      },
      { id: "section4", title: "Option Buying vs. Writing" },
      { id: "section5", title: "Evaluating Risk Tolerance" },
      { id: "section6", title: "Strategies for Profiting With Options" },
      { id: "section7", title: "Options Spreads" },
      { id: "section8", title: "Reasons to Trade Options" },
      { id: "section9", title: "Reasons to Trade Options" },
      { id: "section10", title: "Option Trading Tips" },
      { id: "section11", title: "The Bottom Line" },
      
    ];
  
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    useEffect(() => {
      if (!token) {
        // Redirect to login page if token doesn't exist
        navigate("/login");
      }
    }, [token, navigate]);
  
    return (
      <div>
        <ScrollToTop />
        <Navbar />
        <h1 className="stockpagetitle">Options Profitability </h1>
        <div className="tableContent-mainContainer">
          <TableOfContent headings={headings} />
  
          <div className="content">
            {headings.map((heading, index) => (
              <div key={index} id={heading.id} className="section">
                <h2>{heading.title}</h2>
                {heading.id === "section1" && (
                  <>
                    <p>
                    Options trading allows traders to profit in various market conditions. These contracts offer flexibility because they can be used to anticipate upward or downward movements in asset prices, like stocks, currencies, and commodities.
                    </p>
                   
                  </>
                )}
                {heading.id === "section2" && (
                  <>
                    <p>
                    Options contracts and strategies have defined profit and loss (P&L) profiles, helping traders understand potential gains and losses.
                    </p>
                    <p>
                    Selling options limits profit to the premium received, but risks unlimited losses.
                    </p>
                    <p>
                    Buying options offers unlimited profit potential, with losses capped at the cost of the premium.
                    </p>
                    <p>Options strategies can be designed for different market conditions, allowing traders to profit regardless of whether the market is rising or falling.</p>
                    <p>Spreads limit both potential gains and losses</p>
                  </>
                )}
                {heading.id === "section3" && (
                  <>
                    <p>
                    Call option buyers profit if the underlying asset's price rises above the strike price before expiration, while put option buyers profit if the price falls below the strike price before expiration. The actual profit depends on the difference between the stock price and the option's strike price at expiration or when the option position is closed.
                    </p>
                    <p>Call option writers profit if the underlying stock stays below the strike price. Conversely, put option writers profit if the stock stays above the strike price. Option writers' profits are limited to the premium received.</p>
                  </>
                )}
                {heading.id === "section4" && (
                  <>
                    <p>
                    Option buying and writing differ fundamentally. An option buyer has the right to exercise, whereas an option writer must exercise if the option expires in the money.
                    </p>
                    <p><strong>Buying: </strong>An option buyer has limited risk (the cost of the premium) and potentially unlimited profit. This strategy tends to be less risky, with smaller chances of success but larger potential profits. Option buyers start trades with a buy order and close with a sell order.</p>
                  <p><strong>Writing</strong>An option writer has limited profit (the premium) but potentially unlimited risk. This strategy tends to be riskier but has a higher probability of success, with smaller potential profits. Option writers start trades with a sell order and close with a buy order.</p>
                  </>
                )}
                {heading.id === "section5" && (
                  <>
                    <p>
                    To determine whether to buy or write options, consider your risk tolerance. Would you prefer a lower chance of high profit (option buying) or a higher chance of moderate profit (option writing)?
                    </p>
                  </>
                )}
                {heading.id === "section6" && (
                  <>
                    <p>
                    Here are some common strategies for options trading:
                    </p>
                    <p><strong>Buying a Call: </strong>Low-risk strategy with potentially high rewards if the underlying stock price rises above the strike price. The maximum loss is limited to the premium paid.</p>
                  <p><strong>Buying a Put: </strong>Similar to buying a call, but profiting from a decline in the stock price. This strategy is also useful for hedging a long stock position.</p>
                  <p><strong>Writing a Call: </strong> Writing covered calls can generate extra income from a portfolio, while naked calls carry theoretically unlimited risk. The maximum profit is the premium, while the risk is significant.</p>
                  <p><strong>Writing a Put: </strong>Writers of put options profit if the stock stays above the strike price. However, they may end up buying the stock at a higher price if it falls below the strike price.</p>
                  </>
                )}
                {heading.id === "section7" && (
                  <>
                    <p>
                    Options spreads involve buying and selling options with different strikes and expirations to limit risk and reward. Spreads can be designed to take advantage of various market movements.
                    </p>
                  </>
                )}
                 {heading.id === "section8" && (
                  <>
                    <p>
                    Options are used for hedging or speculating on asset price movements. The leverage provided by options allows for potential high returns, but it also involves greater risk.                    </p>
                  </>
                )}
                 {heading.id === "section9" && (
                  <>
                    <p>
                    Choosing the right option involves considering market conditions, implied volatility, strike price, and expiration. It's crucial to understand the sector and evaluate one-off events like earnings reports and corporate restructurings.                    </p>
                  </>
                )}
                 {heading.id === "section10" && (
                  <>
                    <p>Use longer expirations when buying options to give trades more time to work out.</p>
                    <p>Use shorter expirations when writing options to limit risk.</p>
                    <p>Understand the relationship between strike price and expiration.</p>
                    <p>Consider volatility and its impact on option pricing.</p>
                  </>
                )}
                {heading.id === "section11" && (
                  <>
                    Options trading offers various strategies to profit in different market conditions. However, it also involves unique risks. Understanding the basics of options, knowing your risk tolerance, and using appropriate strategies are essential for successful options trading.
                  </>
                )}
                
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  

export default OptionProfitability