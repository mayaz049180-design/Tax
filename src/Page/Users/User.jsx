import React, { useEffect, useState } from "react";
import Btn from "./components/Btn";
import active from "./assets/active.png";
import block from "./assets/block.png";
import active1 from "./assets/active1.png";
import block1 from "./assets/block1.png";
import AddBtn from "../../Components/Common/AddBtn";
import Search from "../../Components/Common/Search";
import { useOutletContext } from "react-router-dom";
import Table from "./components/Table";
import UserModal from "./components/UserModal";

const User = () => {
  const originalData = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      location: `6391 Elgin St.
Celina, Delaware 10299
USA`,
      token: "12345",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      location: `221B Baker Street
Westminster, London NW1 6XE
United Kingdom`,
      token: "67890",
      status: "Block",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael.johnson@example.com",
      location: `500 George Street
Sydney CBD, New South Wales 2000
Australia`,
      token: "54321",
      status: "Active",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@example.com",
      location: `10 Queen Street
Downtown, Toronto, Ontario M5H 2N2
Canada`,
      token: "98765",
      status: "Block",
    },
    {
      id: 5,
      name: "David Brown",
      email: "david.brown@example.com",
      location: `Alexanderplatz 1
Mitte, 10178 Berlin
Germany`,
      token: "24680",
      status: "Active",
    },
    {
      id: 6,
      name: "Sophia Wilson",
      email: "sophia.wilson@example.com",
      location: `55 Rue du Faubourg Saint-Honoré
8th Arrondissement, 75008 Paris
France`,
      token: "13579",
      status: "Block",
    },
  ];
  const [data, setData] = useState(originalData);
  const [activeBtn, setActiveBtn] = useState(false);
  const [userModal, setUserModal] = useState(false);
  const [blockBtn, setBlockBtn] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { title, setTitle } = useOutletContext();

  const handleActiveBtn = () => {
    if (blockBtn) {
      setBlockBtn(false);
    }
    setActiveBtn((prev) => !prev);
  };
  const handleBlockBtn = () => {
    if (activeBtn) {
      setActiveBtn(false);
    }
    setBlockBtn((prev) => !prev);
  };
  const handleUserModal = () => {
    setUserModal((prev) => !prev);
  };
  const handleInput = (e) => {
    setInputValue(e.target.value);
    console.log("hello");
  };
  useEffect(() => {
    if (activeBtn) {
      setTitle("Active Users");
      setData(
        originalData.filter(
          (item) => item.status.toLocaleLowerCase() === "active",
        ),
      );
    } else if (blockBtn) {
      setTitle("Blocked Users");
      setData(
        originalData.filter(
          (item) => item.status.toLocaleLowerCase() === "block",
        ),
      );
    } else {
      setTitle("All Users");
      setData(originalData);
    }
  }, [activeBtn, blockBtn]);
  useEffect(() => {
    if (userModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup (VERY important)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [userModal]);
  useEffect(() => {
    if (inputValue === "") {
      setData(originalData);
      return;
    }
    const newData = originalData.filter((item) =>
      item.token.includes(inputValue),
    );
    setData(newData);
  }, [inputValue]);
  return (
    <div>
      <div className="pt-5 pb-8 flex gap-3 flex-col-reverse md:flex-row">
        <div className="flex gap-3">
          <Btn
            label="active users"
            img={active}
            img1={active1}
            handleBtn={handleActiveBtn}
            status={activeBtn}
            bg="text-[#C7E941]"
          />
          <Btn
            label="block users"
            img={block}
            img1={block1}
            handleBtn={handleBlockBtn}
            status={blockBtn}
            bg="text-[#EA4334]"
          />
        </div>
        <div className=" flex gap-3 flex-wrap md:ml-auto">
          <AddBtn title="Add Users" openModal={handleUserModal} />
          <Search onChange={handleInput} value={inputValue} />
        </div>
      </div>
      <div>
        <Table data={data} />
      </div>
      {userModal && <UserModal closeModal={handleUserModal} />}
    </div>
  );
};

export default User;
