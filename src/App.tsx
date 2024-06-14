import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Sidebar></Sidebar>
      <Outlet></Outlet>
    </>
  )
}

export default App