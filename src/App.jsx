import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  const isFamilyTreeRoute = location.pathname === "/family-tree";

  return (
    <>
      {isFamilyTreeRoute ? (
        <div className="family-tree">
          <Outlet />
        </div>
      ) : (
        <div className="app">
          <Header />
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
}
export default App;
