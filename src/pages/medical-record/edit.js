import { useEffect, useState } from "react";
import { Button } from "react-daisyui";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { InputDicom } from "src/components/input/input-dicom";
import { InputImage } from "src/components/input/input-image";
import { InputSelect } from "src/components/input/input-select";
import { InputTextarea } from "src/components/input/input-textarea";
import { MedicalRecordServices } from "src/services/MedicalRecordServices";

export function MedicalRecordEditPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const medicalRecordServices = new MedicalRecordServices();

  const [formData, setFormData] = useState({});
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    fetch();
  }, []);

  async function fetch() {
    const res = await medicalRecordServices.getMedicalRecord(id);

    if (res) {
      setFormData(res.data);
      setPreview(res.data.image);
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await medicalRecordServices.updateMedicalRecord({
      id: id,
      image: formData.image,
      description: formData.description,
    });

    if (res) {
      toast.success("Medical Record updated successfully");
      navigate("/medical-record");
    }
  };

  return (
    <div className="col-span-12">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-6 bg-white shadow-lg py-8 px-6 rounded-lg h-fit">
            <h4 className="f-h4 text-center">Edit Medical Record</h4>
            <br />
            <div className="mt-0">
              <InputSelect
                label="Patient"
                name="patient"
                value={formData.patient}
                handleChange={handleChange}
                placeholder="Patient"
                required={true}
                readonly={true}
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
              <InputDicom
                label="Hospital Image"
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
