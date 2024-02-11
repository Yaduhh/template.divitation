import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Aos from "aos";
import Navigationn from "./component/bottom-navigation";
import classNames from "classnames";
import CoverScreen from "./screens/cover";
import DiskAudio from "./component/disk-audio";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import toast, { Toaster } from "react-hot-toast";
import CountdownComponent from "./component/countdown";
import { FaInstagram } from "react-icons/fa";
import Komentar from "./components/komentar/komentar";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  const [openCover, setOpenCover] = useState(false);
  const [end, setEnd] = useState(false);
  const [playSong, setplaySong] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);

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

  const arrayGambar = [
    "./photos/img1.jpg",
    "./photos/img2.JPG",
    "./photos/img4.jpg",
    "./photos/img6.jpg",
    "./photos/img3.JPG",
    "./photos/img5.jpg",
  ];

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
  });

  useEffect(() => {
    handleAudio();
  }, [playSong]);

  useEffect(() => {
    const handleScroll = () => {
      // Hitung tinggi dokumen
      const documentHeight = document.documentElement.scrollHeight;

      // Hitung tinggi jendela browser
      const windowHeight = window.innerHeight;

      // Hitung posisi scroll
      const scrollPosition =
        window.scrollY ||
        window.pageYOffset ||
        document.body.scrollTop +
          ((document.documentElement && document.documentElement.scrollTop) ||
            0);

      // Tentukan apakah pengguna telah mencapai halaman paling bawah
      const isAtBottom = documentHeight - windowHeight - scrollPosition < 1;
      setIsLastPage(isAtBottom);
    };

    // Tambahkan event listener untuk peristiwa scroll
    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener saat komponen unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleCover() {
    setOpenCover(true);
    setplaySong(true);
    handleAudio();
  }

  const queryParameters = new URLSearchParams(window.location.search);
  const kepada = queryParameters.get("to");
  const imageArray = ["./photos/01.jpg", "./photos/02.jpg", "./photos/03.jpg"];

  return (
    <>
      {/* Cover */}
      <div
        className={
          end
            ? "hidden"
            : "flex justify-center h-screen overflow-hidden bg-[#000000] bg-opacity-50"
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
            : "flex justify-center w-full bg-[#000000] bg-opacity-40"
        )}
      >
        <div>
          <Toaster />
        </div>
        <div className="w-full max-w-3xl h-full relative shadow-2xl">
          <div
            className={
              isLastPage
                ? "transition duration-200 opacity-0 hidden"
                : "transition duration-200 opacity-100"
            }
          >
            <DiskAudio
              className="bg-primary"
              src={"audio/audio.mp3"}
              playSong={playSong}
              setplaySong={setplaySong}
            />
            <Navigationn className={"bg-[#211717]"} />
          </div>
          <div className="relative">
            <div className="fixed max-w-3xl top-0 h-screen w-full overflow-hidden -z-50">
              <Swiper
                rewind={true}
                navigation={false}
                modules={[Navigation, Autoplay, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: false }}
                autoplay={{ delay: 3000 }}
                className="h-screen"
              >
                {imageArray.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="swiper-slide-content aos-animate"
                      data-aos="fade-up"
                      data-aos-duration="2100"
                    >
                      <div className="absolute bg-[#000000] w-full h-full opacity-50"></div>
                      <img
                        src={image}
                        alt={`slide-${index}`}
                        className="w-screen object-fill"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <section id="home" className="relative">
            <div className="w-full overflow-hidden relative -z-0 gap-3 h-screen flex flex-col justify-center items-center text-white px-6">
              <div className="text-center -mt-16">
                <p
                  className="font-Montserrat"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  The Wedding Of
                </p>
                <h1
                  className="font-Cardo text-4xl"
                  data-aos="fade-up"
                  data-aos-duration="1700"
                >
                  Mario & Venny
                </h1>
              </div>
              <div
                className="h-[1px] rounded-full w-2/3 bg-white"
                data-aos="fade-up"
                data-aos-duration="1800"
              ></div>
              <p
                className="tracking-[.35em] text-2xl font-Montserrat"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                03.03.2024
              </p>
            </div>
            <div
              className="w-full absolute bottom-36 z-0 text-center inset-x-0 flex flex-col items-center gap-3 text-white animate-bounce"
              data-aos="fade-up"
              data-aos-duration="2200"
            >
              <img src="./icons/swipeup.svg" alt="swipe up" className="w-5" />
              <p className="font-Montserrat">Swipe Up</p>
            </div>
          </section>

          <section id="pasangan">
            <div className="relative z-0 overflow-hidden w-full bg-white max-sm:min-h-screen h-auto flex flex-col justify-start items-center p-6 gap-5">
              <img
                src="./icons/bismillah.svg"
                alt="bismillah"
                className="pt-8"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
              <img
                src="./icons/aksenbg.svg"
                alt="aksen"
                className="inset-0 absolute -z-10 scale-110 md:w-full h-screen md:h-auto"
              />
              <div className="text-center font-Cardo text-primary">
                <p
                  className="text-lg font-medium"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  Pasangan
                </p>
                <p
                  className="text-3xl font-semibold"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  Mempelai
                </p>
              </div>
              <p
                className="text-justify text-primary font-Cardo"
                data-aos="fade-up"
                data-aos-duration="1600"
              >
                Dengan segala puji bagi Allah yang telah menciptakan makhluk-Nya
                berpasang - pasangan, Ya Allah izinkanlah kami merangkaikan
                cinta yang engkau berikan dalam ikatan pernikahan.
              </p>
              <div className="w-full flex md:gap-12 md:p-6">
                <div className="w-[50%] flex flex-col justify-between items-center gap-2">
                  <img
                    src="./photos/lakilaki.jpg"
                    alt="laki laki"
                    className="w-full bawahfoto border-secondary border-4"
                    data-aos="fade-up"
                    data-aos-duration="1800"
                  />
                  <p
                    className="font-Cardo text-xl font-semibold text-primary"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    Mario Aditia
                  </p>
                  <p
                    className="font-Cardo text-sm text-center text-primary"
                    data-aos="fade-up"
                    data-aos-duration="2100"
                  >
                    Putra kedua dari <br /> Bpk. Rhoip & Ibu Ningsih
                  </p>
                  <a
                    href="https://www.instagram.com/marioaditya32/"
                    target="_blank"
                    className="flex items-center gap-2 font-Cardo"
                    rel="noopener noreferrer"
                    data-aos="fade-up"
                    data-aos-duration="2200"
                  >
                    <FaInstagram size={20} />
                    <p>Marioaditia32</p>
                  </a>
                </div>
                <p className="font-Cardo text-secondary">&</p>
                <div className="w-[50%] flex flex-col justify-between items-center gap-2">
                  <img
                    src="./photos/perempuan.jpg"
                    alt="laki laki"
                    className="w-full border-secondary border-4 bawahfoto"
                    data-aos="fade-up"
                    data-aos-duration="1800"
                  />
                  <p
                    className="font-Cardo text-xl font-semibold text-primary text-center"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    Venny Noeraeni
                  </p>
                  <p
                    className="font-Cardo text-sm text-center text-primary"
                    data-aos="fade-up"
                    data-aos-duration="2100"
                  >
                    Putri Pertama dari <br /> Bpk. Mohamad Usni (Alm) & Ibu
                    Marleni
                  </p>
                  <a
                    href="https://www.instagram.com/inivenny_/"
                    target="_blank"
                    className="flex items-center gap-2 font-Cardo"
                    rel="noopener noreferrer"
                    data-aos="fade-up"
                    data-aos-duration="2200"
                  >
                    <FaInstagram size={20} />
                    <p>@inivenny_</p>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="acara">
            <div className="w-full h-auto min-h-screen md:h-auto bg-primary relative z-0 flex flex-col md:flex-row gap-8 items-center p-9 md:py-12 overflow-hidden">
              <img
                src="./icons/aksenwhite.svg"
                alt="aksenwhite"
                className="absolute inset-0 z-0 scale-110 md:w-full h-screen md:h-auto"
              />
              <div
                className="bg-white/95 font-Cardo akadresepsi h-auto p-3 w-full flex flex-col justify-center items-center gap-2"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <img
                  src="./icons/cincin.svg"
                  alt="cincin"
                  data-aos="fade-up"
                  data-aos-duration="1300"
                />
                <p
                  className="text-2xl"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  Akad
                </p>

                <div
                  className="font-Montserrat text-lg text-center"
                  data-aos="fade-up"
                  data-aos-duration="1700"
                >
                  <p>Minggu, 03 Maret 2024</p>
                  <p>08.00 WIB s.d Selesai</p>
                </div>
                <div
                  className="w-72 bg-primary h-[1px] rounded-full"
                  data-aos="fade-up"
                  data-aos-duration="1800"
                ></div>
                <div
                  className="flex items-center gap-2"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <img src="./icons/gps.svg" alt="gps" className="w-4 h-4" />
                  <p className="font-Montserrat">Gedung Graha Yadika C</p>
                </div>
                <p
                  className="text-secondary font-Montserrat text-xs text-center font-medium"
                  data-aos="fade-up"
                  data-aos-duration="2100"
                >
                  Jl. Palem Ganda Asri RT 001 RW 001 <br />
                  Karang Tengah, Kota Tangerang Banten
                </p>
                <a
                  href="https://www.google.com/maps/place/Graha+Yadika/@-6.2236734,106.7048466,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69fa1db5298b8f:0x72ace077fb5ca954!8m2!3d-6.2236787!4d106.7074215!16s%2Fg%2F11d_bjzb26?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary px-8 py-2 rounded-2xl flex items-center gap-2"
                  data-aos="fade-up"
                  data-aos-duration="2200"
                >
                  <img
                    src="./icons/lokasi.svg"
                    alt="lokasi"
                    className="h-4 w-4"
                  />
                  <p className="text-white font-Montserrat text-sm">
                    Lihat Maps
                  </p>
                </a>
              </div>
              <div
                className="bg-white/95 font-Cardo akadresepsi h-auto p-3 w-full flex flex-col justify-center items-center gap-2"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <img
                  src="./icons/resepsi.svg"
                  alt="resepsi"
                  data-aos="fade-up"
                  data-aos-duration="1300"
                />
                <p
                  className="text-2xl"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  Resepsi
                </p>

                <div
                  className="font-Montserrat text-lg text-center"
                  data-aos="fade-up"
                  data-aos-duration="1700"
                >
                  <p>Minggu, 03 Maret 2024</p>
                  <p>11.00 s.d 14.00 WIB</p>
                </div>
                <div
                  className="w-72 bg-primary h-[1px] rounded-full"
                  data-aos="fade-up"
                  data-aos-duration="1800"
                ></div>
                <div
                  className="flex items-center gap-2"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <img src="./icons/gps.svg" alt="gps" className="w-4 h-4" />
                  <p className="font-Montserrat">Gedung Graha Yadika C</p>
                </div>
                <p
                  className="text-secondary font-Montserrat text-xs text-center font-medium"
                  data-aos="fade-up"
                  data-aos-duration="2100"
                >
                  Jl. Palem Ganda Asri RT 001 RW 001 <br />
                  Karang Tengah, Kota Tangerang Banten
                </p>
                <a
                  href="https://www.google.com/maps/place/Graha+Yadika/@-6.2236734,106.7048466,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69fa1db5298b8f:0x72ace077fb5ca954!8m2!3d-6.2236787!4d106.7074215!16s%2Fg%2F11d_bjzb26?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary px-8 py-2 rounded-2xl flex items-center gap-2"
                  data-aos="fade-up"
                  data-aos-duration="2200"
                >
                  <img
                    src="./icons/lokasi.svg"
                    alt="lokasi"
                    className="h-4 w-4"
                  />
                  <p className="text-white font-Montserrat text-sm">
                    Lihat Maps
                  </p>
                </a>
              </div>
            </div>
          </section>

          <section id="hitungmundur">
            <div className="w-full h-auto min-h-screen relative z-0 overflow-hidden flex flex-col items-center p-6 md:p-32">
              <div
                className="bg-white/20 shadow-inner shadow-white/30 gap-5 backdrop-blur countdownn w-full h-[95%] pt-14 flex flex-col items-center p-6"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <img
                  src="./icons/countdown.svg"
                  alt="hitungmundur"
                  className="w-36"
                  data-aos="fade-up"
                  data-aos-duration="1700"
                />
                <div
                  className="text-white font-Cardo"
                  data-aos="fade-up"
                  data-aos-duration="1900"
                >
                  <p className="text-center">Hitung Mundur</p>
                  <p className="text-center text-3xl">Hari Bahagia Kami</p>
                </div>
                <CountdownComponent
                  targetDate={3}
                  targetHour={8}
                  targetMinute={0}
                  targetMonth={2}
                  targetYear={2024}
                />
              </div>
            </div>
          </section>

          <section id="galeri">
            <div className="w-full h-auto bg-[#000000]/50 flex flex-col items-center p-6 gap-5 backdrop-blur-sm">
              <div className="w-full h-56 md:h-full overflow-hidden rounded-2xl shaodw shadow-white/20 shadow-lg">
                <img
                  src="./photos/img8.JPG"
                  alt="fotoutama"
                  loading="lazy"
                  className="w-full"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {arrayGambar.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`gambar-${index}`}
                    className="w-auto h-auto rounded-2xl shadow shadow-white/50"
                    quality={50}
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  />
                ))}
              </div>
            </div>
          </section>

          <section id="ucapan">
            <div className="relative z-0 overflow-hidden w-full bg-white h-auto min-h-screen flex flex-col justify-start items-center p-6 gap-5">
              <img
                src="./icons/aksenbg.svg"
                alt="aksen"
                className="inset-0 absolute -z-10 scale-110 md:w-full h-screen md:h-auto"
              />
              <div
                className="text-center"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <p className="text-lg font-Montserrat font-medium">
                  Do'a & Ucapan
                </p>
                <p className="text-3xl font-Cardo">Teruntuk Mempelai</p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1700"
                className="w-full"
              >
                <div className="w-auto">
                  <Komentar />
                </div>
              </div>
            </div>
          </section>

          <section id="penutup">
            <div className="w-full h-screen flex flex-col gap-3 justify-center items-center overflow-hidden relative z-0 bg-[#000000]">
              <img
                src="./photos/bgpenutup.png"
                alt="penutup"
                className="w-full absolute -z-10 inset-0 opacity-50"
              />
              <img
                src="./icons/hiasanpenutup.svg"
                alt="hiasanpenutup"
                className="-mt-20 2xl:w-80"
                data-aos="fade-up"
                data-aos-duration="1700"
              />
              <div
                className="text-white font-Cardo uppercase text-lg text-center"
                data-aos="fade-up"
                data-aos-duration="1900"
              >
                <p>
                  Terima Kasih <br /> Atas Kehadiran & Do'a Restunya Kami yang
                  Berbahaga
                </p>
              </div>
              <p
                className="text-4xl text-white font-Cardo text-center pt-10"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Mario & Venny
              </p>

              <div
                className="w-full flex flex-col items-center gap-2 absolute bottom-10"
                data-aos="fade-up"
                data-aos-duration="2200"
              >
                <img
                  src="./icons/divitationlogo.svg"
                  alt="logo divitation"
                  className="w-24"
                />
                <p className="text-white font-Montserrat text-center text-sm">
                  Digital Wedding Invitation © 2024 <br />
                  All Rights Reserved
                </p>
                <div className="flex items-center gap-5 w-full justify-center">
                  <a
                    href="https://www.tiktok.com/@divitation_official?is_from_webapp=1&sender_device=pc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="./icons/tiktok.svg"
                      alt="tiktok"
                      className="w-8"
                    />
                  </a>
                  <img src="./icons/hr.svg" alt="hr" className="w-1" />
                  <a
                    href="https://www.instagram.com/divitation_official/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="./icons/ig.svg" alt="ig" className="w-8" />
                  </a>
                  <img src="./icons/hr.svg" alt="hr" className="w-1" />
                  <a
                    href="https://wa.me/628990656996"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="./icons/wa.svg" alt="wa" className="w-8" />
                  </a>
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
