function getRandomizedData(data) {
  const clonedData = JSON.parse(JSON.stringify(data));

  const dataLength = clonedData.length;
  const randomNums = Array.from({ length: dataLength }, () => {
    return (Math.random() * (4 - 0.1) + 0.1).toFixed(2);
  });

  for (let i = 0; i < dataLength; i++) {
    clonedData[i].NumberofShares = randomNums[i];
    clonedData[i].Diff_Times_Mult = (
      clonedData[i].Difference_in_Prices * clonedData[i].NumberofShares
    ).toFixed(2);
  }

  clonedData[dataLength + 1] = {
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

export default getRandomizedData;
