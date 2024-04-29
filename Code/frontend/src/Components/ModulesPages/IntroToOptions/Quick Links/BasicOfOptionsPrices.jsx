import React from "react";
import Navbar from "../../../Navbar";
import ScrollToTop from "../../ScrollToTop";
import TableOfContent from "../../TableofContent";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../IntroToStocks/introToStocks.css";

const BasicOfOptionsPrices = () => {
  const headings = [
    {
      id: "section1",
      title: "Overview of Options Contracts and Premium Factors",
    },
    { id: "section2", title: "Key Takeaways" },
    {
      id: "section3",
      title: "Understanding the Basics of Option Prices",
    },
    { id: "section4", title: "Intrinsic Value" },
    { id: "section5", title: "Time Value" },
    { id: "section6", title: "Volatility" },
    { id: "section7", title: "The Bottom Line" },
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
      <h1 className="stockpagetitle">Basics of Options Prices </h1>
      <div className="tableContent-mainContainer">
        <TableOfContent headings={headings} />

        <div className="content">
          {headings.map((heading, index) => (
            <div key={index} id={heading.id} className="section">
              <h2>{heading.title}</h2>
              {heading.id === "section1" && (
                <>
                  <p>
                    Options are contracts granting the buyer the right, but not
                    the obligation, to buy or sell a security at a predetermined
                    price (the strike price) on or before a specified date (the
                    expiration date). The price of an option, known as the
                    premium, is determined by several factors. Understanding
                    these factors is essential for making informed decisions
                    about options trading.
                  </p>
                  <p>
                    When buying options, the main driver of profitability is the
                    price movement of the underlying security or stock. Call
                    option buyers aim for the stock's price to rise above the
                    strike price, while put option buyers benefit when the
                    stock's price falls below the strike price. However, other
                    elements also affect the premium's value and, consequently,
                    an option's profitability.
                  </p>
                </>
              )}
              {heading.id === "section2" && (
                <>
                  <p>
                    Options prices, or premiums, are composed of intrinsic and
                    time value.
                  </p>
                  <p>
                    Intrinsic value is the difference between the current stock
                    price and the strike price.
                  </p>
                  <p>
                    Time value represents the portion of the premium above
                    intrinsic value, reflecting the additional cost of the time
                    remaining before expiry.
                  </p>
                </>
              )}
              {heading.id === "section3" && (
                <>
                  <p>
                    Options contracts provide the buyer the right, but not the
                    obligation, to buy or sell an underlying security at a
                    preset price. Buyers of call options anticipate a rise in
                    the underlying stock price, while buyers of put options
                    expect a decline. The profitability of an options contract
                    depends on various factors, primarily intrinsic value and
                    time value.
                  </p>
                </>
              )}
              {heading.id === "section4" && (
                <>
                  <p>
                    Intrinsic value is the portion of the premium attributable
                    to the price difference between the current stock price and
                    the strike price. For example, if a stock is trading at $49
                    and a call option has a strike price of $45 with a $5
                    premium, then $4 of the premium is intrinsic value.
                    Intrinsic value helps determine whether an option is "in the
                    money" or "out of the money." An option is in the money when
                    it has intrinsic value, while it's out of the money when it
                    has none.
                  </p>
                </>
              )}
              {heading.id === "section5" && (
                <>
                  <p>
                    Time value, or extrinsic value, represents the premium above
                    intrinsic value, reflecting the additional time before
                    expiry. This value is higher when there's more time until
                    the option expires, as there's a greater chance for the
                    contract to become profitable. As the expiration date nears,
                    time value decreases, leading to what is known as "time
                    decay." The Greek letter theta measures time decay and
                    indicates how much an option's value decreases over time.
                  </p>
                </>
              )}
              {heading.id === "section6" && (
                <>
                  <p>
                    Volatility affects options pricing because higher volatility
                    increases the likelihood of significant price swings,
                    impacting the probability of an option ending in the money.
                    Implied volatility, or vega, measures the market's view of
                    the probability of a stock's price fluctuating. Higher
                    implied volatility leads to higher option premiums,
                    especially in anticipation of significant events like
                    earnings reports.
                  </p>
                </>
              )}
              {heading.id === "section7" && (
                <>
                  <p>
                    An option's value or premium is determined by intrinsic
                    value and time value. It's essential to understand these
                    concepts when trading options, as they play a crucial role
                    in determining the profitability of an options contract. To
                    succeed in options trading, consider these factors and have
                    a clear strategy for entry and exit.
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

export default BasicOfOptionsPrices;
