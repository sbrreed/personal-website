import USMap from "../../D3/USMap";
import { useEffect, useState } from "react";
import Papa from "papaparse";

function FamilyTree() {
  const [familyData, setFamilyData] = useState([]);
  const [usMapData, setUsMapData] = useState(null);

  // Reusable fetch function to handle both CSV and JSON
  const fetchData = async (dataPath, setFunction) => {
    try {
      const result = await fetch(dataPath);

      if (dataPath.endsWith(".csv")) {
        const csvFile = await result.text();
        // Parse the CSV file
        Papa.parse(csvFile, {
          header: true,
          complete: ({ data }) => {
            setFunction(data);
          },
        });
      } else if (dataPath.endsWith(".json")) {
        const jsonData = await result.json();
        setFunction(jsonData);
      } else {
        throw new Error("Unsupported file type");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData("/FamilyTree/family-tree.csv", setFamilyData); // CSV file
    fetchData("/FamilyTree/states-10m.json", setUsMapData); // JSON file
  }, []);

  const data = { familyData, usMapData };

  return (
    <div className="family-tree-wrapper">
      {familyData.length > 0 && usMapData && (
        <>
          <div className="family_tree_title">
            <h1>Rousmaniere/Ayer Family Tree</h1>
          </div>
          <USMap data={data} />
        </>
      )}
    </div>
  );
}

export default FamilyTree;
