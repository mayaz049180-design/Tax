import React from "react";
import LogoutModal from "../../Components/Modal/LogoutModal";

const Dashobard = () => {
  const dashboardStats = [
    {
      label: "All Users",
      value: 5500,
    },
    {
      label: "Active Users",
      value: 5000,
    },
    {
      label: "Block Users",
      value: 500,
    },
    {
      label: "Tax Advisors",
      value: 1050,
    },
    {
      label: "Upload Files",
      value: 50,
    },
    {
      label: "All Users",
      value: 5500,
    },
    {
      label: "Active Users",
      value: 5000,
    },
    {
      label: "Block Users",
      value: 500,
    },
    {
      label: "Tax Advisors",
      value: 1050,
    },
    {
      label: "Upload Files",
      value: 50,
    },
  ];

  return (
    <>
      <div>
        <div className="my-4">
          <p className="text-[36px] font-medium text-[#1A1A1A]">
            Welcome back, Scott J.
          </p>
          <p className="text-sm text-[#8E8F96]">
            <span className="text-[#1A1A1A] font-medium mr-0.5 ">
              Sunday, 23 June 2024.
            </span>
            Here is a quick snapshot of the overall business
          </p>
        </div>
        <div className="grid-cols-1 pt-4 pb-4 gap-6 grid md:grid-cols-3 lg:mr-9">
          {dashboardStats.map((item, index) => (
            <div className="border py-3 flex justify-center flex-col border-black/10 rounded-xl shadow-[0_33.12px_63.37px_rgba(176,183,195,0.14),_0_1.44px_4.32px_rgba(0,0,0,0.12)]">
              <p className="text-[32px] text-[#C7E941] font-medium px-6">
                {item.label}
              </p>
              <p className="text-[32px] text-[#2E2C34] font-medium px-6">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashobard;
