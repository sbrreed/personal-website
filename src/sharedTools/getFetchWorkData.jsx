import Papa from "papaparse";
export default async function FetchWorkData() {
  const dataFilePath = "/work_data.csv";
  const result = await fetch(dataFilePath);
  const csvFile = await result.text();

  // Parse the CSV and return the data
  return new Promise((resolve) => {
    Papa.parse(csvFile, {
      header: true,
      complete: ({ data }) => {
        resolve(data);
      },
    });
  });
}
