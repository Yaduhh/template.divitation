import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Aos from "aos";
import NavigationBottom from "./components/bottom-navigation";
import copyToClipboard from "./helpers/copyClipboard";
import { AiOutlineCloseCircle } from "react-icons/ai";
import CountdownComponent from "./components/coutdown";
import { FaEnvelopeOpen, FaPauseCircle } from "react-icons/fa";
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
import Qr from "./assets/card.png";
import BCA from "./assets/card.png";
import BRI from "./assets/card.png";
import Mandiri from "./assets/card.png";
import White from "./assets/hrEvent.png";
import Copy from "./assets/copy.png";
import dayjs from "dayjs";
import CoverScreen from "./screens/cover";
import classNames from "classnames";

function App() {
  const [openCover, setOpenCover] = useState(true);
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
      <div
        className={classNames(
          !openCover ? "hidden" : "flex justify-center w-full"
        )}
      >
        <div className="w-[428px] h-full relative">
          <NavigationBottom bgColor={"#393646"} />
          <div
            className={classNames(
              `play-pause-wraper fixed bottom-24 pl-8 z-[99999]`
            )}
          >
            <audio hidden autoPlay loop id="audio">
              <source src={"/audio/wedding-day.mp3"} type="audio/mpeg" />
            </audio>
            <button
              id="play-pause-btn"
              className={classNames(
                `w-10 h-10 rounded-full border-2 border-base-300 flex items-center justify-center bg-[#393646] p-1 box-content`
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
                  className="text-4xl mt-2 tracking-wide flex gap-3"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div>K</div>
                  <div>&</div>
                  <div>D</div>
                </div>
                <div
                  className="w-[35%] bg-base-100 mt-2 py-[0.5px]"
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
                <div className="flex w-full gap-5 justify-center text-2xl">
                  <div data-aos="fade-up" data-aos-duration="2000">
                    April
                  </div>
                  <div
                    className="h-[30px] bg-base-100 w-[1px]"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  ></div>
                  <div data-aos="fade-up" data-aos-duration="2500">
                    22
                  </div>
                  <div
                    className="h-[30px] bg-base-100 w-[1px]"
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
              <div className="flex p-6 items-center gap-3 mt-3 2xl:-mt-28">
                <div
                  className="w-[45%] md:w-[35%]"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  <img src={Men} alt="pasangan" />
                </div>
                <div className="text-center mt-20">
                  <div
                    className="text-2xl underline underline-offset-8 mb-3"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    {datas.men.fullname}
                  </div>
                  <div
                    className="text-base"
                    data-aos="fade-up"
                    data-aos-duration="2500"
                  >
                    Anak ketiga dari <br />
                    {datas.men.father} & {datas.men.mother}
                  </div>
                </div>
              </div>
              <div
                className="text-center text-5xl mt-3"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                &
              </div>
              <div className="flex flex-row-reverse p-6 items-center gap-3">
                <div
                  className="w-[45%] md:w-[35%]"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                >
                  <img src={Women} alt="pasangan" />
                </div>
                <div className="text-center">
                  <div
                    className="text-2xl underline underline-offset-8 mb-3"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    {datas.woman.fullname}
                  </div>
                  <div
                    className="text-base"
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
            <div className="w-full relative -z-0 h-screen overflow-hidden bg-[#393646] text-[#F4EEE0] font-cardo flex flex-col 2xl:justify-center">
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
            </div>
          </section>
          {/* End Section Event */}

          {/* Section Resepsi */}
          <section id="acara">
            <div className="w-full relative -z-0 h-screen overflow-hidden bg-[#393646] text-[#F4EEE0] font-cardo flex flex-col 2xl:justify-center">
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
              <div className="2xl:-mt-20 md:mt-14 mt-14"></div>
              <div className="2xl:w-[30%] md:w-[20%] w-[30%] absolute 2xl:bottom-20 right-5 2xl:right-5 -z-10 md:right-16 bottom-20 md:bottom-10">
                <img src={AccentMaps} alt="" />
              </div>
              <div className="2xl:w-[30%] md:w-[20%] w-[30%] absolute 2xl:bottom-20 bottom-20 left-5 2xl:left-5 md:left-16 -z-10 -scale-x-100 md:bottom-10">
                <img src={AccentMaps} alt="" />
              </div>
            </div>
          </section>
          {/* End Section Resepsi */}

          {/* Section Galeri */}
          <section id="galeri">
            <div className="w-full relative h-screen overflow-hidden bg-[#393646] text-[#F4EEE0] font-cardo">
              <div
                className="text-center text-2xl mt-5"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                Galeri Kemesraan
              </div>
            </div>
          </section>
          {/* End Section Galeri */}

          {/* Section timeline story */}
          <section id="timeline">
            <div className="w-full relative h-screen md:h-auto overflow-hidden bg-[#393646] text-[#F4EEE0] font-cardo flex flex-col items-center">
              <div className="absolute w-[25%] top-0 left-0">
                <img src={AccentLeft} alt="" />
              </div>
              <div className="absolute w-[25%] top-0 right-0 -scale-x-100">
                <img src={AccentLeft} alt="" />
              </div>
              <div
                className="text-2xl mt-7 mb-2"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Cerita Cintaku
              </div>
              <div
                className="mb-5"
                data-aos="fade-up"
                data-aos-duration="3000"
              ></div>
            </div>
          </section>
          {/* End section timeline story */}

          {/* Section Gift */}
          <section id="payment">
            <div className="w-full flex flex-col justify-center items-center bg-[#393646] pb-16">
              <div className="w-full flex flex-col justify-center items-center px-20 max-sm:px-12 gap-5">
                <div className="bg-[#F4EEE0]/80 mt-20 font-cardo flex flex-col justify-center items-center w-full py-8 relative rounded-3xl backdrop-blur-sm">
                  <div className="absolute -top-14">
                    <img
                      src={Profile}
                      alt="foto profile"
                      width={100}
                      height={200}
                    />
                  </div>
                  <div className="w-fit mt-6 bg-gradient-to-br from-[#F4EEE0] from-5% via-[#6D5D6E] via-10% to-[#4F4557] to-80% p-4 rounded-3xl">
                    <img src={Qr} alt="qris" width={170} height={200} />
                  </div>
                  <p className="text-[#393646] text-center mt-3 font-medium">
                    Dilla Ramadhani
                  </p>
                </div>

                {/* Rekening */}
                <div className="w-full bg-[#6D5D6E] overflow-hidden px-4 py-3 -z-0 rounded-2xl h-20 relative flex items-center justify-between">
                  <div className="absolute -z-10 -left-5 top-0">
                    <img src={White} alt="bca" width={140} height={200} />
                  </div>
                  <div>
                    {/* <img src={bank.bca} alt="bca" width={80} height={80} /> */}
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="flex flex-col items-center text-[#FFFFFF]">
                      <input
                        type="text"
                        value={5475452256}
                        readOnly
                        style={{ position: "absolute", left: "-9999px" }} // Hide the input element off-screen
                      />
                      <p>5475452256</p>
                      <p className="text-xs">a.n Dila Ramadhani</p>
                    </div>
                    <button
                      onClick={copyToClipboard}
                      className="hover:opacity-50 duration-200"
                    >
                      <img src={Copy} alt="copy" width={20} height={80} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Section Gift */}

          {/* Section Ucapan */}
          <section id="ucapan">
            <div className="w-full relative h-screen overflow-hidden -z-0 bg-[#393646] text-[#F4EEE0] font-cardo">
              <div
                className="absolute w-[30%] left-0 top-3"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <img src={AccentUcapan} alt="ucapan" />
              </div>
              <div className="absolute w-[30%] right-0 top-3 -scale-x-100">
                <img
                  src={AccentUcapan}
                  alt="ucapan"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                />
              </div>
              <div>
                <CountdownComponent
                  day={datas.countdown.day}
                  hour={datas.countdown.hour}
                  minute={datas.countdown.minute}
                  second={datas.countdown.second}
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
                  <a target="_blank" href={"#urlResepsi"} rel="noreferrer">
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
                    className="input input-bordered border-[#1A120B] input-sm w-[80%] max-w-xs text-[#1B1A17]"
                  />
                  <textarea
                    name="text"
                    placeholder="Ucapan untuk mempelai"
                    className="textarea text-[#1B1A17] textarea-bordered border-[#1A120B] textarea-md w-[80%] max-w-xs mt-4"
                  ></textarea>
                </div>
                <div
                  className="text-end px-9 mt-3 md:px-16 w-full"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <button
                    className={
                      "bg-[#393646] rounded-full px-5 py-1 text-[#E5E6E3]"
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
