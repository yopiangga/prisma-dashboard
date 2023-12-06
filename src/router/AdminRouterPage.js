import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardLayout } from "src/layouts/dahsboard";
import { HomePage } from "src/pages/home";
import { HospitalPage } from "src/pages/hospital";

export default function AdminRouterPage() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/hospital" element={<HospitalPage />} />

          <Route path="*" element={<HomePage />} exact />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}
