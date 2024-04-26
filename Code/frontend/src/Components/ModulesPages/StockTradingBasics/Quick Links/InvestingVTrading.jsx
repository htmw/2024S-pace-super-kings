import React from "react";
import "../../IntroToStocks/introToStocks.css";
import Navbar from "../../../Navbar";
import ScrollToTop from "../../ScrollToTop";
import TableOfContent from "../../TableofContent";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const InvestingVTrading = () => {
  const headings = [
    { id: "section1", title: "Different Approaches to Financial Markets" },
    { id: "section2", title: "Key Points" },
    { id: "section3", title: "Investing Overview" },
    { id: "section4", title: "Investment Styles" },
    { id: "section5", title: "Time Horizon: Investment" },
    { id: "section6", title: "Trading Overview" },
    { id: "section7", title: "Trading Styles" },
    { id: "section8", title: "Time Horizon: Trading" },
    { id: "section9", title: "Similarities and Differences" },
    { id: "section10", title: "Conclusion" },
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
      <h1 className="stockpagetitle">Investing vs Trading</h1>
      <div className="tableContent-mainContainer">
        <TableOfContent headings={headings} />

        <div className="content">
          {headings.map((heading, index) => (
            <div key={index} id={heading.id} className="section">
              <h2>{heading.title}</h2>
              {heading.id === "section1" && (
                <>
                  <p>
                    Investing and trading represent two different approaches to
                    profiting in the financial markets. While both aim to
                    generate returns, they differ in strategy, timeframes, and
                    the level of risk involved. Investors generally focus on
                    long-term gains by buying and holding assets, while traders
                    seek short-term profits through more frequent transactions.
                  </p>
                </>
              )}
              {heading.id === "section2" && (
                <>
                  <p>
                    <strong>Investing</strong>involves a long-term perspective,
                    with assets typically held for years or even decades.
                    Investors tend to ride out market fluctuations, aiming for
                    larger returns over time through methods like buying and
                    holding stocks, mutual funds, bonds, and other instruments.
                  </p>
                  <p>
                    <strong>Trading</strong>is more short-term, with traders
                    engaging in regular buying and selling to capitalize on
                    market fluctuations. This approach aims to secure smaller,
                    more frequent gains by taking advantage of price changes.
                  </p>
                </>
              )}
              {heading.id === "section3" && (
                <>
                  <p>
                    Investing is about building wealth over an extended period.
                    Investors may hold a diversified portfolio, including
                    stocks, mutual funds, bonds, or exchange-traded funds
                    (ETFs). This strategy benefits from compounding interest,
                    dividends, and stock splits over time. Investors tend to be
                    more focused on market fundamentals and typically weather
                    short-term downturns, anticipating that the market will
                    recover.
                  </p>
                </>
              )}
              {heading.id === "section4" && (
                <>
                  <p>Investors generally follow one of two approaches: </p>
                  <p>
                    <strong>Active Investing </strong>involves regular
                    monitoring of the markets and making changes to mimic or
                    outperform benchmark indices.
                  </p>
                  <p>
                    <strong>Passive Investing</strong> is a buy-and-hold
                    strategy with minimal day-to-day market monitoring, aiming
                    to track index returns.
                  </p>
                </>
              )}
              {heading.id === "section5" && (
                <>
                  <p>
                    Investors often have a long-term time horizon, holding
                    investments for years or decades. The length of time depends
                    on their financial goals—retirement investors have a longer
                    horizon than those saving for a down payment on a house. By
                    reinvesting dividends and profits, investors aim to grow
                    their portfolios over time.
                  </p>
                </>
              )}
              {heading.id === "section6" && (
                <>
                  <p>
                    Trading involves more frequent transactions, such as buying
                    and selling stocks, commodities, or other instruments, to
                    maximize short-term gains. Unlike investors, traders
                    typically focus on technical analysis to find
                    high-probability trading setups. They use protective
                    stop-loss orders to minimize potential losses and aim to
                    generate returns that outperform traditional buy-and-hold
                    investing.
                  </p>
                </>
              )}
              {heading.id === "section7" && (
                <>
                  <p>
                    Traders fall into four categories based on their holding
                    period:
                  </p>
                  <p>
                    <strong>Position Trader</strong>hold positions for months to
                    years.
                  </p>
                  <p>
                    <strong>Swing Trader</strong> hold positions from days to
                    weeks.
                  </p>
                  <p>
                    <strong>Day Trader</strong>complete trades within the same
                    day, holding no overnight positions.
                  </p>
                  <p>
                    <strong>Scalp Trader</strong>execute trades within seconds
                    to minutes.
                  </p>
                </>
              )}
              {heading.id === "section8" && (
                <>
                  <p>
                    Traders operate with a short-term perspective, often
                    focusing on daily market movements. Their goal is to
                    capitalize on rapid changes in asset prices to secure
                    profits. A trader's time horizon can range from a few
                    minutes to several days.
                  </p>
                </>
              )}
              {heading.id === "section9" && (
                <>
                  <p>
                    Both investing and trading share the common goal of making
                    money, requiring accounts to buy and sell assets like
                    stocks, bonds, and mutual funds. However, the key
                    differences lie in the timeframes and the level of risk
                    involved. Investors generally hold assets for a longer
                    period, while traders move quickly to capitalize on
                    short-term opportunities. Traders face higher risk due to
                    their shorter timeframes and more frequent transactions.
                  </p>
                </>
              )}
              {heading.id === "section10" && (
                <>
                  <p>
                    Although investing and trading are often used
                    interchangeably, they represent distinct approaches with
                    unique risks and rewards. Investors focus on long-term goals
                    and are typically more risk-averse, while traders aim to
                    make quick profits and are willing to take on higher risks.
                    Understanding the differences between the two can help
                    individuals choose the approach that best aligns with their
                    financial goals and risk tolerance.
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

export default InvestingVTrading;
