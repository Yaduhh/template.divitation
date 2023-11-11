import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Aos from "aos";
import NavigationBottom from "./components/bottom-navigation";
import copyToClipboard from "./helpers/copyClipboard";
import DiskAudio from "./components/disk-audio";
import classNames from "classnames";
import CoverScreen from "./screens/cover";
import { FaPauseCircle } from "react-icons/fa";

function App() {
  const [openCover, setOpenCover] = useState(false);
  const [end, setEnd] = useState(false);
  const [playSong, setplaySong] = useState(true);

  useEffect(() => {
    Aos.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      delay: 0,
      duration: 400,
      easing: "ease",
      once: false,
      mirror: true,
      anchorPlacement: "top-bottom",
    });
    handleAudio();
  }, [playSong]);

  function submitGreeting(e) {
    e.preventDefault();

    const name = e.target.user.value;
    const message = e.target.text.value;

    // Membuat pesan yang akan dikirimkan melalui URL WhatsApp
    const greetingMessage = `Halo tasya 👋 aku ${name} mau ngucapin, ${message}`;

    // Membentuk URL WhatsApp
    const whatsappURL = `https://wa.me/6285757841069?text=${encodeURIComponent(
      greetingMessage
    )}`;

    // Mengarahkan pengguna ke URL WhatsApp
    window.location.href = whatsappURL;
  }

  function handleAudio() {
    const audio = document.getElementById("audio");
    const disc = document.getElementById("disc");
    if (playSong) {
      audio
        .play()
        .then(() => setplaySong(true))
        .catch(() => setplaySong(false));

      disc.classList.add("animate-spin");
    } else {
      disc.classList.remove("animate-spin");
      audio.pause();
      setplaySong(false);
    }
  }

  function handleCover() {
    setOpenCover(true);
    handleAudio();
  }

  const queryParameters = new URLSearchParams(window.location.search);
  const kepada = queryParameters.get("to");

  return (
    <>
      {/* Cover */}
      <div
        className={
          end
            ? "hidden"
            : "flex justify-center bg-base-200 h-screen overflow-hidden bg-[#d5e9e2]"
        }
        onTransitionEnd={() => setEnd(true)}
      >
        <div
          id="cover"
          className={classNames(
            `relative z-50 h-[112%] 2xl:h-screen w-screen md:w-[448px] overflow-hidden bg-white`,
            openCover
              ? "opacity-0 -top-[1000px] transition-all duration-1000 ease-in-out"
              : "top-0 opacity-100 transition-all duration-1000 ease-in-out"
          )}
        >
          <CoverScreen kepada={kepada} onClick={() => handleCover()} />
        </div>
      </div>
      {/* end Cover */}
      {/* undangan */}
      <div
        className={classNames(
          !openCover ? "hidden" : "flex justify-center w-full bg-[#d5e9e2]"
        )}
      >
        <div className="w-[428px] h-full relative">
          <DiskAudio
            className="bg-[#3C6255]"
            src={"audio/maherzain.mp3"}
            playSong={playSong}
            setplaySong={setplaySong}
          />

          <NavigationBottom className={"bg-[#3C6255]"} />

          <section
            className="h-screen bg-[#F5F0F4] flex flex-col items-center justify-evenly"
            id="home"
          >
            Home
          </section>
          <section
            className="h-screen bg-[#F5F0F4] flex flex-col items-center justify-evenly"
            id="pasangan"
          >
            Pasangan
          </section>
          <section
            className="h-screen bg-[#F5F0F4] flex flex-col items-center justify-evenly"
            id="acara"
          >
            Acara
          </section>
          <section
            className="h-screen bg-[#F5F0F4] flex flex-col items-center justify-evenly"
            id="galeri"
          >
            Galeri
          </section>
          <section
            className="h-screen bg-[#F5F0F4] flex flex-col items-center justify-evenly"
            id="ucapan"
          >
            Ucapan
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
