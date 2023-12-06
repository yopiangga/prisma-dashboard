import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardLayout } from "src/layouts/dahsboard";
import { HomePage } from "src/pages/home";
import { HospitalPage } from "src/pages/hospital";
import { HospitalAddPage } from "src/pages/hospital/add";

export default function AdminRouterPage() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/hospital" element={<HospitalPage />} />
          <Route path="/hospital/add" element={<HospitalAddPage />} />

          <Route path="*" element={<HomePage />} exact />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}
