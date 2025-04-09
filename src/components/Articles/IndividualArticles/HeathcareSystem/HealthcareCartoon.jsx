import { useState } from "react";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";
import HealthcareCartoonHeader from "./HealthcareCartoonHeader";
import CartoonSection from "./CartoonSection";
import FlourishEmbed from "./FlourishEmbed";
import HealthcareCartoonFooter from "./HealthcareCartoonFooter";

function HealthcareCartoon() {
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
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

  const iframeStyle = {
    width: iframeWidth,
    height: `${iframeHeight}px`,
    border: "0",
  };

  // Define sections for navigation:
  const sections = [
    // Section 1: "Waiting to see the doctor."
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
    </div>,

    // Section 2: "How are premiums set?"
    <div key="How are premiums calculated?">
      <div className="cartoon strip">
        {windowWidth > 1000 && (
          <p>Click image to enlarge. Click again to shrink.</p>
        )}
        <img
          src="/DataViz/Healthcare/howArePremiumsSet/howArePremiumsSet_v2.png"
          className={enlargedImage === "howArePremiumsSet" ? "enlarged" : ""}
          onClick={() => toggleImageSize("howArePremiumsSet")}
          alt="How Are Premiums Set"
        />
      </div>
    </div>,

    // Section 3: "BEST in the World!"
    <div key="BEST in the World!?">
      {/* First content block in Section 3 */}
      <div className="cartoon strip">
        {windowWidth > 1000 && (
          <p>Click image to enlarge. Click again to shrink.</p>
        )}
        <img
          src="/DataViz/Healthcare/costsComparedByCountry/costsComparedByCountry_panes1_2.png"
          className={
            enlargedImage === "BESTinTheWorld_pane1_2" ? "enlarged" : ""
          }
          onClick={() => toggleImageSize("BESTinTheWorld_pane1_2")}
          alt="BEST in the World"
        />
        <FlourishEmbed
          src="https://flo.uri.sh/story/2989560/embed"
          creditUrl="https://public.flourish.studio/visualisation/2989560/?utm_source=embed&utm_campaign=visualisation/2989560"
          title="Healthcare Story 2989560"
          baseStyle={iframeStyle}
        />
      </div>
      {/* Second content block in Section 3 */}
      <div className="cartoon strip">
        {windowWidth > 1000 && (
          <p>Click image to enlarge. Click again to shrink.</p>
        )}
        <img
          src="/DataViz/Healthcare/costsComparedByCountry/costsComparedByCountry_panes3_4.png"
          className={
            enlargedImage === "BESTinTheWorld_pane3_4" ? "enlarged" : ""
          }
          onClick={() => toggleImageSize("BESTinTheWorld_pane3_4")}
          alt="BEST in the World"
        />
        <FlourishEmbed
          src="https://flo.uri.sh/visualisation/22204138/embed"
          creditUrl="https://public.flourish.studio/visualisation/22204138/?utm_source=embed&utm_campaign=visualisation/22204138"
          title="Interactive Visualisation 22204138"
          baseStyle={iframeStyle}
        />
      </div>
      {/* Third content block in Section 3 */}
      <div className="cartoon strip">
        {windowWidth > 1000 && (
          <p>Click image to enlarge. Click again to shrink.</p>
        )}
        <img
          src="/DataViz/Healthcare/costsComparedByCountry/costsComparedByCountry_pane5.png"
          className={
            enlargedImage === "BESTinTheWorld_pane5"
              ? "enlarged"
              : "height-reduced"
          }
          onClick={() => toggleImageSize("BESTinTheWorld_pane5")}
          alt="Prices are coming down for outpatient procedures."
        />
        <FlourishEmbed
          src="https://flo.uri.sh/visualisation/22204850/embed"
          creditUrl="https://public.flourish.studio/visualisation/22204850/?utm_source=embed&utm_campaign=visualisation/22204850"
          title="Outpatient Visit Prices 22204850"
          baseStyle={iframeStyle}
        />
      </div>
      {/* Fourth content block in Section 3 */}
      <div className="cartoon strip">
        {windowWidth > 1000 && (
          <p>Click image to enlarge. Click again to shrink.</p>
        )}
        <img
          src="/DataViz/Healthcare/costsComparedByCountry/costsComparedByCountry_panes6_7.png"
          className={
            enlargedImage === "BESTinTheWorld_panes6_7" ? "enlarged" : ""
          }
          onClick={() => toggleImageSize("BESTinTheWorld_panes6_7")}
          alt="Cartoons talking about generic drug prices vs brand name drug prices."
        />
        <FlourishEmbed
          src="https://flo.uri.sh/visualisation/22205079/embed"
          creditUrl="https://public.flourish.studio/visualisation/22205079/?utm_source=embed&utm_campaign=visualisation/22205079"
          title="Generic Drug Prices 22205079"
          baseStyle={iframeStyle}
        />
      </div>
      {/* Fifth content block in Section 3 */}
      <div className="cartoon strip">
        <FlourishEmbed
          src="https://flo.uri.sh/visualisation/22204984/embed"
          creditUrl="https://public.flourish.studio/visualisation/22204984/?utm_source=embed&utm_campaign=visualisation/22204984"
          title="Brand Name Drug Prices 22204984"
          baseStyle={iframeStyle}
        />
      </div>
    </div>,
    // Section 4: "High Risk Pools"
    <div key="High Risk Pools?">
      <div className="cartoon strip">
        {windowWidth > 1000 && (
          <p>Click image to enlarge. Click again to shrink.</p>
        )}
        <img
          src="/DataViz/Healthcare/highRiskPool/riskPool_pane1.png"
          className={
            enlargedImage === "riskPool_pane1" ? "enlarged" : "height-reduced"
          }
          onClick={() => toggleImageSize("riskPool_pane1")}
          alt="Politician proposing the idea of a high risk pool."
        />
        <img
          src="/DataViz/Healthcare/highRiskPool/riskPool.png"
          className={enlargedImage === "riskPool" ? "enlarged" : ""}
          onClick={() => toggleImageSize("riskPool")}
          alt="Swimming pool with a sign saying 'High Risk Pool'. Sick people in the pool and falling into it. Uwe asks how those people are going to pay for their insurance."
        />
        <img
          src="/DataViz/Healthcare/highRiskPool/riskPool_pane3.png"
          className={
            enlargedImage === "riskPool_pane3" ? "enlarged" : "height-reduced"
          }
          onClick={() => toggleImageSize("riskPool_pane3")}
          alt="Uwe explaining that high risk pools were used before Obamacare outlawed exclusion of pre-existing conditions."
        />
      </div>
    </div>,
    // Section 5: "How total expenditures are distributed."
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
        <a href="https://www.kff.org/health-policy-101-health-care-costs-and-affordability/?entry=table-of-contents-how-does-health-care-spending-vary-across-the-population">
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
  ];

  return (
    <div className="article">
      <HealthcareCartoonHeader />
      <div className="article-section">
        {sections.map((sectionContent, index) => (
          <CartoonSection
            key={index}
            show={activeIndex === index}
            title={sectionContent.key}
            onPrev={() =>
              setActiveIndex(
                (activeIndex - 1 + sections.length) % sections.length
              )
            }
            onNext={() => setActiveIndex((activeIndex + 1) % sections.length)}
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
