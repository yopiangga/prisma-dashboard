import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ActionIndex } from "src/components/action-index";
import { TableComponent } from "src/components/table";

export function HospitalPage() {
  const navigate = useNavigate();

  const [data, setData] = useState([
    {
      id: 1,
      name: "RSUD Dr. Soetomo",
      description: "Rumah Sakit Umum Daerah Dr. Soetomo Surabaya",
      address:
        "Jl. Mayjen Prof. Dr. Moestopo No.6-8, Airlangga, Kec. Gubeng, Kota SBY, Jawa Timur 60286",
      noTelp: "0315501078",
      image: "https://www.rsudrsoetomo.jatimprov.go.id/images/logo.png",
    },
  ]);

  const headerTable = [
    { code: "id", name: "ID" },
    { code: "name", name: "Name" },
    { code: "description", name: "Description" },
    { code: "address", name: "Address" },
    { code: "noTelp", name: "No Telephone" },
    { code: "image", name: "Image", type: "image" },
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
        labelButton="Add Hospital"
        routeActionButton={"/hospital/add"}
      />

      <br />

      <TableComponent
        header={headerTable}
        action={[
          {
            color: "info",
            name: "Edit",
            callback: (id) => {
              navigate("/hospital/edit/" + id);
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

      {/* <div className="flex justify-end">
        <PaginationComponent
          active={offset}
          data={Array.from(
            { length: products?.meta?.total / 20 + 1 },
            (_, index) => index + 1
          )}
          callback={(index) => {
            fetch(index * 20);
            setOffset(index);
          }}
        />
      </div> */}
    </div>
  );
}
