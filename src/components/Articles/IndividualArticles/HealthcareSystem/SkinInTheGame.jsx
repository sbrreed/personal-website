function SkinInTheGame() {
  return (
    <div className="article">
      <div className="multi-paragraph-section">
        <h2>My Quest to find the best priced Endoscopy</h2>
        <p>
          How much does an Endoscopy in Denver, Colorado cost? It depends who
          you ask. This is the story of my odyssey through our healthcare
          system’s pricing schemes, hidden fees, and maddening red tape. When
          the dust settled I had only two quotes. With my high-deductible
          insurance, the same procedure could cost me anywhere from $3,000 -
          $8,000. Multiple medical price transparency laws have attempted to
          give consumers more insight into the opaque world but, so far, their
          implementation has not been sufficient, continuing to force patients
          to either act as detectives or submit to an unfair pricing structure.
        </p>
        <p>
          Academic discussion of the problem of high healthcare costs focuses on
          the need for patients to shop around. They call this having “skin in
          the game.” And to be sure, I was battered and bruised by the end.
        </p>
        <div className="article-image small center">
          <img
            src="/DataViz/Healthcare/skinInTheGame/checkingIn.png"
            alt="Checking in at Children's Hospital"
          />
        </div>
        <h2>$130 to see the doctor? Not so fast.</h2>
        <p>
          It started with a recommendation to see a GI doctor for my daughter’s
          chronic acid reflux. We were referred to a gastroenterologist at
          Children’s Hospital in Denver. When we arrived, we were told the
          hospital was out-of-network, but we could self-pay—$130, they said
        </p>
        <p>
          Turns out, that was just the facility fee. Three weeks later, a
          separate bill for the doctor arrived—$150, in-network. I hadn’t known
          that hospitals and doctors bill separately- although I later learned
          this had been stated on one of the many forms I filled out while
          checking in that day.
        </p>
        <div className="article-image small center">
          <img
            src="/DataViz/Healthcare/skinInTheGame/rowOfShops.png"
            alt="Checking in at Children's Hospital"
          />
        </div>
        <h2>Skin the the Game, but nowhere to shop</h2>
        <p>
          When my daughter was eventually recommended to get an upper GI
          Endoscopy, I decided to put in the time to see if I could truly “shop”
          for the procedure. An estimated{" "}
          <a href="https://madeforthismoment.asahq.org/preparing-for-surgery/procedures/upper-endoscopy/?utm_source=chatgpt.com">
            6 million
          </a>{" "}
          of these procedures are performed each year. Surely there should be
          some standard pricing for it, right?
        </p>
        <h2>No, insurance is not going to pay for this.</h2>
        <p>
          We buy our insurance off of the marketplace and have a high deductible
          plan (HDHP). Our deductible is $8,000 per person, $16,000 per family.
          HDHPs are common: in 2023,{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/39937774/">
            41% of the insured population
          </a>{" "}
          under 65 was enrolled in a high deductible. HDHPs and Consumer
          Directed Health Plans (CDHP) are two types of health plans that are
          intended to encourage consumers to take more control of their health
          care spending.
        </p>
        <div className="article-image small center">
          <img
            src="/DataViz/Healthcare/skinInTheGame/HDHP enrollment.png"
            alt="High Deductible Health Plan"
          />
        </div>
        <p>
          Enrollment in HDHPs has been on the rise but appears to have hit a{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/39937774/">peak in 2021.</a>
        </p>
        <h2>You don’t necessarily get what you pay for</h2>
        <p>
          My health insurance website was my first stop. After dead ends on the
          first five options, I finally found one that would answer: Rocky
          Mountain Gastroenterology. They couldn’t tell me the price until I
          made an appointment. And to make an appointment I needed a referral.
          Off went the request to Children’s.
        </p>
        <p>
          Then I called my insurance, Anthem. Surely they had pricing, right?
          They have a vast database of all the claims for routine and
          non-routine endoscopies. Providing me with cost information would make
          my shopping easier and lower costs for them and everybody else. No–
          they referred me back to the same provider list.
        </p>
        <div className="article-image center">
          <img
            src="/DataViz/Healthcare/skinInTheGame/onThePhoneWithInsurance.png"
            alt="Anthem Insurance Information"
          />
        </div>
        <h2>Price Transparency Laws- an attempt, but not yet sufficient.</h2>
        <p>
          Per the 2021 Hospital Price Transparency law, hospitals are{" "}
          <a href="https://www.cms.gov/priorities/key-initiatives/hospital-price-transparency">
            required to post their fees
          </a>{" "}
          for standard procedures. Further, the{" "}
          <a href="https://www.federalregister.gov/documents/2020/11/12/2020-24591/transparency-in-coverage">
            2020 IRS Transparency in Coverage
          </a>{" "}
          rule was intended to force insurers to make their contracted rates
          available to the public.
        </p>
        <p>
          In Colorado the{" "}
          <a href="https://civhc.org/get-data/non-public-data/">
            Center for Improving Value in Healthcare
          </a>
          (CIVHC) website collects all the data into a few nice little
          dashboards (hospital, physician data and anesthesia data) . In theory,
          with all the correct information, a person can get a 25th -75th
          percentile estimate for a procedure.
        </p>
        <figure className="article-image small center">
          <img
            src="/DataViz/Healthcare/skinInTheGame/CIVHC1.png"
            alt="CIVHC Dashboard"
          />
          <figcaption>
            CIVHC "Shop For Care" tool listing the hospital facility fees for
            common procedures.
          </figcaption>
        </figure>
        <figure className="article-image small center">
          <img
            src="/DataViz/Healthcare/skinInTheGame/CIVHC2.png"
            alt="CIVHC Dashboard"
          />
          <figcaption>
            CIVHC Provider Payment Tool for finding doctor fees for common
            procedures.
          </figcaption>
        </figure>
        <figure className="article-image small center">
          <img
            src="/DataViz/Healthcare/skinInTheGame/CIVHC3.png"
            alt="CIVHC Dashboard"
          />
          <figcaption>
            CIVHC Provider Payment Tool for finding anesthesia fees for common
            procedures.
          </figcaption>
        </figure>
        <p>
          In reality, it would be very difficult for an average person to know
          all the parameters needed to get useful information from the three
          dashboards. Complicated and specific codes are needed to get accurate
          results. Additionally, they only represent the self-pay estimates.
          From my experience in this investigation, self-pay estimates can be on
          either side of the insurance estimate by a wide margin.
        </p>
        <p>
          I don’t believe this is the fault of CIVHC. They work with the data
          they get from the hospitals and insurance companies, which is
          complicated and fragmented.
        </p>
        <p>
          Ultimately, with some help from ChatGPT and a lot of guessing about
          parameters I gathered an estimate for a single facility near me and in
          my network (Boulder Community Hospital).
        </p>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>25th Percentile</th>
              <th>75th Percentile</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Facility</td>
              <td>$1,170</td>
              <td>$2,340</td>
            </tr>
            <tr>
              <td>Physician Fee</td>
              <td>$25</td>
              <td>$260</td>
            </tr>
            <tr>
              <td>Anesthesia</td>
              <td>$684</td>
              <td>$1,081</td>
            </tr>
            <tr className="totalOnly">
              <td>Total (not including labs)</td>
              <td>$1,879</td>
              <td>$3,681</td>
            </tr>
          </tbody>
        </table>
        <p>
          At this point, I knew that we were going to be in the multi-thousand
          dollar range. This is a useful metric, but with so many variables I
          needed to get quotes directly.
        </p>
        <h2>The Real Quest Begins- calling providers</h2>
        <h3>Boulder Community Hospital and Rocky Mountain Gastro</h3>
        <p>
          I first tried Boulder Community Hospital (lowest CIVHC facility fee).
          They could give me the self-pay rate for the doctor only but wouldn’t
          tell me the insurance rate unless I scheduled an office consultation
          first. Referrals be damned. The appointment? Two months out.
        </p>
        <p>
          Meanwhile, Rocky Mountain Gastroenterology had finally received the
          referral from Children’s. They worked with multiple ambulatory surgery
          centers (ASCs), which are typically cheaper and more efficient than
          hospitals. From their list, I chose Rose Ambulatory Surgery Center, an
          in-network ASC. I would need to personally get quotes from Rocky
          Mountain, Rose and the anesthesia provider (Prime Anesthesia).
        </p>
        <p>
          Many calls, emails, holds, and follow-ups later, this is what I got
          (with insurance applied):
        </p>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Doctor (Rocky Mtn)</td>
              <td>$595.00</td>
            </tr>
            <tr>
              <td>Facility (Rose ASC)</td>
              <td>$1,450.00</td>
            </tr>
            <tr>
              <td>Anesthesia (Prime)</td>
              <td>$1,050.00</td>
            </tr>
            <tr className="totalOnly">
              <td>Total</td>
              <td>$3,095.00</td>
            </tr>
          </tbody>
        </table>
        <h2>And then there was Children’s</h2>
        <p>
          At the same time, Children’s Hospital got the insurance approval and
          let me schedule. But they wouldn’t disclose the cost until the
          insurance paperwork cleared. I called their cost department, but they
          wouldn’t talk to me because my daughter was 18- the only time HIPAA
          applied through this whole process was when talking about cost.
        </p>
        <p>
          Eventually, my daughter signed a form, and Children’s sent me their
          facility estimate, which was at the wrong location. Once corrected,
          the estimate with insurance was: $7,400.80
        </p>
        <p>
          CU Medicine (Children’s physician group) emailed me an encrypted
          estimate which was initially wrong as well—listing a colonoscopy in
          addition to the endoscopy. Once corrected, it showed doctor +
          anesthesia = $627.93, with the anesthesia listed as $350. I now had
          two quotes for anesthesia at Children’s. One for $900, the other for
          $350. I assumed the higher amount.
        </p>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Doctor (CU Med)</td>
              <td>$277.93</td>
            </tr>
            <tr>
              <td>Facility</td>
              <td>$6,500.80</td>
            </tr>
            <tr>
              <td>Anesthesia</td>
              <td>$900.00</td>
            </tr>
            <tr className="totalOnly">
              <td>Total</td>
              <td>$7,677.93</td>
            </tr>
          </tbody>
        </table>
        <p>
          That’s more than double the Rocky Mountain quote—for the same routine
          procedure.
        </p>
        <p>
          Children’s had also sent me a quote for self-pay of the facility fee:
          $5,912.06. Still, this was four times the facility fee at Rose.
        </p>
        <h2>Head to Head- how do they compare?</h2>
        <p>
          After over 30 phone calls, and weeks of work, I had ended up with the
          following (all values are with insurance applied).
        </p>
        <table className="set-width">
          <colgroup>
            <col style={{ width: "25%" }} />
            <col style={{ width: "25%" }} />
            <col style={{ width: "25%" }} />
            <col style={{ width: "25%" }} />
          </colgroup>
          <thead>
            <tr>
              <th>Children’s Hospital with CU Medicine</th>
              <th>Children’s Hospital with CU Medicine</th>
              <th>
                Rose Surgery Center with Rocky Mountain Gastroenterology and
                Prime Anesthesia
              </th>
              <th>
                Rose Surgery Center with Rocky Mountain Gastroenterology and
                Prime Anesthesia
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Doctor</td>
              <td>$277.93</td>
              <td>Doctor</td>
              <td>$595.00</td>
            </tr>
            <tr>
              <td>Facility Fee</td>
              <td>$6,500.80</td>
              <td>Facility Fee</td>
              <td>$1,450.00</td>
            </tr>
            <tr>
              <td>Anesthesia (from facility quote)</td>
              <td>$900.00</td>
              <td>Anesthesia</td>
              <td>$1,050.00</td>
            </tr>
            <tr className="totalOnly">
              <td>Total</td>
              <td>$7,677.93</td>
              <td>Total</td>
              <td>$3,095.00</td>
            </tr>
          </tbody>
        </table>
        <p>
          The price difference was greater than I even expected and the decision
          to go with Rocky Mountain was obvious. Looking back at the estimates I
          gathered from CIVHC the Rocky Mountain option was just below the 75the
          percentile, while the Children’s option was more than twice the upper
          range.
        </p>
        <h2>Much more work to be done</h2>
        <p>
          Healthcare in the US is more expensive than anywhere else in the world
          and healthcare prices can vary widely within a geographic region.
          Patients looking to make wise economic decisions along with their
          healthcare decisions face huge obstacles to finding accurate price
          information.
        </p>
        <p>
          A reader might ask: Am I sacrificing the quality or safety of the
          procedure to get a lower price? Extensive research has been conducted
          on the association between cost and quality in healthcare. For the
          most part, the research has concluded that price and quality (safety
          included in quality) are not necessarily correlated. Market forces can
          play a role– in markets with high competition where hospitals have to
          compete with one another, high-price has been{" "}
          <a href="https://www.nber.org/papers/w29809">shown</a> to correlate
          with lower mortality for emergency patients. High competition,
          however, is not the norm. The vast majority of hospital markets are
          now{" "}
          <a href="https://www.healthaffairs.org/doi/10.1377/hlthaff.2017.0556">
            highly concentrated
          </a>
          - where few large providers control most of the market.
        </p>
        <p>
          Policy has been made to try to address the opacity of cost information
          in healthcare. This includes the 2021 Hospital Transparency Act, the
          2020 IRS Transparency in Coverage rule that “sets forth requirements
          for group health plans and health insurance issuers in the individual
          and group markets to disclose cost-sharing information upon request to
          a participant, beneficiary, or enrollee (or his or her authorized
          representative), including an estimate of the individual's
          cost-sharing liability for covered items or services furnished by a
          particular provider.” Clearly neither of these has had its intended
          effect of empowering citizens to find the best value healthcare.
        </p>
        <p>
          The system is fragmented, opaque, and indifferent to consumer needs.
          It is built not to help consumers shop—but to hide what they’re
          buying. The free market only works when people know what things cost.
        </p>
        <p>
          My experience was fairly simple as it was a single procedure. Had my
          daughter needed more comprehensive care, multiple or more complicated
          procedures this process would have been essentially impossible. Had I
          not gone through this effort, I would have only been informed of the
          price of the procedure shortly before the procedure itself and would
          have had no indication that I could be getting it for half the price
          somewhere else. I had the time and interest to see this to its end–
          most people do not.
        </p>
      </div>
    </div>
  );
}

export default SkinInTheGame;
