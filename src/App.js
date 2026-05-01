import { Navigate, Route, Routes } from "react-router-dom";

import Login from "./pages/authentication/Login";
import Signup from "./pages/authentication/Signup";

import Step1BasicProfile from "./pages/onboarding/Step1BasicProfile";
import Step2KycVerification from "./pages/onboarding/Step2KycVerification";
import Step3SourceOfFunds from "./pages/onboarding/Step3SourceOfFunds";
import Step4CompanyInfo from "./pages/onboarding/Step4CompanyInfo";
import Step5BankAccount from "./pages/onboarding/Step5BankAccount";

import Step1BasicInfoType from "./pages/listing/Step1BasicInfoType";
import Step2DetailsClassification from "./pages/listing/Step2DetailsClassification";
import Step3FundingInformation from "./pages/listing/Step3FundingInformation";
import Step4Financials from "./pages/listing/Step4Financials";
import Step5ValuationTeam from "./pages/listing/Step5ValuationTeam";
import Step6DocumentsMetrics from "./pages/listing/Step6DocumentsMetrics";

import DealDetails from "./pages/investor/DealDetails";
import ExploreDeals from "./pages/investor/ExploreDeals";
import InvestorDashboard from "./pages/investor/InvestorDashboard";
import Portfolio from "./pages/investor/Portfolio";
import Wallet from "./pages/investor/Wallet"
import ProfileSetting from "./pages/investor/ProfileSettings";

export default function App() {
  return (
    <Routes>
      {/* page par défaut */}
      <Route path="/login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Step5BankAccount" element={<Step5BankAccount />} />
      <Route path="/Step6DocumentsMetrics" element={<Step6DocumentsMetrics />} />


      <Route path="/DealDetails/:dealId" element={<DealDetails />} />
      <Route path="/ExploreDeals" element={<ExploreDeals />} />
      <Route path="/InvestorDashboard" element={<InvestorDashboard />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/Wallet" element={<Wallet />} />
      <Route path="/ProfileSetting" element={<ProfileSetting />} />

     
      {/* si route inconnue */}
      <Route path="*" element={<Navigate to="/InvestorDashboard" replace />} />
    </Routes>
  );
}