import React from "react";
import Navbar from "../../../Navbar";
import ScrollToTop from "../../ScrollToTop";
import TableOfContent from "../../TableofContent";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../IntroToStocks/introToStocks.css";

const InvestingAnIntro = () => {
  const headings = [
    { id: "section1", title: "Understanding Investment Categories and Risk" },
    { id: "section2", title: "Key Points" },
    { id: "section3", title: "Understanding the Investment Risk Ladder" },
    { id: "section4", title: "Cash" },
    { id: "section5", title: "Bonds" },
    { id: "section6", title: "Mutual Funds" },
    { id: "section7", title: "Exchange-Traded Funds (ETFs)" },
    { id: "section8", title: "Stocks" },
    { id: "section9", title: "Alternative Investments" },
    { id: "section10", title: "Sensible Investment Practices" },
    { id: "section11", title: "Expectations Based on Economic Conditions" },
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
      <h1 className="stockpagetitle">Investing: An Introduction</h1>
      <div className="tableContent-mainContainer">
        <TableOfContent headings={headings} />

        <div className="content">
          {headings.map((heading, index) => (
            <div key={index} id={heading.id} className="section">
              <h2>{heading.title}</h2>
              {heading.id === "section1" && (
                <>
                  <p>
                    The world of investing is ever-changing and can seem
                    overwhelming, but those who take the time to grasp the basic
                    concepts and understand the different types of asset classes
                    can achieve substantial returns over time. The initial step
                    is to understand the various investment categories and how
                    they rank in terms of risk.
                  </p>
                </>
              )}
              {heading.id === "section2" && (
                <>
                  <p>
                    Investing can be intimidating for beginners due to the vast
                    array of assets to consider.
                  </p>
                  <p>
                    The investment risk ladder categorizes asset classes by
                    their risk level, with cash being the least risky and
                    alternative investments often being the most unpredictable.
                  </p>
                  <p>
                    Beginners are usually advised to start with index funds or
                    exchange-traded funds (ETFs) that follow the market, as they
                    offer a simpler, more stable approach.
                  </p>
                  <p>
                    Stocks generally yield higher returns than bonds but come
                    with greater risk.
                  </p>
                  <p>
                    Investment professionals frequently recommend diversifying
                    portfolios to manage risk.
                  </p>
                </>
              )}
              {heading.id === "section3" && (
                <>
                  <p>
                    Here's an overview of major asset classes, arranged by
                    ascending risk level.
                  </p>
                </>
              )}
              {heading.id === "section4" && (
                <>
                  <p>
                    Cash in a bank deposit is the most straightforward and
                    secure investment. It provides investors with a clear
                    understanding of the interest they'll earn and guarantees
                    the return of their initial investment. However, interest
                    rates on cash deposits usually lag behind inflation.
                    Certificates of deposit (CDs) offer higher rates than
                    regular savings accounts but require funds to be locked in
                    for a set period, with potential penalties for early
                    withdrawals.
                  </p>
                </>
              )}
              {heading.id === "section5" && (
                <>
                  <p>
                    Bonds represent loans made by investors to borrowers,
                    typically corporations or government agencies, with fixed
                    interest rates in return. These debt instruments are used to
                    finance operations or projects, and their interest rates are
                    influenced by central bank policies. Bond rates fluctuate
                    with changes in interest rates, making them subject to
                    market volatility.{" "}
                  </p>
                </>
              )}
              {heading.id === "section6" && (
                <>
                  <p>
                    Mutual funds pool investments from multiple investors to
                    purchase a diversified portfolio of stocks, bonds, or other
                    securities. Managed by portfolio managers, these funds can
                    track specific indexes like the S&P 500 or be actively
                    managed, with managers adjusting holdings to achieve better
                    returns. Although mutual funds offer diversification, they
                    often come with management fees and other charges that can
                    affect overall returns.
                  </p>
                </>
              )}
              {heading.id === "section7" && (
                <>
                  <p>
                    ETFs are similar to mutual funds but trade like stocks on an
                    exchange. This allows for real-time trading and greater
                    liquidity throughout the day. ETFs can track indexes or
                    focus on specific sectors, commodities, or other investment
                    themes. Due to their flexibility and lower costs compared to
                    mutual funds, ETFs have become popular among investors.
                  </p>
                </>
              )}
              {heading.id === "section8" && (
                <>
                  <p>
                    Stocks represent ownership in a company, giving investors
                    the potential to benefit from increases in stock prices and
                    dividends. Common stockholders have voting rights at
                    shareholders' meetings, while preferred stockholders receive
                    dividend preferences. Although stocks can yield high
                    returns, they are also subject to market volatility and
                    carry greater risks compared to bonds.{" "}
                  </p>
                </>
              )}
              {heading.id === "section9" && (
                <>
                  <p>
                    Alternative investments encompass a variety of asset types,
                    such as real estate, hedge funds, private equity, and
                    commodities. These investments often require significant
                    capital and may not be accessible to individual investors
                    due to high initial investment requirements and other
                    restrictions.{" "}
                  </p>
                  <p>
                    <strong>Real Estate: </strong>Investors can purchase
                    properties or invest in real estate investment trusts
                    (REITs), which pool funds to invest in real estate assets.
                  </p>
                  <p>
                    <strong>Hedge Funds: </strong>Hedge funds invest in a range
                    of assets to achieve returns exceeding market performance,
                    but they often require high initial investments and have
                    limited liquidity.
                  </p>
                  <p>
                    <strong>Private Equity:</strong>Private equity funds pool
                    investments to acquire and manage companies, often with a
                    long-term focus. These funds are typically accessible only
                    to accredited investors.
                  </p>
                  <p>
                    <strong>Commodities: </strong>Investments in tangible assets
                    like gold, silver, or crude oil can be accessed through
                    commodity pools or specialized ETFs.
                  </p>
                  <p>
                    <strong>Gold: </strong>Gold is seen as a safe haven during
                    times of economic uncertainty, often performing well when
                    markets are unstable.
                  </p>
                </>
              )}
              {heading.id === "section10" && (
                <>
                  <p>
                    Experienced investors typically diversify their portfolios
                    across different asset classes based on their risk
                    tolerance. New investors might begin with mutual funds or
                    ETFs, then gradually add individual stocks, real estate, or
                    other alternative investments.
                  </p>
                  <p>
                    While most investors don't have the time to monitor
                    portfolios daily, a mix of index funds representing the U.S.
                    equity market, international equities, and a broad bond
                    index can provide stability. For more hands-on investors,
                    constructing a diversified portfolio tailored to personal
                    risk tolerance and financial goals may be a preferred
                    approach.
                  </p>
                </>
              )}
              {heading.id === "section11" && (
                <>
                  <p>
                    <strong>Stocks and Bonds: </strong>In strong economies with
                    low unemployment, stocks tend to perform well while bonds
                    may underperform as interest rates rise. In downturns or
                    recessions, bonds typically perform better as rates fall.
                  </p>
                  <p>
                    <strong>Real Estate: </strong>Real estate investments
                    benefit from strong economies but can be affected by rising
                    interest rates.
                  </p>
                  <p>
                    <strong>Commodities: </strong>Commodities can be used as a
                    hedge against inflation, often performing well in
                    inflationary environments.
                  </p>

                  <p>
                    <strong>Alternative Investments: </strong>Hedge funds and
                    private equity may perform better in environments with low
                    interest rates and high liquidity, but are less accessible
                    to individual investors.
                  </p>
                  <p>
                    <strong>Cash and Cash Equivalents:</strong>These are safe
                    havens during economic uncertainty, but they often offer
                    lower returns compared to other asset classes.
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

export default InvestingAnIntro;
