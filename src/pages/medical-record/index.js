import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ActionIndex } from "src/components/action-index";
import { TableComponent } from "src/components/table";

export function MedicalRecordPage() {
  const navigate = useNavigate();

  const [data, setData] = useState([
    {
      patientId: 1,
      image: "https://www.rsudrsoetomo.jatimprov.go.id/images/logo.png",
      diagnosisAi: "Hemorrhagic",
      diagnosisDoctor: "Hemorrhagic",
      description:
        "Hemorrhagic Stroke is a type of stroke that occurs when a blood vessel in the brain ruptures or leaks. Blood spills into or around the brain and creates swelling and pressure, damaging cells and tissue in the brain.",
      diagnoseTime: "2021-08-01 12:00:00",
      idDoctor: 1,
      idOperator: 1,
      idHospital: 1,
    },
  ]);

  const headerTable = [
    { code: "patientId", name: "Patient ID" },
    { code: "image", name: "Image", type: "image" },
    { code: "diagnosisAi", name: "Diagnosis AI" },
    { code: "diagnosisDoctor", name: "Diagnosis Doctor" },
    { code: "description", name: "Description" },
    { code: "diagnoseTime", name: "Diagnose Time" },
    { code: "idDoctor", name: "Doctor ID" },
    { code: "idOperator", name: "Operator ID" },
    { code: "idHospital", name: "Hospital ID" },
    { code: "action", name: "Action" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="col-span-12">
      <ActionIndex
        handleSearch={handleSearch}
        labelButton="Add Medical Record"
        routeActionButton={"/medical-record/add"}
      />

      <br />

      <TableComponent
        header={headerTable}
        action={[
          {
            color: "info",
            name: "Edit",
            callback: (id) => {
              navigate("/medical-record/edit/" + id);
            },
          },
          {
            color: "error",
            name: "Delete",
            callback: async (id) => {},
          },
        ]}
        data={data || []}
      />

      <br />
    </div>
  );
}
