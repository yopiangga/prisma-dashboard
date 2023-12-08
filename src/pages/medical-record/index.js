import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ActionIndex } from "src/components/action-index";
import { TableComponent } from "src/components/table";
import { MedicalRecordServices } from "src/services/MedicalRecordServices";

export function MedicalRecordPage() {
  const navigate = useNavigate();
  const medicalRecordServices = new MedicalRecordServices();

  const [data, setData] = useState([
    // {
    //   patientId: 1,
    //   image: "https://www.rsudrsoetomo.jatimprov.go.id/images/logo.png",
    //   diagnosisAi: "Hemorrhagic",
    //   diagnosisDoctor: "Hemorrhagic",
    //   description:
    //     "Hemorrhagic Stroke is a type of stroke that occurs when a blood vessel in the brain ruptures or leaks. Blood spills into or around the brain and creates swelling and pressure, damaging cells and tissue in the brain.",
    //   diagnoseTime: "2021-08-01 12:00:00",
    //   idDoctor: 1,
    //   idOperator: 1,
    //   idHospital: 1,
    // },
  ]);

  const headerTable = [
    { code: "id_patient", name: "Patient ID" },
    { code: "image", name: "Image", type: "image" },
    { code: "diagnosis_ai", name: "Diagnosis AI" },
    { code: "diagnosis_doctor", name: "Diagnosis Doctor" },
    { code: "description", name: "Description" },
    { code: "diagnose_time", name: "Diagnose Time" },
    { code: "id_doctor", name: "Doctor ID" },
    { code: "id_operator", name: "Operator ID" },
    { code: "id_hospital", name: "Hospital ID" },
    { code: "action", name: "Action" },
  ];

  useEffect(() => {
    fetchMedicalRecord();
  }, []);

  async function fetchMedicalRecord() {
    const res = await medicalRecordServices.getMedicalRecords();

    if (res) {
      setData(res.data);
    }
  }

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
            callback: async (id) => {
              const res = await medicalRecordServices.deleteMedicalRecord(id);

              if (res) {
                toast.success("Medical Record has been deleted");
                fetchMedicalRecord();
              }
            },
          },
        ]}
        data={data || []}
      />

      <br />
    </div>
  );
}
