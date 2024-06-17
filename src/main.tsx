import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard.tsx";
import Savings from "./pages/Savings.tsx";
import Transaction from "./pages/Transaction.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Dashboard />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/savings" element={<Savings />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
