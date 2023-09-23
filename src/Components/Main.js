const Main = ({ children, title, className }) => {
  return (
    <main>
      <div className="container my-3">
        <div className="section-title py-3">
          <h1 className="text-dark fw-bold">{title}</h1>
        </div>
        <div className={"content " + (className || "")}>{children}</div>
      </div>
    </main>
  );
};

export default Main;
