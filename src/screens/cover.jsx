import React from "react";

export default function CoverScreen({ onClick }) {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="max-w-3xl h-screen flex flex-col items-center justify-evenly overflow-auto">
        <button onClick={onClick}>Open</button>
      </div>
    </div>
  );
}
