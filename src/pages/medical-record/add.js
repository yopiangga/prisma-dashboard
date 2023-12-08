import { useState } from "react";
import { Button } from "react-daisyui";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { InputDefault } from "src/components/input/input-default";
import { InputImage } from "src/components/input/input-image";
import { InputSelect } from "src/components/input/input-select";
import { InputTextarea } from "src/components/input/input-textarea";
import { MedicalRecordServices } from "src/services/MedicalRecordServices";

export function MedicalRecordAddPage() {
  const navigate = useNavigate();
  const medicalRecordServices = new MedicalRecordServices();

  const [formData, setFormData] = useState({
    idPatient: 2,
    description: "Description",
    image: null,
  });
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await medicalRecordServices.createMedicalRecord({
      ...formData,
    });

    if (res) {
      toast.success("Medical Record created successfully");
      navigate("/medical-record");
    }
  };

  return (
    <div className="col-span-12">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-6 bg-white shadow-lg py-8 px-6 rounded-lg h-fit">
            <h4 className="f-h4 text-center">Add Medical Record</h4>
            <br />
            <div className="mt-0">
              <InputSelect
                label="Patient"
                name="patient"
                value={formData.idPatient}
                handleChange={handleChange}
                placeholder="Patient"
                required={true}
                options={[
                  { value: "1", label: "Patient 1" },
                  { value: "2", label: "Patient 2" },
                ]}
              />
            </div>
            <div className="mt-2">
              <InputTextarea
                label="Description"
                name="description"
                value={formData.description}
                handleChange={handleChange}
                placeholder="Description"
                type="text"
                required={true}
                rows={3}
              />
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 bg-white shadow-lg py-8 px-6 rounded-lg h-fit">
            <div className="mt-2">
              <InputImage
                label="Medical Image"
                name="image"
                value={formData.image}
                preview={preview}
                handleChange={handleFileChange}
                required={true}
              />
            </div>

            <div className="mt-4 flex gap-4">
              <Button
                className="grow"
                color="neutral"
                onClick={() => {
                  navigate("/medical-record");
                }}
                type="button"
              >
                Cancel
              </Button>
              <Button
                className="bg-primary-main grow"
                color="neutral"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
