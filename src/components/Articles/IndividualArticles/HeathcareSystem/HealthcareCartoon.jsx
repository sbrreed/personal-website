import { useState } from "react";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

function HealthcareCartoon() {
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  const toggleImageSize = () => {
    if (windowWidth > 1000) {
      setIsImageEnlarged(!isImageEnlarged);
    }
  };

  const { windowWidth } = useWindowDimensions();

  // Calculate the height based on the windowWidth
  const iframeHeight =
    windowWidth < 1400 ? 1000 : windowWidth < 800 ? 2000 : 600; // Adjust the multiplier as needed

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
          <div className="multi-paragraph-section"></div>
          <div className="cartoon strip">
            {windowWidth > 1000 && <p>Click image to enlarge/shrink</p>}
            <img
              src="/DataViz/Healthcare/waitingForHealthcare/waitingForHealthcare_fullStrip@2x.png"
              className={isImageEnlarged ? "enlarged" : ""}
              onClick={toggleImageSize}
              alt="Rationing Strip"
            ></img>
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
          <div className="cartoon text">
            <img src="/DataViz/Healthcare/uwe_lecturing.png"></img>
            <p>
              In our healthcare system, we don’t explicitly force people to wait
              for their healthcare. Instead, poorer people in our country are
              forced to make the choice to wait for their healthcare because
              they can't afford it. One system is simply more up-front about the
              situation than the other.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthcareCartoon;
