import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardLayout } from "src/layouts/dahsboard";
import { HomePage } from "src/pages/home";
import { HospitalPage } from "src/pages/hospital";
import { HospitalAddPage } from "src/pages/hospital/add";
import { HospitalEditPage } from "src/pages/hospital/edit";
import { PatientPage } from "src/pages/patient";
import { PatientAddPage } from "src/pages/patient/add";
import { PatientEditPage } from "src/pages/patient/edit";

export default function AdminRouterPage() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/hospital" element={<HospitalPage />} />
          <Route path="/hospital/add" element={<HospitalAddPage />} />
          <Route path="/hospital/edit/:id" element={<HospitalEditPage />} />

          <Route path="/patient" element={<PatientPage />} />
          <Route path="/patient/add" element={<PatientAddPage />} />
          <Route path="/patient/edit/:id" element={<PatientEditPage />} />

          <Route path="*" element={<HomePage />} exact />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}
