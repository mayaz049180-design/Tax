import React from "react";
import FileCard from "./components/FileCard";
import Search from "../../Components/Common/Search";

const Files = () => {
  return (
    <div>
      <div className="flex justify-end py-4">
        <Search />
      </div>
      <div className="grid gap-4  grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <FileCard />
        <FileCard />
        <FileCard />
      </div>
    </div>
  );
};

export default Files;
