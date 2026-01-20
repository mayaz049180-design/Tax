import React from "react";
import Text from "../../../Components/Common/Text";
import ModalBtn from "../../../Components/Common/ModalBtn";

const TaxModal = ({ closeModal }) => {
  return (
    <>
      <div className="bg-[#1A1A1A99] fixed  flex px-4 py-4  overflow-y-auto inset-0 z-99  h-screen w-full">
        <div className="bg-white m-auto w-full lg:w-[35%] md:w-[50%] rounded-[16px] p-8">
          <div className="space-y-3">
            <Text
              label="Tax Advisors Name"
              placeholder="Brooklyn Simmons "
              type="text"
            />
            <Text
              label="Email Address"
              placeholder="hi@example.com "
              type="email"
            />
            <Text label="Phone No" placeholder="(219) 555-0114 " type="email" />
            <Text
              label="Location"
              placeholder="6391 Elgin St. Celina, Delaware 10299 "
              type="text"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <ModalBtn bg="bg-white" label="Cancel" close={closeModal} />
            <ModalBtn bg="bg-[#C7E941]" label="Add" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TaxModal;
