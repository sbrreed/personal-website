import getFilteredETFData from "../../../sharedTools/getFilteredETFData";
import getRandomizedData from "../../../sharedTools/getRandomizedData";
import { useState, useEffect } from "react";

function ETFs({ data }) {
  const micaData = getFilteredETFData({ data: data, person: "Mica" });
  const sarahData = getFilteredETFData({ data: data, person: "Sarah" });

  const micaData_withTotals = addTotals(micaData);

  const [randomMicaData, setRandomMicaData] = useState(
    getRandomizedData(micaData)
  );

  const randomMicaDataTotalOnly = randomMicaData[randomMicaData.length - 1];
  const initialMicaRandomTotalNegativeCount =
    randomMicaDataTotalOnly.Diff_Times_Mult < 0 ? 1 : 0;

  const [randomSarahData, setRandomSarahData] = useState(
    getRandomizedData(sarahData)
  );

  const initialSarahRandomTotalNegativeCount =
    randomSarahData[randomSarahData.length - 1].Diff_Times_Mult < 0 ? 1 : 0;

  const [graphic1Type, setGraphic1Type] = useState("chart");
  const [numClicksRandomize1, setNumClicksRandomize1] = useState(1);
  const [numNegativeRandomize1, setNumNegativeRandomize1] = useState(
    initialMicaRandomTotalNegativeCount
  );

  const [numClicksRandomize2, setNumClicksRandomize2] = useState(1);
  const [numNegativeRandomize2, setNumNegativeRandomize2] = useState(
    initialSarahRandomTotalNegativeCount
  );

  const [table1CollapseState, setTable1CollapseState] = useState("close");
  const [table2CollapseState, setTable2CollapseState] = useState("close");
  const [table3CollapseState, setTable3CollapseState] = useState("close");
  const [table4CollapseState, setTable4CollapseState] = useState("close");

  const handleGraphic1ButtonClick = (type) => {
    setGraphic1Type(type);
  };
  const handleRandomize1ButtonClick = () => {
    setNumClicksRandomize1(numClicksRandomize1 + 1);
    if (randomMicaDataTotalOnly.Diff_Times_Mult < 0) {
      setNumNegativeRandomize1(numNegativeRandomize1 + 1);
    }
    setRandomMicaData(getRandomizedData(micaData));
  };
  const handleRandomize2ButtonClick = () => {
    setNumClicksRandomize2(numClicksRandomize2 + 1);
    if (randomSarahData[randomSarahData.length - 1].Diff_Times_Mult < 0) {
      setNumNegativeRandomize2(numNegativeRandomize2 + 1);
    }
    setRandomSarahData(getRandomizedData(sarahData));
  };

  const handleTableCollapse = (state, table) => {
    table == "table1" && setTable1CollapseState(state);
    table == "table2" && setTable2CollapseState(state);
    table == "table3" && setTable3CollapseState(state);
    table == "table4" && setTable4CollapseState(state);
  };

  return (
    <div className="article">
      <div className="multi-paragraph-section">
        <div className="section-divider">
          <h2>The discovery</h2>
        </div>
        <p>
          Back in June of 2020, when my daughter was 14, I wanted to start to
          teach her about the stock market. I also wanted to teach her about
          philanthropy. In order to combine both these lessons, I opened an
          account for her with{" "}
          <a href="https://www.stockpile.com/" target="_blank">
            Stockpile
          </a>
          , an investing app that lets parents open accounts with their children
          and buy fractional shares (whole shares often being too expensive).
        </p>
        <p>
          We put some money in the account and made an agreement that at the end
          of the year we would assess the growth on the principal and she would
          get to keep 20% and donate the rest of the growth to charities of her
          choice. While I knew that investment funds were the safer bet for
          investing, I allowed her to choose 21 stocks, almost all companies she
          had heard of, and allocate the funds as she saw fit. I thought this
          approach would be more exciting for her, and considering it was meant
          to be an educational exercise, it seemed worth the risk.
        </p>
        <p>
          By December of 2021 the account had grown, so we chose some stocks to
          sell that would add up to the amount of growth and some charities to
          donate to. We withdrew the growth, bringing the account back down to
          its principal value.
        </p>
        <p>
          {" "}
          Come December of 2022, the market had turned and her stocks were down
          so there was no growth to pull from. Instead of re-allocating the
          funds, or switching out stocks, we chose to wait and see what would
          happen. As the pandemic wound down, and our lives picked back up and
          we more or less forgot about the account. (This is often how my
          parenting lessons wind up.)
        </p>
        <p>
          Recently, however, my daughter was looking for ways to fund her fancy
          nail habit and logged onto the account. To our surprise, the value of
          the account had not recovered its losses. My lectures about the
          importance of investing were not working my favor. How could that be?
          My own investments had been steadily growing. I knew there had been a
          downturn in the markets but they had mostly recovered. To cover for my
          ignorance, I assumed there must be something nefarious going on. This
          app must be stealing from us in some way.
        </p>
      </div>
      <div className="section-divider">
        <h2>The investigation</h2>
      </div>
      <p>
        To investigate what was going on, I dug back through the account
        statements (Stockpile, unfortnately is very bare-boned and doesn't have
        any easy way to dig through account history other than the PDF
        statements). I knew the account had grown and then we had withdrawn from
        it. What I wanted to do was investigate the growth of the stocks after
        that activity. I determined that Dec 2021 was a safe place to start. I
        pulled the value of each stock on 12/31/21 and 08/21/24 and compared
        them.
      </p>
      <div className="graphic-chooser-buttons">
        <button
          id="table1"
          className={graphic1Type === "table" ? "active" : ""}
          onClick={() => handleGraphic1ButtonClick("table")}
        >
          Table
        </button>
        <button
          id="chart1"
          className={graphic1Type === "chart" ? "active" : ""}
          onClick={() => handleGraphic1ButtonClick("chart")}
        >
          Chart
        </button>
      </div>
      {graphic1Type === "table" && (
        <>
          <div className="button-wrapper">
            <div className="expand-collapse-buttons">
              <button
                className="small-button"
                onClick={() => handleTableCollapse("close", "table1")}
              >
                Collapse Table
              </button>
              <button
                className="small-button"
                onClick={() => handleTableCollapse("open", "table1")}
              >
                Expand Table
              </button>
            </div>
          </div>
          <div className="table-wrapper">
            <table id="table1">
              <thead>
                <tr>
                  <th>Stock Name</th>
                  <th>Symbol</th>
                  <th>Price on 12/31/21 ($)</th>
                  <th>Price on 08/21/24 ($)</th>
                  <th>Difference in Prices ($)</th>
                </tr>
              </thead>
              <tbody>
                {table1CollapseState == "open" &&
                  micaData.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.Name}</td>
                        <td>{item.Symbol}</td>
                        <td>{item.Price_12_31_21}</td>
                        <td>{item.Price_08_21_24}</td>
                        <td>{item.Difference_in_Prices}</td>
                      </tr>
                    );
                  })}
                {table1CollapseState == "close" && (
                  <tr className="totalOnly">
                    <td>
                      {micaData_withTotals[micaData_withTotals.length - 1].Name}
                    </td>
                    <td>
                      {
                        micaData_withTotals[micaData_withTotals.length - 1]
                          .Symbol
                      }
                    </td>
                    <td>
                      {
                        micaData_withTotals[micaData_withTotals.length - 1]
                          .Price_12_31_21
                      }
                    </td>
                    <td>
                      {
                        micaData_withTotals[micaData_withTotals.length - 1]
                          .Price_08_21_24
                      }
                    </td>
                    <td>
                      {
                        micaData_withTotals[micaData_withTotals.length - 1]
                          .Difference_in_Prices
                      }
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
      {graphic1Type === "chart" && (
        <div className="flourish-iframe">
          <iframe
            src="https://flo.uri.sh/visualisation/19141961/embed"
            title="Interactive or visual content"
            style={{ width: "100%", height: "600px", border: "0" }}
            sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
          ></iframe>
        </div>
      )}
      <div className="multi-paragraph-section">
        <p>
          Looking at the totals in this chart or table, it looks like the value
          of the portfolio should have gone up since the total value of all the
          shares is up (modestly). But that's only if she owned the same amount
          of each stock. Then I remembered I needed to account for the different
          amounts of each share. Once I calculated that I saw the decrease in
          total value.
        </p>
      </div>
      <div className="button-wrapper">
        <div className="expand-collapse-buttons">
          <button
            className="small-button"
            onClick={() => handleTableCollapse("close", "table2")}
          >
            Collapse Table
          </button>
          <button
            className="small-button"
            onClick={() => handleTableCollapse("open", "table2")}
          >
            Expand Table
          </button>
        </div>
      </div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Stock Name</th>
              <th>Symbol</th>
              <th>Number of Shares</th>
              <th>Price on 12/31/21 ($)</th>
              <th>Price on 08/21/24 ($)</th>
              <th>Difference in Prices ($)</th>
              <th>Difference * Number of Shares ($) </th>
            </tr>
          </thead>
          <tbody>
            {table2CollapseState == "open" &&
              micaData_withTotals.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.Name}</td>
                    <td>{item.Symbol}</td>
                    <td>{item.NumberofShares}</td>
                    <td>{item.Price_12_31_21}</td>
                    <td>{item.Price_08_21_24}</td>
                    <td>{item.Difference_in_Prices}</td>
                    <td
                      className={
                        index == micaData_withTotals.length - 1 &&
                        item.Diff_Times_Mult < 0
                          ? "last-td-negative"
                          : ""
                      }
                    >
                      {item.Diff_Times_Mult}
                    </td>
                  </tr>
                );
              })}
            {table2CollapseState == "close" && (
              <tr className="totalOnly">
                <td>
                  {micaData_withTotals[micaData_withTotals.length - 1].Name}
                </td>
                <td>
                  {micaData_withTotals[micaData_withTotals.length - 1].Symbol}
                </td>
                <td>
                  {
                    micaData_withTotals[micaData_withTotals.length - 1]
                      .NumberofShares
                  }
                </td>
                <td>
                  {
                    micaData_withTotals[micaData_withTotals.length - 1]
                      .Price_12_31_21
                  }
                </td>
                <td>
                  {
                    micaData_withTotals[micaData_withTotals.length - 1]
                      .Price_08_21_24
                  }
                </td>
                <td>
                  {
                    micaData_withTotals[micaData_withTotals.length - 1]
                      .Difference_in_Prices
                  }
                </td>
                <td
                  className={
                    micaData_withTotals[micaData_withTotals.length - 1]
                      .Diff_Times_Mult < 0
                      ? "last-td-negative"
                      : ""
                  }
                >
                  {
                    micaData_withTotals[micaData_withTotals.length - 1]
                      .Diff_Times_Mult
                  }
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="mobile-scroll-tip">
        <p>Scroll table horizontally to see more data.</p>
      </div>
      <div className="multi-paragraph-section">
        <p>
          With the table expanded, we can see that the Tesla stocks have taken a
          big loss and Mica has a lot of Tesla. When she was choosing the number
          of shares of each stock she was more or less choosing randomly. Which
          made me think, maybe the overall decrese in value of this portfolio is
          just due to her choice in allocation?
        </p>
        <p>
          In the table below the Number of Shares have been randomly chosen. Try
          clicking the <b>Randomize</b> button. This will randomly choose values
          for the Number of Shares column between 0.1-4.
        </p>
      </div>
      <h3>Randomized Share Numbers</h3>
      <div className="button-wrapper">
        <div className="random-bar-wrapper">
          <button id="randomize" onClick={() => handleRandomize1ButtonClick()}>
            Randomize
          </button>
          <div className="bar-container-wrapper">
            <p>Percent of allocations resulting in a negative return.</p>
            <div className="bar-container">
              <div
                className="bar"
                style={{
                  width: `${(
                    (numNegativeRandomize1 / numClicksRandomize1) *
                    100
                  ).toFixed(0)}%`,
                }}
              ></div>
              <p>
                {((numNegativeRandomize1 / numClicksRandomize1) * 100).toFixed(
                  0
                )}
                %
              </p>
            </div>
          </div>
        </div>
        <div className="expand-collapse-buttons">
          <button
            className="small-button"
            onClick={() => handleTableCollapse("close", "table3")}
          >
            Collapse Table
          </button>
          <button
            className="small-button"
            onClick={() => handleTableCollapse("open", "table3")}
          >
            Expand Table
          </button>
        </div>
      </div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Stock Name</th>
              <th>Symbol</th>
              <th>Number of Shares</th>
              <th>Price on 12/31/21($)</th>
              <th>Price on 08/21/24($)</th>
              <th>Difference in Prices($)</th>
              <th>Difference * Number of Shares($) </th>
            </tr>
          </thead>
          <tbody>
            {table3CollapseState == "open" &&
              randomMicaData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.Name}</td>
                    <td>{item.Symbol}</td>
                    <td>{item.NumberofShares}</td>
                    <td>{item.Price_12_31_21}</td>
                    <td>{item.Price_08_21_24}</td>
                    <td>{item.Difference_in_Prices}</td>
                    <td
                      className={
                        index == randomMicaData.length - 1 &&
                        item.Diff_Times_Mult < 0
                          ? "last-td-negative"
                          : ""
                      }
                    >
                      {item.Diff_Times_Mult}
                    </td>
                  </tr>
                );
              })}
            {table3CollapseState == "close" && (
              <tr className="totalOnly">
                <td>{randomMicaDataTotalOnly.Name}</td>
                <td>{randomMicaDataTotalOnly.Symbol}</td>
                <td>{randomMicaDataTotalOnly.NumberofShares}</td>
                <td>{randomMicaDataTotalOnly.Price_12_31_21}</td>
                <td>{randomMicaDataTotalOnly.Price_08_21_24}</td>
                <td>{randomMicaDataTotalOnly.Difference_in_Prices}</td>
                <td
                  className={
                    randomMicaDataTotalOnly.Diff_Times_Mult < 0
                      ? "last-td-negative"
                      : ""
                  }
                >
                  {randomMicaDataTotalOnly.Diff_Times_Mult}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="mobile-scroll-tip">
        <p>Scroll table horizontally to see more data.</p>
      </div>
      <div className="multi-paragraph-section">
        <p>
          Clicking the Randomize button, I noticed that the total value was
          positive sometimes, but often negative. Since I knew my own
          investments had been steadily growing (but I don't consider myself an
          accomplished stock picker), what was the difference between my
          investments and Mica's?
        </p>
      </div>
      <div className="section-divider">
        <h2>Exchange Traded Funds (ETFs)</h2>
      </div>
      <div className="multi-paragraph-section">
        <p>
          Long ago my brothers had convinced me to switch to ETFs from
          individual stocks. Their explanations made sense by I hadn't really
          tested the theory.
        </p>
        <p>
          First, here's the theory (thanks to ChatGPT for helping to write this
          part):{" "}
        </p>
        <p>
          Exchange-Traded Funds (ETFs) are a type of investment that lets you
          buy a small piece of many different things, like stocks, bonds, or
          other assets, all at once. You can think of an ETF like a basket that
          holds a variety of items inside. When you buy a share of an ETF,
          you’re buying a small piece of everything in that basket. ETFs are
          traded on the stock market, so you can buy or sell them at any time
          during the trading day, just like you would with individual stocks.
          They are popular because they help spread out risk by including many
          different investments, and they usually cost less to manage compared
          to other types of funds.
        </p>
        <p>
          The main differences between ETFs, individual stocks, and mutual funds
          come down to how they work and how you buy them. When you buy a stock,
          you’re buying a piece of a single company, so if that company does
          well, your investment grows, but if it doesn’t, you could lose money.
          Mutual funds, like ETFs, also let you invest in a mix of different
          things, but you can only buy or sell them at the end of the trading
          day, not whenever you want. ETFs offer the best of both worlds: they
          give you the variety of a mutual fund but the flexibility of a stock,
          so you can trade them throughout the day. For more information, you
          can check out{" "}
          <a href="https://www.investopedia.com/terms/e/etf.asp">
            Investopedia’s ETF guide
          </a>{" "}
          and{" "}
          <a href="https://www.fool.com/investing/how-to-invest/etf-vs-mutual-fund-vs-stock/">
            The Motley Fool’s comparison of ETFs, stocks, and mutual funds
          </a>
          .
        </p>
        <p>
          The table below has an assortment of ETFs. I've set the number of
          shares to be random. Click the Randomize button to try different
          allocations. How often does it turn out negative?
        </p>
      </div>
      <h3>Randomized Share Numbers</h3>
      <div className="button-wrapper">
        <div className="random-bar-wrapper">
          <button id="randomize" onClick={() => handleRandomize2ButtonClick()}>
            Randomize
          </button>
          <div className="bar-container-wrapper">
            <p>Percent of allocations resulting in a negative return.</p>
            <div className="bar-container">
              <div
                className="bar"
                style={{
                  width: `${(
                    (numNegativeRandomize2 / numClicksRandomize2) *
                    100
                  ).toFixed(0)}%`,
                }}
              ></div>
              <p>
                {((numNegativeRandomize2 / numClicksRandomize2) * 100).toFixed(
                  0
                )}
                %
              </p>
            </div>
          </div>
        </div>
        <div className="expand-collapse-buttons">
          <button
            className="small-button"
            onClick={() => handleTableCollapse("close", "table4")}
          >
            Collapse Table
          </button>
          <button
            className="small-button"
            onClick={() => handleTableCollapse("open", "table4")}
          >
            Expand Table
          </button>
        </div>
      </div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Stock Name</th>
              <th>Symbol</th>
              <th>Number of Shares</th>
              <th>Price on 12/31/21 ($)</th>
              <th>Price on 08/21/24 ($)</th>
              <th>Difference in Prices ($)</th>
              <th>Difference * Number of Shares ($) </th>
            </tr>
          </thead>
          <tbody>
            {table4CollapseState == "open" &&
              randomSarahData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.Name}</td>
                    <td>{item.Symbol}</td>
                    <td>{item.NumberofShares}</td>
                    <td>{item.Price_12_31_21}</td>
                    <td>{item.Price_08_21_24}</td>
                    <td>{item.Difference_in_Prices}</td>
                    <td
                      className={
                        index == randomSarahData.length - 1 &&
                        item.Diff_Times_Mult < 0
                          ? "last-td-negative"
                          : ""
                      }
                    >
                      {item.Diff_Times_Mult}
                    </td>
                  </tr>
                );
              })}
            {table4CollapseState == "close" && (
              <tr className="totalOnly">
                <td>{randomSarahData[randomSarahData.length - 1].Name}</td>
                <td>{randomSarahData[randomSarahData.length - 1].Symbol}</td>
                <td>
                  {randomSarahData[randomSarahData.length - 1].NumberofShares}
                </td>
                <td>
                  {randomSarahData[randomSarahData.length - 1].Price_12_31_21}
                </td>
                <td>
                  {randomSarahData[randomSarahData.length - 1].Price_08_21_24}
                </td>
                <td>
                  {
                    randomSarahData[randomSarahData.length - 1]
                      .Difference_in_Prices
                  }
                </td>
                <td
                  className={
                    randomSarahData[randomSarahData.length - 1]
                      .Diff_Times_Mult < 0
                      ? "last-td-negative"
                      : ""
                  }
                >
                  {randomSarahData[randomSarahData.length - 1].Diff_Times_Mult}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="mobile-scroll-tip">
        <p>Scroll table horizontally to see more data.</p>
      </div>
      <div className="multi-paragraph-section">
        <p>
          There are a number of things going on here. First and foremost, it's
          about spreading risk. While I'm sure are combinations of allocations
          that would result in an overall negative return on this portfolio, the
          vast majority of allocations are net positive.
        </p>
        <p>
          In Mica's portfolio, she's limited to the 21 stocks she chose and the
          allocations she deemed appropriate at the time. ETFs, on the other
          hand EACH hold many stocks. The Health Care Select Sector SPDR Fund,
          for example, held 65 different stocks as of writing this. So, even
          though this portfolio appears to only have 10 investments, in reality
          it represents hundreds of them.
        </p>
      </div>
      <div className="multi-paragraph-section">
        <div className="section-divider">
          <h2>Why it matters who chooses the stocks and how.</h2>
        </div>
        <p>
          In 2022 we saw Mica's investments were down but decided to stay the
          course. This is the standard conventional wisdom when it comes to
          investing. Pick your investments and stay with them. This wisdom,
          however, really only applies to funds (ETFs and mutual funds). The
          reason is that, in reality, these funds are not just picking stocks
          and sticking with them-- they're constantly being assessed and
          re-allocated. Had we actively watched the account and re-allocated the
          funds, we might have seen a different outcome. But who has time or
          interest for that?
        </p>
        <p>
          There are both{" "}
          <a href="https://www.fidelity.com/learning-center/investment-products/etf/types-of-etfs-actively-managed">
            passively and actively
          </a>{" "}
          managed ETFs, but the difference isn't really important here. What's
          important is that each fund holds a large variety of stocks
          (individual companies) and watches to see how those stocks are doing.
        </p>
        <h3>VOO</h3>
        <p>
          Let's look at a well known, common ETF: VOO (
          <a
            href="https://investor.vanguard.com/investment-products/etfs/profile/voo#distributions"
            target="_blank"
          >
            Vanguard S&P 500 ETF
          </a>
          ). This fund "seeks to track the investment performance of the S&P 500
          Index". What does that mean?{" "}
        </p>
        <p>
          The S&P 500 Index is made up of 500 of the largest U.S. companies, but
          these companies aren't all treated equally in the index. Some
          companies are bigger and more valuable than others, so they have a
          bigger "weight" in the index. For example, a huge company like Apple
          might make up a bigger percentage of the index compared to a smaller
          company. When Vanguard creates the ETF, they buy shares of each
          company in the S&P 500, but they buy more shares of the big companies
          (like Apple) and fewer shares of the smaller companies. They do this
          in a way that matches exactly how the companies are weighted in the
          index. This way, the ETF closely mirrors the overall performance of
          the S&P 500. So, if the big companies in the index do well, the ETF
          will do well too, because it owns more of those big companies.
        </p>
        <p>
          As companies grow and shrink and come and go from the S&P 500, this
          fund buys and sells stock in those companies to keep pace. Remember,
          by buying a share of VOO, you're buying a share of their collection.
          You're returns are a share of the returns on the collection.{" "}
        </p>
        <p>
          ETFs, like mutual funds, do come with expense ratios. An expense ratio
          is a fee that covers the cost of managing an investment fund, such as
          a mutual fund or an ETF. It’s expressed as a percentage of your total
          investment in the fund. For example, if a fund has an expense ratio of
          0.5%, this means you pay 0.5% of your investment amount each year to
          cover the fund's operating expenses, like management fees and
          administrative costs. The expense ratio is automatically deducted from
          the fund’s returns, so you don’t pay it directly, but it reduces the
          overall performance of your investment. ETFs typically have a lower
          expense ratio than mutual funds, which is one of the reasons they are
          so popular.
        </p>
        <p>
          So, I can safely assume that there is nothing nefarious going on with
          our Stockpile account. In investigating this, however, I did come to
          realize that we're paying $5/month for the account, which probably is
          not worth it. Many lessons learned.{" "}
        </p>
      </div>
    </div>
  );
}

function addTotals(data) {
  const clonedData = JSON.parse(JSON.stringify(data));
  clonedData[data.length + 1] = {
    Name: "",
    Symbol: "TOTAL",
    NumberofShares: "",
    Price_12_31_21: clonedData
      .reduce((acc, item) => {
        return acc + parseFloat(item.Price_12_31_21);
      }, 0)
      .toFixed(2),
    Price_08_21_24: clonedData
      .reduce((acc, item) => {
        return acc + parseFloat(item.Price_08_21_24);
      }, 0)
      .toFixed(2),
    Difference_in_Prices: clonedData
      .reduce((acc, item) => {
        return acc + parseFloat(item.Difference_in_Prices);
      }, 0)
      .toFixed(2),
    Diff_Times_Mult: clonedData
      .reduce((acc, item) => {
        return acc + parseFloat(item.Diff_Times_Mult);
      }, 0)
      .toFixed(2),
  };
  return clonedData;
}

export default ETFs;
