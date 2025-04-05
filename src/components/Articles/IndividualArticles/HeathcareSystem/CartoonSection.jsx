function CartoonSection({ children, show, onPrev, onNext }) {
  if (!show) return null;

  return (
    <div className="cartoon-section">
      <div className="section-navigation">
        <div className="section-navigation">
          <button className="nav-arrow left" onClick={onPrev}>
            ◀ Previous Cartoon
          </button>
          <button className="nav-arrow right" onClick={onNext}>
            Next Cartoon ▶
          </button>
        </div>
      </div>
      {children}
    </div>
  );
}

export default CartoonSection;
