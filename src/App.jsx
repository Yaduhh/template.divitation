import AOS from "aos";
import "aos/dist/aos.css";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { FaMapMarkedAlt, FaPauseCircle } from "react-icons/fa";
import "./App.css";
import CountdownComponent from "./components/countdown";
import Cover from "./components/cover";
import NavigationBottom from "./components/navigation-bottom";

function App() {
  const [openCover, setOpenCover] = useState(false);
  const [end, setEnd] = useState(false);
  const [playSong, setplaySong] = useState(true);

  useEffect(() => {
    AOS.init({
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

  // const dataUcapan = [
  //   {
  //     user: "Septian Dwijaya",
  //     time: "22 June 2023, 13:45",
  //     text: "Alhamdulillah, akhirnya temenku satu ini mengakhiri masa lajangnya. Semoga menjadi keluarga yang samawa, diberikan anak yang solih & Solihah. Aamiin....",
  //   },
  //   {
  //     user: "Putri Sanjaya",
  //     time: "22 June 2023, 13:45",
  //     text: "Semoga menjadi keluarga yang samawa, diberikan anak yang solih & Solihah. Aamiin....",
  //   },
  //   {
  //     user: "Selvi",
  //     time: "22 June 2023, 13:45",
  //     text: "Alhamdulillah, Semoga menjadi keluarga yang samawa, diberikan anak yang solih & Solihah. Aamiin....",
  //   },
  //   {
  //     user: "Abdel",
  //     time: "22 June 2023, 13:45",
  //     text: "Alhamdulillah, akhirnya temenku satu ini mengakhiri masa lajangnya. Semoga menjadi keluarga yang samawa, diberikan anak yang solih & Solihah. Aamiin....",
  //   },
  //   {
  //     user: "Septian Dwijaya",
  //     time: "22 June 2023, 13:45",
  //     text: "Alhamdulillah, akhirnya temenku satu ini mengakhiri masa lajangnya. Semoga menjadi keluarga yang samawa, diberikan anak yang solih & Solihah. Aamiin....",
  //   },
  // ];
  // const [ucapan, setUcapan] = useState(dataUcapan);

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
  function copyToClipboard(norek) {
    const nomorRekeningElement = document.getElementById(norek);

    if (nomorRekeningElement) {
      const textToCopy = nomorRekeningElement.textContent;
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;

      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);

      // Optional: Tampilkan pesan atau perubahan warna tombol setelah menyalin
      alert("Nomor rekening berhasil disalin!");
    }
  }

  function handleAudio() {
    const audio = document.getElementById("audio");
    const disc = document.getElementById("disc");
    audio.play();
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

  return (
    <>
      {/* Cover */}
      <div
        className={
          end
            ? "hidden"
            : "flex justify-center bg-base-200 h-screen overflow-hidden"
        }
        onTransitionEnd={() => setEnd(true)}
      >
        <div
          id="cover"
          className={classNames(
            `relative z-50 h-[112%] 2xl:h-screen w-screen md:w-[448px] overflow-hidden`,
            openCover
              ? "opacity-0 -top-[1000px] transition-all duration-1000 ease-in-out"
              : "top-0 opacity-100 transition-all duration-1000 ease-in-out"
          )}
        >
          <Cover kepada={kepada} onClick={() => handleCover()} />
        </div>
      </div>
      {/* end Cover */}
      {/* undangan */}
      <div
        className={classNames(
          !openCover ? "hidden" : "flex justify-center w-full"
        )}
      >
        <div className="w-[428px] h-full relative">
          {/* disc music */}
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
                `w-10 h-10 rounded-full border-2 border-base-300 flex items-center justify-center bg-[#D18C4B] p-1 box-content`
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
          {/* Navigasi bottom */}
          <NavigationBottom />

          <section
            className="h-screen bg-[#F5F0F4] flex flex-col items-center justify-evenly"
            id="home"
          >
            <div className="absolute z-0">
              <img src="/radial-shines.png" alt="" />
            </div>
            <img src="/hero-flower.png" alt="" />
            <div className="flex flex-col items-center z-10">
              <p
                className="font-Cardo text-xl"
                data-aos-mirror="true"
                data-aos="fade-zoom-in"
                data-aos-duration="100"
              >
                The wedding of
              </p>
              <div
                className="flex justify-center items-center gap-2 text-4xl"
                data-aos-mirror="true"
                data-aos="fade-zoom-in"
                data-aos-duration="400"
              >
                <p className="font-DM-Serif-display">Tasya</p>
                <p className="font-Ribeye-marrow text-6xl text-white drop-shadow-[0_1.2px_1.2px_rgba(194,127,92,1)]">
                  &
                </p>
                <p className="font-DM-Serif-display">Devon</p>
              </div>
            </div>
            <div className="flex flex-col items-center z-10">
              <p className="font-Corinthia text-5xl">Sabtu</p>
              <p className="font-Ribeye-marrow text-3xl">28.10.2023</p>
              <p className="font-Cardo text-lg">Pukul 10.00 Wib - Selesai</p>
            </div>
            <img src="/hero-pengantin.png" alt="" />

            <div className="h-20 w-max right-0 absolute bottom-[90px] left-1/2 transform -translate-x-1/2 -translate-y-1/4"></div>
          </section>
          <section
            id="salam"
            className="h-screen bg-[#F5F0F4] flex flex-col items-center justify-evenly overflow-hidden"
          >
            <div className="absolute z-0">
              <img src="/radial-shines-2.png" alt="" />
            </div>
            <img
              src="/hero-flower.png"
              alt=""
              data-aos-mirror="true"
              data-aos="fade-up"
              data-aos-duration="700"
            />
            <div
              className="text-center z-10 flex flex-col gap-2"
              data-aos-mirror="true"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p className="">بسم الله الرحمن الرحيم</p>
              <p className="font-Parisienne text-lg">
                Assalamu'alaikum Warohmatullahi Wabarokaatuh
              </p>
            </div>
            <div
              className="z-10 p-8"
              data-aos-mirror="true"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <div className="relative left-[95%]">
                <img src="/quotes-icon.png" alt="" />
              </div>
              <p className="font-Cardo px-8 text-center italic">
                Maha suci Allah yang telah menciptakan makhluk-Nya
                berpasang-pasangan
              </p>
              <br />
              <p className="font-Cardo px-8 text-center">
                Ya Allah, perkenankanlah kami merangkaikan kasih sayang yang Kau
                ciptakan diantara kami untuk mengikuti Sunnah Rasul-Mu dalam
                rangka membentuk keluarga yang sakinah, mawaddah, warahmah 🤲
              </p>
              <div className="relative left-0">
                <img className="rotate-180" src="/quotes-icon.png" alt="" />
              </div>
            </div>
            <div className="relative bottom-0">
              <img src="/plant-bottom.png" alt="" />
            </div>
          </section>
          <section
            id="pasangan"
            className="h-screen bg-[#F5F0F4] flex flex-col items-center justify-evenly relative"
          >
            <div className="absolute z-0">
              <img className="" src="/radial-shines-2.png" alt="" />
            </div>
            <div className="absolute bottom-0 left-0">
              <img src="/lines-flower-accent.png" alt="" />
            </div>
            <img
              src="/hero-flower.png"
              alt=""
              className="z-10"
              data-aos-mirror="true"
              data-aos="fade-up"
              data-aos-duration="700"
            />
            <div
              className="flex flex-col items-center z-10"
              data-aos-mirror="true"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <p className="text-5xl font-DM-Serif-display text-center">
                Tasya <br /> Isthi Faridha
              </p>
              <div className="flex gap-2 pt-4 box-content">
                <img src="/ig-icon.png" alt="" />
                <a
                  href="https://www.instagram.com/tassyaiiff/"
                  target="_blank"
                  className="font-Cardo"
                  rel="noreferrer"
                >
                  @tassyaiiff
                </a>
              </div>
            </div>
            <div
              className="text-center z-10"
              data-aos-mirror="true"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="1000"
            >
              <p className="font-Parisienne text-4xl mb-4">
                Putri ke dua Dari Keluarga
              </p>
              <p className="font-Cardo text-xl">
                Bpk. Kasmadi & Ibu alm. Suherni
              </p>
            </div>
            <div
              className="z-10 relative left-10"
              data-aos-mirror="true"
              data-aos="zoom-out-left"
              data-aos-duration="1000"
            >
              <img src="/pengantin-wanita.png" alt="" />
            </div>
          </section>
          <section className="h-screen bg-[#F5F0F4] flex flex-col items-center justify-evenly relative">
            <div className="absolute z-0">
              <img className="" src="/radial-shines-2.png" alt="" />
            </div>
            <div className="absolute bottom-0 right-0 ">
              <img src="/lines-flower-accent-right.png" alt="" />
            </div>
            <img
              src="/hero-flower.png"
              alt=""
              className="z-10"
              data-aos-mirror="true"
              data-aos="fade-up"
              data-aos-duration="700"
            />
            <div
              className="flex flex-col items-center z-10"
              data-aos-mirror="true"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <p className="text-5xl font-DM-Serif-display text-center">
                Devon <br /> Denanda Putra
              </p>
              <div className="flex gap-2 pt-4 box-content">
                <img src="/ig-icon.png" alt="" />
                <a
                  href="https://www.instagram.com/xydvnzptr__/"
                  target="_blank"
                  className="font-Cardo"
                  rel="noreferrer"
                >
                  @xydvnzptr_
                </a>
              </div>
            </div>
            <div
              className="text-center z-10"
              data-aos-mirror="true"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="1000"
            >
              <p className="font-Parisienne text-4xl mb-4">
                Putra Pertama Dari Keluarga
              </p>
              <p className="font-Cardo text-xl">
                Bpk. Sumhadi & Ibu Tatik Sunarti
              </p>
            </div>
            <div
              className="z-10 relative -left-10"
              data-aos-mirror="true"
              data-aos="zoom-out-right"
              data-aos-duration="1000"
            >
              <img src="/pengantin-pria.png" alt="" />
            </div>
          </section>
          <section
            id="acara"
            className="h-screen bg-[#F5F0F4] flex flex-col items-center justify-evenly relative"
          >
            <div
              className="font-DM-Serif-display flex flex-col relative"
              data-aos-mirror="true"
              data-aos="zoom-out"
              data-aos-duration="1000"
            >
              <div className="text-center absolute -left-10 -top-10">
                <p className="text-5xl">Akad</p>
                <p className="text-xl">Pukul 07:00 - 09:00 Wib</p>
              </div>
              <div>
                <img src="/hands-line.png" alt="" />
              </div>
              <div className="text-center absolute -right-10 -bottom-10">
                <p className="text-5xl">Resepsi</p>
                <p className="text-xl">Pukul 10:00 - Selesai</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="absolute translate-y-1/2">
                <img src="/shine-oval-line.png" alt="" />
              </div>
              <p
                className="font-Courgette text-[2.5rem]"
                data-aos-mirror="true"
                data-aos="zoom-out"
                data-aos-duration="1000"
              >
                Sabtu
              </p>
              <p
                className="font-DM-Serif-display text-[3rem]"
                data-aos-mirror="true"
                data-aos="zoom-out"
                data-aos-duration="1000"
              >
                28.10.2023
              </p>
            </div>
            <div
              className="font-Cardo text-center"
              data-aos-mirror="true"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <p className="text-sm font-bold mb-2">Kediaman mempelai wanita</p>
              <p className="text-lg">
                Ds. Kalipancur Rt. 04 Rw. 02 <br /> Kec. Bojong Kab. Pekalongan
              </p>
            </div>
            <div
              className="-mt-10 relative"
              data-aos-mirror="true"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <img src="/maps.png" alt="" />
              <div className="absolute left-2 top-0 translate-x-1/2 translate-y-28">
                <a
                  href="https://maps.app.goo.gl/QTxCvHJHbHqrvvRS9?g_st=iw"
                  target="_blank"
                  className="flex gap-2 bg-[#D18C4B] rounded-full px-4 py-2 font-Cardo text-white"
                  rel="noreferrer"
                >
                  <FaMapMarkedAlt />
                  Lihat di maps
                </a>
              </div>
            </div>
          </section>
          <section
            id="galeri"
            className="h-screen bg-[#F5F0F4] flex flex-col items-center justify-evenly relative"
          >
            <div>
              <img src="/ring.png" alt="" className="pl-24" />
            </div>
            <div className="relative">
              <p
                className="font-DM-Serif-display text-5xl text-center"
                data-aos-mirror="true"
                data-aos="fade-up"
                data-aos-duration="400"
              >
                Kisah Kita <br /> Berdua
              </p>
              <div className="absolute inset-y-6 -right-16">
                <img
                  src="/leaf-1.png"
                  alt=""
                  data-aos-mirror="true"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                />
              </div>
            </div>
            <div data-aos="fade-in" data-aos-duration="2000">
              <img src="/galery-grid.png" alt="" />
              <img src="/galery-float.png" alt="" />
            </div>
          </section>
          <section
            id="ucapan"
            className="h-screen bg-[#F5F0F4] flex flex-col items-center justify-evenly relative"
          >
            <div className="absolute -translate-y-64 translate-x-20">
              <img
                src="/leaf-1.png"
                alt=""
                className=""
                data-aos-mirror="true"
                data-aos="fade-down"
                data-aos-duration="1500"
              />
            </div>
            <div className="absolute -translate-y-10 -translate-x-28">
              <img
                src="/leaf-1.png"
                alt=""
                className="rotate-45"
                data-aos-mirror="true"
                data-aos="fade-down-right"
                data-aos-duration="2500"
              />
            </div>
            <div className="flex flex-col items-center gap-8">
              <div>
                <p className="font-Parisienne text-2xl">
                  Terhitung mundur dari sekarang
                </p>
                <p className="font-DM-Serif-display text-5xl">Menuju hari H</p>
              </div>
              <CountdownComponent
                targetMonth={10}
                targetDate={29}
                targetHour={11}
                targetMinute={0}
              />
            </div>
            <form
              className="text-center mt-10 2xl:mt-20 md:mt-5"
              onSubmit={(e) => {
                submitGreeting(e);
              }}
            >
              <div
                className="text-5xl font-DM-Serif-display mb-4"
                data-aos-mirror="true"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Ucapin
                <br /> Ke Pengantin
              </div>
              <div
                className="text-center mt-3"
                data-aos-mirror="true"
                data-aos="fade-up"
                data-aos-duration="2500"
              >
                <input
                  type="text"
                  name="user"
                  placeholder="Nama anda"
                  className="w-[80%] px-3 py-3 rounded-lg caret-orange-300"
                />
                <textarea
                  name="text"
                  placeholder="Ucapan untuk mempelai"
                  className="w-[80%] px-3 py-3 rounded-lg mt-4 caret-orange-300"
                ></textarea>
              </div>
              <div
                className="text-end px-9 mt-3 w-full"
                data-aos-mirror="true"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <button
                  className={
                    "bg-[#D18C4B] rounded-lg px-5 py-1 text-[#E5E6E3] font-Cardo"
                  }
                  type="submit"
                >
                  Kirim
                </button>
              </div>
            </form>
          </section>
          <section className="h-screen bg-[#F5F0F4] flex flex-col items-center relative">
            <img
              src="top-flower-line.png"
              alt=""
              data-aos-mirror="true"
              data-aos="zoom-out"
              data-aos-duration="1000"
            />
            <p
              className="text-5xl font-DM-Serif-display mb-20"
              data-aos-mirror="true"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Wedding Gift
            </p>
            <div className="px-4">
              <div
                className="flex gap-2"
                data-aos-mirror="true"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="outline outline-1 outline-[#D18C4B] bg-white rounded-xl px-4 py-2">
                  <img src="/logo-bca.svg" alt="" className="mb-4" />
                  <div className="divide-y divide-[#D18C4B]">
                    <p className="font-Cardo text-xs">TASYA ISTHI FARIDHA</p>
                    <p className="font-Cardo text-xs" id="bca">
                      8691881415
                    </p>
                  </div>
                  <button
                    className="flex gap-2 items-center float-right font-Cardo"
                    onClick={() => {
                      copyToClipboard("bca");
                    }}
                  >
                    <img src="/copy-icon.png" alt="" />
                    Salin
                  </button>
                </div>
                <div className="outline outline-1 outline-[#D18C4B] bg-white rounded-xl px-4 py-2">
                  <img src="/logo-bri.svg" alt="" className="mb-4" />
                  <div className="divide-y divide-[#D18C4B]">
                    <p className="font-Cardo text-xs">TASYA ISTHI FARIDHA</p>
                    <p className="font-Cardo text-xs" id="bri">
                      369301005314505
                    </p>
                  </div>
                  <button
                    className="flex gap-2 items-center float-right font-Cardo"
                    onClick={() => {
                      copyToClipboard("bri");
                    }}
                  >
                    <img src="/copy-icon.png" alt="" />
                    Salin
                  </button>
                </div>
              </div>
              <div
                className="outline outline-1 outline-[#D18C4B] bg-white rounded-xl px-4 py-2 w-full mt-4"
                data-aos-mirror="true"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <p className="font-DM-Serif-display text-2xl text-[#D18C4B] relative -bottom-5">
                  Tasya & Devon
                </p>
                <img src="/gift-lineart.png" alt="" />
                <p className="font-Cardo">
                  di
                  <br />
                  Ds. Kalipancur Rt. 04 Rw. 02
                  <br /> Kec. Bojong Kab. Pekalongan
                </p>
              </div>
            </div>
            <div
              className="absolute -bottom-6 z-[999999]"
              data-aos-mirror="true"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <img src="/leafes-flow.png" alt="" />
            </div>
          </section>
          <section
            id="galeri"
            className="h-screen bg-[#F5F0F4] flex flex-col items-center justify-start gap-20 pt-20 relative"
          >
            <div className="relative">
              <div>
                <img
                  src="/accent-pengantin.png"
                  alt=""
                  data-aos-mirror="true"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                />
              </div>
            </div>
            <div
              data-aos="fade-in"
              data-aos-duration="2000"
              className="bg-white py-8 relative -mt-8 z-[999] mx-8 rounded-lg backdrop-blur-sm bg-opacity-30"
            >
              <p className="px-8 text-center font-Cardo ">
                Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila
                Bapak/Ibu/Saudara/i berkenan hadir dan memberikan restu. Atas
                kehadiran dan doa restunya, kami mengucapkan terimakasih
              </p>

              <p className="text-center font-Corinthia mt-8 text-3xl">
                Devon & Tasya
              </p>
            </div>
            <div className="absolute bottom-0 left-0">
              <img
                src="/lines-flower-accent.png"
                alt=""
                data-aos-anchor-placement="bottom"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
            </div>
            <div className="absolute top-0 right-0 rotate-180">
              <img
                src="/lines-flower-accent.png"
                alt=""
                data-aos-anchor-placement="bottom"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
            </div>
          </section>
          {/* <section className="h-screen bg-[#F5F0F4] flex flex-col items-center relative px-4">
            <p className="font-DM-Serif-display text-5xl pt-16">
              Ucapan <span className="font-Ribeye-marrow">&</span> Doa
            </p>
            <div
              className="h-[75vh] overflow-auto rounded-xl mb-5 md:mb-16 bg-white relative top-12"
              data-aos-mirror="true"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="w-full px-3 py-3 text-[#222222]">
                {ucapan.map((item, index) => {
                  const { time, user, text } = item;
                  if (index % 2 == 0) {
                    return (
                      <div className="mb-1" key={index}>
                        <div className="my-2">
                          <div className="flex items-center w-full mb-2 gap-4">
                            <div className="flex items-center gap-2">
                              <div className="w-auto">
                                <FaFemale />
                              </div>
                              <span>{user}</span>
                            </div>
                            <time className="text-xs opacity-50">{time}</time>
                          </div>
                          <p className="chat-bubble text-sm bg-slate-100 rounded-lg p-2">
                            {text}
                          </p>
                        </div>
                      </div>
                    );
                  }
                  return (
                    <div className="mb-1" key={index}>
                      <div className="my-2">
                        <div className="chat-header flex items-center w-full mb-2 gap-4 flex-row-reverse">
                          <div className="flex items-center gap-2 flex-row-reverse">
                            <div className="w-auto">
                              <FaMale />
                            </div>
                            <span>{user}</span>
                          </div>
                          <time className="text-xs opacity-50">{time}</time>
                        </div>
                        <p className="chat-bubble text-sm bg-slate-200 rounded-lg p-2">
                          {text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section> */}
        </div>
      </div>
      {/* end undangan */}
    </>
  );
}

export default App;
