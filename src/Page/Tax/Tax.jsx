import React, { useEffect, useState } from "react";
import AddBtn from "../../Components/Common/AddBtn";
import Search from "../../Components/Common/Search";
import TaxCard from "./Component/TaxCard";
import TaxModal from "./Component/TaxModal";
import TaxDeleteModal from "./Component/TaxDeleteModal";

const Tax = () => {
  const [taxModal, setTaxModal] = useState(false);
  const [taxDeleteModal, setDeleteModal] = useState(false);

  const taxAdvisors = [
    {
      id: 1,
      name: "Brooklyn Simmons",
      email: "brooklyn.s@example.com",
      phone: "(219) 555-0114",
      location: "6391 Elgin St. Celina, Delaware 10299",
    },
    {
      id: 2,
      name: "Guy Hawkins",
      email: "guy.h@taxpros.com",
      phone: "(302) 555-0107",
      location: "2711 Ash Dr. San Jose, South Dakota 83475",
    },
    {
      id: 3,
      name: "Jane Cooper",
      email: "jane.cooper@finance.net",
      phone: "(225) 555-0118",
      location: "4140 Parker Rd. Allentown, New Mexico 31134",
    },
    {
      id: 4,
      name: "Robert Fox",
      email: "robert.fox@advisors.io",
      phone: "(208) 555-0112",
      location: "3891 Ranchview Dr. Richardson, California 62639",
    },
    {
      id: 5,
      name: "Esther Howard",
      email: "e.howard@cpa-firm.com",
      phone: "(603) 555-0123",
      location: "8502 Preston Rd. Inglewood, Maine 98380",
    },
  ];
  useEffect(() => {
    if (taxModal || taxDeleteModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup (VERY important)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [taxModal, taxDeleteModal]);
  const handleTaxModal = () => {
    setTaxModal((prev) => !prev);
  };
  const handleDeleteModal = () => {
    setDeleteModal((prev) => !prev);
  };
  return (
    <div>
      <div className="flex gap-3 flex-col sm:flex-row justify-between items-start sm:items-center sm:justify-end pt-5 ">
        <AddBtn title="tax advisor" openModal={handleTaxModal} />
        <Search />
      </div>
      <div className="grid md:grid-cols-2 2xl:grid-cols-4 xl:grid-cols-3 grid-cols-1 gap-5 my-10">
        {taxAdvisors.map((item, index) => (
          <TaxCard
            key={item.id}
            info={item}
            openModal={handleDeleteModal}
            openEditModal={handleTaxModal}
          />
        ))}
      </div>
      {taxModal && <TaxModal closeModal={handleTaxModal} />}
      {taxDeleteModal && <TaxDeleteModal closeModal={handleDeleteModal} />}
    </div>
  );
};

export default Tax;
