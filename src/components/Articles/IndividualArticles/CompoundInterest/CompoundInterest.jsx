import React, { useState, useEffect } from "react";
import LineChart from "../../../D3/LineChart";
import getCompoundInterestData from "./getCompoundInterestData";

function CompoundInterest() {
  const [currentAge, setCurrentAge] = useState(""); // Start with an empty age field
  const [initialInvestment, setInitialInvestment] = useState(1000);
  const [annualContribution, setAnnualContribution] = useState(1000);
  const [allDataSets, setAllDataSets] = useState([]); // Array to hold all data sets
  const [clickCount, setClickCount] = useState(0); // Track how many times "Calculate" was clicked
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

  return (
    <div className="article">
      <div className="multi-paragraph-section">
        <p>
          Compound interest was allegedly described by Albert Einstein as "the
          8th wonder of the world." Compound interest happens when the interest
          on an investment is re-invested. The interest for the following
          period, then, is calculated on a bigger value. And so on.{" "}
        </p>
        <p>
          {" "}
          In this calculator, the interest rate has been set at 8%, which is the
          widely considered standard rate of return for the stock market.
        </p>
        <p>
          Use this calculator to play with various initial investment and annual
          contribution limits. Which seems to have the most impact?
        </p>
        <p>
          First, let's start with your age. (Or your dog's age, it's up to you)
        </p>
      </div>
      <form id="investmentForm" onSubmit={handleSubmit}>
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

        <div className="chartInputs">
          <p>Use these inputs to draw additional lines and compare outcomes.</p>
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

          <button type="submit">Calculate</button>
        </div>
      </form>
      <p>
        Tap on or hover over any dot to see the age and value at that point.
      </p>
      <LineChart
        data={allDataSets}
        investmentHistory={investmentHistory}
        resetChart={resetChart}
        setResetChart={setResetChart}
      />
    </div>
  );
}

export default CompoundInterest;
