import React from "react";

export default function CoverScreen({ onClick }) {
  return (
    <div className="w-full h-screen flex justify-center items-center overflow-hidden">
      <div className="w-full max-w-3xl h-screen flex flex-col items-center justify-center overflow-hidden relative z-0">
        <div className="w-full flex flex-col justify-center items-center absolute -z-10 md:hidden">
          <img src="./assets/covermobile.png" alt="cover" />
        </div>
        <button
          onClick={onClick}
          className="bg-third/70 text-white font-medium backdrop-blur-sm px-6 py-3 rounded-xl text-xl absolute bottom-[10%]"
          style={{ fontFamily: "Cardo" }}
        >
          Buka Undangan
        </button>
        <div className="w-full hidden flex-col justify-center items-center absolute -z-10 md:flex">
          <img src="./assets/covermd.png" alt="cover" />
        </div>
        <button
          onClick={onClick}
          className="bg-third/70 text-white font-medium backdrop-blur-sm px-6 py-3 rounded-xl text-xl absolute bottom-[10%]"
          style={{ fontFamily: "Cardo" }}
        >
          Buka Undangan
        </button>
      </div>
    </div>
  );
}
