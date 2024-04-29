import React from "react";
import Navbar from "../../../Navbar";
import ScrollToTop from "../../ScrollToTop";
import TableOfContent from "../../TableofContent";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../IntroToStocks/introToStocks.css";

const KmowMoreAboutOptions = () => {
  const headings = [
    { id: "section1", title: "Definition of Options Contracts" },
    { id: "section2", title: "Key Aspects of Options Contracts" },
    {
      id: "section3",
      title: "Differences Between American and European Options",
    },
    { id: "section4", title: "The Premium and Pricing" },
    { id: "section5", title: "The Greeks in Options" },
    { id: "section6", title: "Advantages and Disadvantages of Options" },
    { id: "section7", title: "Example of an Options Trade" },
    { id: "section8", title: "Frequently Asked Questions" },
    { id: "section9", title: "The Bottom Line" },
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
      <h1 className="stockpagetitle">What are Options? Types, Spreads, Risk Metrics</h1>
      <div className="tableContent-mainContainer">
        <TableOfContent headings={headings} />

        <div className="content">
          {headings.map((heading, index) => (
            <div key={index} id={heading.id} className="section">
              <h2>{heading.title}</h2>
              {heading.id === "section1" && (
                <>
                  <p>
                    An option is a financial instrument derived from underlying
                    securities like stocks, indices, and exchange-traded funds
                    (ETFs). It provides the holder with the right, but not the
                    obligation, to buy or sell the underlying asset at a
                    specified price (strike price) by a specified date
                    (expiration date). The contract does not require the holder
                    to act if they choose not to, unlike futures contracts which
                    do require the holder to buy or sell the underlying asset.
                  </p>
                  <p>
                    Options come in two types: call options and put options.
                    Call options give the holder the right to buy the underlying
                    asset at the strike price before the expiration date, while
                    put options give the holder the right to sell. Options are
                    typically traded through online brokers or retail brokerage
                    firms.
                  </p>
                </>
              )}
              {heading.id === "section2" && (
                <>
                  <p>
                    <strong>Call Options: </strong>Allow the holder to buy the
                    underlying asset at a specified price before the expiration
                    date. Call options are typically used by traders who expect
                    the price of the underlying asset to rise. Call option
                    buyers are limited in their risk to the premium paid for the
                    contract, while sellers face potentially unlimited risk if
                    the price of the underlying asset increases significantly.
                  </p>
                  <p>
                    <strong>Put Options: </strong>Give the holder the right to
                    sell the underlying asset at a specified price before the
                    expiration date. Put options are usually employed by traders
                    who anticipate the price of the underlying asset will fall.
                    The risk for put option buyers is limited to the premium,
                    while the risk for put option sellers is potentially high,
                    especially if the underlying asset's price falls
                    significantly below the strike price.
                  </p>
                </>
              )}
              {heading.id === "section3" && (
                <>
                  <p>
                    <strong>American Options: </strong>Can be exercised at any
                    time before the expiration date. They generally carry a
                    higher premium because of the flexibility of early exercise.
                  </p>
                  <p>
                    <strong>Actively Managed ETFs:</strong>Portfolio managers
                    select securities, offering flexibility but often at a
                    higher cost.
                  </p>
                  <p>
                    <strong>European Options: </strong>Can only be exercised on
                    the expiration date, limiting the flexibility compared to
                    American options. They are typically found in certain index
                    options.
                  </p>
                </>
              )}
              {heading.id === "section4" && (
                <>
                  <p>
                    The premium is the price paid by the option buyer to the
                    seller for the rights granted by the contract. Factors
                    affecting the premium include the strike price, expiration
                    date, and market volatility. Premiums tend to be higher for
                    contracts with longer durations or for those that are
                    at-the-money.
                  </p>
                </>
              )}
              {heading.id === "section5" && (
                <>
                  <p>
                    The Greeks are risk metrics used in options trading to
                    assess various dimensions of risk. They include:
                  </p>
                  <p>
                    <strong>Delta:</strong> Measures the rate of change between
                    the option's price and a $1 change in the underlying asset's
                    price.
                  </p>
                  <p>
                    <strong>Theta:</strong>Represents the rate of change in the
                    option's price due to time decay.
                  </p>
                  <p>
                    <strong>Gamma: </strong>Measures the rate of change in the
                    option's delta with a $1 change in the underlying asset's
                    price.
                  </p>
                  <p>
                    <strong>Vega: </strong>Represents the rate of change in the
                    option's value with a 1% change in implied volatility.
                  </p>

                  <p>
                    <strong>Rho: </strong>Measures the impact of a 1% change in
                    interest rates on the option's value.
                  </p>
                </>
              )}
              {heading.id === "section6" && (
                <>
                  <p>
                    Options offer versatility and can be used for speculation,
                    hedging, or income generation. However, they can be complex
                    and pose risks, especially for those who are inexperienced.
                    The main advantages include flexibility, leverage, and the
                    ability to hedge risks. Disadvantages stem from their
                    complexity and the potential for significant losses,
                    especially for sellers of call options and put options.
                  </p>
                </>
              )}
              {heading.id === "section7" && (
                <>
                  <p>
                    Suppose an investor buys a call option on a stock with a
                    strike price of $115 and a premium of 37 cents. If the stock
                    price rises above $115 before expiration, the call buyer can
                    exercise the option and potentially sell the shares for a
                    profit. If the stock price does not rise above the strike
                    price, the call buyer's loss is limited to the premium paid.
                  </p>
                </>
              )}
              {heading.id === "section8" && (
                <>
                  <p>
                    <strong>How do options work? :-</strong>Options are
                    contracts that give the right to buy or sell an underlying
                    asset at a strike price before the expiration date. They can
                    be used for speculation or hedging.
                  </p>
                  <p>
                    <strong>What are the risks of options? :- </strong>Options
                    carry risks, especially for sellers who may face unlimited
                    losses if the underlying asset's price moves significantly.
                  </p>
                  <p>
                    <strong>How do options differ from futures? :- </strong>
                    Options provide the right but not the obligation to buy or
                    sell the underlying asset, while futures obligate the buyer
                    or seller to complete the transaction.
                  </p>
                  <p>
                    <strong>What is an options contract? :- </strong>It is a
                    derivative security that grants specific rights to the
                    holder, such as the right to buy or sell an underlying asset
                    at a set price by a specified date.
                  </p>
                </>
              )}
              {heading.id === "section9" && (
                <>
                  <p>
                    Options are powerful financial instruments offering unique
                    opportunities for speculation and risk management. They can
                    provide flexibility and leverage, but they also carry risks
                    that require careful understanding and management. Whether
                    you're buying calls, puts, or selling options, it's crucial
                    to understand the mechanics and the associated risks before
                    engaging in options trading.
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

export default KmowMoreAboutOptions;
