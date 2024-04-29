import React from "react";
import Navbar from "../../../Navbar";
import ScrollToTop from "../../ScrollToTop";
import TableOfContent from "../../TableofContent";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../IntroToStocks/introToStocks.css";

const EssentialOptionTradingGuide = () => {
  const headings = [
    { id: "section1", title: "Overview of Options Trading" },
    { id: "section2", title: "Key Takeaways" },
    {
      id: "section3",
      title: "What Are Options?",
    },
    { id: "section4", title: "Understanding Options" },
    { id: "section5", title: "Types of Options: Calls and Puts" },
    { id: "section6", title: "American vs. European Options" },
    { id: "section7", title: "Special Considerations" },
    { id: "section8", title: "Options Strategies" },
    { id: "section9", title: "Advantages and Disadvantages of Options" },
    { id: "section10", title: "The Bottom Line" },
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
      <h1 className="stockpagetitle">Essential Options Trading Guide </h1>
      <div className="tableContent-mainContainer">
        <TableOfContent headings={headings} />

        <div className="content">
          {headings.map((heading, index) => (
            <div key={index} id={heading.id} className="section">
              <h2>{heading.title}</h2>
              {heading.id === "section1" && (
                <>
                  <p>
                    Options trading might seem complex, but it can be understood
                    with some key insights. Options provide advantages that go
                    beyond trading stocks or ETFs alone. They can be used to
                    generate income, speculate on price movements, or hedge
                    against risk.
                  </p>
                </>
              )}
              {heading.id === "section2" && (
                <>
                  <p>
                    Options are contracts giving the buyer the right, but not
                    the obligation, to buy or sell an underlying asset at a
                    specific price before or on a certain date.
                  </p>
                  <p>
                    They are versatile, offering opportunities for hedging,
                    income, or speculation.
                  </p>
                  <p>
                    Options are derivatives since their value is derived from
                    underlying assets.
                  </p>
                </>
              )}
              {heading.id === "section3" && (
                <>
                  <p>
                    An option is a contract that gives the bearer the right—but
                    not the obligation—to buy (call option) or sell (put option)
                    a given amount of an underlying asset at a predetermined
                    price (the strike price) by or before a specific date (the
                    expiration date). Options are typically used to speculate on
                    asset price movements or hedge against potential losses in
                    other investments.
                  </p>
                </>
              )}
              {heading.id === "section4" && (
                <>
                  <p>
                    Options have unique characteristics compared to other
                    assets, such as stocks and ETFs. A key component is the
                    premium—the price you pay for the option. This premium is
                    influenced by the option's strike price and expiration date,
                    as well as other factors like volatility.
                  </p>
                  <p>
                    Options offer flexibility and are used for various purposes:
                  </p>
                  <p>
                    <strong>Income: </strong> Investors may use covered call
                    options to generate income.
                  </p>
                  <p>
                    <strong>Speculations: </strong> Traders can use options to
                    leverage their positions for potentially greater returns.
                  </p>
                  <p>
                    <strong>Hedging: </strong> Options can be used to hedge
                    against downside risk in a stock portfolio.
                  </p>
                </>
              )}
              {heading.id === "section5" && (
                <>
                  <p>
                    <strong>Call options: </strong>Give the holder the right to
                    buy the underlying asset at the strike price by the
                    expiration date. They are used to speculate on price
                    increases.
                  </p>
                  <p>
                    <strong>Put Options: </strong> Give the holder the right to
                    sell the underlying asset at the strike price by the
                    expiration date. They are used to speculate on price
                    decreases or hedge against stock losses.
                  </p>
                </>
              )}
              {heading.id === "section6" && (
                <>
                  <p>
                    Options can be either American or European, depending on
                    when they can be exercised:
                  </p>
                  <p>
                    <strong>American Options: </strong> Can be exercised at any
                    time between the purchase date and the expiration date.
                  </p>
                  <p>
                    <strong>European Options:</strong>Can only be exercised at
                    expiration.
                  </p>
                </>
              )}
              {heading.id === "section7" && (
                <>
                  <p>
                    Options have unique characteristics that traders need to
                    understand:
                  </p>
                  <p>
                    <strong>Volatility: </strong>Affects option premiums. Higher
                    volatility generally means higher premiums.
                  </p>
                  <p>
                    <strong>Time Decay (Theta): </strong> Options lose value as
                    they approach expiration, which can affect the strategy.
                  </p>
                  <p>
                    <strong>Delta:</strong>Represents the rate of change in the
                    option's price relative to a change in the underlying
                    asset's price.
                  </p>
                  <p>
                    <strong>Gamma, Vega, and Rho: </strong>Other Greeks that
                    measure risk and sensitivity to various factors.
                  </p>
                </>
              )}
              {heading.id === "section8" && (
                <>
                  <p>
                    Options can be used in various strategies to achieve
                    specific goals:
                  </p>
                  <p>
                    <strong>Covered Calls: </strong>Involves selling call
                    options while owning the underlying stock, generating
                    income.
                  </p>
                  <p>
                    <strong>Long Calls and Puts: </strong>
                    Involves buying options to speculate on price movements.
                  </p>
                  <p>
                    <strong>Spreads: </strong>Combine multiple options positions
                    to limit risk.
                  </p>
                  <p>
                    <strong>Straddles and Strangles:</strong>Used to bet on
                    price volatility.
                  </p>
                </>
              )}
              {heading.id === "section9" && (
                <>
                  <p>
                    <strong>Advantages:</strong>
                    <p>
                      Can be used for hedging, speculation, and income
                      generation.
                    </p>
                    <p>Offers flexibility and leverage.</p>
                  </p>
                  <p>
                    <strong>Disadvantages:</strong>
                    <p>
                      Options can be complex and risky, especially for
                      inexperienced traders.
                    </p>
                    <p>Time decay and volatility can affect option value.</p>
                  </p>
                </>
              )}
              {heading.id === "section10" && (
                <>
                  <p>
                    Options offer a versatile way to enhance investment
                    portfolios, but they require careful consideration and
                    understanding of the risks involved. By understanding the
                    basics of options, including their types, strategies, and
                    key concepts like strike price and expiration date,
                    investors can use options to achieve various financial goals
                    while managing risk.
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

export default EssentialOptionTradingGuide;
