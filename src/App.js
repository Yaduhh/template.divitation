import "./App.css";
import { BiLogoInstagram } from "react-icons/bi";
import CountdownComponent from "./component/countdown";
import Gift from "./component/gift";
import { useState } from "react";
import { useEffect } from "react";
import Aos from "aos";
import Navigation from "./component/bottom-navigation";
import classNames from "classnames";
import CoverScreen from "./screens/cover";
import DiskAudio from "./component/disk-audio";

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
          !openCover
            ? "hidden"
            : "flex justify-center w-full bg-[#EE6983] bg-opacity-50"
        )}
      >
        <div className="w-full max-w-3xl h-full relative shadow-2xl">
          <DiskAudio
            className="bg-[#850E35]"
            src={"audio/maherzain.mp3"}
            playSong={playSong}
            setplaySong={setplaySong}
          />

          <Navigation className={"bg-[#850E35]"} />

          <section id="home">
            <div className="w-full overflow-hidden relative gap-5 h-screen flex flex-col justify-center items-center bg-accent">
              <img src="./assets/bunga.png" alt="bunga" width={380} />
              <div className="text-center text-2xl">
                <p style={{ fontFamily: "Cardo" }}>
                  Save The Date <br /> The Wedding Of
                </p>
              </div>
              <img src="./assets/hero.png" alt="hero" width={150} />
              <p
                className="text-4xl text-center"
                style={{ fontFamily: "Cardo" }}
              >
                Farhan <br />
                Feyla
              </p>
              <p className="text-2xl mb-8" style={{ fontFamily: "Cardo" }}>
                08 | Juli | 2023
              </p>
              <div className="absolute right-6 top-[40%]">
                <img src="./assets/accent.png" alt="accent" width={50} />
              </div>
              <div className="absolute left-6 bottom-[10%]">
                <img src="./assets/accent.png" alt="accent" width={50} />
              </div>
            </div>
          </section>

          <section>
            <div
              className="w-full overflow-hidden relative gap-10 h-screen flex flex-col justify-center items-center bg-accent"
              style={{ fontFamily: "Cardo" }}
            >
              <div className="flex flex-col w-full items-center -mt-10 gap-5">
                <img src="./assets/hero.png" alt="hero" width={60} />
                <img src="./assets/bismillah.png" alt="bismillah" width={250} />
              </div>
              <p className="text-center">
                Assalamualaikum <br /> Waarohmatullahi Wabarokaatuh
              </p>
              <div className="text-center px-7 relative">
                <p>
                  Maha suci Allah yang telah menciptakan makhluk-Nya
                  berpasang-pasangan. <br />
                  <br /> Ya Allah, perkenankanlah kami merangkaikan kasih sayang
                  yang Kau ciptakan diantara kami untuk mengikuti Sunnah
                  Rasul-Mu dalam rangka membentuk keluarga yang sakinah,
                  mawaddah, warahmah.
                </p>
                <img
                  className="absolute top-0 right-5"
                  src="./assets/petik.png"
                  alt="petiks"
                  width={20}
                />
                <img
                  className="absolute bottom-0 left-5 -scale-100"
                  src="./assets/petik.png"
                  alt="petiks"
                  width={20}
                />
              </div>
              <img
                className="absolute top-36 right-12"
                src="./assets/accent.png"
                alt="accent"
                width={40}
              />
              <img
                className="absolute bottom-36 left-12"
                src="./assets/accent.png"
                alt="accent"
                width={40}
              />
              <div className="w-full bg-[#FFE9CC] absolute h-28 bottom-5"></div>
            </div>
          </section>

          <section id="pasangan">
            <div className="w-full overflow-hidden -z-0 relative gap-5 md:gap-3 h-screen flex flex-col justify-center items-center bg-accent">
              <img src="./assets/hero.png" alt="hero" width={60} />
              <p
                className="text-4xl text-center mx-5"
                style={{ fontFamily: "Cardo-bold" }}
              >
                Farhan Denanda Putra
              </p>
              <div className="flex items-center text-xl gap-1">
                <BiLogoInstagram size={30} />
                <p style={{ fontFamily: "Cardo" }}>@farhanxyz</p>
              </div>
              <div className="text-center">
                <p className="text-2xl" style={{ fontFamily: "Cardo" }}>
                  Putra pertama dari keluarga
                </p>
                <p style={{ fontFamily: "Cardo" }}>
                  Bpk. Hardiansyah & Ibu Megayati
                </p>
              </div>
              <img
                className="mb-5 md:mb-0"
                src="/assets/pria.png"
                alt="pria"
                width={250}
              />
              <div className="absolute top-0 -right-7 -z-10">
                <img
                  className="mb-5"
                  src="/assets/hiasan.png"
                  alt="hiasan"
                  width={150}
                />
              </div>
            </div>
            <div className="w-full overflow-hidden relative gap-5 md:gap-3 h-screen flex flex-col justify-center items-center bg-accent">
              <img src="./assets/hero.png" alt="hero" width={60} />
              <p
                className="text-4xl text-center mx-8"
                style={{ fontFamily: "Cardo-bold" }}
              >
                Feyla Prisilia Mahesti
              </p>
              <div className="flex items-center text-xl gap-1">
                <BiLogoInstagram size={30} />
                <p style={{ fontFamily: "Cardo" }}>@feylaa_</p>
              </div>
              <div className="text-center">
                <p className="text-2xl" style={{ fontFamily: "Cardo" }}>
                  Putri pertama dari keluarga
                </p>
                <p style={{ fontFamily: "Cardo" }}>
                  Bpk. Marcopolo & Ibu Puji Asrtonomi
                </p>
              </div>
              <img
                className="mb-5 md:mb-0"
                src="/assets/wanita.png"
                alt="pria"
                width={250}
              />
              <div className="absolute bottom-0 left-0">
                <img
                  className="mb-5"
                  src="/assets/hiasan.png"
                  alt="hiasan"
                  width={150}
                />
              </div>
            </div>
          </section>

          <section id="acara">
            <div className="w-full md:h-auto overflow-hidden relative h-screen flex flex-col justify-center items-center bg-accent md:pb-20">
              <div className="w-full flex items-start justify-start">
                <div className="text-center mx-5 md:mx-20 -mt-10 md:mt-10">
                  <p className="text-4xl" style={{ fontFamily: "Cardo-bold" }}>
                    Akad
                  </p>
                  <p style={{ fontFamily: "Cardo" }}>Pukul 07:00 - 09:00 WIB</p>
                </div>
              </div>
              <img src="./assets/tangan.png" alt="tangan" width={300} />
              <div className="w-full flex items-end justify-end">
                <div className="text-center mx-5 md:mx-20 md:mb-10">
                  <p className="text-4xl" style={{ fontFamily: "Cardo-bold" }}>
                    Resepsi
                  </p>
                  <p style={{ fontFamily: "Cardo" }}>Pukul 09:00 - 14:00 WIB</p>
                </div>
              </div>

              <div className="text-center mb-8 -z-0 relative w-full flex flex-col items-center mt-5">
                <p
                  className="text-4xl bg-accent italic"
                  style={{ fontFamily: "Cardo-bold" }}
                >
                  Sabtu
                </p>
                <p
                  className="text-secondary text-4xl"
                  style={{ fontFamily: "Cardo-bold" }}
                >
                  28.01.2024
                </p>
                <div className="absolute top-2 md:-top-7 w-[70%] md:w-[50%] -z-10">
                  <img src="./assets/buletan.png" alt="buletan" />
                </div>
              </div>

              <div
                className="text-center mb-3 md:mt-5"
                style={{ fontFamily: "Cardo" }}
              >
                <p className="font-bold">Kediaman Mempelai Wanita</p>
                <p className="text-lg">Kemang Selatan, Rt.04 Rw.04</p>
                <p className="text-lg">Kec. Duren Kab.Kelapakuningan</p>
              </div>

              <div className="relative place-content-center items-center justify-center flex flex-col md:mt-10">
                <img src="./assets/maps.png" alt="maps" width={250} />
                <div className="absolute -bottom-[30%] -right-[20%]">
                  <img src="./assets/hiasanbunga.png" alt="hiasan" width={70} />
                </div>
                <div className="absolute -bottom-[30%] -left-[20%] -scale-x-100">
                  <img src="./assets/hiasanbunga.png" alt="hiasan" width={70} />
                </div>
                <button className="absolute bottom-3 bg-secondary px-5 gap-2 py-1 rounded-2xl text-white flex items-center">
                  <img src="./assets/imaps.png" alt="imaps" width={15} />
                  Lihat Maps
                </button>
              </div>
            </div>
          </section>

          <section id="galeri">
            <div
              className="w-full overflow-hidden relative gap-5 h-screen md:h-auto flex flex-col justify-center items-center bg-accent"
              style={{ fontFamily: "Cardo" }}
            >
              <div className="w-full flex flex-col items-center md:mt-5">
                <div className="-ml-5">
                  <img src="./assets/cincin.png" alt="cincin" width={100} />
                </div>
                <h1 className="text-4xl font-medium text-center mx-16">
                  Kisah kita berdua
                </h1>
              </div>

              <div className="flex w-full items-center justify-center flex-wrap md:px-40 md:scale-125 md:mt-10 md:gap-5">
                <img src="./assets/foto.png" alt="foto" width={120} />
                <img src="./assets/foto1.png" alt="foto1" width={120} />
                <img src="./assets/foto2.png" alt="foto2" width={120} />
                <img src="./assets/foto3.png" alt="foto3" width={120} />
                <img src="./assets/foto4.png" alt="foto4" width={120} />
                <img src="./assets/foto5.png" alt="foto5" width={120} />
              </div>

              <div className="scale-125 md:w-full md:scale-110 md:mb-10">
                <img src="./assets/gantungan.png" alt="gantungan" />
              </div>
            </div>
          </section>

          <section id="ucapan">
            <div
              className="w-full overflow-hidden relative gap-10 h-screen flex flex-col justify-center items-center bg-accent"
              style={{ fontFamily: "Cardo" }}
            >
              <div className="text-center">
                <p className="text-xl">Terhitung mundur dari sekarang</p>
                <p className="text-4xl font-medium">Menuju Hari H</p>
              </div>
              <CountdownComponent
                targetMonth={12}
                targetDate={22}
                targetHour={30}
                targetMinute={20}
              />
              <p className="text-4xl font-medium text-center">
                Ucapan <br />
                ke Pengantin
              </p>
              <div className="w-full px-5 flex flex-col gap-5 items-end">
                <input
                  className="w-full py-2 px-5 rounded-xl bg-white focus:outline-1 outline-secondary"
                  placeholder="Nama Pengirim"
                />
                <textarea
                  className="w-full py-2 px-5 pb-10 rounded-xl bg-white focus:outline-1 outline-secondary"
                  placeholder="Kalimat ucapan untuk mempelai"
                />
                <div>
                  <button className="px-10 py-2 rounded-xl bg-secondary text-white">
                    Kirim
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section id="gift">
            <div
              className="w-full overflow-hidden relative gap-5 h-screen flex flex-col justify-center items-center bg-accent"
              style={{ fontFamily: "Cardo" }}
            >
              <h1 className="text-4xl font-medium">Wedding Gift</h1>
              <div className="w-full flex flex-wrap gap-5 px-5">
                <Gift
                  namerekening="Feyla Puspita"
                  norekening={21101170022}
                  bank="./assets/bca.png"
                />
                <Gift
                  namerekening="Farhan Thair"
                  norekening={22201170234}
                  bank="./assets/bri.png"
                />
              </div>

              <div className="w-full px-5">
                <div className="w-full bg-white rounded-xl relative outline-secondary outline outline-1 px-8 py-5">
                  <p className="text-3xl text-secondary">Farhan & Feyla</p>
                  <img
                    className="-mt-7 mb-3"
                    src="./assets/kado.png"
                    alt="kado"
                    width={400}
                  />
                  <p>Di</p>
                  <p>Jl. Pegangsaan timur no.52</p>
                  <p>Kec. kalideres Kab. Bogor</p>
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
