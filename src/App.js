import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

import InvestorDashboard from "./pages/investor/InvestorDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CompanyDashboard from "./pages/company/CompanyDashboard";
import Deals from "./pages/company/Deals";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/investor-dashboard" element={<InvestorDashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/company-dashboard" element={<CompanyDashboard />} />
      <Route path="/company-deals" element={<Deals />} />

    </Routes>
  );
}

export default App;