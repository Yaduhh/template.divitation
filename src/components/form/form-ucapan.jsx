import React from "react";

export default function FormUcapan({ onSubmit }) {
  return (
    <form
      className="text-center mt-10 2xl:mt-20 md:mt-5 z-10 w-full"
      onSubmit={(e) => {
        // submitGreeting(e, ucapan, setUcapan);
      }}
    >
      <div
        className="text-4xl 2xl:text-6xl font-Dancingscript"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        Ucapin
        <br /> ke Pengantin
      </div>
      <div
        className="text-center mt-8 w-full flex-col items-center px-10 xl:px-20"
        data-aos="fade-up"
        data-aos-duration="2500"
      >
        <input
          type="text"
          name="user"
          placeholder="Nama anda"
          className="w-full px-4 py-2 rounded-md border-[#1A120B] text-[#1B1A17]"
        />
        <div>
          <textarea
            name="text"
            placeholder="Ucapan untuk mempelai"
            className="w-full text-[#1B1A17] px-4 py-2 rounded-md textarea-bordered border-[#1A120B] mt-4"
          ></textarea>
        </div>
        <div className="flex mt-4">
          <button
            className={
              "bg-[#292735] rounded-full px-5 py-1 font-bold text-[#E5E6E3]"
            }
            type="submit"
          >
            Kirim
          </button>
        </div>
      </div>
    </form>
  );
}
