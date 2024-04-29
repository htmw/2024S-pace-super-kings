import React from "react";
import TableOfContent from "../../TableofContent";
import "./stockmarket.css";
import Navbar from "../../../Navbar";
import ScrollToTop from "../../ScrollToTop";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const HowToBuySell = () => {
  const headings = [
    { id: "section1", title: "Exploring Stock Trading Options" },
    { id: "section2", title: "Key Point" },
    { id: "section3", title: "Where to Buy Stocks" },
    { id: "section4", title: "Buying Stocks with a Full-Service Broker" },
    { id: "section5", title: "Buying Stocks Online" },
    { id: "section6", title: "How to Trade Once You Have a Broker" },
    { id: "section7", title: "Age Requirement for Trading Stocks" },
    { id: "section8", title: "Is It Possible to Trade Stocks for Free?" },
    { id: "section9", title: "The Bottom Line" },

    // Add more headings as needed
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
      <h1 className="stockpagetitle">How to Buy and Sell Stocks</h1>
      <div className="tableContent-mainContainer">
        <TableOfContent headings={headings} />

        <div className="content">
          {headings.map((heading, index) => (
            <div key={index} id={heading.id} className="section">
              <h2>{heading.title}</h2>
              {heading.id === "section1" && (
                <>
                  <p>
                    To buy stocks, you'll typically need to use a stockbroker
                    since you can't just call a stock exchange and directly
                    purchase shares. When you engage with a stockbroker, whether
                    it's a traditional broker or an online platform, you specify
                    the investment you want to buy or sell and the way the trade
                    should be carried out.
                  </p>
                  <p>
                    Stockbrokers fall into two primary categories: full-service
                    brokers and online/discount brokers. Below, we outline these
                    options for trading stocks independently.
                  </p>
                  <p>
                    We'll also discuss a third method: Direct Stock Purchase
                    Plans (DSPPs), where investors can acquire shares directly
                    from some public companies without involving a broker. This
                    approach enables you to buy stocks online, but it has
                    limitations, as you'd need to manage DSPPs for each company
                    you invest in, instead of consolidating your portfolio in
                    one place. Additionally, many online brokers today offer
                    commission-free stock trading, making this a more convenient
                    and often cost-effective choice.
                  </p>
                </>
              )}
              {heading.id === "section2" && (
                <>
                  <p>
                    To trade stocks, you usually need a broker to place orders
                    on an exchange.{" "}
                  </p>
                  <p>
                    Full-service brokers are more expensive but offer
                    comprehensive financial planning, expert advice, and
                    research.{" "}
                  </p>
                  <p>
                    Discount brokers are cheaper, providing basic execution
                    services for self-directed investors.{" "}
                  </p>
                  <p>
                    Today, many online brokers offer commission-free trading,
                    making stock trading more accessible and affordable.
                  </p>
                  <p>
                    Direct Stock Purchase Plans (DSPPs) allow you to buy stocks
                    online without a broker, but they can be cumbersome to
                    manage.
                  </p>
                </>
              )}
              {heading.id === "section3" && (
                <>
                  <p>
                    Stocks are usually listed and traded on exchanges, regulated
                    venues where buyers and sellers meet with the help of a
                    broker or other intermediary. These intermediaries are
                    exchange members who use their access to trade shares on
                    your behalf. Major U.S. exchanges include the New York Stock
                    Exchange (NYSE) and the Nasdaq.{" "}
                  </p>
                  <p>
                    Smaller companies, often with less liquid shares and lower
                    market caps, might trade over-the-counter (OTC) on less
                    regulated platforms like OTC Pink Sheets. Stocks on these
                    platforms can be more volatile and risky, so additional due
                    diligence is recommended.{" "}
                  </p>
                </>
              )}
              {heading.id === "section4" && (
                <>
                  <p>
                    Full-service brokers are often associated with traditional
                    stockbrokers who offer personalized advice and financial
                    planning. They take into account your marital status,
                    lifestyle, risk tolerance, age, income, assets, and debts to
                    develop a comprehensive financial plan. These brokers also
                    help with estate planning, tax advice, retirement planning,
                    and budgeting, offering an all-in-one financial solution.
                    However, they typically charge higher fees than discount
                    brokers.
                  </p>
                </>
              )}
              {heading.id === "section5" && (
                <>
                  <p>
                    Online/discount brokers provide no investment advice,
                    operating as order takers. They are generally cheaper than
                    full-service brokers because there's no need for physical
                    offices or certified investment advisors. You can usually
                    open an account online with little to no initial deposit.
                    These brokers provide some investment-related resources but
                    no personalized advice, so you're responsible for managing
                    your investments. If you prefer to learn and make investment
                    decisions independently, this option might suit you better.
                  </p>
                </>
              )}
              {heading.id === "section6" && (
                <>
                  <p>
                    After choosing a broker, you must fund your account before
                    you can start trading. This is typically done by linking a
                    bank account for electronic transfers. Once funded, you can
                    place orders online or by calling your broker. Stocks are
                    identified by unique ticker symbols, such as MSFT for
                    Microsoft or AAPL for Apple. If you don't know a stock's
                    ticker, you can find it online or through your broker.
                  </p>
                  <p>
                    Market orders are the simplest type of order, providing
                    immediate execution at the current market price. Limit
                    orders allow you to set a specific price at which to buy or
                    sell, with the trade only executed if the price meets your
                    conditions. Other order types include stop-loss, day orders,
                    immediate or cancel (IOC), and good 'til canceled (GTC).
                    Once your trade is executed, you'll receive a confirmation
                    with the details of your order.
                  </p>
                </>
              )}
              {heading.id === "section7" && (
                <>
                  <p>
                    To open a brokerage account and trade stocks in the United
                    States, you must be at least 18 years old. If you're under
                    18, a parent can set up a custodial account on your behalf.
                  </p>
                </>
              )}
              {heading.id === "section8" && (
                <>
                  <p>
                    Yes, many online brokerage platforms, like Robinhood, offer
                    commission-free trading in most stocks and exchange-traded
                    funds (ETFs). These brokers still make money from your
                    trades by selling order flow or lending stock to
                    short-sellers.
                  </p>
                </>
              )}
              {heading.id === "section9" && (
                <>
                  <p>
                    Buying and selling stock on your own is straightforward with
                    the help of online brokers. After opening and funding your
                    account, you can invest in various stocks. However, don't
                    let the simplicity of the process fool you into thinking
                    that investing is always easy. Beginners should consider
                    consulting a qualified financial advisor and educating
                    themselves with books like "The Intelligent Investor" by
                    Benjamin Graham. Take your time, do thorough research, and
                    choose a broker that aligns with your investment goals and
                    preferences.
                  </p>
                </>
              )}
              ,
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowToBuySell;
