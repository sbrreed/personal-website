function getCompoundInterestData(
  currentAge,
  initialInvestment,
  annualContribution,
  numYearsToReport,
  interestRate
) {
  const results = [];
  let totalValue = initialInvestment;

  for (let year = 0; year < numYearsToReport; year++) {
    // Calculate the compound interest for the year
    totalValue += annualContribution; // Add the annual contribution
    totalValue *= 1 + interestRate / 100; // Apply the interest rate

    // Push the age and value to the results array
    results.push({
      age: currentAge + year,
      value: totalValue.toFixed(2), // Fixed to two decimal places for cleaner output
    });
  }

  return results;
}

export default getCompoundInterestData;
