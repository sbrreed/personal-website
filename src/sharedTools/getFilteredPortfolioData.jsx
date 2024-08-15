function getFilteredPortfolioData({ data, portfolioType }) {
  return data.filter((item) => item.Page === portfolioType);
}

export default getFilteredPortfolioData;
