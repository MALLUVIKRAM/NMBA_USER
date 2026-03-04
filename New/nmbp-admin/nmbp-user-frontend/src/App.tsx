import { Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard";
import ActivitySnapshot from "./components/ActivitySnapshot/ActivitySnapShot";
import EPledgeForm from "./components/EPledge/EPledgeForm";
import EPledgeOtp from "./components/EPledge/EPledgeOtp";
import EPledgeOathEN from "./components/EPledge/EPledgeOathEN";
import Facilities from "./components/Facilities/Facilities";
import Helpline from "./components/Helpline/Helpline";
import AppShell from "./components/Layout/AppShell";
import ActivityDetail from "./components/ActivitySnapshot/ActivityDetail";
import CertificatePreview from "./components/EPledge/CertificatePreview";
import RetrieveCertificateDownload from "./components/EPledge/RetrieveCertificateDownload";
import RetrieveCertificate from "./components/EPledge/RetrieveCertificate";

function App() {
  return (
    <div className="bg-[#F9FAFB]">
      <Routes>
        <Route
          path="/"
          element={
            <AppShell>
              <Dashboard />
            </AppShell>
          }
        />
        <Route
          path="/activity"
          element={
            <AppShell>
              <ActivitySnapshot />
            </AppShell>
          }
        />
        <Route
          path="/activity/:id"
          element={
            <AppShell>
              <ActivityDetail />
            </AppShell>
          }
        />
        <Route
          path="/facilities"
          element={
            <AppShell>
              <Facilities />
            </AppShell>
          }
        />
        <Route
          path="/helpline"
          element={
            <AppShell>
              <Helpline />
            </AppShell>
          }
        />
        <Route
          path="/epledge"
          element={
            <AppShell>
              <EPledgeOathEN />
            </AppShell>
          }
        />

        <Route
          path="/epledge/form"
          element={
            <AppShell>
              <EPledgeForm />
            </AppShell>
          }
        />
        <Route
          path="/epledge/otp"
          element={
            <AppShell>
              <EPledgeOtp />
            </AppShell>
          }
        />
        <Route
          path="/certificate-preview"
          element={
            <AppShell>
              <CertificatePreview />
            </AppShell>
          }
        />
        <Route
          path="/retrieve-certificate-download"
          element={
            <AppShell>
              <RetrieveCertificateDownload />
            </AppShell>
          }
        />
        <Route
          path="/retrieve-certificate"
          element={
            <AppShell>
              <RetrieveCertificate />
            </AppShell>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
