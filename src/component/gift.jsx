import React from "react";
import { PiCopyFill } from "react-icons/pi";

const Gift = ({ bank, namerekening, norekening }) => {
  return (
    <>
      <div className="w-full outline outline-2 outline-secondary rounded-xl bg-white p-6 flex flex-col gap-1">
        <img src={bank} alt="bca" width={60} />
        <div className="space-y-1">
          <p className="uppercase text-xl text-primary">{namerekening}</p>
          <div className="w-full bg-secondary h-[0.5px]"></div>
          <p className="text-lg text-secondary">{norekening}</p>
        </div>
        <div className="flex items-center space-x-1 text-primary place-content-end">
          <div>Salin</div>
          <PiCopyFill size={30} />
        </div>
      </div>
    </>
  );
};

export default Gift;
