import { useState } from "react";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

function HealthcareCartoon() {
  const [enlargedImage, setEnlargedImage] = useState(null);
  const { windowWidth } = useWindowDimensions();

  // Calculate the height based on the windowWidth
  const iframeHeight =
    windowWidth < 1400 ? 1000 : windowWidth < 800 ? 2000 : 600; // Adjust the multiplier as needed

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
              style={{
                width: "100%",
                height: `${iframeHeight}px`,
                border: "0",
              }}
              sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
            ></iframe>
            <div
              style={{
                width: "100%",
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
                  style={{
                    width: "105px",
                    height: "16px",
                    border: "none",
                    margin: "0",
                    objectFit: "contain",
                  }}
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
                style={{
                  width: "100%",
                  height: `${iframeHeight}px`,
                  border: "0",
                }}
                sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
              ></iframe>
              <div
                style={{
                  width: "100%",
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
                    style={{
                      width: "105px",
                      height: "16px",
                      border: "none",
                      margin: "0",
                      objectFit: "contain",
                    }}
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
                style={{
                  width: "100%",
                  height: `${iframeHeight}px`,
                  border: "0",
                }}
                sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
              ></iframe>
              <div
                style={{
                  width: "100%",
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
                    style={{
                      width: "105px",
                      height: "16px",
                      border: "none",
                      margin: "0",
                      objectFit: "contain",
                    }}
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
              alt="BEST in the World"
            />
            <div className="flourish">
              <iframe
                src="https://flo.uri.sh/visualisation/22204850/embed"
                title="Chart of outpatient visit prices by country for 3 different outpatient procedures."
                style={{
                  width: "100%",
                  height: `${iframeHeight}px`,
                  border: "0",
                }}
                sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
              ></iframe>

              <div
                style={{
                  width: "100%",
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
                    style={{
                      width: "105px",
                      height: "16px",
                      border: "none",
                      margin: "0",
                      objectFit: "contain",
                    }}
                  />
                </a>
              </div>
            </div>
            <div className="flourish">
              <iframe
                src="https://flo.uri.sh/visualisation/22205079/embed"
                title="Chart of generic drug prices by country for three different drugs."
                style={{
                  width: "100%",
                  height: `${iframeHeight}px`,
                  border: "0",
                }}
                sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
              ></iframe>

              <div
                style={{
                  width: "100%",
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
                    style={{
                      width: "105px",
                      height: "16px",
                      border: "none",
                      margin: "0",
                      objectFit: "contain",
                    }}
                  />
                </a>
              </div>
            </div>
            <div className="flourish">
              <iframe
                src="https://flo.uri.sh/visualisation/22204984/embed"
                title="Chart of brand name drug prices by country for 3 different drugs."
                style={{
                  width: "100%",
                  height: `${iframeHeight}px`,
                  border: "0",
                }}
                sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
              ></iframe>
              <div
                style={{
                  width: "100%",
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
                    style={{
                      width: "105px",
                      height: "16px",
                      border: "none",
                      margin: "0",
                      objectFit: "contain",
                    }}
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
