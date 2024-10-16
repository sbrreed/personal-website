function getFilteredWorkData({ data, workType }) {
  return data.filter((item) => item.Page === workType);
}

export default getFilteredWorkData;
