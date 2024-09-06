import React, { useState, useEffect } from "react";
import LineChart from "../../../D3/LineChart";
import getCompoundInterestData from "./getCompoundInterestData";

function CompoundInterest() {
  const [currentAge, setCurrentAge] = useState(25);
  const [initialInvestment, setInitialInvestment] = useState(1000);
  const [annualContribution, setAnnualContribution] = useState(1000);
  const [allDataSets, setAllDataSets] = useState([]); // Array to hold all data sets
  const [clickCount, setClickCount] = useState(0); // Track how many times "Calculate" was clicked
  const [investmentHistory, setInvestmentHistory] = useState([]); // Track the history of initialInvestment and annualContribution
  const numYearsToReport = 50;
  const interestRate = 8;

  // Function to generate data and update the chart
  const generateDataAndUpdateChart = (age, initial, contribution) => {
    // Generate new data set
    const newDataSet = getCompoundInterestData(
      age,
      initial,
      contribution,
      numYearsToReport,
      interestRate
    );

    // Merge new dataset with existing datasets
    const mergedData = newDataSet.map((dataPoint, index) => {
      const existing = allDataSets[index] || { age: dataPoint.age }; // Keep age, add new values
      return { ...existing, [`value${clickCount + 1}`]: dataPoint.value };
    });

    // Update the state with the new data set and increment click count
    setAllDataSets(mergedData);
    setInvestmentHistory([
      ...investmentHistory,
      { initialInvestment: initial, annualContribution: contribution },
    ]);
    setClickCount(clickCount + 1);
  };

  // Initial chart render with default values
  useEffect(() => {
    generateDataAndUpdateChart(
      currentAge,
      initialInvestment,
      annualContribution
    );
  }, []); // Run once when the component mounts

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form from submitting

    // Get current form values
    const age = Number(document.getElementById("currentAge").value);
    const initial = Number(document.getElementById("initialInvestment").value);
    const contribution = Number(
      document.getElementById("annualContribution").value
    );
    // Generate data and update chart
    generateDataAndUpdateChart(age, initial, contribution);
  };

  return (
    <div className="article">
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
              onChange={(e) => setInitialInvestment(e.target.value)}
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
              onChange={(e) => setAnnualContribution(e.target.value)}
              required
            />
          </div>

          <button type="submit">Calculate</button>
        </div>
      </form>
      <LineChart data={allDataSets} investmentHistory={investmentHistory} />
    </div>
  );
}

export default CompoundInterest;
