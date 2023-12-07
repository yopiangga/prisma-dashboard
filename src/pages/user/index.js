import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ActionIndex } from "src/components/action-index";
import { TableComponent } from "src/components/table";

export function UserPage() {
  const navigate = useNavigate();

  const [data, setData] = useState([
    {
      id: 1,
      name: "Admin",
      email: "admin@email.com",
      role: "admin",
      hospitalId: 1,
    },
  ]);

  const headerTable = [
    { code: "id", name: "ID" },
    { code: "name", name: "Name" },
    { code: "email", name: "Email" },
    { code: "role", name: "Role" },
    { code: "hospitalId", name: "Hospital ID" },
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
        labelButton="Add User"
        routeActionButton={"/user/add"}
      />

      <br />

      <TableComponent
        header={headerTable}
        action={[
          {
            color: "info",
            name: "Edit",
            callback: (id) => {
              navigate("/user/edit/" + id);
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
