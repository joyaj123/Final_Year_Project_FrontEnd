import { Routes, Route } from "react-router-dom";
import Login from "./pages/authentication/Login";

import InvestorDashboard from "./pages/investor/InvestorDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CompanyDashboard from "./pages/company/CompanyDashboard";
import Create_Deal from "./pages/company/Create_Deal";
import Deals from "./pages/company/Deals";
import Distribution from "./pages/company/Distribution";
import Wallet from "./pages/company/Wallet";
import Create_Distribution from "./pages/company/Create_Distribution";
import UserProfile from "./pages/Profile.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/investor-dashboard" element={<InvestorDashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/company-dashboard" element={<CompanyDashboard />} />
      <Route path="/company-deals" element={<Deals />} />
      <Route path="/company-create-deal" element={<Create_Deal />} />
      <Route path="/company-distributions" element={<Distribution />} />
      <Route path="/company-create-distribution" element={<Create_Distribution />} />
      <Route path="/company-wallet" element={<Wallet />} />
            <Route path="/profile" element={<UserProfile />} />

      

      


    </Routes>
  );
}

export default App;