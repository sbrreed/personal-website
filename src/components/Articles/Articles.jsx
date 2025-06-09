import { useEffect, useState } from "react";
import Papa from "papaparse";
import ETFs from "./IndividualArticles/ETFs/ETFs";
import CompoundInterest from "./IndividualArticles/CompoundInterest/CompoundInterest";
import CompoundInterestBalloon from "./IndividualArticles/CompoundInterest/CompoundInterestBalloon";
import Supplements from "./IndividualArticles/Supplements/Supplements";
import RankedChoiceVoting from "./IndividualArticles/RankedChoiceVoting/RankedChoiceVoting";
import CostOfGLP1 from "./IndividualArticles/CostOfGLP1";
import SnowpackArt from "./IndividualArticles/SnowpackArt/SnowpackArt";
import HealthcareSystem from "./IndividualArticles/HealthcareSystem/HealthcareSystem";
import HealthcareCartoon from "./IndividualArticles/HealthcareSystem/HealthcareCartoon";
import SkinInTheGame from "./IndividualArticles/HealthcareSystem/SkinInTheGame";

function Articles({ topic, articleDataPath }) {
  const [articleData, setArticleData] = useState([]);

  const fetchArticleData = async (articleDataPath) => {
    const result = await fetch(articleDataPath);
    const csvFile = await result.text();
    // Parse the CSV and save data to store
    await new Promise((resolve) => {
      Papa.parse(csvFile, {
        header: true,
        complete: ({ data }) => {
          setArticleData(data);
          resolve();
        },
      });
    });
  };

  useEffect(() => {
    if (articleDataPath) {
      fetchArticleData(articleDataPath);
    }
  }, [articleDataPath]);

  return (
    <div>
      {topic == "Political Ads Reach" && (
        <div className="article">
          <div
            class="flourish-embed flourish-chart article-image"
            data-src="visualisation/19041272"
          >
            <a
              href="https://public.flourish.studio/visualisation/19041272/"
              target="_blank"
            >
              <img
                src="https://public.flourish.studio/visualisation/19041272/thumbnail"
                alt="chart visualization"
              />
            </a>
          </div>
          <p>
            For this chart I pulled the top 10 ads for the dates May 31st- Sept
            03 2018 by total money spent and categorized each by either
            Conservative, Liberal, or neither. These are highly subjective
            categorizations. To assign them, I looked up the name of each
            organisation who paid for the ad and looked for words like:
          </p>
          <ul>
            <li>Conservative</li>
            <ul>
              <li>Republican</li>
              <li>Center Right</li>
              <li>America First</li>
              <li>Limited Government</li>
            </ul>
            <li>Liberal</li>
            <ul>
              <li>Democrat</li>
              <li>Progessive</li>
              <li>Pro-Choice</li>
            </ul>
          </ul>
          <p>I then calculated three percentages for each category:</p>
          <ul>
            <li>Percentage of the total number of ads placed</li>
            <li>Percentage of the total dollars spent</li>
            <li>
              Percentage of the total "creatives"-- a measure of the total reach
              of the ad by views.
            </li>
          </ul>
          <p>
            {" "}
            The chart shows that the Republicans have the highest percentages in
            all cases but, interestingly, their lead in views is greater than
            their lead in dollars spent, meaning they got a pretty good bang for
            their bucks.
          </p>
          <br></br>
          <p>
            The purpose of making this chart was to play with some chart types.
            Before I landed on the style above I tried two other chart types:
          </p>
          <div className="article-image">
            <img
              src="/DataViz/political_ads_v1.png"
              alt="radial chart of political ad data"
            />
            <img
              src="/DataViz/political_ads_v2.png"
              alt="vertical bar and dot chart of political ad data"
            />
          </div>
        </div>
      )}
      {topic == "Was the powder really that good then?" && (
        <div className="article narrow">
          <div className="multi-paragraph-section">
            <p>
              I moved to Colorado in November of 1997- following an old
              snowboarding friend. I had come out to visit this friend the two
              years before, probably around February as that's when our winter
              vacations are back east. I was already solidly addicted to
              snowboarding but up until that first trip out here, having ridden
              New England ice my entire life, I was, alas, a park rat. I had
              never experienced the wonders, and sometimes extreme frustrations,
              of real powder. My memory of those two trips out to visit him in
              Vail- which would have been the winters of '95/'96 &amp; '96/'97-
              are epic. Waist deep snow every day. Dropping cliffs. Goggles and
              hats flug off me as I gleefully cartwheeled through the powder
              (this was before helmets).{" "}
            </p>
            <p>
              {" "}
              I was hooked. I declared to my parents that I would be only
              applying to colleges in Colorado and that I would be taking a year
              off (at least one) to live in Vail where it snowed a foot every
              day and everyone was happy.{" "}
            </p>
            <p>
              Move out here I did and I have snowboarded (and now skied) a ton.
              But a conversation with another powder addict friend this winter
              sparked a question for me. Since those years visiting it feels
              like we've never really gotten that kind of snow again. Was it
              just my imagination of how much snow Colorado got those winters-
              especially in comparison to New England- or were those truly epic
              years and I just got unluckly and moved here a year too late?
            </p>
            <p>
              So that's the impetus for this data adventure. Of course, one
              question tends to lead to another. What has the snow been like at
              other mountains? Should I really have moved to Tahoe instead (as
              another friend and I had contemplated way back then)? Is there a
              best time of year to go visit various mountains?
            </p>
            <p>
              It turns out tracking snowpack is a little complicated. So here's
              the nitty gritty disclaimer. Snow comes in many forms. It comes in{" "}
              <b>Colorado Champaign</b>, and <b>Sierra Cement</b>, and
              everything in between. What this means is some snow has
              significantly more water content than other snow. There are as
              many snow preferences as there are powder addicts so I'll leave
              that debate to another time. The snow data I collected for this
              project is called <b>Snow Water Equivalent</b>. It means, if you
              took the snow that fell and melted it, the SWE is the amount of
              water you would end up with. Clearly denser snow will have a
              higher SWE. The way to deal with this from a "powder" perspective
              is to then look at the density of the snow and calculate the snow
              depth. Unfortunately, historically, SWE is a much more commonly
              collected metric than density. For that reason all the data in
              this post is the raw SWE. I will note, here and there where
              consideration should be taken for varying density of snow.
            </p>
            <p>
              First, I think I need to answer the very first question that
              sparked this research: Were the winters of '95/'96 &amp; '96/'97
              in Vail really as epic as I remember?
            </p>
          </div>
          <div className="article-image small center">
            <img
              src="/DataViz/snowfall_graphic/Vail87-18_offwhite.png"
              alt="Snowfall in Vail from 1975 to 2018, highlighted years 95/96, 96/97 as the biggest and 1998-2005 as lower snowfall years"
            />
          </div>
          <div className="multi-paragraph-section">
            <p>
              {" "}
              It wasn't just a dream. In fact February of '96 &amp; '97 were
              some of the best February's on record since this data started
              being collected in 1987! I'm not crazy, just unlucky. Or maybe I
              should consider myself lucky for having been able to come out
              those years, even just to visit.
            </p>
            <p>
              Let's look at the rest of the mountains now. I've collected data
              from <b>21</b> of the largest ski mountains in the west. I'll
              admit, it's very Colorado heavy- I do live here. The data for all
              the US mountains was collected from SNOTEL sites near each
              mountain. A{" "}
              <a href="https://www.wcc.nrcs.usda.gov/snow/" target="_blank">
                SNOTEL
              </a>{" "}
              site is a remote snow monitoring station set up by the USDA
              Natural Resources Conservation Service. The data from the Canadian
              mountains was collected from a{" "}
              <a
                href="https://www2.gov.bc.ca/gov/content/environment/air-land-water/water/water-science-data/water-data-tools/real-time-water-data-reporting"
                target="_blank"
              >
                British Colombia government site.
              </a>
            </p>
            <p>
              When looking at this chart, remember that some mountains have
              denser snow than others. The massively high snow totals for Squaw
              are likely more indicative of their "Sierra Cement". They do
              report some amazing snow though- like in 2017 when the there was{" "}
              <a
                href="https://squawalpine.com/explore/blog/operations-update-feb-22-23"
                target="_blank"
              >
                so much snow
              </a>{" "}
              they had to dig the lifts out.
            </p>
          </div>
          <div className="flourish-iframe">
            <iframe
              src="https://flo.uri.sh/visualisation/19064166/embed"
              title="Interactive graphic of Snow Water Equivalent for 21 mountains around the west from 1975 to 2018"
              style={{ width: "100%", height: "600px", border: "0" }}
              sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
            ></iframe>
          </div>
          <p>
            Now let's look at how the snowfall changes throughout the winter. I
            was curious to see if one could choose where to ski based on the
            month. Are some mountains better early season and others better late
            season?
          </p>
          <div className="flourish-iframe">
            <iframe
              src="https://flo.uri.sh/visualisation/19066004/embed"
              title="Interactive graphic of mean snow water equivalent by month for 21 mountains around the west from 1975 to 2018"
              frameborder="0"
              style={{ width: "100%", height: "600px", border: "0" }}
              sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
            ></iframe>
          </div>
          <div className="multi-paragraph-section">
            <p>
              For the most part the mountains look about the same. Clearly some
              shed snow earlier that others (Eldora, Purgatory). Others take a
              bit longer to get going in the fall (Mt Baker, Jackson, Snowbird).
            </p>

            <p>
              Up next for this data is getting down to the nitty gritty of
              powder days? Can we quantify a powder day and, if so, are there
              patterns we can see in their frequency? Do some mountains get more
              powder days in certain months than others? I've already started
              looking at the data and it's messy but I think there's something
              there.
            </p>
          </div>
        </div>
      )}
      {topic == "Making art with snowpack data." && <SnowpackArt />}
      {topic == "Makeover Monday - Fashion" && (
        <div className="article">
          <div className="multi-paragraph-section">
            <p>
              I came upon the data graphic “A Subjective Look at this Issue’s
              Fashion Stories” in the The New York Times Style Magazine. As an
              information visualizer I was intrigued by the piece. It was
              visually beautiful but contained some fundamental data graphic
              issues.
            </p>
            <p>
              Here's the{" "}
              <a
                href="https://www.nytimes.com/2018/08/15/t-magazine/fall-womens-fashion-editors-letter.html?action=click&module=RelatedLinks&pgtype=Article"
                target="_blank"
              >
                original piece
              </a>
              . The piece is intended to chart the frequency of the various
              categories in four photo shoots throughout the magazine. The
              categories (listed in the legend) are somewhat arbitrary, as far
              as I can tell, and maybe meant to be a bit silly.
            </p>
          </div>
          <div className="article-image medium center">
            <img
              src="/DataViz/fashion_graphic/fashion_originalGraphic.jpg"
              alt="Original graphic from NY Times Style Magazine"
            />
          </div>
          <div className="multi-paragraph-section">
            <p>
              This piece is visually beautiful but I found it had some problems.
              First, some categories are repeated in the legend (although they
              do at least retain the same color mapping). I also found it hard
              to visually track the frequency of the various categories because
              the colors were so similar and I had to keep looking up and down
              the to the legend, which was extensive.
            </p>
            <p>
              For this week's Makeover Monday I chose to re-imagine this graphic
              to fix some of these issues and just to play with the data. I
              started by going through the four photo shoots and cataloging for
              myself the number of instances of each of the categories they had
              chosen. I'm, admittedly, not a fashion expert so I may have gotten
              some of the numbers wrong (ex/ what, exactly is Tweed?). I made my
              best guesses.
            </p>
            <p>
              I then calculated the percent of occurrence in each photo-shoot
              because they didn't have the same number of photos. For example,
              the first shoot, Born Free, had 4 images whereas the Shape of
              Things shoot had 12.
            </p>
            <p>
              I opted for a stacked area chart for this one. It's pretty and I
              think it illustrates a bit more clearly which categories are
              represented the most and in which shoots. The color palette was
              chosen from the cover image of the magazine using
              <a href="https://imagecolorpicker.com/" target="_blank">
                colorpicker.com
              </a>
              . The cover photo can be found
              <a
                href="https://www.instagram.com/p/Bmf09ujgMPd/?taken-by=hanyayanagihara"
                target="_blank"
              >
                here
              </a>
            </p>
          </div>
          <div className="article-image center">
            <img
              src="/DataViz/fashion_graphic/fashion_areaMap_wLegend.png"
              alt="Makeover of the NY Times Style Magazine graphic into an area map"
            />
          </div>
          <p>
            I was so excited about this version that I wanted to try another. In
            this case I abandoned the percentages and went for raw number of
            instances. I love radar charts and this seemed like a good use of it
            as, I find, they are beautiful but also readable.
          </p>
          <div className="article-image medium center">
            <img
              src="/DataViz/fashion_graphic/fashion_radar_grey.png"
              alt="Makeover of the NY Times Style Magazine graphic into a radar chart"
            />
          </div>
        </div>
      )}
      {topic == "The case for Exchange Traded Funds vs Individual Stocks" &&
        articleData.length > 0 && <ETFs data={articleData} />}
      {topic == "Compound Interest Visualized" && <CompoundInterest />}
      {topic == "Compound Interest Balloon" && <CompoundInterestBalloon />}
      {topic == "Supplement Research" && <Supplements />}
      {topic == "Ranked Choice Voting" && <RankedChoiceVoting />}
      {topic == "Does GLP1 need to be so expensive?" && <CostOfGLP1 />}
      {topic == "Healthcare" && <HealthcareSystem />}
      {topic == "Our Crazy System" && <HealthcareCartoon />}
      {topic == "Skin in the Game" && <SkinInTheGame />}
    </div>
  );
}

export default Articles;
