import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Aos from "aos";
import NavigationBottom from "./components/bottom-navigation";
import DiskAudio from "./components/disk-audio";
import classNames from "classnames";
import CoverScreen from "./screens/cover";
import { AiFillInstagram } from "react-icons/ai";
import { TbMapSearch } from "react-icons/tb";
import Countdown from "./components/coutdown";
import { LuCopy } from "react-icons/lu";

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
        <div className="w-full max-w-3xl h-full relative">
          <DiskAudio
            className="bg-[#0E0E0E]"
            src={"audio/maherzain.mp3"}
            playSong={playSong}
            setplaySong={setplaySong}
          />

          <NavigationBottom className={"bg-[#0E0E0E]"} />

          <section
            className="h-screen relative -z-0 bg-[#F5F0F4] flex flex-col items-center justify-evenly overflow-hidden"
            id="home"
          >
            <div className="absolute w-full -z-20">
              <img src="./assets/cover.jpg" alt="cover" />
            </div>
            <div className="absolute w-full -z-20 top-0 scale-125">
              <img src="./assets/awan.png" alt="awan" />
            </div>
            <div className="text-white text-center space-y-64 mt-10">
              <div>
                <h1 className="text-Cardo">THE WEDDING OF</h1>
                <h1 className="font-Parisienne text-4xl">Ahmad & Mutiara</h1>
              </div>
              <p>12 DESEMBER 2024</p>
            </div>
          </section>

          <section id="pasangan">
            <div className="h-screen bg-[#222222] flex flex-col relative gap-3 -z-0 overflow-hidden items-center justify-center">
              <div className="absolute w-full bottom-0 right-0 -z-10 blur-sm">
                <img src="./assets/hiasanpasangan.png" alt="hiasan" />
              </div>
              <div className="text-end text-white font-Cardo -mt-10 mb-2">
                <p className="text-3xl">
                  WE ARE GETTING <br />
                  MARRIED
                </p>
              </div>
              <p className="text-4xl text-white font-Parisienne">
                Ahmad Almayda
              </p>
              <div className="text-white flex items-center gap-2 font-Cardo">
                <AiFillInstagram size={25} />
                <p>@donjoni_</p>
              </div>
              <div className="text-white text-center">
                <p className="font-Courgette text-xl">
                  Putra ke tiga dari keluarga
                </p>
                <p className="font-Cardo">Bpk. Kasmadi & Ibu Suheni</p>
              </div>
              <div className="w-[65%] mt-5">
                <img src="./assets/pria.png" alt="pria" />
              </div>
            </div>
            {/* perempuan */}
            <div className="h-screen bg-[#222222] flex flex-col relative gap-3 -z-0 overflow-hidden items-center justify-center">
              <div className="absolute w-full bottom-0 left-0 -z-10 -scale-x-100 blur-sm">
                <img src="./assets/hiasanpasangan.png" alt="hiasan" />
              </div>
              <div className="text-end text-white font-Cardo -mt-10 mb-2">
                <p className="text-3xl">
                  WE ARE GETTING <br />
                  MARRIED
                </p>
              </div>
              <p className="text-4xl text-white font-Parisienne">
                Mutiara Devania
              </p>
              <div className="text-white flex items-center gap-2 font-Cardo">
                <AiFillInstagram size={25} />
                <p>@araauhuy_</p>
              </div>
              <div className="text-white text-center">
                <p className="font-Courgette text-xl">
                  Putri ke tiga dari keluarga
                </p>
                <p className="font-Cardo">Bpk. Kasmadi & Ibu Suheni</p>
              </div>
              <div className="w-[65%] mt-5">
                <img src="./assets/perempuan.png" alt="pria" />
              </div>
            </div>
          </section>

          <section
            className="h-screen relative -z-0 overflow-hidden gap-1 bg-[#222222] flex flex-col items-center justify-center"
            id="acara"
          >
            <div className="w-[50%] absolute -z-20 top-20 left-0">
              <img src="./assets/wayang1.png" alt="wayang1" />
            </div>
            <div className="w-[50%] absolute -z-20 bottom-0 right-0 -scale-x-100">
              <img src="./assets/wayang1.png" alt="wayang1" />
            </div>
            <div className="text-white text-center w-full items-start flex flex-col px-6">
              <p className="text-3xl font-Cardo">Akad</p>
              <p className="text-xl font-Ribeye-marrow">
                Pukul 07:00 - 09:00 WIB
              </p>
            </div>
            <div className="w-full px-14">
              <img src="./assets/tangan.png" alt="tangan" />
            </div>
            <div className="text-white text-center w-full items-end flex flex-col px-6">
              <p className="text-3xl font-Cardo">Resepsi</p>
              <p className="text-xl font-Ribeye-marrow">
                Pukul 09:00 - 12:00 WIB
              </p>
            </div>
            <div className="w-full relative flex flex-col place-items-center">
              <p className="text-white font-Courgette text-3xl mt-6 bg-[#222222]">
                Sabtu
              </p>
              <p className="text-4xl text-white font-Ribeye-marrow mt-2">
                12.12.2024
              </p>
              <div className="absolute top-7 w-[80%] -z-10">
                <img src="./assets/buletan.png" alt="buletan" />
              </div>
            </div>
            <div className="mt-10 mb-5 text-center text-white">
              <p className="text-xl font-Cardo font-medium ">
                Kediaman mempelai wanita
              </p>
              <p className="font-Cardo">
                Jl. Pamulang Raya 004/004 <br />
                Kec.Pamulang Kab.Palang Merah
              </p>
            </div>
            <div className="w-full px-10 pb-10 relative -z-0 place-items-center flex flex-col">
              <img src="./assets/maps.png" alt="maps" />
              <button className="px-5 py-1 rounded-2xl absolute gap-2 flex items-center bottom-14 hover:bg-amber-900 text-white text-sm z-10 bg-[#222222]">
                <TbMapSearch size={20} className="text-white" />
                Lihat dimaps
              </button>
            </div>
          </section>

          <section
            className="h-screen relative gap-4 -z-0 overflow-hidden bg-[#222222] flex flex-col items-center justify-center"
            id="galeri"
          >
            <div className="absolute top-20 left-0 -z-20">
              <img src="./assets/wayanghiasan.png" alt="hiasanwayang" />
            </div>
            <div className="absolute bottom-0 right-0 -z-20 -scale-x-100">
              <img src="./assets/wayanghiasan.png" alt="hiasanwayang" />
            </div>
            <div className="ml-28">
              <img src="./assets/cincin.png" alt="cincin" />
            </div>
            <p className="text-4xl text-white font-Cardo px-28 text-center">
              Kisah Kita Berdua
            </p>
            <div className="w-full flex justify-end gap-5 px-6">
              <div className="w-[40%]">
                <img src="./assets/foto1.png" alt="foto1" />
              </div>
              <div className="w-[40%]">
                <img src="./assets/foto2.png" alt="foto2" />
              </div>
            </div>
            <div className="w-full flex justify-start gap-5 px-6">
              <div className="w-[40%]">
                <img src="./assets/foto3.png" alt="foto3" />
              </div>
              <div className="w-[40%]">
                <img src="./assets/foto4.png" alt="foto4" />
              </div>
            </div>
          </section>

          <section
            className="h-screen relative -z-0 overflow-hidden bg-[#222222] flex flex-col items-center justify-center"
            id="ucapan"
          >
            <div className="absolute bottom-0 w-full -z-30 blur-sm opacity-75">
              <img src="./assets/bgevent.png" alt="event" />
            </div>
            <div className="text-center text-white">
              <p className="text-xl font-Parisienne">
                Terhitung mundur dari sekarang
              </p>
              <p className="text-3xl font-Courgette">Menuju Hari-H</p>
            </div>
            <div className="text-white">
              <Countdown
                targetMonth={14}
                targetDate={1}
                targetHour={2}
                targetMinute={10}
              />
            </div>
            <div className="text-white text-3xl font-Courgette text-center mt-10 mb-5">
              <p>
                Ucapan Ke <br />
                Calon Pengantin
              </p>
            </div>
            <div className="w-full px-10 flex flex-col gap-5 items-end mb-20">
              <input
                placeholder="Nama Pengirim"
                className="rounded-2xl px-5 py-2 bg-white w-full"
              />
              <textarea
                placeholder="Kalimat ucapan untuk mempelai"
                className="rounded-2xl bg-white px-5 py-2 w-full h-36"
              />
              <button className="px-5 py-2 rounded-2xl bg-amber-800 text-white hover:text-gray-500 hover:bg-amber-950 duration-200">
                KIRIM
              </button>
            </div>
          </section>

          <section
            id="gift"
            className="h-screen relative -z-0 overflow-hidden gap-5 bg-[#222222] flex flex-col items-center justify-center"
          >
            <p className="text-center text-white font-Courgette text-4xl">
              WEDDING GIFT
            </p>
            <div className="w-full px-10">
              <div className="bg-white rounded-xl w-full flex justify-between px-3 py-3">
                <div className="w-[40%]">
                  <img src="./assets/bri.png" alt="bankbri" />
                </div>
                <div className="w-[60%] flex flex-col items-end">
                  <p className="text-xl font-Cardo">Ahmad Almayda</p>
                  <div className="h-[2px] w-[90%] bg-[#222222]"></div>
                  <button className="flex items-center gap-1 mt-1">
                    <LuCopy size={20} />
                    <p className="text-sm">0021-01-005650-2</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full px-10">
              <div className="bg-white rounded-xl w-full flex justify-between px-3 py-3">
                <div className="w-[40%]">
                  <img src="./assets/bca.png" alt="bankbca" />
                </div>
                <div className="w-[60%] flex flex-col items-end">
                  <p className="text-xl font-Cardo">Mutiara Devania</p>
                  <div className="h-[2px] w-[90%] bg-[#222222]"></div>
                  <button className="flex items-center gap-1 mt-1">
                    <LuCopy size={20} />
                    <p className="text-sm">0021-01-005650-2</p>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
