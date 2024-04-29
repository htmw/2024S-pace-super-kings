import React from "react";
import Navbar from "../../../Navbar";
import ScrollToTop from "../../ScrollToTop";
import TableOfContent from "../../TableofContent";
import "../../IntroToStocks/introToStocks.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FundamntalAnalysis = () => {
  const headings = [
    { id: "section1", title: "Introduction to Fundamental Analysis" },
    { id: "section2", title: "Key Takeaways" },
    { id: "section3", title: "Understanding Fundamental Analysis" },
    { id: "section4", title: "Types of Fundamental Analysis" },
    { id: "section5", title: "Key Elements of Fundamental Analysis" },
    { id: "section6", title: "Financial Statements" },
    { id: "section7", title: "Fundamental Analysis vs. Technical Analysis" },
    { id: "section8", title: "The Importance of Fundamental Analysis" },
    { id: "section9", title: "Conclusion" },
  
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
      <h1 className="stockpagetitle">Fundamental Analysis</h1>
      <div className="tableContent-mainContainer">
        <TableOfContent headings={headings} />

        <div className="content">
          {headings.map((heading, index) => (
            <div key={index} id={heading.id} className="section">
              <h2>{heading.title}</h2>
              {heading.id === "section1" && (
                <>
                  <p>
                  Fundamental analysis (FA) is a method used to determine a security's intrinsic value by examining various economic and financial factors. The intrinsic value is based on a company's financial situation and the broader market and economic conditions. The objective of fundamental analysis is to assess whether a security is overvalued or undervalued compared to its intrinsic value, guiding investment decisions.
                  </p>
                  <p>Fundamental analysts study a wide range of factors, from macroeconomic conditions like the state of the economy and industry trends to microeconomic factors such as a company's management effectiveness. By comparing the intrinsic value with a security's market price, analysts can make recommendations to buy, sell, or hold a stock.</p>
                </>
              )}
              {heading.id === "section2" && (
                <>
                  <p>
                  Fundamental analysis involves assessing the intrinsic value of a stock through a comprehensive study of economic and financial factors.
                  </p>
                  <p>
                  The goal is to find stocks that are undervalued or overvalued relative to their intrinsic value.
                  </p>
                  <p>
                  Fundamental analysis includes examining cash flow, return on assets, profit margins, and other quantitative and qualitative factors.
                  </p>
                </>
              )}
              {heading.id === "section3" && (
                <>
                  <p>
                  Fundamental analysis looks at any information that might impact a stock's value, including macroeconomic factors, industry conditions, and a company's financial performance. Analysts typically evaluate a company by examining its financial statements, such as income statements, balance sheets, and cash flow statements, along with other qualitative aspects like management quality and corporate governance.
                  </p>
                </>
              )}
              {heading.id === "section4" && (
                <>
                  <p>
                  Fundamental analysis can be divided into two types:
                  </p>
                  <p>
                    <strong>Quantitative analysis: </strong>Focuses on measurable metrics such as revenue, profit, assets, liabilities, and financial ratios derived from financial statements.
                  </p>
                  <p>
                    <strong>Qualitative analysis: </strong>Considers factors that are less tangible, like a company's business model, competitive advantage, and management quality.

                  </p>
                 
                </>
              )}
              {heading.id === "section5" && (
                <>
                  <p>
                  <strong>Quantitative fundamentals: </strong>Derived from financial statements and ratios, these metrics include earnings, revenue, return on assets, and profit margins.
                  </p>
                  <p><strong>Qualitative fundamentals:</strong>These include aspects like corporate governance, brand recognition, and management effectiveness.
</p>
                </>
              )}
              {heading.id === "section6" && (
                <>
                  <p>
                  Fundamental analysis relies heavily on financial statements:
                  </p>
                  <p>
                   <strong>Balance sheets: </strong>Provide a snapshot of a company's assets, liabilities, and equity.
                  </p>
                  <p><strong>Income statements: </strong>Show a company's revenues, expenses, and profits over a specific period.</p>
                <p><strong>Cash flow statements: </strong> Indicate cash inflows and outflows from operations, investing, and financing activities.</p>
                </>
              )}
              {heading.id === "section7" && (
                <>
                  <p>
                  While fundamental analysis focuses on intrinsic value, technical analysis examines stock price trends and patterns. Technical analysis relies on price movements and trading signals to forecast future price trends, whereas fundamental analysis is concerned with a company's financial and economic fundamentals.
                  </p>
                </>
              )}
              {heading.id === "section8" && (
                <>
                  <p>
                  Fundamental analysis is important because it helps investors understand a stock's underlying value, allowing them to make informed investment decisions. By assessing a company's financial health and market conditions, investors can identify mispriced stocks and potentially profit from the market's mistakes.
                  </p>
                </>
              )}
              {heading.id === "section9" && (
                <>
                  <p>
                  Fundamental analysis provides investors with a thorough approach to evaluating a company's value by examining financial data, economic conditions, and qualitative factors. While it doesn't guarantee success, it can offer a solid foundation for making informed investment decisions. This analysis can help investors understand the true value of a stock, even if the market doesn't always reflect that value accurately.                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FundamntalAnalysis;
