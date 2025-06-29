import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";
import HealthcareCartoonHeader from "./HealthcareCartoonHeader";
import CartoonSection from "./CartoonSection";
import HealthcareCartoonFooter from "./HealthcareCartoonFooter";

function HealthcareCartoon() {
  const [enlargedImage, setEnlargedImage] = useState(null);
  const { windowWidth } = useWindowDimensions();

  const toggleImageSize = (id) => {
    if (windowWidth > 1000) {
      setEnlargedImage(enlargedImage === id ? null : id);
    }
  };

  // Determine iframe dimensions based on window width
  let iframeWidth = "100%";
  let iframeHeight = 600;

  if (windowWidth < 800) {
    iframeWidth = "100%";
  } else if (windowWidth < 1100) {
    iframeHeight = 500;
    iframeWidth = "80%";
  } else if (windowWidth < 1400) {
    iframeHeight = 1000;
    iframeWidth = "80%";
  }

  const sectionSlugs = [
    "how-are-premiums-set",
    "premium-tax-credits",
    "reinsurance",
    "shopping-for-healthcare",
    "pharma-web",
    "waiting-to-see-the-doctor",
    "healthcare-systems-around-the-world",
    "best-in-the-world",
    "high-risk-pools",
    "expenditures-distribution",
    "low-value-medicine",
    "on-the-phone",
  ];

  const [searchParams, setSearchParams] = useSearchParams();
  const slug = searchParams.get("section");

  const initialSlugIndex = sectionSlugs.indexOf(slug);
  const [activeSlugIndex, setActiveSlugIndex] = useState(
    initialSlugIndex !== -1 ? initialSlugIndex : 0
  );

  // Ensure the project is set to "HealthcareCartoons" if not specified:
  useEffect(() => {
    if (!searchParams.get("project")) {
      const params = Object.fromEntries(searchParams.entries());
      params.project = "HealthcareCartoons";
      setSearchParams(params);
    }
  }, []);

  // Function to navigate to a specific section by index
  const goToIndex = (index) => {
    const params = Object.fromEntries(searchParams.entries());
    params.section = sectionSlugs[index];
    setSearchParams(params); // Preserves existing `project` param
    setActiveSlugIndex(index);
  };

  // Update activeSlugIndex when searchParams change:
  useEffect(() => {
    const slug = searchParams.get("section");
    const index = sectionSlugs.indexOf(slug);
    if (index !== -1 && index !== activeSlugIndex) {
      setActiveSlugIndex(index);
    }
  }, [searchParams]);

  // Ensure the first section is set if no section is specified:
  useEffect(() => {
    if (!searchParams.has("section")) {
      setSearchParams({
        project: "HealthcareCartoons",
        section: sectionSlugs[0],
      });
    }
  }, []);

  // Define sections for navigation:
  const sections = [
    // "How are premiums set?"
    <div key="How are premiums calculated?">
      <div className="cartoon strip">
        {windowWidth > 1000 && (
          <p>Click image to enlarge. Click again to shrink.</p>
        )}
        <img
          src="/DataViz/Healthcare/howArePremiumsSet/howArePremiumsSet_v4.png"
          className={enlargedImage === "howArePremiumsSet" ? "enlarged" : ""}
          onClick={() => toggleImageSize("howArePremiumsSet")}
          alt="How Are Premiums Set"
        />
      </div>
    </div>,
    // "Premium Tax Credits"
    <div key="Premium Tax Credits">
      <div className="cartoon strip">
        {windowWidth > 1000 && (
          <p>Click image to enlarge. Click again to shrink.</p>
        )}
        <img
          src="/DataViz/Healthcare/premiumTaxCredit/premiumTaxCredit.png"
          className={enlargedImage === "premiumTaxCredits" ? "enlarged" : ""}
          onClick={() => toggleImageSize("premiumTaxCredits")}
          alt="Cartoon about premium tax credits."
        />
      </div>
    </div>,
    // "Reinsurance"
    <div key="Reinsurance">
      <div className="cartoon strip">
        {windowWidth > 1000 && (
          <p>Click image to enlarge. Click again to shrink.</p>
        )}
        <img
          src="/DataViz/Healthcare/reinsurance/reinsurance.png"
          className={enlargedImage === "reinsurance" ? "enlarged" : ""}
          onClick={() => toggleImageSize("reinsurance")}
          alt="Cartoon about reinsurance."
        />
      </div>
    </div>,
    // "Shopping for Healthcare"
    <div key="Shopping for Healthcare">
      <div className="cartoon strip">
        {windowWidth > 1000 && (
          <p>Click image to enlarge. Click again to shrink.</p>
        )}
        <img
          src="/DataViz/Healthcare/shoppingAround/shoppingAround.png"
          className={
            enlargedImage === "shoppingForHealthcare" ? "enlarged" : ""
          }
          onClick={() => toggleImageSize("shoppingForHealthcare")}
          alt="Cartoon comparing the experience of figuring out how much an oven will cost to figuring out how much a healthcare procedure will cost."
        />
      </div>
    </div>,
    // "Pharma Web"
    <div key="Pharma Web">
      {windowWidth > 1000 && (
        <p>Click image to enlarge. Click again to shrink.</p>
      )}
      <img
        src="/DataViz/Healthcare/circleOfMoney/circleOfMoney.png"
        className={enlargedImage === "circleOfMoney" ? "enlarged" : ""}
        onClick={() => toggleImageSize("circleOfMoney")}
        alt="Cartoon discussing the way pharmaceutical spending is passed around a complex network of middlemen."
      />
      Source:{" "}
      <i>Priced Out: The Economics and Ethical Costs of American Health Care</i>
      , Uwe Reinhardt, 2017
    </div>,
    // "Waiting to see the doctor."
    <div key="Waiting to see the doctor.">
      <div className="cartoon strip">
        {windowWidth > 1000 && (
          <p>Click image to enlarge. Click again to shrink.</p>
        )}
        <img
          src="/DataViz/Healthcare/waitingForHealthcare/waitingForHealthcare_all.png"
          className={enlargedImage === "waitingForHealthcare" ? "enlarged" : ""}
          onClick={() => toggleImageSize("waitingForHealthcare")}
          alt="Waiting for Healthcare cartoon"
        />
      </div>
      <p>Sources:</p>
      <ul>
        <li>
          <a
            href="https://www.federalreserve.gov/publications/2024-economic-well-being-of-us-households-in-2023-expenses.htm"
            target="_blank"
          >
            Federal Reserve Report on the Economic Well-Being of U.S. Households
            in 2023 - May 2024
          </a>
        </li>
      </ul>
    </div>,
    // "Healthcare systems around the world"
    <div key="Healthcare systems around the world">
      <div className="cartoon strip">
        {windowWidth > 1000 && (
          <p>Click image to enlarge. Click again to shrink.</p>
        )}
        <img
          src="/DataViz/Healthcare/healthcareSystemsAroundTheWorld/healthcareSystemsAroundTheWorld.png"
          className={
            enlargedImage === "healthcareSystemsAroundTheWorld"
              ? "enlarged"
              : ""
          }
          onClick={() => toggleImageSize("healthcareSystemsAroundTheWorld")}
          alt="Cartoon comparing healthcare systems around the world."
        />
      </div>
    </div>,
    // "BEST in the World!"
    <div key="BEST in the World!?">
      <div className="cartoon strip">
        {windowWidth > 1000 && (
          <p>Click image to enlarge. Click again to shrink.</p>
        )}
        <img
          src="/DataViz/Healthcare/costsComparedByCountry/costsComparedByCountry.png"
          className={enlargedImage === "BESTinTheWorld" ? "enlarged" : ""}
          onClick={() => toggleImageSize("BESTinTheWorld")}
          alt="Cartoon about healthcare costs in the US compared to other countries."
        />
      </div>
      <p>Sources:</p>
      <ul>
        <li>
          <a
            href="https://www.healthsystemtracker.org/chart-collection/health-spending-u-s-compare-countries/"
            target="_blank"
          >
            Health Systems Tracker- How does health spending in the U.S. compare
            to other countries?
          </a>
        </li>
        <li>
          <a
            href="https://ifhp.com/claims-cost-comparison-report-2021/"
            target="_blank"
          >
            IFHP International Health Cost Comparison Report 2022
          </a>
        </li>
      </ul>
    </div>,
    // "High Risk Pools"
    <div key="High Risk Pools?">
      <div className="cartoon strip">
        {windowWidth > 1000 && (
          <p>Click image to enlarge. Click again to shrink.</p>
        )}
        <img
          src="/DataViz/Healthcare/highRiskPool/riskPool.png"
          className={enlargedImage === "riskPool" ? "enlarged" : ""}
          onClick={() => toggleImageSize("riskPool")}
          alt="Politician proposing the idea of a high risk pool."
        />
      </div>
    </div>,
    // "How total expenditures are distributed."
    <div key="Who uses the most healthcare?">
      <div className="cartoon strip">
        {windowWidth > 1000 && (
          <p>Click image to enlarge. Click again to shrink.</p>
        )}
        <img
          src="/DataViz/Healthcare/pricesDistributed/healthExpendituresDistributed_originalChart.png"
          className={
            enlargedImage === "pricesDistributed_originalChart"
              ? "enlarged"
              : ""
          }
          onClick={() => toggleImageSize("pricesDistributed_originalChart")}
          alt="Chart from Kaiser Family Foundation showing how total health expenditures are distributed throughout the population."
        />
        <a
          href="https://www.kff.org/health-policy-101-health-care-costs-and-affordability/?entry=table-of-contents-how-does-health-care-spending-vary-across-the-population"
          target="_blank"
        >
          {" "}
          Source: KFF News
        </a>
        <br></br>
        <br></br>
        <br></br>
        <img
          src="/DataViz/Healthcare/pricesDistributed/healthExpendituresDistributed_updatedChart.png"
          className={
            enlargedImage === "pricesDistributed_updatedChart" ? "enlarged" : ""
          }
          onClick={() => toggleImageSize("pricesDistributed_updatedChart")}
          alt="Remade chart showing icons of 100 people and 100 dollars and lines relating the number of people to number of dollars. Showing 1% of the population uses 24% of the health expenditures. 50% of the population uses just 3% of the health expenditures."
        />
      </div>
    </div>,
    // "Low Value Medicine"
    <div key="Low Value Medicine">
      <div className="cartoon strip">
        {windowWidth > 1000 && (
          <p>Click image to enlarge. Click again to shrink.</p>
        )}
        <img
          src="/DataViz/Healthcare/lowValueMedicine/lowValueMedicine.png"
          className={enlargedImage === "lowValueMedicine" ? "enlarged" : ""}
          onClick={() => toggleImageSize("lowValueMedicine")}
          alt="Cartoon discussing the concept of over prescribing and unnecessary healthcare in medicine."
        />
      </div>
      <p>Source:</p>
      <a
        href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0181970"
        target="
        _blank"
      >
        {" "}
        <i>Overtreatment in the United States</i>, Heather Lyu, et al. 2014{" "}
      </a>
    </div>,
    // "On the Phone with Insurance"
    <div key="I don't have that information.">
      <div className="cartoon strip">
        {windowWidth > 1000 && (
          <p>Click image to enlarge. Click again to shrink.</p>
        )}
        <img
          src="/DataViz/Healthcare/onThePhoneWithInsurance/onThePhoneWithInsurance.png"
          className={
            enlargedImage === "onThePhoneWithInsurance" ? "enlarged" : ""
          }
          onClick={() => toggleImageSize("onThePhoneWithInsurance")}
          alt="Cartoon about the experience of trying to get insurance coverage."
        />
      </div>
    </div>,
  ];

  return (
    <div className="article">
      <HealthcareCartoonHeader />
      <div className="article-section">
        {sections.map((sectionContent, index) => (
          <CartoonSection
            key={index}
            show={activeSlugIndex === index}
            title={sectionContent.key}
            onPrev={() =>
              goToIndex(
                (activeSlugIndex - 1 + sections.length) % sections.length
              )
            }
            onNext={() => goToIndex((activeSlugIndex + 1) % sections.length)}
          >
            {sectionContent}
          </CartoonSection>
        ))}
      </div>
      <HealthcareCartoonFooter />
    </div>
  );
}

export default HealthcareCartoon;
