import React from "react";

export default function CoverScreen({ kepada, onClick }) {
  return (
    <div className="w-full h-screen flex justify-center items-center overflow-hidden">
      <div className="w-full max-w-3xl h-screen flex flex-col items-center justify-center overflow-hidden relative z-0">
        <div className="w-full flex flex-col justify-center items-center absolute -z-10 md:hidden">
          <img src="./assets/coverm.png" alt="cover" />
        </div>
        <div className="w-full hidden flex-col justify-center items-center absolute -z-10 md:flex lg:flex xl:flex">
          <img src="./assets/covermd.png" alt="cover" />
        </div>
        <div className="w-full absolute overflow-hidden flex flex-col items-center space-y-4 bottom-32">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl px-28 py-3 border-primary text-center border z-10">
            <p className="font-Cardo text-secondary">Kepada Sdr</p>
            <p className="text-2xl font-bold font-Cardo">{kepada}</p>
          </div>
          <button
            onClick={onClick}
            className="bg-third/70 text-white font-medium backdrop-blur-sm px-6 py-3 rounded-xl text-xl font-Cardo"
          >
            Buka Undangan
          </button>
        </div>
      </div>
    </div>
  );
}
