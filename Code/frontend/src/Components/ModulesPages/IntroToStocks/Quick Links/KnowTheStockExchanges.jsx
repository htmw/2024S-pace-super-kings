import React from "react";
import TableOfContent from "../../TableofContent";
import "./stockmarket.css";
import Navbar from "../../../Navbar";
import ScrollToTop from "../../ScrollToTop";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const KnowTheStockExchanges = () => {
  const headings = [
    { id: "section1", title: "Key Takeaways" },
    { id: "section2", title: "How Exchanges Work" },
    { id: "section3", title: "Auction Exchanges" },
    { id: "section4", title: "U.S. Stock Exchanges" },
    { id: "section5", title: "Over-The-Counter (OTC) Markets" },
    { id: "section6", title: "Alternative Trading Systems" },
    { id: "section7", title: "Global Stock Exchanges" },
    { id: "section8", title: "Cryptocurrency Exchanges" },
    {
      id: "section9",
      title: "Securities and Exchange Commission (SEC) Regulation",
    },
    { id: "section10", title: "Stock Exchange vs. Stock Market" },
    {
      id: "section11",
      title: "Purpose of a Stock Exchange",
    },

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
      
      <h1 className="stockpagetitle">Getting to Know the Stock Exchanges</h1>
      <div className="tableContent-mainContainer">
        <TableOfContent headings={headings} />

        <div className="content">
          {headings.map((heading, index) => (
            <div key={index} id={heading.id} className="section">
              <h2>{heading.title}</h2>
              {heading.id === "section1" && (
                <>
                  <p>
                    <strong>Centralized Location: </strong>Stock exchanges serve
                    as central points for trading equities, including stocks and
                    bonds.
                  </p>
                  <p>
                    <strong>IPO and Secondary Market: </strong>Stocks become
                    available on exchanges after companies conduct their initial
                    public offering (IPO). After the IPO, shares can be traded
                    on the secondary market, where buyers and sellers engage in
                    transactions.
                  </p>
                  <p>
                    <strong>Bid-Ask Spread: </strong>Exchanges track stock
                    prices through the bid-ask system, where the bid price
                    represents what a buyer is willing to pay, and the ask price
                    reflects what a seller is willing to accept. The difference
                    between the two is known as the bid-ask spread.
                  </p>
                </>
              )}
              {heading.id === "section2" && (
                <>
                  <p>
                    Exchanges connect corporations and governments with
                    investors, enabling efficient and regulated trading.
                    Companies conduct IPOs to offer shares to public
                    shareholders in the primary market. Once shares are
                    available, they can be traded on the secondary market, where
                    exchanges track orders and prices
                  </p>
                </>
              )}
              {heading.id === "section3" && (
                <>
                  <p>
                    Auction exchanges, also called the auction market, involve
                    competitive bids and offers. In these systems, buyers and
                    sellers submit bids and offers simultaneously, with trades
                    executed when a match occurs. The auction market, or open
                    outcry system, involves brokers and traders physically and
                    verbally communicating on the trading floor to buy and sell
                    securities. Though most exchanges use electronic trading,
                    some, like the New York Stock Exchange (NYSE), maintain
                    elements of the auction system.
                  </p>
                </>
              )}
              {heading.id === "section4" && (
                <>
                  <p>
                    <strong>New York Stock Exchange (NYSE): </strong>The NYSE is
                    the world's largest equities exchange and remains one of the
                    leading auction markets, where specialists are physically
                    present on trading floors. The NYSE provides minimum
                    protections for investors, such as requiring shareholder
                    approval for equity incentive plans and independent
                    directors on key committees.
                  </p>
                  <p>
                    <strong>Nasdaq: </strong>This electronic exchange connects
                    buyers and sellers via computers over a network. Market
                    makers carry their stock inventory and facilitate trades by
                    posting bid and ask prices. Companies listed on Nasdaq must
                    meet specific requirements, and failure to do so can lead to
                    delisting to an over-the-counter (OTC) market.
                  </p>
                </>
              )}
              {heading.id === "section5" && (
                <>
                  <p>
                    OTC refers to trades conducted outside large organized
                    exchanges. OTC markets typically list smaller companies or
                    those delisted from other exchanges. They generally have
                    lower regulatory requirements, and liquidity can be lower
                    than on major exchanges. Notable OTC terms include Pink
                    Sheets, which don't require companies to register with the
                    Securities and Exchange Commission (SEC).
                  </p>
                </>
              )}
              {heading.id === "section6" && (
                <>
                  <p>
                    Electronic communication networks (ECNs) fall under the
                    category of alternative trading systems (ATSs). These
                    systems electronically match orders for buyers and sellers,
                    operating without public disclosure of the size and price of
                    their orders, creating what is known as a "dark pool." ATSs
                    are regulated by the SEC and may apply to become national
                    securities exchanges.
                  </p>
                </>
              )}
              {heading.id === "section7" && (
                <>
                  <p>
                    Several global exchanges operate outside the United States,
                    including:
                  </p>
                  <p>
                    Shanghai Stock Exchange (SSE): The largest in mainland
                    China, trading various instruments.
                  </p>
                  <p>
                    Shenzhen Stock Exchange (SZSE): The second-largest in China.
                  </p>
                  <p>
                    Euronext: Europe's largest stock exchange, formed by merging
                    the Amsterdam, Paris, and Brussels stock exchanges.
                  </p>
                  <p>
                    London Stock Exchange (LSE): Located in the UK, hosting the
                    Financial Times Stock Exchange (FTSE) 100 Share Index,
                    comprising the top 100 publicly traded companies.
                  </p>
                  <p>
                    India: As of 2024, surpassed Hong Kong to become the
                    fourth-largest stock market by market capitalization.
                  </p>
                </>
              )}
              {heading.id === "section8" && (
                <>
                  <p>
                    Cryptocurrency exchanges facilitate trading in digital
                    currencies:
                  </p>
                  <p>
                    <strong>Coinbase:</strong>A leading U.S.-based
                    cryptocurrency exchange with a trading platform for retail
                    and institutional investors.
                  </p>
                  <p>
                    <strong>Binance:</strong>A global exchange for
                    cryptocurrencies with significant trading volume.
                  </p>
                </>
              )}
              {heading.id === "section9" && (
                <>
                  <p>
                    The SEC's Division of Trading and Markets regulates
                    securities market participants, broker-dealers, stock
                    exchanges, FINRA, clearing agencies, and transfer agents.
                    Its role is to maintain standards for fair, orderly, and
                    efficient markets.
                  </p>
                </>
              )}
              {heading.id === "section10" && (
                <>
                  <p>
                    A stock exchange is a specific marketplace facilitating
                    equity trading, while a stock market represents the broader
                    collection of all stocks in a region or country. Stock
                    markets are often represented by indices like the S&P 500.
                  </p>
                </>
              )}
              {heading.id === "section11" && (
                <>
                  <p>
                    Stock exchanges provide a platform for companies to raise
                    capital by issuing equity shares, which investors can
                    purchase. Companies use raised capital to fund their
                    operations, while investors can benefit from the potential
                    returns on their investments.
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

export default KnowTheStockExchanges;

// {
//   return (
//     <div>
        // <ScrollToTop/>
//      <Navbar />
//      <h1 className="stockpagetitle">The Stock Market</h1>
//     <div className="tableContent-mainContainer">

//       <TableOfContent headings={headings} />

//       <div className="content">
//         {headings.map((heading, index) => (
//           <div key={index} id={heading.id} className="section">
//             <h2>{heading.title}</h2>
//             {heading.id === "section1" && (
//               <>
//                 <p>
//                   The stock market involves the collective trading of stocks
//                   and their derivatives.
//                 </p>
//                 <p>
//                   It is central to modern economies, allowing companies to
//                   raise significant funds for various purposes.
//                 </p>
//                 <p>
//                   Companies listed on stock exchanges must be public, meaning
//                   their shares are open for trading by anyone. Public
//                   companies must adhere to strict reporting and transparency
//                   rules.
//                 </p>
//                 <p>
//                   Stocks are sold to a range of investors, from institutions
//                   and high-net-worth individuals to people with modest means.
//                   Investors buy stocks for income, to sell later at a profit,
//                   or to gain voting rights in company decisions.
//                 </p>
//                 <p>
//                   The Securities and Exchange Commission (SEC) and state
//                   regulators oversee the U.S. stock market.
//                 </p>
//                 <p>
//                   Stock prices fluctuate due to supply and demand, company
//                   performance, economic conditions, and investor sentiment,
//                   among other factors.
//                 </p>
//               </>

//             )},
//             </div>
//             ))
//         }
//       </div>
//       </div>

//     </div>
//   );
//     };
