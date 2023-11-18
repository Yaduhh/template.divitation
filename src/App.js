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
import { FaPauseCircle } from "react-icons/fa";

function App() {
  const [openCover, setOpenCover] = useState(false);
  const [end, setEnd] = useState(false);
  const [playSong, setplaySong] = useState(false);
 
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

  useEffect(()=>{
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
  })

  useEffect(() => {
    handleAudio();
  }, [playSong]);



  function handleCover() {
    setOpenCover(true);
    setplaySong(true)
    handleAudio();
  }

  function submitGreeting(e) {
    e.preventDefault();

    const name = e.target.user.value;
    const message = e.target.text.value;

    // Membuat pesan yang akan dikirimkan melalui URL WhatsApp
    const greetingMessage = `Halo Liza 👋 aku ${name} mau ngucapin, ${message}`;

    // Membentuk URL WhatsApp
    const whatsappURL = `https://wa.me/6285540172747?text=${encodeURIComponent(
      greetingMessage
    )}`;

    // Mengarahkan pengguna ke URL WhatsApp
    window.location.href = whatsappURL;
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
            : "flex justify-center h-screen overflow-hidden bg-[#EE6983] bg-opacity-50"
        }
        onTransitionEnd={() => setEnd(true)}
      >
        <div
          id="cover"
          className={classNames(
            `relative z-50 h-[112%] 2xl:h-screen w-full max-w-3xl overflow-hidden bg-white`,
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
            src={"audio/sofia.mp3"}
            playSong={playSong}
            setplaySong={setplaySong}
          />

          <Navigation className={"bg-[#850E35]"} />

          <section id="home">
            <div className="w-full overflow-hidden relative -z-0 gap-5 h-screen flex flex-col justify-evenly items-center bg-accent">
              <img
                src="./assets/bunga.png"
                alt="bunga"
                width={380}
                data-aos="fade-up"
                data-aos-duration="2000"
                className="mt-5"
              />
              <div className="text-center text-3xl font-Cardo">
                <p data-aos="fade-up" data-aos-duration="2100">
                  Save The Date <br /> The Wedding Of
                </p>
              </div>
              <img src="./assets/hero.png" alt="hero" width={150} />
              <p
                className="text-4xl text-center font-Cardo"
                style={{ fontFamily: "Cardo" }}
                data-aos="fade-up"
                data-aos-duration="2500"
              >
                Gega <br />
                Liza
              </p>
              <p
                className="text-3xl mb-8 pb-36 font-medium font-Cardo"
                style={{ fontFamily: "Cardo" }}
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                05 | Januari | 2024
              </p>
              <div className="absolute right-6 top-[40%]">
                <img
                  src="./assets/accent.png"
                  alt="accent"
                  width={50}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                />
              </div>
              <div className="absolute left-6 bottom-[10%]">
                <img
                  src="./assets/accent.png"
                  alt="accent"
                  width={50}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                />
              </div>
              <div className="absolute top-0 w-full -z-10">
                <img
                  src="./assets/bgbulet.png"
                  alt="bgbulet"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                />
              </div>
            </div>
          </section>

          <section>
            <div
              className="w-full overflow-hidden relative z-0 gap-10 h-screen flex flex-col justify-center items-center bg-accent"
              style={{ fontFamily: "Cardo" }}
            >
              <div className="absolute top-10 w-full -z-10">
                <img
                  src="./assets/bgbulet.png"
                  alt="bgbulet"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                />
              </div>
              <div className="flex flex-col w-full items-center -mt-10 gap-5">
                <img
                  src="./assets/hero.png"
                  alt="hero"
                  width={60}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                />
                <img
                  src="./assets/bismillah.png"
                  alt="bismillah"
                  width={250}
                  data-aos="fade-up"
                  data-aos-duration="2000"
                />
              </div>
              <p
                className="text-center font-Cardo"
                data-aos="fade-up"
                data-aos-duration="2500"
              >
                Assalamualaikum <br /> Waarohmatullahi Wabarokaatuh
              </p>
              <div
                className="text-center px-7 md:px-16 relative"
                data-aos="fade-up"
                data-aos-duration="2700"
              >
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
                data-aos="fade-up"
                data-aos-duration="2500"
              />
              <img
                className="absolute bottom-36 left-12"
                src="./assets/accent.png"
                alt="accent"
                width={40}
                data-aos="fade-up"
                data-aos-duration="2500"
              />
              <div className="w-full bg-[#FFE9CC] absolute h-28 bottom-5"></div>
            </div>
          </section>

          <section id="pasangan">
            <div className="w-full overflow-hidden z-0 relative gap-4 md:gap-3 h-screen flex flex-col justify-center items-center bg-accent">
              <div className="absolute top-20 w-full -z-10">
                <img
                  src="./assets/bgbulet.png"
                  alt="bgbulet"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                />
              </div>
              <img
                src="./assets/hero.png"
                alt="hero"
                width={60}
                data-aos="fade-up"
                data-aos-duration="700"
                className="-mt-16 md:mt-0"
              />
              <p
                className="text-4xl text-center mx-5 font-Cardo"
                style={{ fontFamily: "Cardo-bold" }}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Gega Kaniaratri Nugroho S.Par
              </p>
              <a
                className="flex items-center text-xl gap-1 font-Cardo"
                data-aos="fade-up"
                data-aos-duration="1500"
                href="https://www.instagram.com/gegamuhammad/"
              >
                <BiLogoInstagram size={30} />
                <p style={{ fontFamily: "Cardo" }}>@gegamuhammad</p>
              </a>
              <div className="text-center">
                <p
                  className="text-4xl font-Corinthia"
                  data-aos="fade-up"
                  data-aos-duration="1700"
                >
                  Putra Pertama dari keluarga
                </p>
                <p
                  className="font-Cardo"
                  data-aos="fade-up"
                  data-aos-duration="1900"
                >
                  Bpk. Kurniawan & Ibu Titi Tri Nurhaju
                </p>
              </div>
              <img
                className="mb-5 md:mb-0"
                src="/assets/pria.png"
                alt="pria"
                width={230}
                data-aos="fade-up"
                data-aos-duration="2000"
              />
              <div className="absolute top-0 -right-7 -z-10">
                <img
                  className="mb-5"
                  src="/assets/hiasan.png"
                  alt="hiasan"
                  width={150}
                />
              </div>
              <img
                className="absolute top-80 right-6"
                src="./assets/accent.png"
                alt="accent"
                width={40}
                data-aos="fade-up"
                data-aos-duration="2500"
              />
              <img
                className="absolute bottom-36 left-7"
                src="./assets/accent.png"
                alt="accent"
                width={40}
                data-aos="fade-up"
                data-aos-duration="2500"
              />
            </div>
            <div className="w-full overflow-hidden relative z-0 gap-5 md:gap-3 h-screen flex flex-col justify-center items-center bg-accent">
              <div className="absolute top-0 w-full -z-10">
                <img
                  src="./assets/bgbulet.png"
                  alt="bgbulet"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                />
              </div>
              <img
                src="./assets/hero.png"
                alt="hero"
                width={60}
                data-aos="fade-up"
                data-aos-duration="500"
                className="-mt-10"
              />
              <p
                className="text-4xl text-center mx-8 font-Cardo"
                style={{ fontFamily: "Cardo-bold" }}
                data-aos="fade-up"
                data-aos-duration="700"
              >
                Siti Nur Choliza
              </p>
              <a
                className="flex items-center text-xl gap-1"
                data-aos="fade-up"
                data-aos-duration="1000"
                href="https://www.instagram.com/hylezaa_/"
              >
                <BiLogoInstagram size={30} />
                <p style={{ fontFamily: "Cardo" }}>@hylezaa_</p>
              </a>
              <div className="text-center">
                <p
                  className="text-4xl font-Corinthia"
                  data-aos="fade-up"
                  data-aos-duration="1100"
                >
                  Putri Kedua dari keluarga
                </p>
                <p
                  className="font-Cardo"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  Bpk. Noto & Ibu Siti Maisah
                </p>
              </div>
              <img
                className="mb-5 md:mb-0"
                src="/assets/wanita.png"
                alt="wanita"
                width={230}
                data-aos="fade-up"
                data-aos-duration="1500"
              />
              <div className="absolute bottom-0 -left-10">
                <img
                  className="mb-5"
                  src="/assets/hiasan.png"
                  alt="hiasan"
                  width={200}
                  data-aos="fade-up-right"
                  data-aos-duration="1700"
                />
              </div>
              <img
                className="absolute top-56 left-12"
                src="./assets/accent.png"
                alt="accent"
                width={40}
                data-aos="fade-up"
                data-aos-duration="2500"
              />
              <img
                className="absolute bottom-36 right-6"
                src="./assets/accent.png"
                alt="accent"
                width={40}
                data-aos="fade-up"
                data-aos-duration="2500"
              />
            </div>
          </section>

          <section id="acara">
            <div className="w-full z-0 md:h-auto overflow-hidden relative h-screen flex flex-col justify-center items-center bg-accent md:pb-20">
              <div className="absolute bottom-10 w-full -z-10">
                <img
                  src="./assets/bgbulet.png"
                  alt="bgbulet"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                />
              </div>
              <div className="w-full flex items-start justify-start -mt-24 md:mt-0">
                <div className="text-center mx-5 md:mx-20 mt-10 md:mt-10">
                  <p
                    className="text-4xl font-Cardo"
                    style={{ fontFamily: "Cardo-bold" }}
                    data-aos="fade-up"
                    data-aos-duration="300"
                  >
                    Akad
                  </p>
                  <p
                    className="font-Cardo"
                    data-aos="fade-up"
                    data-aos-duration="500"
                  >
                    Pukul 07:00 - 08:00 WIB
                  </p>
                </div>
              </div>
              <img
                src="./assets/tangan.png"
                alt="tangan"
                width={300}
                data-aos="fade-up"
                data-aos-duration="600"
              />
              <div className="w-full flex items-end justify-end">
                <div className="text-center mx-5 md:mx-20 md:mb-10">
                  <p
                    className="text-4xl font-Cardo font-bold"
                    style={{ fontFamily: "Cardo-bold" }}
                    data-aos="fade-up"
                    data-aos-duration="700"
                  >
                    Resepsi
                  </p>
                  <p
                    style={{ fontFamily: "Cardo" }}
                    data-aos="fade-up"
                    data-aos-duration="800"
                  >
                    Pukul 09:00 - Selesai
                  </p>
                </div>
              </div>

              <div className="text-center mb-8 -z-0 relative w-full flex flex-col items-center mt-5">
                <p
                  className="text-4xl bg-accent italic font-Cardo font-bold"
                  style={{ fontFamily: "Cardo-bold" }}
                  data-aos="fade-up"
                  data-aos-duration="900"
                >
                  Jum'at
                </p>
                <p
                  className="text-secondary text-4xl font-Ribeye-marrow"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  05.01.2024
                </p>
                <div className="absolute top-2 md:-top-7 w-[70%] md:w-[50%] -z-10">
                  <img
                    src="./assets/buletan.png"
                    alt="buletan"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  />
                </div>
              </div>

              <div
                className="text-center mb-3 md:mt-5 mt-3 font-Cardo"
                style={{ fontFamily: "Cardo" }}
              >
                <p
                  className="font-bold"
                  data-aos="fade-up"
                  data-aos-duration="1300"
                >
                  Kediaman Mempelai Wanita
                </p>
                <p
                  className="text-lg"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  Plutungan, Pakisputih, Kec. Kedungwuni <br />
                  Kabupaten Pekalongan, Jawa Tengah
                </p>
              </div>

              <div className="relative place-content-center items-center justify-center flex flex-col md:mt-10">
                <img
                  src="./assets/maps.png"
                  alt="maps"
                  width={250}
                  data-aos="fade-up"
                  data-aos-duration="1500"
                />
                <div className="absolute -bottom-[30%] -right-[20%]">
                  <img
                    src="./assets/hiasanbunga.png"
                    alt="hiasan"
                    width={70}
                    data-aos="fade-up"
                    data-aos-duration="1600"
                  />
                </div>
                <div className="absolute -bottom-[30%] -left-[20%] -scale-x-100">
                  <img
                    src="./assets/hiasanbunga.png"
                    alt="hiasan"
                    width={70}
                    data-aos="fade-up"
                    data-aos-duration="1700"
                  />
                </div>
                <a
                  target="_blank" rel="noopener noreferrer"
                  className="absolute bottom-3 bg-secondary px-5 gap-2 py-1 rounded-2xl text-white flex items-center font-Cardo"
                  href="https://maps.app.goo.gl/yT7PQMZqgaJE56zKA?g_st=ic"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  style={{ fontFamily: "Cardo" }}
                >
                  <img src="./assets/imaps.png" alt="imaps" width={15} />
                  Lihat Maps
                </a>
              </div>
            </div>
          </section>

          <section id="galeri">
            <div
              className="w-full overflow-hidden relative z-0 gap-5 h-screen md:h-auto flex flex-col justify-evenly py-20 items-center bg-accent"
              style={{ fontFamily: "Cardo" }}
            >
              <img
                className="absolute top-36 right-12"
                src="./assets/accent.png"
                alt="accent"
                width={40}
                data-aos="fade-up"
                data-aos-duration="2500"
              />
              <img
                className="absolute bottom-36 left-12"
                src="./assets/accent.png"
                alt="accent"
                width={40}
                data-aos="fade-up"
                data-aos-duration="2500"
              />
              <div className="absolute top-0 w-full -z-10">
                <img
                  src="./assets/bgbulet.png"
                  alt="bgbulet"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                />
              </div>
              <div className="w-full flex flex-col items-center md:mt-5">
                <div className="-ml-5 -mt-16">
                  <img
                    src="./assets/cincin.png"
                    alt="cincin"
                    width={100}
                    data-aos="fade-up"
                    data-aos-duration="500"
                  />
                </div>
                <h1
                  className="text-4xl font-medium text-center mx-20 mt-5 font-Cardo"
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  Kisah kita berdua
                </h1>
              </div>

              <div className="flex w-full items-center justify-center flex-wrap md:px-40 md:scale-125 md:mt-10 md:gap-5 gap-1 -mt-8 ">
                <img
                  src="./assets/foto.png"
                  alt="foto"
                  width={120}
                  data-aos="fade-up"
                  data-aos-duration="700"
                />
                <img
                  src="./assets/foto1.png"
                  alt="foto1"
                  width={120}
                  data-aos="fade-up"
                  data-aos-duration="900"
                />
                <img
                  src="./assets/foto2.png"
                  alt="foto2"
                  width={120}
                  data-aos="fade-up"
                  data-aos-duration="1100"
                />
                <img
                  src="./assets/foto3.png"
                  alt="foto3"
                  width={120}
                  data-aos="fade-up"
                  data-aos-duration="1300"
                />
                <img
                  src="./assets/foto4.png"
                  alt="foto4"
                  width={120}
                  data-aos="fade-up"
                  data-aos-duration="1400"
                />
                <img
                  src="./assets/foto5.png"
                  alt="foto5"
                  width={120}
                  data-aos="fade-up"
                  data-aos-duration="1600"
                />
              </div>

              <div className="scale-125 md:w-full md:scale-110 md:mb-10 -mt-8">
                <img
                  src="./assets/gantungan.png"
                  alt="gantungan"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                />
              </div>
            </div>
          </section>

          <section id="ucapan">
            <div
              className="w-full overflow-hidden relative z-0 gap-10 h-screen flex flex-col justify-center items-center bg-accent"
              style={{ fontFamily: "Cardo" }}
            >
              <img
                className="absolute top-36 right-12 -z-10"
                src="./assets/accent.png"
                alt="accent"
                width={40}
                data-aos="fade-up"
                data-aos-duration="2500"
              />
              <img
                className="absolute bottom-36 left-12 -z-10"
                src="./assets/accent.png"
                alt="accent"
                width={40}
                data-aos="fade-up"
                data-aos-duration="2500"
              />
              <div className="absolute top-0 w-full -z-10">
                <img
                  src="./assets/bgbulet.png"
                  alt="bgbulet"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                />
              </div>
              <div className="text-center">
                <p
                  className="text-xl font-Cardo"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Terhitung mundur dari sekarang
                </p>
                <p
                  className="text-4xl font-medium font-Courgette"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  Menuju Hari H
                </p>
              </div>
              <CountdownComponent
              targetYear={2024}
                targetMonth={1}
                targetDate={6}
                targetHour={7}
                targetMinute={0}
              />
              <p
                className="text-4xl font-medium text-center font-Courgette"
                data-aos="fade-up"
                data-aos-duration="1600"
              >
                Ucapan <br />
                ke Pengantin
              </p>
              <form
                className="w-full px-5 flex flex-col gap-5 items-end"
                target="_blank" 
                onSubmit={(e) => {
                  submitGreeting(e);
                }}
              >
                <input
                  className="w-full py-2 px-5 rounded-xl bg-white focus:outline-1 outline-secondary"
                  placeholder="Nama Pengirim"
                  name="user"
                  type="text"
                  data-aos="fade-up"
                  data-aos-duration="1700"
                />
                <textarea
                  className="w-full py-2 px-5 pb-10 rounded-xl bg-white focus:outline-1 outline-secondary"
                  placeholder="Kalimat ucapan untuk mempelai"
                  name="text"
                  data-aos="fade-up"
                  data-aos-duration="1900"
                />
                <div>
                  <button
                    className="px-10 py-2 rounded-xl bg-secondary text-white"
                    data-aos="fade-up"
                    data-aos-duration="2100"
                    type="submit"
                  >
                    Kirim
                  </button>
                </div>
              </form>
            </div>
          </section>

          <section id="gift">
            <div
              className="w-full overflow-hidden relative z-0 gap-5 h-auto flex flex-col justify-center items-center bg-accent py-7"
              style={{ fontFamily: "Cardo" }}
            >
              <img
                className="absolute top-36 right-12"
                src="./assets/accent.png"
                alt="accent"
                width={40}
                data-aos="fade-up"
                data-aos-duration="2500"
              />
              <img
                className="absolute bottom-36 left-12"
                src="./assets/accent.png"
                alt="accent"
                width={40}
                data-aos="fade-up"
                data-aos-duration="2500"
              />
              <div className="absolute top-0 w-full -z-10">
                <img
                  src="./assets/bgbulet.png"
                  alt="bgbulet"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                />
              </div>
              <h1
                className="text-4xl font-medium mt-5 font-Ribeye-marrow"
                data-aos="fade-up"
                data-aos-duration="1600"
              >
                Wedding Gift
              </h1>
              <div className="w-full flex flex-wrap gap-5 px-5">
                <Gift
                  namerekening="Siti Nur Choliza"
                  norekening={2381367756}
                  bank="./assets/bca.png"
                />
              </div>

              <div
                className="w-full px-5"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <div className="w-full bg-white rounded-xl relative outline-secondary outline outline-1 px-8 py-5">
                  <p className="text-3xl text-secondary">Gega & Liza</p>
                  <img
                    className="-mt-7 mb-3"
                    src="./assets/kado.png"
                    alt="kado"
                    width={400}
                  />
                  <p>Di Kediaman Mempelai Wanita</p>
                  <p className="text-sm">
                    Plutungan, Pakisputih, Kec. Kedungwuni <br />
                    Kabupaten Pekalongan, Jawa Tengah
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="gift">
            <div
              className="w-full overflow-hidden relative z-0 gap-5 h-screen flex flex-col justify-center items-center bg-accent"
              style={{ fontFamily: "Cardo" }}
            >
              <div className="absolute top-0 w-full -z-10">
                <img
                  src="./assets/bgbulet.png"
                  alt="bgbulet"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                />
              </div>
              <img
                className="absolute top-20 left-12"
                src="./assets/accent.png"
                alt="accent"
                width={40}
                data-aos="fade-up"
                data-aos-duration="2200"
              />
              <img
                className="absolute bottom-20 right-12"
                src="./assets/accent.png"
                alt="accent"
                width={40}
                data-aos="fade-up"
                data-aos-duration="2300"
              />
              <div className="absolute -bottom-16 w-[90%] -z-10">
                <img src="./assets/bunga.png" alt="closing" />
              </div>
              <div className="absolute -top-0 w-[60%] md:w-[40%] -right-10 -z-10">
                <img
                  src="./assets/hiasan.png"
                  alt="closing"
                  data-aos="fade-up"
                  data-aos-duration="2400"
                />
              </div>
              <div className="absolute bottom-0 w-[60%] md:w-[40%] -left-20 -z-10">
                <img
                  src="./assets/hiasan.png"
                  alt="closing"
                  data-aos="fade-up"
                  data-aos-duration="2600"
                />
              </div>
              <div className="w-full md:w-[80%] px-6 md:px-28">
                <img
                  src="./assets/closing.png"
                  alt="closing"
                  data-aos="fade-up"
                  data-aos-duration="2800"
                />
              </div>
              <div
                style={{ fontFamily: "Cardo" }}
                className="bg-white/50 backdrop-blur-sm mt-5 px-5 py-5 mx-6 rounded-xl"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <p className=" text-center font-Cardo">
                  Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila
                  Bapak/Ibu/Saudara/i berkenan hadir dan memberikan restu. Atas
                  kehadiran dan doa restunya, kami mengucapkan terimakasih
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
