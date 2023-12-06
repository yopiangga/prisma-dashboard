import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputDefault } from "src/components/input/input-default";
import { Button } from "react-daisyui";

export function MyProfileEditPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ name: "" });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="col-span-12">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-6 bg-white shadow-lg py-8 px-6 rounded-lg h-fit">
            <h4 className="f-h4 text-center">Edit Profile</h4>
            <br />
            <div className="mt-0">
              <InputDefault
                color="dark"
                label={"Nama"}
                name={"name"}
                value={formData.name}
                handleChange={handleChange}
                type={"text"}
                required={true}
                placeholder={"Nama admin"}
              />
            </div>

            <div className="mt-4 flex gap-4">
              <Button
                className="grow"
                color="neutral"
                onClick={() => {
                  navigate("/me");
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
