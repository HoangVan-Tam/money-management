import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard.tsx";
import Income from "./pages/Income.tsx";
import Savings from "./pages/Savings.tsx";
import Spending from "./pages/Spending.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Dashboard />} />
        <Route path="/income" element={<Income />} />
        <Route path="/savings" element={<Savings />} />
        <Route path="/spending" element={<Spending />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
