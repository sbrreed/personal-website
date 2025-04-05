function HealthcareCartoonHeader() {
  return (
    <div className="healthcare-system">
      <div className="multi-paragraph-section">
        <p>
          These cartoons are inspired by Uwe Reinhardt's{" "}
          <i>
            Priced Out: The Economics and Ethical Costs of American Health Care
          </i>
        </p>
        <div className="article-callout">
          <p>
            Reinhardt's central tenet in this book is important to keep in mind
            whenever discussing any healthcare system:
          </p>
          <div className="cartoon">
            <img
              className="height-reduced"
              src="/DataViz/Healthcare/uwe_lecturing_maxim.png"
            />
          </div>
        </div>
        <p>
          Our healthcare system is complex. These comics attempt to explain how
          it works through humor and data.
        </p>
      </div>
    </div>
  );
}

export default HealthcareCartoonHeader;
