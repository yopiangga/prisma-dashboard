import "./App.css";
import React from "react";
import { useContext, useEffect, useState } from "react";
import { AppContextProvider } from "./context/AppContextProvider";
import { UserContext } from "./context/UserContext";
import LoadComponent from "./components/load";
import AuthRouterPage from "./router/AuthRouterPage";
import { cookies } from "./services/config";
import { UsersServices } from "./services/UsersServices";
import OperatorRouterPage from "./router/OperatorRouterPage";
import AdminRouterPage from "./router/AdminRouterPage";

// const queryClient = new QueryClient();

function App() {
  return (
    <AppContextProvider>
      <UserManager />
    </AppContextProvider>
  );
}

export default App;

function UserManager() {
  // const userServices = new UsersServices();
  const { user, setUser } = useContext(UserContext);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    // fetch();
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);

  // async function fetch() {
  //   // get cookies token
  //   const payload = JWTPayload(cookies?.token ?? "");
  //   console.log(payload);
  //   if (payload) {
  //     setUser({
  //       name: payload.name,
  //       email: payload.email,
  //       userRole: payload.user_role,
  //     });
  //   }
  //   setLoad(false);
  // }

  if (load) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-white">
        <LoadComponent />
      </div>
    );
  } else if (user == null && load == false) {
    return <AuthRouterPage />;
  } else if (user.role === "operator") {
    return <OperatorRouterPage />;
  } else if (user.role === "admin") {
    return <AdminRouterPage />;
  } else {
    return <h1>404 Page</h1>;
  }
}
