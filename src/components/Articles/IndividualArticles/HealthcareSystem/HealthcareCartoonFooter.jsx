function HealthcareCartoonFooter() {
  return (
    <div className="healthcare-cartoon-footer">
      <div className="multi-paragraph-section cartoon-footer-top-section">
        <p>
          These cartoons were originally inspired by Uwe Reinhardt's{" "}
          <i>
            Priced Out: The Economics and Ethical Costs of American Health Care
          </i>
          .
        </p>
        <p>
          Reinhardt's central tenet in this book is important to keep in mind
          whenever discussing any healthcare system:
        </p>
      </div>
      <img
        className="central-tenet"
        src="/DataViz/Healthcare/uwe_lecturing_maxim.png"
      />
      <div className="multi-paragraph-section cartoon-footer-top-section">
        <p>
          Since reading that book, each subsequent book I've read on the subject
          has lent a multitude of ideas. Our system is complicated and there is
          so much to talk about.
        </p>
      </div>
      <div className="copyright">
        <p>© Sarah Reed 2025.</p>
        <p>
          I'm always looking for new ideas. Got an aspect of our healthcare
          system that needs to be explained? Email me at{" "}
          <a href="mailto:sarahbreed01@gmail.com">sarahbreed01@gmail.com</a>{" "}
          with your ideas!
        </p>
      </div>
    </div>
  );
}
export default HealthcareCartoonFooter;
