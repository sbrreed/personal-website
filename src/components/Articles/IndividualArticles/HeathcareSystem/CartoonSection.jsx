function CartoonSection({ children, show, onPrev, onNext }) {
  if (!show) return null;

  return (
    <div className="cartoon-section">
      <div className="section-navigation">
        {onPrev && (
          <button className="nav-arrow left" onClick={onPrev}>
            ◀
          </button>
        )}
        {onNext && (
          <button className="nav-arrow right" onClick={onNext}>
            ▶
          </button>
        )}
      </div>
      {children}
    </div>
  );
}

export default CartoonSection;
