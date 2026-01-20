import React from "react";
import active1 from "../assets/active1.png";
import block1 from "../assets/block1.png";
import scan from "./assets/scan.png";

const Table = ({ data }) => {
  return (
    <div>
      <div className="overflow-x-auto ">
        <table className="min-w-[1200px] w-full">
          <thead>
            <tr>
              <th className="pr-3 py-2 w-[15%]">
                <div className="bg-[#F7F8F8]  px-3 border-b border-r border-[#E6E6E8] text-[#8C8E9C] font-semibold text-sm py-2  text-left">
                  User Details
                </div>
              </th>

              <th className="px-3 py-2 w-[25%]">
                <div className="bg-[#F7F8F8] border-b border-r border-[#E6E6E8] text-[#8C8E9C] font-semibold text-sm py-2 text-center">
                  Email
                </div>
              </th>

              <th className="px-3 py-2 w-[25%]">
                <div className="bg-[#F7F8F8] border-b border-r border-[#E6E6E8] text-[#8C8E9C] font-semibold text-sm py-2 text-center">
                  Location
                </div>
              </th>

              <th className="px-3 py-2 w-[10%]">
                <div className="bg-[#F7F8F8]  border-b border-r border-[#E6E6E8] text-[#8C8E9C] font-semibold text-sm py-2 text-center">
                  Token Number
                </div>
              </th>

              <th className="pl-3 py-2  w-[10%]">
                <div className="bg-[#F7F8F8] border-b border-r border-[#E6E6E8] text-[#8C8E9C] font-semibold text-sm py-2 text-center">
                  Status
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="border-b border-r  border-[#E6E6E8] ">
                  <div className="  px-3  text-[#8C8E9C] font-semibold text-sm py-2 text-left">
                    {item.name}
                  </div>
                </td>
                <td className="border-b border-r border-[#E6E6E8] ">
                  <div className="   text-[#8C8E9C] font-semibold text-sm py-2 text-center">
                    {item.email}
                  </div>
                </td>
                <td className="border-b border-r border-[#E6E6E8] ">
                  <div className=" px-6  text-[#8C8E9C] font-semibold text-sm py-2 text-center">
                    {item.location}
                  </div>
                </td>
                <td className="border-b border-r border-[#E6E6E8] ">
                  <div className="flex gap-1 justify-center items-center  text-[#8C8E9C] font-semibold text-sm py-2 text-center">
                    {item.token}
                    <div className="bg-[#EFEFEF] rounded-[4px]  p-1">
                      <img src={scan} alt="" className="h-5" />
                    </div>
                  </div>
                </td>
                <td className="border-b border-r border-[#E6E6E8] ">
                  <div className=" font-semibold flex justify-center text-sm py-2 text-center">
                    <button
                      className={`
                        ${
                          item.status === "Active"
                            ? "bg-[#C7E9410D] border-[#C7E941] border text-[#C7E941]"
                            : "text-[#EA4334] bg-[#EA433426]"
                        }
                          flex items-center gap-0.5   px-2.5 py-1 rounded-full `}
                    >
                      {item.status === "Active" && (
                        <img src={active1} alt="" className="h-3" />
                      )}
                      {item.status === "Block" && (
                        <img src={block1} alt="" className="h-3" />
                      )}
                      {item.status}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
