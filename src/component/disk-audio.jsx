import classNames from "classnames";
import React from "react";
import { FaPauseCircle } from "react-icons/fa";

export default function DiskAudio({ playSong, setplaySong, src, className }) {
  return (
    <div className="relative flex justify-end pr-8">
      <div
        className={classNames(`play-pause-wraper fixed bottom-24 z-[99999]`)}
      >
        <audio hidden autoPlay loop id="audio">
          <source src={src} type="audio/mpeg" />
        </audio>
        <button
          id="play-pause-btn"
          className={classNames(
            `w-10 h-10 rounded-full border-2 border-base-300 flex items-center justify-center  p-1 box-content`,
            className
          )}
          onClick={() => setplaySong((prev) => !prev)}
        >
          <div className="rounded-full" id="disc">
            {playSong ? (
              <img alt="" src="/disc-audio.png" />
            ) : (
              <div className="relative">
                <FaPauseCircle
                  size={28}
                  className="text-white z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                />
                <img alt="" src="/disc-audio.png" className="" />
              </div>
            )}
          </div>
        </button>
      </div>
    </div>
  );
}
