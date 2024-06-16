import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar></Sidebar>
        <div className="w-full">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}

export default App;
