import React from "react";

export default function CoverScreen({ kepada, onClick }) {
  return (
    <div className="w-full h-screen flex justify-center items-center overflow-hidden">
      <div className="w-full max-w-3xl h-screen flex flex-col items-center justify-center overflow-hidden relative z-0">
        <div className="w-full flex flex-col justify-center items-center absolute -z-10 object-contain ">
          <div className="absolute bg-[#0E1A0A] w-full h-full opacity-60"></div>
          <img src="./photos/cover.png" alt="cover" className="w-full" />
        </div>
        <div className="w-full absolute overflow-hidden flex flex-col items-center space-y-4 bottom-6">
          <div className="bg-[#161D0E] bg-opacity-50 backdrop-blur-sm rounded-xl mx-4 px-2 lg:px-28 py-3 text-center z-10 flex-col">
            <p className="font-Poppins text-white text-sm lg:text-base">
              Yth. Bapak/Ibu/Saudara/i
            </p>
            <p className="text-xl font-bold font-Poppins text-white my-4">
              {kepada}
            </p>
            <p className="font-Poppins text-white text-sm lg:text-base">
              Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu untuk
              menghadiri acara pernikahan anak kami.
            </p>
          </div>
          <button
            onClick={onClick}
            className="bg-white font-medium backdrop-blur-sm px-6 py-3 rounded-full font-Poppins flex gap-1"
          >
            <span>Buka Undangan</span>
            <img
              src="./icons/chevron-right.png"
              alt="cover"
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
