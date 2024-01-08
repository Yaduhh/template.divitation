import "./App.css";
import { BiLogoInstagram } from "react-icons/bi";
import { useState } from "react";
import { useEffect } from "react";
import Aos from "aos";
import Navigationn from "./component/bottom-navigation";
import classNames from "classnames";
import CoverScreen from "./screens/cover";
import DiskAudio from "./component/disk-audio";
import Copy from "clipboard-copy";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import Fancybox from "./component/wrapper/fancybox-wrapper";
import toast, { Toaster } from "react-hot-toast";
import CountdownComponent from "./component/countdown";

function App() {
  const [openCover, setOpenCover] = useState(false);
  const [end, setEnd] = useState(false);
  const [playSong, setplaySong] = useState(false);

  const [isLastPage, setIsLastPage] = useState(false);
  const [openGift, setOpenGift] = useState(false);

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

  function submitGreeting(e) {
    e.preventDefault();

    // const name = e.target.user.value;
    // const message = e.target.text.value;

    // Membuat pesan yang akan dikirimkan melalui URL WhatsApp
    const greetingMessage = `Halo Ainul 👋 selamat atas pernikahannya, semoga menjadi pasangan yang sakinah mawaddah wa rohmah`;

    // Membentuk URL WhatsApp
    const whatsappURL = `https://wa.me/6285741977677?text=${encodeURIComponent(
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
            : "flex justify-center h-screen overflow-hidden bg-[#161D0E] bg-opacity-50"
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
            : "flex justify-center w-full  bg-[#161D0E] bg-opacity-50"
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
              className="bg-[#161D0E]"
              src={"audio/yarabb.mp3"}
              playSong={playSong}
              setplaySong={setplaySong}
            />
            <Navigationn className={"bg-[#161D0E]"} />
          </div>
          <div className="relative ">
            <div className="fixed max-w-3xl  top-0 h-screen w-full">
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 5000 }}
                className="h-screen "
              >
                <SwiperSlide>
                  <div
                    className="siper-slide-content aos-animate"
                    data-aos="fade-up"
                    data-aos-duration="2100"
                  >
                    <div className="absolute bg-[#0E1A0A] w-full h-full opacity-60"></div>
                    <img
                      src="./photos/01.png"
                      alt="cover"
                      className="w-full object-cover"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="siper-slide-content"
                    data-aos="fade-up"
                    data-aos-duration="2100"
                  >
                    <div className="absolute bg-[#0E1A0A] w-full h-full opacity-60"></div>
                    <img
                      src="./photos/02.png"
                      alt="cover"
                      className="w-full object-cover"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="siper-slide-content"
                    data-aos="fade-up"
                    data-aos-duration="2100"
                  >
                    <div className="absolute bg-[#0E1A0A] w-full h-full opacity-60"></div>
                    <img
                      src="./photos/03.png"
                      alt="cover"
                      className="w-full object-cover"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="siper-slide-content"
                    data-aos="fade-up"
                    data-aos-duration="2100"
                  >
                    <div className="absolute bg-[#0E1A0A] w-full h-full opacity-60"></div>
                    <img
                      src="./photos/cover.png"
                      alt="cover"
                      className="w-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <section id="home">
            <div className="w-full overflow-hidden relative -z-0 gap-5 h-screen flex flex-col justify-evenly items-start">
              <div className="text-base font-Poppins text-white px-8 w-full pb-[20%]">
                <p data-aos="fade-up" data-aos-duration="2100">
                  Happy Wedding
                </p>
                <p
                  className="text-3xl md:text-5xl font-Cardo my-2"
                  data-aos="fade-up"
                  data-aos-duration="2100"
                >
                  Ainul & Elly
                </p>
                <p data-aos="fade-up" data-aos-duration="2100">
                  Selasa, 23 Januari 2024
                </p>
                <div
                  className="max-w-lg my-2 md:my-8"
                  data-aos="fade-up"
                  data-aos-duration="2200"
                >
                  <img
                    src="./photos/home.png"
                    alt="cover"
                    className="w-full rounded-xl"
                  />
                </div>
                <div data-aos="fade-up" data-aos-duration="2300">
                  <p className="text-sm lg:text-base">
                    Maha suci Allah yang telah menciptakan makhluk-Nya
                    berpasang-pasangan Ya Allah, perkenankanlah kami
                    merangkaikan kasih sayang yang Kau ciptakan diantara kami
                    untuk mengikuti Sunnah Rasul-Mu dalam rangka membentuk
                    keluarga yang sakinah, mawaddah, warahmah.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="pasangan">
            {/* pria */}
            <div className="w-full overflow-hidden z-0 relative gap-4 md:gap-3 h-screen flex flex-col justify-center items-start ">
              <div className="bg-[#0E1A0A] h-full bg-opacity-60 flex flex-col ml-8 text-white">
                <div className="px-4 box-content pt-8 md:pt-16">
                  <div className="flex justify-center mb-4">
                    <div className="max-w-[204px] md:max-w-[240px]">
                      <img
                        className="mb-5 md:mb-0 rounded-full border-4 border-[#0E1A0A] w-full "
                        src="/photos/man.png"
                        alt="pria"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                      />
                    </div>
                  </div>
                  <div>
                    <p
                      className="text-3xl font-Cardo"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      Muhamad
                      <br /> Ainul Yaqin S.Pd
                    </p>
                    <p
                      className="font-Poppins text-sm my-8"
                      data-aos="fade-up"
                      data-aos-duration="1300"
                    >
                      Putra pertama dari
                    </p>
                    <p
                      className="font-Poppins"
                      data-aos="fade-up"
                      data-aos-duration="1400"
                    >
                      Bapak H. Syakur &<br /> Ibu Hj. Musyaropah
                    </p>
                  </div>
                  <a
                    className="flex items-center gap-1 font-Cardo mt-12 md:mt-16"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    href="https://www.instagram.com/yaqinanl/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BiLogoInstagram size={22} />
                    <p style={{ fontFamily: "Cardo" }}>@yaqinanl</p>
                  </a>
                </div>
              </div>
            </div>
            {/* wanita */}
            <div className="w-full overflow-hidden z-0 relative gap-4 md:gap-3 h-screen flex flex-col justify-center items-end ">
              <div className="bg-[#0E1A0A] h-full bg-opacity-60 flex flex-col mr-8 text-white">
                <div className="px-4 box-content pt-8 md:pt-16">
                  <div className="flex justify-center mb-4">
                    <div className="max-w-[204px] md:max-w-[240px]">
                      <img
                        className="mb-5 md:mb-0 rounded-full border-4 border-white w-full "
                        src="/photos/girl.png"
                        alt="pria"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                      />
                    </div>
                  </div>
                  <div>
                    <p
                      className="text-3xl font-Cardo"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      Elly Setiani S.M
                    </p>
                    <p
                      className="font-Poppins text-sm my-8"
                      data-aos="fade-up"
                      data-aos-duration="1300"
                    >
                      Putri ketiga dari
                    </p>
                    <p
                      className="font-Poppins"
                      data-aos="fade-up"
                      data-aos-duration="1400"
                    >
                      Bapak Fuad &<br /> Ibu Dumilah
                    </p>
                  </div>
                  <a
                    className="flex items-center gap-1 font-Cardo mt-12 md:mt-16"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    href="https://www.instagram.com/elysetiani_/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BiLogoInstagram size={22} />
                    <p style={{ fontFamily: "Cardo" }}>@elysetiani_</p>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="w-full overflow-hidden z-0 relative gap-4 md:gap-3 h-screen flex flex-col justify-start items-start ">
              <div className="px-8 text-white font-Poppins mt-8">
                <p
                  className="text-3xl font-Poppins"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  Our Story
                </p>
                <p
                  className="text-sm my-4 font-Poppins"
                  data-aos="fade-up"
                  data-aos-duration="850"
                >
                  Menikah bukan perlombaan, bukan soal cepat atau lambat.
                  Tetapi, tentang siapa yang siap mengemban amanah yang besar.
                </p>
                <Fancybox
                  options={{
                    Carousel: {
                      infinite: false,
                    },
                  }}
                >
                  <div
                    className="flex gap-4 w-full"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <a data-fancybox="gallery" href="./photos/story1.png">
                      <img
                        src="./photos/story1.png"
                        alt="cover"
                        className="w-full rounded-xl"
                      />
                    </a>
                    <a data-fancybox="gallery" href="./photos/story2.png">
                      <img
                        src="./photos/story2.png"
                        alt="cover"
                        className="w-full rounded-xl"
                      />
                    </a>
                  </div>
                </Fancybox>
                <div
                  className="bg-[#0E1A0A] w-full h-full bg-opacity-60 rounded-xl mt-4 p-4 overflow-auto max-h-80 "
                  data-aos="fade-up"
                  data-aos-duration="1800"
                >
                  <div className="flex flex-col text-sm gap-4">
                    <div className="">
                      <p className="font-Cardo">23 Januari 2022</p>
                      <p className="my-1 font-semibold tracking-wider">
                        AWAL BERTEMU
                      </p>
                      <p className="text-xm">
                        Kami dipertemukan lantaran film “Filosofi Kopi 2: Ben &
                        Jody” yang saat itu sedang mendapat animo yang besar di
                        masyarakat.
                      </p>
                    </div>
                    <div className="">
                      <p className="font-Cardo">23 Maret 2022</p>
                      <p className="my-1 font-semibold tracking-wider">
                        MENJALIN HUBUNGAN
                      </p>
                      <p className="text-xm">
                        Karena merasa cocok satu sama lain, maka kami memutuskan
                        untuk mengenal lebih dekat.
                      </p>
                    </div>
                    <div className="">
                      <p className="font-Cardo">23 Mei 2023</p>
                      <p className="my-1 font-semibold tracking-wider">
                        BERTUNANGAN
                      </p>
                      <p className="text-xm">
                        Setelah kurang lebih satu tahun saling mengenal,
                        kemudian kami melangkah ke jenjang yang lebih serius
                        dengan mempertemukan kedua keluarga kami.
                      </p>
                    </div>
                    <div className="">
                      <p className="font-Cardo">23 Januari 2024</p>
                      <p className="my-1 font-semibold tracking-wider">
                        HARI PERNIKAHAN
                      </p>
                      <p className="text-xm">
                        Untuk menjalani babak baru di kehidupan, sebagaimana
                        dipertemukannya Nabi Muhammad dengan Siti Khadijah.
                        InsyaAllah kami akan melaksanakan pernikahan .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="acara">
            <div className="w-full overflow-hidden z-0 relative gap-4 md:gap-3 h-screen flex flex-col justify-start items-start ">
              <div className="w-full px-8 pt-8 flex flex-col gap-5">
                <div
                  className="p-5 rounded-2xl bg-[#0E1A0A] bg-opacity-50 text-white font-Poppins"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <p className="text-3xl font-medium tracking-wider mb-2">
                    AKAD NIKAH
                  </p>
                  <p className="text-sm md:text-base">
                    Selasa, 23 Januari 2024
                  </p>
                  <p className="text-sm md:text-base my-2">08:00 WIB</p>
                  <p className="text-sm md:text-base">
                    Dk. Jebogo II RT.09 / RW.03
                    <br />
                    Sumurjomblangbogo Bojong
                    <br /> Kab. Pekalongan
                  </p>
                  <a
                    target="_blank"
                    href="https://www.google.com/maps?q=-6.985318660736084,109.58277893066406&z=17&hl=id"
                    className="border border-white rounded-full pl-3 pr-3 flex items-center w-fit gap-2 mt-4 py-1"
                    rel="noreferrer"
                  >
                    <span>LIHAT LOKASI</span>
                    <div>
                      <img
                        src="./icons/circle-right.png"
                        alt="cover"
                        className="w-5 h-5 "
                      />
                    </div>
                  </a>
                </div>
                <div
                  className="p-5 rounded-2xl bg-[#0E1A0A] bg-opacity-50 text-white font-Poppins"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p className="text-3xl font-medium tracking-wider mb-2">
                    RESEPSI
                  </p>
                  <p className="text-sm md:text-base">
                    Selasa, 23 Januari 2024
                  </p>
                  <p className="text-sm md:text-base my-2">13:00 WIB</p>
                  <p className="text-sm md:text-base">
                    Dk. Jebogo II RT.09 / RW.03
                    <br />
                    Sumurjomblangbogo Bojong
                    <br /> Kab. Pekalongan
                  </p>
                  <a
                    target="_blank"
                    href="https://www.google.com/maps?q=-6.985318660736084,109.58277893066406&z=17&hl=id"
                    className="border border-white rounded-full pl-3 pr-3 flex items-center w-fit gap-2 mt-4 py-1"
                    rel="noreferrer"
                  >
                    <span>LIHAT LOKASI</span>
                    <div>
                      <img
                        src="./icons/circle-right.png"
                        alt="cover"
                        className="w-5 h-5 "
                      />
                    </div>
                  </a>
                </div>
                <CountdownComponent
                  targetYear={2024}
                  targetMonth={0}
                  targetDate={23}
                  targetHour={13}
                  targetMinute={0}
                />
              </div>
            </div>
          </section>
          <section id="galeri">
            <div className="w-full overflow-hidden z-0 relative gap-4 md:gap-3 flex flex-col justify-start items-start ">
              <div className="flex flex-col items-center px-8 pt-4 text-white font-Poppins">
                <div
                  className="mt-8"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <p className="text-3xl font-medium tracking-wide">
                    OUR MOMENT
                  </p>
                  <p className="text-sm md:text-base text-justify">
                    Momen berharga kami yang tersimpan di memori untuk bisa
                    dikenang kembali di masa depan
                  </p>
                </div>
                <Fancybox
                  options={{
                    Carousel: {
                      infinite: false,
                    },
                  }}
                >
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div class="col-span-3">
                      <a
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        className="w-full"
                        data-fancybox="gallery"
                        href="./photos/galeri/01.png"
                      >
                        <img
                          src="./photos/galeri/01.png"
                          alt="cover"
                          className="w-full h-full rounded-xl object-cover"
                        />
                      </a>
                    </div>
                    <div class="">
                      <a
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        data-fancybox="gallery"
                        href="./photos/galeri/02.png"
                        className="h-[194px] w-full"
                      >
                        <img
                          src="./photos/galeri/05.png"
                          alt="cover"
                          className="w-full h-full rounded-xl object-cover"
                        />
                      </a>
                    </div>
                    <div class="">
                      <a
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        data-fancybox="gallery"
                        href="./photos/galeri/05.png"
                        className="h-[218px] w-full"
                      >
                        <img
                          src="./photos/galeri/02.png"
                          alt="cover"
                          className="w-full h-full rounded-xl object-cover"
                        />
                      </a>
                    </div>
                    <div class="">
                      <a
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        data-fancybox="gallery"
                        href="./photos/galeri/07.png"
                        className="h-[218px] w-full"
                      >
                        <img
                          src="./photos/galeri/07.png"
                          alt="cover"
                          className="w-full h-full rounded-xl object-cover"
                        />
                      </a>
                    </div>
                    <div class="col-span-3">
                      <a
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        data-fancybox="gallery"
                        href="./photos/galeri/04.png"
                        className="h-[218px] w-full"
                      >
                        <img
                          src="./photos/galeri/04.png"
                          alt="cover"
                          className="w-full h-full rounded-xl object-cover"
                        />
                      </a>
                    </div>

                    <div class="col-span-2">
                      <a
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        data-fancybox="gallery"
                        href="./photos/galeri/08.png"
                        className="h-[218px] w-full"
                      >
                        <img
                          src="./photos/galeri/08.png"
                          alt="cover"
                          className="w-full h-full rounded-xl object-cover"
                        />
                      </a>
                    </div>
                    <div>
                      <a
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        data-fancybox="gallery"
                        href="./photos/galeri/09.png"
                        className="h-[218px] w-full"
                      >
                        <img
                          src="./photos/galeri/09.png"
                          alt="cover"
                          className="w-full h-full rounded-xl object-cover"
                        />
                      </a>
                    </div>
                    <div>
                      <a
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        data-fancybox="gallery"
                        href="./photos/galeri/10.png"
                        className="h-[218px] w-full"
                      >
                        <img
                          src="./photos/galeri/10.png"
                          alt="cover"
                          className="w-full h-full rounded-xl object-cover"
                        />
                      </a>
                    </div>
                    <div>
                      <a
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        data-fancybox="gallery"
                        href="./photos/galeri/11.png"
                        className="h-[218px] w-full"
                      >
                        <img
                          src="./photos/galeri/11.png"
                          alt="cover"
                          className="w-full h-full rounded-xl object-cover"
                        />
                      </a>
                    </div>
                    <div>
                      <a
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        data-fancybox="gallery"
                        href="./photos/galeri/12.png"
                        className="h-[218px] w-full"
                      >
                        <img
                          src="./photos/galeri/12.png"
                          alt="cover"
                          className="w-full h-full rounded-xl object-cover"
                        />
                      </a>
                    </div>
                    <div className="col-span-3">
                      <a
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        data-fancybox="gallery"
                        href="./photos/galeri/13.png"
                        className=" w-full"
                      >
                        <img
                          src="./photos/galeri/13.png"
                          alt="cover"
                          className="w-full h-full rounded-xl object-cover"
                        />
                      </a>
                    </div>
                  </div>
                </Fancybox>
              </div>
            </div>
          </section>
          <section id="ucapan">
            <div className="w-full  relative z-0 gap-5 h-auto flex flex-col justify-start items-start py-8 px-8 font-Poppins text-white">
              <div className="mb-8" data-aos="fade-up" data-aos-duration="1200">
                <p className="text-justify">
                  “I love you, I am who I am because of you. You are every
                  reason, every hope and every dream. I’ve ever had and no
                  matter what happens to us in the future, every day we are
                  together is the greatest day of my life. I will always be
                  yours.”
                </p>
                <p className="text-right font-semibold mt-4 mr-4">
                  Ainul & Elly
                </p>
              </div>
              <div className="mb-8 ">
                <p className="text-3xl font-medium ">Ucapan & Doa</p>
                <p className="my-4">
                  Sapa dan kirim ucapan beserta doa terbaik untuk kami yang
                  berbahagia
                </p>
                <button
                  onClick={submitGreeting}
                  className="border border-white rounded-full pl-3 pr-3 py-1 flex items-center w-fit gap-2 mt-4"
                >
                  <span>KIRIM UCAPAN</span>
                  <div>
                    <img
                      src="./icons/white-chevron-right.png"
                      alt="cover"
                      className="w-5 h-5 "
                    />
                  </div>
                </button>
              </div>
              <div data-aos="fade-up" data-aos-duration="1500">
                <p className="text-3xl font-medium ">Wedding Gift</p>
                <p className="my-4 text-justify">
                  Doa restu anda merupakan karunia yang sangat berarti bagi
                  kami. Namun jika memberi adalah ungkapan tanda kasih anda,
                  kami akan senang hati menerimanya yang tentu akan semakin
                  melengkapi kebahagiaan kami.
                </p>
                <button
                  onClick={() => setOpenGift(!openGift)}
                  className="border border-white rounded-full pl-3 pr-3 py-1 flex items-center w-fit gap-2 mt-4"
                >
                  <span>KLIK DISINI</span>
                  <div>
                    <img
                      src="./icons/click.png"
                      alt="cover"
                      className="w-5 h-5 "
                    />
                  </div>
                </button>
              </div>
            </div>
            <div
              className={
                !openGift
                  ? "hidden"
                  : "w-full overflow-hidden relative z-0 gap-5 h-screen flex flex-col justify-center items-center px-16 font-Poppins text-white"
              }
            >
              <div
                className="bg-[#0E1A0A] bg-opacity-50 rounded-3xl w-full flex flex-col justify-evenly h-full"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div>
                  <p className="text-xl font-semibold text-center mb-8">
                    Amplop Digital
                  </p>
                  <div className="flex flex-col items-center mb-8">
                    <div className="w-[120px]">
                      <img
                        src="./icons/BCA.png"
                        alt="cover"
                        className="w-full h-full rounded-xl object-cover"
                      />
                    </div>
                    <p className="text-sm md:text-base mt-2">Eli Setiani</p>
                    <p className="text-sm md:text-base mt-2">2500903581</p>
                    <button
                      onClick={() => {
                        Copy("2500903581");
                        toast.success("Nomor rekening BCA berhasil disalin");
                      }}
                      className="border border-white rounded-full pl-3 pr-3 py-1 flex items-center w-fit gap-2 mt-4"
                    >
                      <span className="text-sm">SALIN</span>
                      <div>
                        <img
                          src="./icons/copy.png"
                          alt="cover"
                          className="w-5 h-5 "
                        />
                      </div>
                    </button>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-[120px]">
                      <img
                        src="./icons/gopay.png"
                        alt="cover"
                        className="w-full h-full rounded-xl object-cover"
                      />
                    </div>
                    <p className="text-sm md:text-base mt-2">Eli Setiani</p>
                    <p className="text-sm md:text-base mt-2">085879100709</p>
                    <button
                      onClick={() => {
                        Copy("085879100709");
                        toast.success("Nomor GoPay berhasil disalin");
                      }}
                      className="border border-white rounded-full pl-3 pr-3 py-1 flex items-center w-fit gap-2 mt-4"
                    >
                      <span className="text-sm">SALIN</span>
                      <div>
                        <img
                          src="./icons/copy.png"
                          alt="cover"
                          className="w-5 h-5 "
                        />
                      </div>
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-xl font-semibold text-center mb-4">
                    Kirim Kado
                  </p>
                  <div className="flex flex-col items-center">
                    <div className="w-[60px]">
                      <img
                        src="./icons/gift.png"
                        alt="cover"
                        className="w-full h-full rounded-xl object-cover"
                      />
                    </div>
                    <p className="text-sm md:text-base mt-2">
                      Rumah Eli Setiani
                    </p>
                    <p className="text-sm md:text-base mt-2 text-center">
                      Dk. Jebogo II RT.09 / RW.03 <br /> Sumurjomblangbogo
                      Bojong <br /> Kab. Pekalongan
                    </p>
                    <button
                      onClick={() => {
                        Copy(
                          "Dk. Jebogo II RT.09 / RW.03,  Sumurjomblangbogo Bojong, Kab. Pekalongan"
                        );
                        toast.success("Alamat berhasil disalin");
                      }}
                      className="border border-white rounded-full pl-3 pr-3 py-1 flex items-center w-fit gap-2 mt-4"
                    >
                      <span className="text-sm">SALIN</span>
                      <div>
                        <img
                          src="./icons/copy.png"
                          alt="cover"
                          className="w-5 h-5 "
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="w-full overflow-hidden relative z-0 gap-5 h-auto flex flex-col justify-start items-start py-8 font-Poppins text-white">
              <div
                className="px-8 mb-20"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <p className="text-2xl mb-4">Terimakasih</p>
                <div className="w-full mb-4">
                  <img
                    src="./photos/end.png"
                    alt="cover"
                    className="w-full object-cover"
                  />
                </div>
                <p className="mb-8 text-justify ">
                  Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
                  Bapak/Ibu/Saudara/i berkenan hadir di hari bahagia kami.
                </p>
                <p className="font-semibold ">
                  Kami yang berbahagia, <br />
                  <br />
                  Ainul & Elly
                </p>
              </div>
              <div className="w-full mb-12 font-Poppins">
                <div className="flex justify-center w-full h-10 ">
                  <div className="flex flex-col items-center">
                    <div className="w-24 mb-1">
                      <img
                        src="./icons/divitation.png"
                        alt="cover"
                        className="w-full object-cover"
                      />
                    </div>
                    <p className="text-xs text-center my-1">
                      Digital Wedding Invitation © 2023. All Rights <br />
                      Reserved
                    </p>
                    <div className="flex gap-2 mt-1">
                      <a
                        target="_blank"
                        href="https://www.tiktok.com/@divitation_official"
                        className="w-6"
                        rel="noreferrer"
                      >
                        <img
                          src="./icons/tiktok.png"
                          alt="cover"
                          className="w-full object-cover"
                        />
                      </a>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/divitation_official"
                        className="w-6"
                        rel="noreferrer"
                      >
                        <img
                          src="./icons/ig.png"
                          alt="cover"
                          className="w-full object-cover"
                        />
                      </a>
                      <a
                        href={`https://wa.me/6282328304538?text=Haloo+Divitation👋`}
                        className="w-6"
                      >
                        <img
                          src="./icons/wa.png"
                          alt="cover"
                          className="w-full object-cover"
                        />
                      </a>
                    </div>
                  </div>
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
