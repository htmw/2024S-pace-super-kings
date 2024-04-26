import React from "react";
import TableOfContent from "../../TableofContent";
import Navbar from "../../../Navbar";
import ScrollToTop from "../../ScrollToTop";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StockMarketWork = () => {
  const headings = [
    { id: "section1", title: "What Is the Stock Market?" },
    { id: "section2", title: "Buying and Selling Stocks" },
    { id: "section3", title: "Types of Stocks" },
    { id: "section4", title: "What Is a Stock Exchange?" },
    { id: "section5", title: "Stock Market Indexes" },
    { id: "section6", title: "Why Companies Issue Shares" },
    { id: "section7", title: "How Share Prices Are Set" },
    { id: "section8", title: "Advantages of Listing on a Stock Exchange" },
    { id: "section9", title: "Disadvantages of Listing on a Stock Exchange" },
    { id: "section10", title: "Inflation and the Stock Market" },
    {
      id: "section11",
      title: "How Much Does the Stock Market Grow Each Year?",
    },
    { id: "section12", title: "How Do People Lose Money in the Stock Market?" },

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
      <h1 className="stockpagetitle">How Does the Stock Market Work?</h1>
      <div className="tableContent-mainContainer">
        <TableOfContent headings={headings} />

        <div className="content">
          {headings.map((heading, index) => (
            <div key={index} id={heading.id} className="section">
              <h2>{heading.title}</h2>
              {heading.id === "section1" && (
                <>
                  <p>
                    The stock market is where companies raise money by selling
                    shares of stock to investors. When you buy a share, you own
                    a small part of the company. This gives you certain rights,
                    like voting on company matters and receiving dividends.
                  </p>
                </>
              )}

              {heading.id === "section2" && (
                <>
                  <p>
                    Investors, including individuals and institutions, buy and
                    sell stocks on stock exchanges. When you buy a share, you're
                    purchasing it from another investor—not directly from the
                    company. The same happens when you sell; you're selling to
                    another investor.
                  </p>
                </>
              )}
              {heading.id === "section3" && (
                <>
                  <p>
                    <strong>Common Shares: </strong>These give you voting rights
                    in company decisions and are the most traded type of stock.
                  </p>
                  <p>
                    <strong>Preferred Shares: </strong>These usually don't have
                    voting rights but give you priority over common shares for
                    dividends and assets if the company is liquidated.
                  </p>
                  <p>
                    Some companies have different classes of stock with
                    different voting rights. For example, Class A shares might
                    have more votes per share than Class B shares.
                  </p>
                </>
              )}
              {heading.id === "section4" && (
                <>
                  <p>
                    A stock exchange is a place where stocks are bought and
                    sold. It's like a marketplace for shares. The first stock
                    exchanges appeared in Europe in the 16th century. The New
                    York Stock Exchange (NYSE), founded in 1792, is one of the
                    most well-known exchanges today. Another major exchange is
                    the Nasdaq.
                  </p>
                </>
              )}
              {heading.id === "section5" && (
                <>
                  <p>
                    A stock market index is a measure of the performance of a
                    group of stocks. It gives an overview of how the market or a
                    specific sector is doing. Major indexes include:
                  </p>
                  <p>
                    <strong>Dow Jones Industrial Average (DJIA): </strong>A list
                    of 30 large American corporations
                  </p>
                  <p>
                    <strong>S&P 500: </strong>A broader index of the 500 largest
                    U.S. companies.
                  </p>
                  <p>
                    <strong>Nasdaq Composite: </strong>Focuses on technology
                    companies.
                  </p>
                </>
              )}

              {heading.id === "section6" && (
                <>
                  <p>
                    Companies sell shares to raise capital for expansion,
                    hiring, equipment, and more. Startups might initially get
                    money from personal savings or angel investors. When they
                    need more funds, they might go public by listing shares on a
                    stock exchange through an initial public offering (IPO).
                  </p>
                </>
              )}
              {heading.id === "section7" && (
                <>
                  <p>
                    Share prices are set by supply and demand. If more people
                    want to buy a stock (demand), the price goes up. If more
                    people want to sell (supply), the price goes down. The
                    difference between the highest bid and the lowest ask is
                    called the "spread."
                  </p>
                </>
              )}
              {heading.id === "section8" && (
                <>
                  <p>It provides liquidity for shareholders.</p>
                  <p>
                    It allows companies to raise more funds by issuing
                    additional shares.
                  </p>
                  <p>
                    Listed companies get more visibility and can attract
                    talented employees with stock options.
                  </p>
                  <p>Shares can be used as currency for acquisitions.</p>
                </>
              )}
              {heading.id === "section9" && (
                <>
                  <p>It can be costly to list on an exchange.</p>
                  <p>There are many regulations to comply with.</p>
                  <p>
                    The focus on quarterly earnings can make long-term planning
                    challenging.
                  </p>
                </>
              )}
              {heading.id === "section10" && (
                <>
                  <p>
                    Inflation is when consumer prices increase. It can impact
                    the stock market in different ways. In some cases, it leads
                    to higher share prices, but it can also cause corporate
                    profits to fall if input costs increase.
                  </p>
                </>
              )}
              {heading.id === "section11" && (
                <>
                  <p>
                    Historically, the S&P 500 has grown by about 10.5% per year.
                    However, the market's growth can vary; some years it grows
                    more, and some years less.
                  </p>
                </>
              )}
              {heading.id === "section12" && (
                <>
                  <p>
                    People can lose money by investing in high-risk securities,
                    selling during a crash, or using margin trading, which
                    magnifies gains and losses. It's often best to hold onto
                    stocks during downturns, as they may recover over time.
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

export default StockMarketWork;

{
  /* <div>
<Navbar />
<h1 className="stockpagetitle">The Stock Market</h1>
<div className="tableContent-mainContainer">
  
  <TableOfContent headings={headings} />

  <div className="content">
    {headings.map((heading, index) => (
      <div key={index} id={heading.id} className="section">
        <h2>{heading.title}</h2>
        {heading.id === "section1" && (
          <>
            <p>
              The stock market involves the collective trading of stocks
              and their derivatives.
            </p>
            <p>
              It is central to modern economies, allowing companies to
              raise significant funds for various purposes.
            </p>
            <p>
              Companies listed on stock exchanges must be public, meaning
              their shares are open for trading by anyone. Public
              companies must adhere to strict reporting and transparency
              rules.
            </p>
            <p>
              Stocks are sold to a range of investors, from institutions
              and high-net-worth individuals to people with modest means.
              Investors buy stocks for income, to sell later at a profit,
              or to gain voting rights in company decisions.
            </p>
            <p>
              The Securities and Exchange Commission (SEC) and state
              regulators oversee the U.S. stock market.
            </p>
            <p>
              Stock prices fluctuate due to supply and demand, company
              performance, economic conditions, and investor sentiment,
              among other factors.
            </p>
          </>
          
        )},
        </div>
        ))
    }
  </div>
  </div>
           
       
</div> */
}
