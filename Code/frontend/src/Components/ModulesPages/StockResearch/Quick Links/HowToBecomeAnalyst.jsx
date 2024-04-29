import React from "react";
import Navbar from "../../../Navbar";
import ScrollToTop from "../../ScrollToTop";
import TableOfContent from "../../TableofContent";
import "../../IntroToStocks/introToStocks.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HowToBecomeAnalyst = () => {
  const headings = [
    {
      id: "section1",
      title: "How to Become Your Own Stock Analyst: A Step-by-Step Guide",
    },
    { id: "section2", title: "Step 1: Understand the Stock Market" },
    { id: "section3", title: "Step 2: Develop a Probing Mind" },
    { id: "section4", title: "Step 3: Perform Industry Analysis" },
    { id: "section5", title: "Step 4: Analyze the Business Model" },
    { id: "section6", title: "Step 5: Assess Financial Strength" },
    { id: "section7", title: "Step 6: Evaluate Management Quality" },
    { id: "section8", title: "Step 7: Examine Growth Potential" },
    { id: "section9", title: "Step 8: Determine Intrinsic Value" },
    { id: "section10", title: "Step 9: Set a Target Price" },
    { id: "section11", title: "Step 10: Monitor Stock Performance" },
    { id: "section12", title: "Additional Considerations" },
    { id: "section13", title: "The Bottom Line" },
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
      <h1 className="stockpagetitle">Become Your Own Stock Analyst</h1>
      <div className="tableContent-mainContainer">
        <TableOfContent headings={headings} />

        <div className="content">
          {headings.map((heading, index) => (
            <div key={index} id={heading.id} className="section">
              <h2>{heading.title}</h2>
              {heading.id === "section1" && (
                <>
                  <p>
                    Becoming your own stock analyst can be rewarding, allowing
                    you to make investment decisions based on your own research
                    and analysis. While financial advisors and professional
                    analysts offer valuable insights, understanding the
                    fundamentals of stock analysis can empower you to make more
                    informed choices. Here's a step-by-step guide on how to
                    become your own stock analyst:
                  </p>
                </>
              )}
              {heading.id === "section2" && (
                <>
                  <p>
                    Before diving into stock analysis, get familiar with the
                    basics of the stock market. Learn about different types of
                    securities, such as stocks, bonds, and mutual funds, and
                    understand how they are traded.
                  </p>
                </>
              )}
              {heading.id === "section3" && (
                <>
                  <p>
                    To analyze stocks effectively, adopt a curious mindset.
                    Investigate companies thoroughly to understand their
                    business models, sources of revenue, and industry
                    positioning. This involves reading company reports, news
                    articles, and industry publications.
                  </p>
                </>
              )}
              {heading.id === "section4" && (
                <>
                  <p>
                    Examine the industry in which a company operates. Look at
                    trends, market dynamics, competition, and regulatory factors
                    that could impact the industry's growth and stability.
                    Consider how external factors like technology, politics, and
                    global events might influence the industry.
                  </p>
                </>
              )}
              {heading.id === "section5" && (
                <>
                  <p>
                    A company's business model is its blueprint for generating
                    revenue and profits. Understand how the company makes money
                    and whether it has a competitive advantage. Examine its
                    product lines, customer base, suppliers, and market share to
                    gauge its position in the industry.
                  </p>
                </>
              )}
              {heading.id === "section6" && (
                <>
                  <p>
                    Review a company's financial statements to evaluate its
                    financial health. Key documents to study include:
                  </p>
                  <p>
                    <strong>Balance Sheet: </strong>Provides an overview of the
                    company's assets, liabilities, and shareholders' equity.
                  </p>
                  <p>
                    <strong>Income Statement:</strong>Shows the company's
                    revenues, expenses, and profits over a specific period.
                  </p>
                  <p>
                    <strong>Cash Flow Statement:</strong>Details the company's
                    cash inflows and outflows, highlighting its liquidity.
                  </p>
                  <p>
                    Analyze financial ratios such as the price-to-earnings (P/E)
                    ratio, return on assets (ROA), and debt-to-equity ratio to
                    understand the company's profitability and risk levels.
                  </p>
                </>
              )}
              {heading.id === "section7" && (
                <>
                  <p>
                    The quality of a company's management can significantly
                    impact its success. Research the company's executives and
                    board of directors to understand their experience, track
                    record, and strategic vision. Look for signs of good
                    corporate governance and ethical practices.
                  </p>
                </>
              )}
              {heading.id === "section8" && (
                <>
                  <p>
                    Growth analysis involves predicting a company's future
                    earnings based on past trends and industry forecasts.
                    Consider factors such as revenue growth, profit margins, and
                    the company's competitive position. Determine if the company
                    is investing in research and development or expanding into
                    new markets.
                  </p>
                </>
              )}
              {heading.id === "section9" && (
                <>
                  <p>
                    Intrinsic value is the estimated value of a company's stock
                    based on its fundamentals. Compare this intrinsic value with
                    the current market price to identify potential investment
                    opportunities. If a stock is trading below its intrinsic
                    value, it may be undervalued, suggesting a buy opportunity.
                    If it's trading above intrinsic value, it might be
                    overvalued.
                  </p>
                </>
              )}
              {heading.id === "section10" && (
                <>
                  <p>
                    After determining intrinsic value, set a target price for
                    the stock. This is the price at which you'd consider buying
                    or selling the stock. To set a target price, multiply the
                    estimated earnings per share (EPS) by a range of
                    price-to-earnings (P/E) ratios. This range should reflect
                    your expectations for the stock's growth and market
                    conditions.
                  </p>
                </>
              )}
              {heading.id === "section11" && (
                <>
                  <p>
                    Keep an eye on your stock investments and track their
                    performance against your target prices. Watch for changes in
                    the broader economy, industry trends, and company-specific
                    developments that could affect stock prices. If a stock
                    rises above your target price, consider selling to take
                    profits. If it drops, assess whether the company's
                    fundamentals have changed or if it's a temporary dip.
                  </p>
                </>
              )}
              {heading.id === "section12" && (
                <>
                  <p>
                    Beta: This metric measures a stock's volatility relative to
                    the market. A beta above 1 indicates higher risk, while a
                    beta below 1 indicates lower risk.{" "}
                  </p>
                  <p>
                    Dividend Yield: Stocks that pay dividends provide a steady
                    stream of income. Consider investing in dividend-paying
                    stocks for stability.
                  </p>
                  <p>
                    Technical Analysis: While fundamental analysis focuses on
                    intrinsic value, technical analysis examines price trends
                    and patterns. It can be useful to supplement your analysis
                    with technical insights.
                  </p>
                </>
              )}
              {heading.id === "section13" && (
                <>
                  <p>
                    Becoming your own stock analyst requires time, effort, and a
                    solid understanding of financial concepts. By following
                    these steps, you can conduct thorough research and make
                    informed investment decisions. Remember that no analysis
                    method is foolproof; always stay informed and be prepared to
                    adjust your strategy as needed. Ultimately, the goal is to
                    build a diversified portfolio that aligns with your
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

export default HowToBecomeAnalyst;
