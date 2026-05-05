import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute"; // adjust path if needed

// AUTH
import Login from "./pages/authentication/Login";
import Signup from "./pages/authentication/Signup";

// ADMIN
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminPendingDeals from "./pages/admin/AdminPendingDeals";
import AdminPendingCompanies from "./pages/admin/AdminPendingCompanies";
import AdminKYCReview from "./pages/admin/AdminKYCReview";
import AdminAuditLogs from "./pages/admin/AdminAuditLogs";

// COMPANY
import CompanyDashboard from "./pages/company/CompanyDashboard";
import Create_Deal from "./pages/company/Create_Deal";
import Deals from "./pages/company/Deals";
import Distribution from "./pages/company/Distribution";
import Create_Distribution from "./pages/company/Create_Distribution";
import CompanyWallet from "./pages/company/Wallet.jsx";

// INVESTOR
import InvestorDashboard from "./pages/investor/InvestorDashboard";
import ExploreDeals from "./pages/investor/ExploreDeals";
import DealDetails from "./pages/investor/DealDetails";
import Portfolio from "./pages/investor/Portfolio";
import Wallet from "./pages/investor/Wallet";
import ProfileSetting from "./pages/investor/ProfileSettings";
import { Toaster } from "react-hot-toast";

// SHARED
import UserProfile from "./pages/Profile.jsx";

// ONBOARDING / LISTING (optional protection depending on your logic)
import Step5BankAccount from "./pages/onboarding/Step5BankAccount";
import Step6DocumentsMetrics from "./pages/listing/Step6DocumentsMetrics";

export default function App() {
  return (
    <>
     <Toaster position="top-right" reverseOrder={false} />
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route path="/" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />

      {/* ADMIN ROUTES */}
      <Route element={<ProtectedRoute allowedRoles={["ADMIN"]} />}>
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/pending-deals" element={<AdminPendingDeals />} />
        <Route path="/pending-companies" element={<AdminPendingCompanies />} />
        <Route path="/kyc-review" element={<AdminKYCReview />} />
        <Route path="/audit-logs" element={<AdminAuditLogs />} />
      </Route>

      {/* BUSINESS OWNER ROUTES */}
      <Route element={<ProtectedRoute allowedRoles={["BUSINESS_OWNER"]} />}>
        <Route path="/company-dashboard" element={<CompanyDashboard />} />
        <Route path="/company-deals" element={<Deals />} />
        <Route path="/company-create-deal" element={<Create_Deal />} />
        <Route path="/company-distributions" element={<Distribution />} />
        <Route path="/company-create-distribution" element={<Create_Distribution />} />
        <Route path="/company-wallet" element={<CompanyWallet />} />
      </Route>

      {/* INVESTOR ROUTES */}
      <Route element={<ProtectedRoute allowedRoles={["INVESTOR"]} />}>
        <Route path="/investor-dashboard" element={<InvestorDashboard />} />
        <Route path="/InvestorDashboard" element={<InvestorDashboard />} />
        <Route path="/ExploreDeals" element={<ExploreDeals />} />
        <Route path="/DealDetails/:dealId" element={<DealDetails />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/Wallet" element={<Wallet />} />
        <Route path="/ProfileSetting" element={<ProfileSetting />} />
      </Route>

      {/* SHARED (ANY LOGGED USER) */}
      <Route
        element={
          <ProtectedRoute
            allowedRoles={["ADMIN", "INVESTOR", "BUSINESS_OWNER"]}
          />
        }
      >
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/Step5BankAccount" element={<Step5BankAccount />} />
        <Route path="/Step6DocumentsMetrics" element={<Step6DocumentsMetrics />} />
      </Route>

      {/* FALLBACK */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </>
  );
}