import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserServices } from "src/services/UserServices";

export function MyProfilePage() {
  const navigate = useNavigate();

  const userServices = new UserServices();

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const res = await userServices.myProfile();

    if (res) setUser(res.data);
  };

  return (
    <div className="col-span-12">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 sm:col-span-6 bg-white shadow-s1 w-full rounded-lg flex p-5 gap-5">
          <div className="w-fit">
            <img
              src={user?.image || "/assets/images/user.png"}
              className="w-28 rounded-full"
            />
          </div>
          <div className="grow flex flex-col justify-center">
            <h4 className="font-semibold f-h4 line-clamp-2">
              {user?.name || "User Guest"}
            </h4>
            <p className="font-semibold f-p2-r">
              {user?.email || "Email Guest"}
            </p>

            <button
              onClick={() => {
                navigate("/me/edit");
              }}
              className="f-p2-r bg-primary-main mt-3 py-1 px-4 w-fit rounded-full text-white"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
