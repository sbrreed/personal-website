function CartoonSection({ children, show, title, onPrev, onNext }) {
  if (!show) return null;

  return (
    <div className="cartoon-section">
      <div className="section-navigation">
        <button className="nav-arrow left" onClick={onPrev}>
          ◀
        </button>
        <h1>{title}</h1>
        <button className="nav-arrow right" onClick={onNext}>
          ▶
        </button>
      </div>
      {children}
    </div>
  );
}

export default CartoonSection;
