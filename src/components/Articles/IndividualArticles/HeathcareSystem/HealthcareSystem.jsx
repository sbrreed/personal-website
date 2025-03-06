import { useState } from "react";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

function HealthcareSystem() {
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
            Raise your hand if you feel you really understand how our system of
            healthcare and health insurance works? Now put your hand down if
            you're an academic or deep-in-the-crease policy maker. Anyone left?
            Probably not. Our system of delivering and paying for healthcare is
            deeply complicated and opaque. Only those truly passionate about it
            who also have a tolerance for lots of numbers really understand how
            it all works.
          </p>
          <p>
            After reading Uwe Reinhardt's{" "}
            <i>
              Priced Out: The Economics and Ethical Costs of American Health
              Care
            </i>
            , I'm determined to figure out how to present this information in a
            way that regular people will take to.
          </p>
          <p>
            Admission here: I'm also a big fan of chart art. The kind of garish,
            too much going on, but so fun kind of stuff. The kind of stuff
            Edward Tufte has spent his entire career trying to get people to
            stop making.
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
          <div className="section-divider">
            <h2>Where does my pharmaceutical money really go?</h2>
          </div>
          <div className="multi-paragraph-section">
            <p>
              For my first project on this topic (other than the{" "}
              <a href="https://sarahreed.art/work/DataViz/?project=CostOfCancer">
                Cost of Cancer
              </a>{" "}
              and{" "}
              <a href="https://sarahreed.art/work/DataViz/?project=GLP1Cost">
                Does GLP1 need to be so expensive?
              </a>{" "}
              projects) I've decided to recreate a chart from the book that
              stuck with me.
            </p>
            <p>
              In this chart Uwe laid out all the players in the drug delivery
              food chain. He then estimated the skim off the top each player
              took for internal use (Marketing, Admin and R&D) and profit. Do we
              really need all these middlemen?
            </p>
          </div>
          <div className="article-image large">
            <img
              src="/DataViz/Healthcare/PharmaCost_illustrated_withLegend.png"
              className={isImageEnlarged ? "enlarged" : ""}
              onClick={toggleImageSize}
              alt="Chart of all involved in the pharmaceutical food chain. They are the Insurer, Pharmacy Benfit Manager, Pharmacy, Wholesaler, and Manufacturer. Each takes a cut for internal use and profit. For a given $100 drug, the cost ot manufacture that drug is estimated to be $17. The rest is taken by the other players."
            ></img>
          </div>
          <div className="multi-paragraph-section">
            <p>
              The Department of Health and Human Services{" "}
              <a href="https://aspe.hhs.gov/reports/changes-list-prices-prescription-drugs#">
                tracks the increases in drug prices{" "}
              </a>
              every year. From January 2022 to January 2023, price changes
              ranged from a decrease of 99 percent to increases of over 3,000
              percent. Over this period, 4,264 drug products had price
              increases. Of these increases, 1,982 (46%) were greater than the
              increase in the consumer price index for all urban consumers
              (CPI-U) for this period (which was 6.4%). During the same period,
              1,599 drug products had price decreases. The report does not
              provide details about the price decreases.
            </p>
            <div className="article-callout">
              <h2>
                From Jan 2022-Jan 2023 46% of drug price increases exceeded the
                rate of inflation.
              </h2>
            </div>
            <div className="multi-paragraph-section">
              <p>
                The Inflation Reduction Act of 2022 requires manufacturers to
                pay rebates to Medicare if they raise their prices for certain
                Medicare Part B & D drugs faster than the rate of inflation.
              </p>
              <p>
                What drugs are those and why only those? Those are questions for
                another time.{" "}
              </p>
            </div>
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

export default HealthcareSystem;
