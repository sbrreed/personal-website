function getFilteredETFData({ data, person }) {
  const filteredData = data.filter((item) => item.Person === person);

  return filteredData;
}

export default getFilteredETFData;
