import React from "react";
import "../../IntroToStocks/introToStocks.css";
import Navbar from "../../../Navbar";
import ScrollToTop from "../../ScrollToTop";
import TableOfContent from "../../TableofContent";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ShortSell = () => {
  const headings = [
    { id: "section1", title: "What Is Short Selling?" },
    { id: "section2", title: "Key Points" },
    { id: "section3", title: "How Short Selling Works" },
    { id: "section4", title: "Timing and Conditions" },
    { id: "section5", title: "Short Selling Costs" },
    { id: "section6", title: "Short Selling Strategies" },
    { id: "section7", title: "Advantages and Disadvantages" },
    { id: "section8", title: "Regulations" },
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
      <h1 className="stockpagetitle">Short selling</h1>
      <div className="tableContent-mainContainer">
        <TableOfContent headings={headings} />

        <div className="content">
          {headings.map((heading, index) => (
            <div key={index} id={heading.id} className="section">
              <h2>{heading.title}</h2>
              {heading.id === "section1" && (
                <>
                  <p>
                    Short selling is a trading approach where investors bet on a
                    stock's decline, aiming to profit from a drop in its price.
                    While traders often use short selling for speculation,
                    investors or portfolio managers might use it to hedge
                    against the risk of a downturn in a long position.
                  </p>
                </>
              )}
              {heading.id === "section2" && (
                <>
                  <p>
                    Short selling involves borrowing shares and selling them on
                    the open market with the intent of repurchasing them later
                    at a lower price.{" "}
                  </p>
                  <p>
                    Short sellers stand to profit from a decline in a security's
                    value.
                  </p>
                  <p>
                    This strategy carries a high risk/reward ratio, with
                    potential for substantial profits, but also the risk of
                    rapid losses and margin calls.
                  </p>
                </>
              )}
              {heading.id === "section3" && (
                <>
                  <p>
                    Traders typically use short selling for speculation and
                    hedging. To engage in short selling, they need a margin
                    account and must pay interest on the borrowed shares while
                    the position remains open. The Financial Industry Regulatory
                    Authority (FINRA), the New York Stock Exchange (NYSE), and
                    the Federal Reserve have established minimum requirements
                    for margin accounts, known as maintenance margins.{" "}
                  </p>
                  <p>
                    A broker handles the logistics, including borrowing the
                    shares and returning them at the end of the trade. The
                    process typically follows these steps:
                  </p>
                  <p>
                    The trader borrows shares from a broker-dealer and sells
                    them on the open market, betting that the price will drop.
                  </p>
                  <p>
                    After selling, they wait for the stock's price to decrease
                    before buying it back at a lower price to close the
                    position.
                  </p>
                  <p>
                    The shares are then returned to the lender, completing the
                    trade.
                  </p>
                  <p>
                    Traders must also consider the interest and commissions
                    charged by brokers.
                  </p>
                </>
              )}
              {heading.id === "section4" && (
                <>
                  <p>
                    Timing is crucial in short selling, as stock prices can
                    decline much faster than they increase. Entering a short
                    position too early could be costly if the stock price
                    surges, while entering too late might mean missing a
                    significant downward trend. Short sellers typically look for
                    opportunities in these scenarios:
                  </p>
                  <p>
                    <strong>Bear Market: </strong>During extended bear markets,
                    short selling can yield substantial profits due to
                    widespread market declines.
                  </p>
                  <p>
                    <strong>Fundamental Decline: </strong>Deteriorating company
                    fundamentals, such as reduced earnings or revenue growth,
                    can signal a stock's impending drop.
                  </p>
                  <p>
                    <strong>Bearish Technical Indicators: </strong>Technical
                    signals, like a breakdown below key support levels or a
                    bearish moving average crossover, may suggest a downward
                    trend.
                  </p>
                  <p>
                    <strong>High Valuations:</strong>When market or sector
                    valuations are exceptionally high, experienced short sellers
                    may wait for a downward correction to capitalize on the
                    decline.
                  </p>
                </>
              )}
              {heading.id === "section5" && (
                <>
                  <p>
                    Short selling incurs various costs beyond standard trading
                    commissions, such as:
                  </p>
                  <p>
                    <strong>Margin Interest: </strong>Since short selling
                    requires a margin account, interest costs can accumulate,
                    especially with extended trades.
                  </p>
                  <p>
                    <strong>Stock Borrowing Fees: </strong>Shares that are
                    difficult to borrow often carry "hard-to-borrow" fees, which
                    can be steep.
                  </p>
                  <p>
                    <strong>Dividends and Other Costs: </strong>Short sellers
                    must compensate for any dividends or coupon payments due on
                    the borrowed shares or bonds.
                  </p>
                </>
              )}
              {/* {heading.id === "section6" && (
                <>
                  <p>
                    Short selling incurs various costs beyond standard trading
                    commissions, such as:
                  </p>
                  <p>
                    <strong>Margin Interest: </strong>Since short selling
                    requires a margin account, interest costs can accumulate,
                    especially with extended trades.
                  </p>
                  <p>
                    <strong>Stock Borrowing Fees: </strong>Shares that are
                    difficult to borrow often carry "hard-to-borrow" fees, which
                    can be steep.
                  </p>
                  <p>
                    <strong>Dividends and Other Costs: </strong>Short sellers
                    must compensate for any dividends or coupon payments due on
                    the borrowed shares or bonds.
                  </p>
                </>
              )} */}
              {heading.id === "section6" && (
                <>
                  <p>
                    Short selling offers various strategies for different goals:
                  </p>
                  <p>
                    <strong>Profit: </strong> A trader expecting a stock price
                    drop borrows and sells shares, aiming to repurchase them at
                    a lower price. If successful, the difference between the
                    sell and buy prices represents the profit.
                  </p>
                  <p>
                    <strong>Loss: </strong> If the stock price rises
                    unexpectedly, short sellers could face substantial losses
                    when closing their positions.
                  </p>
                  <p>
                    <strong>Hedge: </strong>Investors use short selling to hedge
                    against potential losses in their portfolios, protecting
                    gains or minimizing risks.
                  </p>
                </>
              )}
              {heading.id === "section7" && (
                <>
                  <p>
                    Correctly predicting stock price movements can lead to
                    profitable returns, especially with leverage from margin
                    accounts. Short selling can also serve as an effective
                    hedge. However, the risks are significant—traders can lose
                    more than their original investment since there's no upper
                    limit to a stock's price. Short squeezes, where rapidly
                    rising stock prices force short sellers to cover their
                    positions at a loss, can exacerbate these risks.
                  </p>
                </>
              )}
              {heading.id === "section8" && (
                <>
                  <p>
                    Short selling is subject to regulations in each country,
                    with specific rules governing the practice in different
                    markets. In the United States, short selling is regulated by
                    the U.S. Securities and Exchange Commission (SEC) under the
                    Securities Exchange Act of 1934. Regulation SHO, which was
                    implemented in 2005, is the primary set of rules overseeing
                    short selling, stipulating that short sales can only be
                    executed in a tick-up or zero-plus tick market. This means
                    that the security's price must be either rising or stable
                    when the short sale occurs. Regulation SHO also requires
                    brokers to find a party willing to lend the shorted shares
                    or to have reasonable grounds to believe that the shares can
                    be borrowed. This provision is designed to prevent naked
                    short selling, a practice where investors sell shares they
                    haven't borrowed. The SEC has the authority to temporarily
                    ban short selling on specific stocks in cases of extreme
                    market volatility. In October 2023, the SEC introduced
                    additional regulations that require investors to report
                    their short positions to the SEC. Companies that lend shares
                    for short selling must also report their activity to the
                    Financial Industry Regulatory Authority (FINRA). These
                    regulations were enacted following heightened scrutiny of
                    short selling, particularly after the GameStop (GME)
                    incident in 2021, when retail investors significantly drove
                    up the stock price, leading to substantial losses for hedge
                    funds that had shorted the stock.
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShortSell;
