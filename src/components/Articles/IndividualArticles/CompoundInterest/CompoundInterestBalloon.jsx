import React, { useState, useEffect } from "react";
import LineChart from "../../../D3/LineChart";
import getCompoundInterestData from "./getCompoundInterestData";
import GrowingBubble from "../../../D3/GrowingBubble";

function CompoundInterestBalloon() {
  const [currentAge, setCurrentAge] = useState(""); // Start with an empty age field
  const [initialInvestment, setInitialInvestment] = useState(1000);
  const [annualContribution, setAnnualContribution] = useState(1000);
  const [allDataSets, setAllDataSets] = useState([]); // Array to hold all data sets
  const [clickCount, setClickCount] = useState(0); // Track how many times "Calculate" was clicked
  const [previousClickCount, setPreviousClickCount] = useState(0);
  const [investmentHistory, setInvestmentHistory] = useState([]); // Track the history of initialInvestment and annualContribution
  const [prevAge, setPrevAge] = useState(null); // Track the previous currentAge
  const [resetChart, setResetChart] = useState(false); // Track whether to reset the chart

  const numYearsToReport = 50;
  const interestRate = 8;

  // Function to generate data and update the chart
  const generateDataAndUpdateChart = (age, initial, contribution) => {
    const newDataSet = getCompoundInterestData(
      age,
      initial,
      contribution,
      numYearsToReport,
      interestRate
    );

    if (age !== prevAge) {
      setAllDataSets(newDataSet); // Reset chart with new age data
      setInvestmentHistory([
        { initialInvestment: initial, annualContribution: contribution },
      ]); // Clear the investment history
      setClickCount(1); // Reset click count
      setResetChart(true); // Flag to reset chart
      setPrevAge(age); // Update prevAge to currentAge
    } else {
      // Add new line if age hasn't changed
      const mergedData = newDataSet.map((dataPoint, index) => {
        const existing = allDataSets[index] || { age: dataPoint.age };
        return { ...existing, [`value${clickCount + 1}`]: dataPoint.value1 };
      });

      setAllDataSets(mergedData);
      setInvestmentHistory([
        ...investmentHistory,
        { initialInvestment: initial, annualContribution: contribution },
      ]);
      if (clickCount > 0) {
        setPreviousClickCount(clickCount);
      }
      setClickCount(clickCount + 1);
    }
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (currentAge === "") {
      alert("Please enter a valid age");
      return;
    }

    const age = Number(document.getElementById("currentAge").value);
    const initial = Number(document.getElementById("initialInvestment").value);
    const contribution = Number(
      document.getElementById("annualContribution").value
    );

    generateDataAndUpdateChart(age, initial, contribution);
  };
  console.log("clickCount", clickCount);
  console.log("previousClickCount", previousClickCount);
  return (
    <div className="article">
      <div className="multi-paragraph-section">
        <p>
          This project is the fun little sister to the more informative{" "}
          <a href="">Compound Interest Calculator</a>.
        </p>
        <p>
          Let's draw compound interest as a bubblegum balloon! (If you're
          interested, the interest rate has been set at 8% for this graphic).
        </p>
        <p>
          Enter your age, (or your dog's age, it's up to you), and a initial
          investment and annual contribution to see how your investment grows
          over time. Changing either of the investment inputs and hitting
          Calculate again will draw another bubble, for you to compare.
        </p>
      </div>
      <form
        id="investmentForm"
        className="bubble-investment-form"
        onSubmit={handleSubmit}
      >
        <div className="bubble-form-inputs">
          <div>
            <label htmlFor="currentAge">Current Age:</label>
            <input
              type="number"
              id="currentAge"
              name="currentAge"
              value={currentAge}
              onChange={(e) => setCurrentAge(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="initialInvestment">Initial Investment ($):</label>
            <input
              type="number"
              id="initialInvestment"
              name="initialInvestment"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(Number(e.target.value))}
              required
            />
          </div>

          <div>
            <label htmlFor="annualContribution">Annual Contribution ($):</label>
            <input
              type="number"
              id="annualContribution"
              name="annualContribution"
              value={annualContribution}
              onChange={(e) => setAnnualContribution(Number(e.target.value))}
              required
            />
          </div>
        </div>
        <button type="submit">Calculate</button>
      </form>
      <div className="boy-and-bubble">
        <img src="/DataViz/boy_blowing_bubble.svg"></img>
        {clickCount > 0 && clickCount !== previousClickCount && (
          <GrowingBubble
            data={allDataSets}
            investmentHistory={investmentHistory}
            resetChart={resetChart}
            setResetChart={setResetChart}
          />
        )}
      </div>
    </div>
  );
}

export default CompoundInterestBalloon;
