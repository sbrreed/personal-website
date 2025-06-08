import { useState } from "react";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

function HealthcareCartoon() {
  const [enlargedImage, setEnlargedImage] = useState(null);
  const { windowWidth } = useWindowDimensions();

  let iframeStyle,
    iframeWidth = "100%",
    iframeHeight = 600;

  if (windowWidth < 800) {
    iframeWidth = "100%";
  } else if (windowWidth < 1100) {
    iframeHeight = 500;
    iframeWidth = "80%";
  } else if (windowWidth < 1400) {
    iframeHeight = 1000;
    iframeWidth = "80%";
  }

  iframeStyle = {
    width: iframeWidth,
    height: `${iframeHeight}px`,
    border: "0",
  };

  const flourishLogoStyle = {
    width: "105px",
    height: "16px",
    border: "none",
    margin: "0",
    objectFit: "contain",
  };

  const toggleImageSize = (id) => {
    if (windowWidth > 1000) {
      setEnlargedImage(enlargedImage === id ? null : id);
    }
  };

  return (
    <div className="article">
      <div className="healthcare-system">
        <div className="multi-paragraph-section">
          <p>
            These cartoons are inspired by Uwe Reinhardt's{" "}
            <i>
              Priced Out: The Economics and Ethical Costs of American Health
              Care
            </i>
          </p>
          <div className="article-callout">
            <p>
              Reinhardt's central tenet in this book is important to keep in
              mind whenever discussing any healthcare system:
            </p>
            <h3>
              <i>
                "To what extent should the better-off members of society be made
                to be their poorer and sick brothers' and sisters' keepers in
                health care?"
              </i>
            </h3>
          </div>
        </div>
        <div className="article-section">
          <div className="section-divider large">
            <h2>Healthcare Cartoons</h2>
          </div>
          <div className="article-callout">
            <h2>Waiting to see the doctor.</h2>
          </div>
          <div className="cartoon strip">
            {windowWidth > 1000 && <p>Click image to enlarge/shrink</p>}
            <img
              src="/DataViz/Healthcare/waitingForHealthcare/waitingForHealthcare_v2.png"
              className={
                enlargedImage === "waitingForHealthcare" ? "enlarged" : ""
              }
              onClick={() => toggleImageSize("waitingForHealthcare")}
              alt="Waiting for Healthcare"
            />
          </div>
          <div className="flourish">
            <iframe
              src="https://flo.uri.sh/visualisation/21716974/embed"
              style={
                windowWidth < 500
                  ? { ...iframeStyle, height: "850px" }
                  : iframeStyle
              }
              sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
            ></iframe>
            <div
              style={{
                width: iframeWidth,
                marginTop: "4px",
                textAlign: "right",
              }}
            >
              <a
                className="flourish-credit"
                href="https://public.flourish.studio/visualisation/21716974/?utm_source=embed&utm_campaign=visualisation/21716974"
                target="_top"
                style={{
                  textDecoration: "none",
                }}
              >
                <img
                  alt="Made with Flourish"
                  src="https://public.flourish.studio/resources/made_with_flourish.svg"
                  style={flourishLogoStyle}
                />
              </a>
            </div>
          </div>
          <div className="article-callout">
            <h2>How are premiums set?</h2>
          </div>
          <div className="cartoon strip">
            {windowWidth > 1000 && <p>Click image to enlarge/shrink</p>}
            <img
              src="/DataViz/Healthcare/howArePremiumsSet/howArePremiumsSet_v2.png"
              className={
                enlargedImage === "howArePremiumsSet" ? "enlarged" : ""
              }
              onClick={() => toggleImageSize("howArePremiumsSet")}
              alt="How Are Premiums Set"
            />
          </div>
          <div className="article-callout">
            <h2>BEST in the World!</h2>
          </div>
          <div className="cartoon strip">
            {windowWidth > 1000 && <p>Click image to enlarge/shrink</p>}
            <img
              src="/DataViz/Healthcare/costsComparedByCountry/costsComparedByCountry_panes1_2.png"
              className={
                enlargedImage === "BESTinTheWorld_pane1_2" ? "enlarged" : ""
              }
              onClick={() => toggleImageSize("BESTinTheWorld_pane1_2")}
              alt="BEST in the World"
            />
            <div className="flourish">
              <iframe
                src="https://flo.uri.sh/story/2989560/embed"
                style={iframeStyle}
                sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
              ></iframe>
              <div
                style={{
                  width: iframeWidth,
                  marginTop: "4px",
                  textAlign: "right",
                }}
              >
                <a
                  className="flourish-credit"
                  href="https://public.flourish.studio/visualisation/2989560/?utm_source=embed&utm_campaign=visualisation/2989560"
                  target="_top"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <img
                    alt="Made with Flourish"
                    src="https://public.flourish.studio/resources/made_with_flourish.svg"
                    style={flourishLogoStyle}
                  />
                </a>
              </div>
            </div>
            <img
              src="/DataViz/Healthcare/costsComparedByCountry/costsComparedByCountry_panes3_4.png"
              className={
                enlargedImage === "BESTinTheWorld_pane3_4" ? "enlarged" : ""
              }
              onClick={() => toggleImageSize("BESTinTheWorld_pane3_4")}
              alt="BEST in the World"
            />
            <div className="flourish">
              <iframe
                src="https://flo.uri.sh/visualisation/22204138/embed"
                title="Interactive or visual content"
                style={iframeStyle}
                sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
              ></iframe>
              <div
                style={{
                  width: iframeWidth,
                  marginTop: "4px",
                  textAlign: "right",
                }}
              >
                <a
                  className="flourish-credit"
                  href="https://public.flourish.studio/visualisation/22204138/?utm_source=embed&utm_campaign=visualisation/22204138"
                  target="_top"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <img
                    alt="Made with Flourish"
                    src="https://public.flourish.studio/resources/made_with_flourish.svg"
                    style={flourishLogoStyle}
                  />
                </a>
              </div>
            </div>
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
            <div className="flourish">
              <iframe
                src="https://flo.uri.sh/visualisation/22204850/embed"
                title="Chart of outpatient visit prices by country for 3 different outpatient procedures."
                style={iframeStyle}
                sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
              ></iframe>

              <div
                style={{
                  width: iframeWidth,
                  marginTop: "4px",
                  textAlign: "right",
                }}
              >
                <a
                  className="flourish-credit"
                  href="https://public.flourish.studio/visualisation/22204850/?utm_source=embed&utm_campaign=visualisation/22204850"
                  target="_top"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <img
                    alt="Made with Flourish"
                    src="https://public.flourish.studio/resources/made_with_flourish.svg"
                    style={flourishLogoStyle}
                  />
                </a>
              </div>
            </div>
            <img
              src="/DataViz/Healthcare/costsComparedByCountry/costsComparedByCountry_panes6_7.png"
              className={
                enlargedImage === "BESTinTheWorld_panes6_7" ? "enlarged" : ""
              }
              onClick={() => toggleImageSize("BESTinTheWorld_panes6_7")}
              alt="Cartoons talking about generic drug prices vs brand name drug prices."
            />
            <div className="flourish">
              <iframe
                src="https://flo.uri.sh/visualisation/22205079/embed"
                title="Chart of generic drug prices by country for three different drugs."
                style={iframeStyle}
                sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
              ></iframe>

              <div
                style={{
                  width: iframeWidth,
                  marginTop: "4px",
                  textAlign: "right",
                }}
              >
                <a
                  className="flourish-credit"
                  href="https://public.flourish.studio/visualisation/22205079/?utm_source=embed&utm_campaign=visualisation/22205079"
                  target="_top"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <img
                    alt="Made with Flourish"
                    src="https://public.flourish.studio/resources/made_with_flourish.svg"
                    style={flourishLogoStyle}
                  />
                </a>
              </div>
            </div>
            <div className="flourish">
              <iframe
                src="https://flo.uri.sh/visualisation/22204984/embed"
                title="Chart of brand name drug prices by country for 3 different drugs."
                style={iframeStyle}
                sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
              ></iframe>
              <div
                style={{
                  width: iframeWidth,
                  marginTop: "4px",
                  textAlign: "right",
                }}
              >
                <a
                  className="flourish-credit"
                  href="https://public.flourish.studio/visualisation/22204984/?utm_source=embed&utm_campaign=visualisation/22204984"
                  target="_top"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <img
                    alt="Made with Flourish"
                    src="https://public.flourish.studio/resources/made_with_flourish.svg"
                    style={flourishLogoStyle}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthcareCartoon;
