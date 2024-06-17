import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Devider from "./components/Devider";

function App() {
  const location = useLocation();
  return (
    <>
      <div className="flex">
        <Sidebar></Sidebar>
        <div className="w-full h-screen relative overflow-scroll">
          <div className="fixed z-10 bg-white w-full">
            <h1>
              {location.pathname.substring(1) == ""
                ? "Dashboard"
                : location.pathname.substring(1, 2).toUpperCase() +
                  location.pathname.substring(2)}
            </h1>
            <Devider />
          </div>
          <div className="absolute top-16 w-full">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
