import React from "react";

export default function CoverScreen({ kepada, onClick }) {
  return (
    <div className="w-full h-screen flex justify-center items-center overflow-hidden">
      <div className="w-full max-w-3xl h-screen flex flex-col items-center justify-start overflow-hidden relative z-0">
        <div className="w-full -z-20 absolute top-0">
          <div className="absolute bg-[#000000] w-full h-full opacity-60 -z-0"></div>
          <img
            src="./photos/cover.jpg"
            alt="cover"
            className="object-cover inset-0 h-screen md:h-auto md:hidden w-full"
          />
          <img
            src="./photos/cover-md.jpg"
            alt="cover"
            className="object-cover inset-0 h-screen md:h-auto hidden md:flex w-full 2xl:h-screen"
          />
        </div>
        <div className="font-Cardo text-center text-white z-20 p-28 md:p-20 2xl:p-32">
          <p className="font-Montserrat text-lg">The Wedding of</p>
          <div className="text-4xl text-accent tracking-wide">
            <p>Mario</p>
            <p>&</p>
            <p>Venny</p>
          </div>
        </div>
        <div className="w-full overflow-hidden flex flex-col items-center space-y-4 pt-20 md:pt-16 2xl:pt-24">
          <div className="mx-4 px-2 lg:px-28 py-3 text-center z-10 flex-col font-Cardo">
            <p className="text-white text-sm lg:text-base">
              Kepada Yth. <br />
              Bapak/Ibu/Saudara/i
            </p>
            <p className="text-xl font-medium text-white my-4 md:my-2">
              {kepada}
            </p>
            <p className="text-white text-sm lg:text-base px-3">
              Tanpa mengurangi rasa hormat, kami mengundang anda untuk
              menghadiri acara pernikahan kami.
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
