import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Aos from "aos";
import NavigationBottom from "./components/bottom-navigation";
import copyToClipboard from "./helpers/copyClipboard";
import { AiOutlineCloseCircle } from "react-icons/ai";
import CountdownComponent from "./components/coutdown";
import {
  FaEnvelopeOpen,
  FaInstagram,
  FaMapMarkerAlt,
  FaMapPin,
  FaPauseCircle,
  FaRing,
} from "react-icons/fa";
import AccentEvent from "./assets/accentEvent.png";
import AccentLeftBottom from "./assets/accentLeftBottomHome.png";
import AccentLeft from "./assets/accentLeftHome.png";
import AccentLeftPasangan from "./assets/accentLeftPasangan.png";
import AccentMaps from "./assets/accentMaps.png";
import AccentRightBottom from "./assets/accentRightBottomHome.png";
import AccentRightBottomPasangan from "./assets/accentRightBottomPasangan.png";
import AccentPasangan from "./assets/accentRightPasangan.png";
import AccentUcapan from "./assets/accentUcapan.png";
import Bgkomentar from "./assets/bgKomentar.png";
import BgAccentUcapan from "./assets/bgaccentUcapan.png";
import Cincin from "./assets/cincin.png";
import FlowerBottom from "./assets/flowerBottomHome.png";
import Flower from "./assets/flowerHome.png";
import Foto from "./assets/foto.png";
import Foto1 from "./assets/foto1.png";
import Foto2 from "./assets/foto2.png";
import Foto3 from "./assets/foto3.png";
import Foto4 from "./assets/foto4.png";
import Ikalendar from "./assets/ikalender.png";
import Imaps from "./assets/imaps.png";
import Maps from "./assets/maps.png";
import Men from "./assets/men.png";
import People from "./assets/people.png";
import Women from "./assets/women.png";
import React, { useRef } from "react";
import Profile from "./assets/people.png";
import Qr from "./assets/qris.png";
import Dana from "./assets/logo-dana.png";
import Mandiri from "./assets/bankmandiri.png";
import White from "./assets/bgbankgift.png";
import Copy from "./assets/copy.png";
import dayjs from "dayjs";
import CoverScreen from "./screens/cover";
import classNames from "classnames";
import OutlineShape from "./assets/outline-shape.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination, EffectCards } from "swiper/modules";

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
    // audio.play();
    if (playSong) {
      audio.play();
      disc.classList.add("animate-spin");
    } else {
      audio.pause();
      disc.classList.remove("animate-spin");
    }
  }

  function handleCover() {
    setOpenCover(true);
    handleAudio();
  }

  const queryParameters = new URLSearchParams(window.location.search);
  const kepada = queryParameters.get("to");

  const datas = {
    men: {
      fullname: "Kelvin Andara",
      nickname: "Kelvin",
      father: "Bapak Sunardi",
      mother: "Ibu Ima",
    },
    woman: {
      fullname: "Dilla Ramadhani",
      nickname: "Dilla",
      father: "Bapak Budiono",
      mother: "Ibu Siti Aminah",
    },
    event: {
      akad: {
        start: dayjs("2021-10-10 08:00:00").format("YYYYMMDDTHHmmssZ"),
        end: dayjs("2021-10-10 09:00:00").format("YYYYMMDDTHHmmssZ"),
        day: dayjs("2021-10-10").format("dddd"),
        date: dayjs("2021-10-10").format("DD MMMM YYYY"),
        time: dayjs("2021-10-10 08:00:00").format("HH:mm"),
        place: "Alam Sutera Bintaro blok G645 Tangerang Selatan",
        url: "https://goo.gl/maps/jPcsuTV44PdeEyW2A",
      },
      resepsi: {
        start: dayjs("2021-10-10 13:00:00").format("YYYYMMDDTHHmmssZ"),
        end: dayjs("2021-10-10 15:00:00").format("YYYYMMDDTHHmmssZ"),
        day: dayjs("2021-10-10").format("dddd"),
        date: dayjs("2021-10-10").format("DD MMMM YYYY"),
        time: dayjs("2021-10-10 13:00:00").format("HH:mm"),
        place: "Alam Sutera Bintaro blok G645 Tangerang Selatan",
        url: "https://goo.gl/maps/jPcsuTV44PdeEyW2A",
      },
    },
    countdown: {
      day: 31, //interval hari H
      hour: 3, //Jam mulai acara
      minute: 0,
      second: 0,
    },
  };

  return (
    <>
      {/* Cover */}
      <div
        className={
          end
            ? "hidden"
            : "flex justify-center bg-base-200 h-screen overflow-hidden bg-[#e9d5e9]"
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
            : "flex justify-center w-full bg-[#e9d5e9] font-Cardo"
        )}
      >
        <div className="w-[428px] h-full relative">
          <NavigationBottom bgColor={"#393646"} />
          <div
            className={classNames(
              `play-pause-wraper fixed bottom-28 w-[428px] flex justify-end pr-8 z-[999999]`
            )}
          >
            <audio hidden autoPlay loop id="audio">
              <source src={"/audio/maherzain.mp3"} type="audio/mpeg" />
            </audio>
            <button
              id="play-pause-btn"
              className={classNames(
                `w-10 h-10 rounded-full border-2 border-base-300 flex items-center justify-center bg-[#393646] p-1 box-content `
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
          <section id="home">
            <div className="w-full relative h-screen overflow-hidden bg-[#393646] text-[#F4EEE0] font-cardo flex flex-col 2xl:justify-center">
              <div
                className="w-[30%] absolute left-0 top-0"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <img src={AccentLeft} alt="accent left" />
              </div>
              <div className="text-center w-full flex flex-col items-center mt-16 2xl:-mt-28">
                <div
                  className="text-2xl mb-3"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  SAVE THE DATE !
                </div>
                <div className="w-[35%]">
                  <img
                    src={Flower}
                    alt="flower"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  />
                </div>
                <div
                  className="text-5xl mt-2 tracking-wide flex gap-3 "
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div>K</div>
                  <div>&</div>
                  <div>D</div>
                </div>
                <div
                  className="w-[25%] bg-white mt-2 py-[0.5px]"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                ></div>
                <div
                  className="text-2xl mt-2 tracking-wide flex gap-5"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div>{datas.men.nickname}</div>
                  <div>{datas.woman.nickname}</div>
                </div>
                <div
                  className="w-[36%] mt-2"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <img src={FlowerBottom} alt="flower" />
                </div>
                <div className="flex w-full gap-5 justify-center items-center text-2xl mt-8">
                  <div data-aos="fade-up" data-aos-duration="2000">
                    April
                  </div>
                  <div
                    className="h-[30px] bg-white w-[1px]"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  ></div>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="2500"
                    className="text-6xl"
                  >
                    22
                  </div>
                  <div
                    className="h-[30px] bg-white w-[1px]"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  ></div>
                  <div data-aos="fade-up" data-aos-duration="3000">
                    2023
                  </div>
                </div>
                <div
                  className="w-[30%] absolute -bottom-32 left-0"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  <img src={AccentLeftBottom} alt="flower" />
                </div>
                <div
                  className="w-[25%] absolute -bottom-56 right-0"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                >
                  <img src={AccentRightBottom} alt="flower" />
                </div>
              </div>
            </div>
          </section>

          {/* Section Pasangan */}
          <section id="pasangan">
            <div className="w-full relative h-screen overflow-hidden bg-[#393646] text-[#F4EEE0] font-cardo flex flex-col 2xl:justify-center">
              <div
                className="absolute w-[30%] right-0 top-0"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <img src={AccentPasangan} alt="pasangan" />
              </div>
              <div className="absolute w-[30%] left-0 bottom-0 -scale-100">
                <img
                  src={AccentPasangan}
                  alt="pasangan"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                />
              </div>
              <div
                className="absolute w-[30%] left-0 top-44 2xl:top-64 md:top-32 z-10"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <img src={AccentLeftPasangan} alt="pasangan" />
              </div>
              <div
                className="absolute w-[30%] right-0 bottom-28 md:bottom-0 2xl:bottom-52 z-10"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <img src={AccentRightBottomPasangan} alt="pasangan" />
              </div>
              <div className="flex p-6 items-end gap-6 mt-3 2xl:-mt-28 ">
                <div
                  className="w-[45%]"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  <img src={Men} alt="pasangan" />
                </div>
                <div className="z-[99]">
                  <div
                    className="text-4xl mb-6"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <p className=" font-Dancingscript">{datas.men.fullname}</p>
                    <a
                      href="#instagram"
                      className="flex gap-2 items-center  text-base mt-2 text-[#f6e5bf] w-min"
                    >
                      <FaInstagram />
                      <span>_Kelvin</span>
                    </a>
                  </div>
                  <div
                    className="text-base mt-4 font-Dancingscript"
                    data-aos="fade-up"
                    data-aos-duration="2500"
                  >
                    Anak ketiga dari <br />
                    {datas.men.father} & {datas.men.mother}
                  </div>
                </div>
              </div>
              <div
                className="text-center text-5xl mt-3 "
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                &
              </div>
              <div className="flex flex-row-reverse p-6 items-end gap-6">
                <div
                  className="w-[55%]"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                >
                  <img src={Women} alt="pasangan" />
                </div>
                <div className="text-right">
                  <div
                    className="text-4xl mb-6 flex flex-col items-end"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <p className=" font-Dancingscript">
                      {datas.woman.fullname}
                    </p>
                    <a
                      href="#instagram"
                      className="flex gap-2 items-center text-base mt-2 text-[#f6e5bf] w-min"
                    >
                      <FaInstagram />
                      <span>Dilla</span>
                    </a>
                  </div>
                  <div
                    className="text-base font-Dancingscript"
                    data-aos="fade-up"
                    data-aos-duration="2500"
                  >
                    Anak ketiga dari <br />
                    {datas.woman.father} & {datas.woman.mother}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Section Pasangan */}

          {/* Section Event */}
          <section id="acara">
            <div className="w-full relative -z-0 h-screen overflow-hidden bg-[#393646] text-[#F4EEE0] font-cardo flex flex-col pt-28">
              <div
                className="w-[30%] absolute left-0 -top-4"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <img src={AccentEvent} alt="bg" />
              </div>
              <div className="w-[30%] absolute right-0 -scale-x-100 -top-4">
                <img
                  src={AccentEvent}
                  alt="bg"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                />
              </div>
              <div className="2xl:w-[30%] md:w-[20%] w-[30%] absolute 2xl:bottom-20 right-5 2xl:right-5 -z-10 md:right-16 bottom-20 md:bottom-10">
                <img src={AccentMaps} alt="" />
              </div>
              <div className="2xl:w-[30%] md:w-[20%] w-[30%] absolute 2xl:bottom-20 bottom-20 left-5 2xl:left-5 md:left-16 -z-10 -scale-x-100 md:bottom-10">
                <img src={AccentMaps} alt="" />
              </div>
              <div className="w-[40%] absolute left-12 right-0 m-auto top-10">
                <img src={Cincin} alt="" className="w-full" />
              </div>
              <div className="text-center pt-10">
                <div className="mb-6">
                  <h1 className="text-5xl font-Dancingscript">Akad Nikah</h1>
                  <p className="text-lg">Pukul 07.00 - 09.00 WIB </p>
                </div>
                <div>
                  <h1 className="text-5xl font-Dancingscript">Resepsi</h1>
                  <p className="text-lg">Pukul 11.00 WIB - Selesai </p>
                </div>
                <div className="relative mt-24">
                  <div className="2xl:w-[80%] md:w-[60%] w-[80%] absolute left-0 right-0 m-auto rotate-180">
                    <img src={OutlineShape} alt="" />
                  </div>
                  <h1 className="text-4xl absolute left-0 right-0 m-auto -top-10 font-Dancingscript">
                    Selasa
                  </h1>
                  <div className="pt-4">
                    <p className="2xl:text-5xl text-4xl">12.06.2024</p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="2xl:w-[40%] md:w-[30%] w-[35%] absolute left-0 right-0 m-auto bottom-[20%] bg-[#6D5D6E] rounded-2xl p-1">
                  <img src={Maps} alt="" />
                  <div className="absolute left-0 right-0 m-auto  flex justify-center -bottom-4">
                    <button className="px-4 py-2 bg-[#6D5D6E] rounded-full border flex gap-2 ">
                      <FaMapMarkerAlt />
                      <p>Maps</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Section Event */}

          {/* Section Galeri */}
          <section id="galeri">
            <div className="w-full relative h-screen overflow-hidden bg-[#393646] text-[#F4EEE0] font-cardo pt-10 ">
              <div
                className="text-center text-5xl mt-5 font-Dancingscript"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                Galeri Kemesraan
              </div>
              <div className="grid grid-cols-2 gap-4 px-8 mt-12">
                <img alt="" src="/prewed-1.png" />
                <img alt="" src="/prewed-2.png" />
                <img alt="" src="/prewed-3.png" />
                <img alt="" src="/prewed-4.png" />
              </div>
            </div>
          </section>
          {/* End Section Galeri */}

          {/* Section Gift */}
          {/* <section id="payment">
            <div className="w-full h-screen bg-[#393646] pb-16">
              <p className="text-5xl font-Dancingscript text-center font-bold text-[#F4EEE0] mb-16">
                Wedding Gift{" "}
              </p>
              <div className="w-full flex flex-col justify-center items-center max-sm:px-12 gap-5">
                <div className="bg-white font-cardo flex flex-col justify-center items-center  relative rounded-3xl backdrop-blur-sm">
                  <div className="w-fit p-4 rounded-xl">
                    <img src={Qr} alt="qris" width={170} height={200} />
                  </div>
                </div>
                <div className="bg-white p-2 rounded-xl">
                  <img src={Dana} alt="qris" width={100} height={200} />
                </div>
              </div>
            </div>
          </section> */}
          {/* End Section Gift */}

          {/* Section Ucapan */}
          <section id="ucapan">
            <div className="w-full relative h-screen overflow-hidden -z-0 bg-[#393646] text-[#F4EEE0] font-cardo pt-20">
              <div
                className="absolute w-[30%] left-0 top-3"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <img src={AccentUcapan} alt="ucapan" />
              </div>
              <div className="absolute w-[30%] right-0 top-3 -scale-x-100 z-0">
                <img
                  src={AccentUcapan}
                  alt="ucapan"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                />
              </div>
              <div className="z-[999]">
                <CountdownComponent
                  targetMonth={12}
                  targetDate={10}
                  targetHour={30}
                  targetMinute={0}
                />
              </div>
              <div
                className="w-full px-16 mt-8 md:mt-4"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="flex bg-[#6D5D6E] rounded-full px-3 py-2 items-center gap-2 justify-center">
                  <div className="w-[6%]">
                    <img src={Ikalendar} alt="kalendar" />
                  </div>
                  <a
                    target="_blank"
                    href={
                      "#https://calendar.google.com/calendar/u/0/r/eventedit?text=[Resepsi]+Kelvin+%26+Dilla&dates=20211010T130000+07:00/20211010T150000+07:00&details=Alam%20Sutera%20Bintaro%20blok%20G645%20Tangerang%20Selatan&location=&sprop&sprop=name"
                    }
                    rel="noreferrer"
                  >
                    Tambah ke kalender
                  </a>
                </div>
              </div>
              <form
                className="text-center mt-10 2xl:mt-20 md:mt-5 z-10"
                onSubmit={(e) => {
                  // submitGreeting(e, ucapan, setUcapan);
                }}
              >
                <div
                  className="text-2xl 2xl:text-3xl"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  Ucapan & Doa
                </div>
                <div
                  className="2xl:text-lg"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  Untuk pasangan yang berbahagia
                </div>
                <div
                  className="text-center mt-3"
                  data-aos="fade-up"
                  data-aos-duration="2500"
                >
                  <input
                    type="text"
                    name="user"
                    placeholder="Nama anda"
                    className="input input-bordered px-2 py-1 rounded-lg border-[#1A120B] input-sm w-[80%] max-w-xs text-[#1B1A17]"
                  />
                  <textarea
                    name="text"
                    placeholder="Ucapan untuk mempelai"
                    className="textarea text-[#1B1A17] px-2 py-1 rounded-lg textarea-bordered border-[#1A120B] textarea-md w-[80%] max-w-xs mt-4"
                  ></textarea>
                </div>
                <div
                  className="text-end px-9 mt-3 md:px-14 w-full"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <button
                    className={
                      "bg-[#393646] rounded-full px-5 py-1 font-bold text-[#E5E6E3]"
                    }
                    type="submit"
                  >
                    Kirim
                  </button>
                </div>
              </form>
              <div
                className="absolute w-[90%] right-0 bottom-0 -z-10"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <img src={BgAccentUcapan} alt="bg" />
              </div>
            </div>
          </section>
          {/* End Section Ucapan */}
        </div>
      </div>
    </>
  );
}

export default App;
