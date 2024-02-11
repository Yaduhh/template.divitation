import classNames from "classnames";
import React, { useState } from "react";
import { FaPauseCircle } from "react-icons/fa";
import { MdOutlineFullscreen, MdOutlineFullscreenExit } from "react-icons/md";

export default function DiskAudio({ playSong, setplaySong, src, className }) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          setIsFullscreen(false);
        });
      }
    }
  };

  return (
    <div className="relative flex justify-end pr-8">
      <button
        onClick={toggleFullscreen}
        className="p-0.5 bg-primary border-2 border-[#000000] backdrop-blur-sm text-white fixed z-30 bottom-[138px] rounded-full"
      >
        {isFullscreen ? (
          <MdOutlineFullscreen size={35} className="text-white" />
        ) : (
          <MdOutlineFullscreenExit size={35} className="text-white" />
        )}
      </button>
      <div
        className={classNames(
          `play-pause-wraper fixed bottom-[85px] z-[99999]`
        )}
      >
        <audio hidden autoPlay loop id="audio">
          <source src={src} type="audio/mpeg" />
        </audio>
        <button
          id="play-pause-btn"
          className={classNames(
            `w-8 h-8 rounded-full border-2 border-base-300 flex items-center justify-center  p-1 box-content`,
            className
          )}
          onClick={() => setplaySong(!playSong)}
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
