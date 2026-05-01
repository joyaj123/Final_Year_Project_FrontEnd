import { Routes, Route } from "react-router-dom";
import Login from "./pages/authentication/Login";

import InvestorDashboard from "./pages/investor/InvestorDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminPendingDeals from "./pages/admin/AdminPendingDeals";
import CompanyDashboard from "./pages/company/CompanyDashboard";
import AdminPendingCompanies from "./pages/admin/AdminPendingCompanies";
import AdminKYCReview from "./pages/admin/AdminKYCReview";
import AdminAuditLogs from "./pages/admin/AdminAuditLogs";
import Portfolio from "./pages/investor/Portfolio";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/investor-dashboard" element={<InvestorDashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/company-dashboard" element={<CompanyDashboard />} />
      <Route path="/pending-deals" element={<AdminPendingDeals />} />
      <Route path="/pending-companies" element={<AdminPendingCompanies/>}/>
      <Route path="/kyc-review" element={<AdminKYCReview/>}/>
      <Route path="/audit-logs" element={<AdminAuditLogs/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
    </Routes>
  );
}

export default App;