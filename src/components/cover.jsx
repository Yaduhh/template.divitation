import React from "react";
import { FaEnvelopeOpen } from "react-icons/fa";

export default function Cover({ kepada, onClick }) {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[428px] h-screen bg-gradient-to-b from-[#E8D8C3] to-[#F5F0F4] flex flex-col items-center justify-evenly overflow-auto">
        <img src="/hero-flower.png" alt="" />
        <div className="flex flex-col items-center">
          <p className="font-Cardo text-xl">The wedding of</p>
          <div className="flex justify-center items-center gap-2 text-4xl">
            <p className="font-DM-Serif-display">Tasya</p>
            <p className="font-Ribeye-marrow text-6xl text-white drop-shadow-[0_1.2px_1.2px_rgba(194,127,92,1)]">
              &
            </p>
            <p className="font-DM-Serif-display">Devon</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-Corinthia text-5xl">Sabtu</p>
          <p className="font-Ribeye-marrow text-3xl">28.10.2023</p>
          <p className="font-Cardo text-lg">Pukul 10.00 Wib - Selesai</p>
        </div>
        <img src="/hero-pengantin.png" alt="" />
        <div className="bg-white py-4 px-2 rounded-3xl relative -top-20">
          <img src="/rectangle-star.png" alt="" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-Cardo">
            <p className="text-sm">Kepada sdr.</p>
            <p className="text-2xl font-bold">{kepada}</p>
          </div>
          <div className="flex items-center absolute left-1/2 w-max transform -translate-x-1/2 mt-8">
            <button
              className="fade flex gap-2 py-4 px-6 bg-opacity-80 bg-[#E8D8C3] text-[#222222] outline outline-[#F3EFE0] outline-offset-2 rounded-full capitalize font-semibold"
              onClick={onClick}
            >
              <FaEnvelopeOpen className="text-[#222222]" size={20} />
              buka undangan
            </button>
          </div>
        </div>
        <div className="h-20 w-max right-0 absolute bottom-[90px] left-1/2 transform -translate-x-1/2 -translate-y-1/4"></div>
      </div>
    </div>
  );
}
