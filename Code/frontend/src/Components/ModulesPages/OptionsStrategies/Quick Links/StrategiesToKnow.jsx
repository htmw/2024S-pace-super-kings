import React from "react";
import Navbar from "../../../Navbar";
import ScrollToTop from "../../ScrollToTop";
import TableOfContent from "../../TableofContent";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../IntroToStocks/introToStocks.css";

const StrategiesToKnow = () => {
  const headings = [
    {
      id: "section1",
      title: "10 Options Strategies Every Investor Should Know",
    },
    { id: "section2", title: "Covered Call" },
    {
      id: "section3",
      title: "Married Put",
    },
    { id: "section4", title: "Bull Call Spread" },
    { id: "section5", title: "Bear Put Spread" },
    { id: "section6", title: "Protective Collar" },
    { id: "section7", title: "Long Straddle" },
    { id: "section8", title: "Long Strangle" },
    { id: "section9", title: "Long Call Butterfly Spread" },
    { id: "section10", title: "Iron Condor" },
    { id: "section11", title: "Iron Butterfly" },
    { id: "section12", title: "The Bottom Line" },
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
      <h1 className="stockpagetitle">Options Strategies</h1>
      <div className="tableContent-mainContainer">
        <TableOfContent headings={headings} />

        <div className="content">
          {headings.map((heading, index) => (
            <div key={index} id={heading.id} className="section">
              <h2>{heading.title}</h2>
              {heading.id === "section1" && (
                <>
                  <p>
                    Options trading provides a range of strategies that can help
                    limit risk and maximize return. Here's an overview of 10 key
                    strategies that every investor should be aware of:
                  </p>
                </>
              )}
              {heading.id === "section2" && (
                <>
                  <p>
                    A covered call involves selling call options while owning
                    the equivalent amount of the underlying asset. This strategy
                    is popular because it generates income through premiums
                    while reducing some risk associated with holding the stock.
                    To execute this, you purchase shares of the stock and
                    simultaneously sell a call option on those shares. This is
                    ideal for investors who are willing to sell their shares at
                    a predetermined price if the option buyer decides to
                    exercise.
                  </p>
                </>
              )}
              {heading.id === "section3" && (
                <>
                  <p>
                    A married put is a strategy in which an investor purchases
                    both shares of stock and a put option for an equivalent
                    number of shares. This strategy acts like insurance,
                    providing downside protection by allowing the investor to
                    sell shares at the put's strike price. This is also known as
                    a protective put.
                  </p>
                </>
              )}
              {heading.id === "section4" && (
                <>
                  <p>
                    In a bull call spread, an investor buys a call option at a
                    specific strike price and simultaneously sells a call option
                    with a higher strike price on the same underlying asset and
                    with the same expiration date. This is a vertical spread
                    strategy that is used when the investor expects a moderate
                    rise in the stock price.
                  </p>
                </>
              )}
              {heading.id === "section5" && (
                <>
                  <p>
                    In a bear put spread, an investor buys a put option at a
                    specific strike price while simultaneously selling a put
                    option with a lower strike price on the same underlying
                    asset and with the same expiration date. This strategy is
                    used when the investor expects a decline in the stock price
                  </p>
                </>
              )}
              {heading.id === "section6" && (
                <>
                  <p>
                    A protective collar involves buying an out-of-the-money
                    (OTM) put option and simultaneously selling an OTM call
                    option while holding the underlying asset. This strategy
                    provides downside protection while also generating income
                    through call premiums. It is often used by investors who
                    have experienced substantial gains in their long stock
                    position and want to protect their profits.
                  </p>
                </>
              )}
              {heading.id === "section7" && (
                <>
                  <p>
                    A long straddle involves purchasing a call option and a put
                    option with the same strike price and expiration date on the
                    same underlying asset. This strategy is used when an
                    investor expects significant price movement but is unsure of
                    the direction. Theoretically, this strategy has unlimited
                    profit potential.
                  </p>
                </>
              )}
              {heading.id === "section8" && (
                <>
                  <p>
                    A long strangle is similar to a straddle, but it involves
                    buying an out-of-the-money call option and an
                    out-of-the-money put option with different strike prices.
                    The strategy profits from large price movements in either
                    direction.
                  </p>
                </>
              )}
              {heading.id === "section9" && (
                <>
                  <p>
                    A long call butterfly spread involves buying an in-the-money
                    call option, selling two at-the-money call options, and
                    buying an out-of-the-money call option with the same
                    expiration date. This strategy combines bull and bear
                    spreads and is used when the investor expects little
                    movement in the stock price.
                  </p>
                </>
              )}
              {heading.id === "section10" && (
                <>
                  <p>
                    The iron condor involves a combination of a bull put spread
                    and a bear call spread. This strategy is created by selling
                    an out-of-the-money put option and buying a further
                    out-of-the-money put option, as well as selling an
                    out-of-the-money call option and buying a further
                    out-of-the-money call option. The iron condor is used when a
                    stock is expected to remain within a certain price range.
                  </p>
                </>
              )}
              {heading.id === "section11" && (
                <>
                  <p>
                    An iron butterfly involves selling an at-the-money put and
                    an at-the-money call, while buying an out-of-the-money put
                    and an out-of-the-money call. This strategy combines a
                    straddle with protective "wings" and is used when the
                    investor expects limited movement in the underlying asset.
                  </p>
                </>
              )}
              {heading.id === "section12" && (
                <>
                  <p>
                    Options strategies offer investors the flexibility to limit
                    risk and increase returns. Depending on your risk tolerance
                    and market outlook, there are various strategies to
                    consider. Whether you are already invested in an asset or
                    seeking to hedge or speculate, these strategies can be
                    helpful tools in your investment arsenal. Always ensure that
                    you understand the risks and seek professional advice when
                    needed.
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

export default StrategiesToKnow;
