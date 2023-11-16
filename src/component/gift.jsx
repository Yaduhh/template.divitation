import React from "react";
import { PiCopyFill } from "react-icons/pi";

const Gift = ({ bank, namerekening, norekening }) => {
  return (
    <>
      <div
        className="w-full outline outline-2 outline-secondary rounded-xl bg-white px-6 py-4 flex flex-col gap-1 overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <img
          src={bank}
          alt="bank"
          width={60}
          data-aos="fade-up"
          data-aos-duration="1000"
          className="mb-1"
        />
        <div className="space-y-1" data-aos="fade-up" data-aos-duration="2000">
          <p className="uppercase text-xl text-primary font-medium">
            {namerekening}
          </p>
          <div className="w-full bg-secondary h-[0.5px]"></div>
          <p className="text-lg text-secondary">{norekening}</p>
        </div>
        <div
          className="flex items-center space-x-1 text-primary place-content-end"
          data-aos="fade-up"
          data-aos-duration="2500"
        >
          <div>Salin</div>
          <PiCopyFill size={30} />
        </div>
      </div>
    </>
  );
};

export default Gift;
