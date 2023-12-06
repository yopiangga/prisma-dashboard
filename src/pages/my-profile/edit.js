import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ButtonComponent } from "src/components/button";
import { InputDefault } from "src/components/input/input-default";

export function MyProfileEditPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ name: "" });

  useEffect(() => {}, []);

  //   async function fetchProfile() {
  //     const res = await userServices.GetProfile();

  //     if (res.code == 200) {
  //       setForm(res.data);
  //     } else {
  //       toast.error("Gagal mengambil data");
  //     }
  //   }

  function handleChange(e) {
    if (e.target.name == "image") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0],
        preview: URL.createObjectURL(e.target.files[0]),
      });
      return;
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // const res = await userServices.UpdateProfile({
    //   name: formData.name,
    // });

    // if (res.code == 200) {
    //   toast.success("Berhasil mengubah data");
    //   navigate(-1);
    // } else {
    //   toast.error("Gagal mengubah data");
    // }
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
              <ButtonComponent
                color="bg-slate-400"
                action={() => {
                  navigate("/my-profile");
                }}
                title={"Cancel"}
                type="button"
              />
              <ButtonComponent type="submit" title={"Submit"} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
