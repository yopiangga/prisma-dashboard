import { Button, Input, useTheme } from "react-daisyui";
import { useContext, useState } from "react";
import { UsersServices } from "src/services/UsersServices";
import { LoadingContext } from "src/context/LoadingContext";
import { UserContext } from "src/context/UserContext";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { version } from "src/config/Version";
import { FiEye, FiEyeOff } from "react-icons/fi";

export function SignInPage() {
  const usersServices = new UsersServices();

  const { loading, setLoading } = useContext(LoadingContext);

  const [showPassword, setShowPassword] = useState(false);

  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setAuth({ ...auth, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    // const res = await usersServices.SignIn({
    //   email: auth.email,
    //   password: auth.password,
    // });

    // setLoading(false);

    // if (res?.message != null) {
    //   toast.error(res.message[0]);
    // } else if (res) {
    //   const payload = JWTPayload(res.token);

    //   if (payload) {
    //     toast.success("Success sign in");
    //     document.cookie = `token=${res.token}`;
    //     window.location.href = "/";
    //   }
    // }
  };

  return (
    <div
      className="grid grid-cols-12 min-h-screen overflow-hidden"
      data-theme="light"
    >
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="lg:col-span-5 col-span-12 bg-white lg:px-8 px-4 lg:py-10 py-5">
        <div className="flex justify-between">
          <div className="">
            {/* <img src={imageLogo} alt="My Image" width="150" /> */}
          </div>
        </div>
        <div className="text-center text-neutral-900 mt-8">
          <h1 className="f-h1">Hi There!</h1>
          <p className="f-p1-r">Welcome to Dismore Dashboard</p>
          <p className="f-p2-r">v {version}</p>
        </div>

        <div className="w-11/12 mx-auto mt-10">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="f-p1-r mb-1 text-neutral-1000">Email</label>
              <Input
                placeholder="example@email.com"
                className="w-full"
                onChange={handleChange}
                value={auth.email}
                type="email"
                name="email"
                required
              />
            </div>
            <div className="mt-4 flex flex-col">
              <label className="f-p1-r mb-1 text-neutral-1000">Password</label>
              <div className="relative flex items-center">
                {!showPassword ? (
                  <button
                    type="button"
                    className="absolute right-4"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    <FiEye />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="absolute right-4"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    <FiEyeOff />
                  </button>
                )}
                <Input
                  placeholder="******"
                  className="w-full"
                  onChange={handleChange}
                  value={auth.password}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end text-primary-main">
              <a className="f-p2-m">Forgot Password?</a>
            </div>
            <div className="mt-4">
              <Button className="w-full bg-primary-main" color="neutral">
                Submit
              </Button>
            </div>
            <div className="mt-4 flex justify-center">
              <p href="" className="text-center f-p2-r">
                Create an account?{" "}
                <a className="f-p2-m text-primary-main">Contact Us</a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="lg:col-span-7 lg:block relative hidden">
        <div className="w-full h-full absolute">
          {/* <img src={imageBackground} alt="My Image" className="h-full w-full" /> */}
        </div>
        <div className="absolute right-10 bottom-10 text-secondary-main text-right p-10 w-3/4">
          <h1 className="f-h1">
            There us no love sincerer than the love of food
          </h1>
          <p className="f-p1-m">- George Bernard Shaw, Author.</p>
        </div>
      </div>
    </div>
  );
}
