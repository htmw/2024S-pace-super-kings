import React from "react";
import "../../IntroToStocks/introToStocks.css";
import Navbar from "../../../Navbar";
import ScrollToTop from "../../ScrollToTop";
import TableOfContent from "../../TableofContent";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const BasicsOfOrderType = () => {
  const headings = [
    { id: "section1", title: "Understanding Stock Orders in the Digital Age" },
    { id: "section2", title: "Key Points" },
    { id: "section3", title: "Market Orders" },
    { id: "section4", title: "Limit Orders" },
    { id: "section5", title: "Market and Limit Order Costs" },
    { id: "section6", title: "Additional Stock Order Types" },
    { id: "section7", title: "Conclusion" },
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
      <h1 className="stockpagetitle">Basics of Order Type</h1>
      <div className="tableContent-mainContainer">
        <TableOfContent headings={headings} />

        <div className="content">
          {headings.map((heading, index) => (
            <div key={index} id={heading.id} className="section">
              <h2>{heading.title}</h2>
              {heading.id === "section1" && (
                <>
                  <p>
                    With the rapid growth of digital technology and the
                    internet, more investors are choosing to trade stocks online
                    rather than relying on advisors, which can save on
                    commissions. However, before diving into the stock market,
                    it's crucial to understand the different types of orders and
                    when to use them.
                  </p>
                  <p>
                    This guide will explain the basic types of stock orders and
                    how they align with your investment strategy.
                  </p>
                </>
              )}
              {heading.id === "section2" && (
                <>
                  <p>
                    Depending on your approach to investing, various types of
                    orders can help you trade stocks more effectively.
                  </p>
                  <p>
                    A market order executes immediately at the current market
                    price, whereas a limit order sets a specific price at which
                    a trade must be completed.
                  </p>
                  <p>
                    Stop orders are triggered when a stock hits a certain price
                    level, often used to protect against large losses or to
                    secure profits.
                  </p>
                </>
              )}
              {heading.id === "section3" && (
                <>
                  <p>
                    A market order is the simplest form of stock trade. It
                    involves buying or selling at the current market price. If
                    you're buying, you'll typically pay the ask price; if you're
                    selling, you'll receive the bid price.
                  </p>
                  <p>
                    However, the last traded price isn't always the exact price
                    you'll get. In volatile markets, the execution price might
                    differ from the most recent quote. Market orders guarantee
                    execution but not a specific price. They are popular among
                    individual investors who want immediate results.
                  </p>
                </>
              )}
              {heading.id === "section4" && (
                <>
                  <p>
                    A limit order allows investors to set a specific price at
                    which they're willing to buy or sell. This order type
                    ensures that a trade only occurs if the market price meets
                    or exceeds a defined level. A limit order can offer more
                    control over the price, but it doesn't guarantee execution
                    if the market doesn't reach the specified limit.
                  </p>
                  <p>
                    <strong>Buy Limit: </strong>A buy order at or below a
                    specified price.
                  </p>
                  <p>
                    <strong>Sell Limit: </strong>A sell order at or above a
                    specified price.
                  </p>
                  <p>
                    <strong>Buy Stop: </strong>A buy order that activates when
                    the market price surpasses a certain level, then converts to
                    a market or limit order.
                  </p>
                  <p>
                    <strong>Sell Stop: </strong> A sell order that activates
                    when the market price falls below a certain level, then
                    converts to a market or limit order.
                  </p>
                </>
              )}
              {heading.id === "section5" && (
                <>
                  <p>
                    Market orders generally have lower commissions than limit
                    orders. The difference could be a few dollars or more than
                    $10. While market orders guarantee execution, limit orders
                    might not be filled if the market price doesn't reach the
                    specified level, potentially resulting in missed
                    opportunities.
                  </p>
                </>
              )}
              {heading.id === "section6" && (
                <>
                  <p>
                    Besides market and limit orders, there are other order types
                    with specific conditions and restrictions:
                  </p>
                  <p>
                    <strong>Stop-Loss Order: </strong>Converts into a market
                    order when a stock price falls to a certain level, providing
                    protection against significant losses.
                  </p>
                  <p>
                    <strong>Stop-Limit Order: </strong>Similar to a stop-loss
                    order but with an additional limit on the price at which it
                    will execute.
                  </p>
                  <p>
                    <strong>All or None (AON): </strong>Ensures the entire order
                    is filled or none at all, useful for thinly traded stocks.
                    Immediate or Cancel (IOC): Partially or entirely executes an
                    order immediately, canceling any unfilled portion.
                  </p>
                  <p>
                    <strong>Fill or Kill (FOK): </strong> Combines AON and IOC,
                    requiring the entire order to be filled immediately or
                    canceled.
                  </p>
                  <p>
                    <strong>Good 'Til Canceled (GTC): </strong>Keeps an order
                    active until it's canceled by the investor, typically
                    limited to 90 days.
                  </p>
                  <p>
                    <strong>Day: </strong>Expires at the end of the trading day
                    if not filled.
                  </p>
                  <p>
                    <strong>Take Profit: </strong>Closes a position at a profit
                    when it reaches a specified level.
                  </p>
                </>
              )}
              {heading.id === "section7" && (
                <>
                  <p>
                    Understanding the different stock order types is essential
                    for effective investing. The choice between a market order
                    and a limit order depends on your investment style and
                    goals. Long-term investors may favor market orders for their
                    lower costs and guaranteed execution, while traders often
                    prefer limit orders to gain more control over price.
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

export default BasicsOfOrderType;
