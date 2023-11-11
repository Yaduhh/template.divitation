import "./App.css";
import { BiLogoInstagram } from "react-icons/bi";
import CountdownComponent from "./component/countdown";
import Gift from "./component/gift";

function App() {
  return (
    <>
      <section id="home">
        <div className="w-full overflow-hidden relative gap-5 h-screen flex flex-col justify-center items-center bg-accent">
          <img src="./assets/bunga.png" alt="bunga" width={380} />
          <div className="text-center text-2xl">
            <p style={{ fontFamily: "Cardo" }}>
              Save The Date <br /> The Wedding Of
            </p>
          </div>
          <img src="./assets/hero.png" alt="hero" width={150} />
          <p className="text-4xl text-center" style={{ fontFamily: "Cardo" }}>
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
              yang Kau ciptakan diantara kami untuk mengikuti Sunnah Rasul-Mu
              dalam rangka membentuk keluarga yang sakinah, mawaddah, warahmah.
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
        <div className="w-full overflow-hidden -z-0 relative gap-5 h-screen flex flex-col justify-center items-center bg-accent">
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
          <img className="mb-5" src="/assets/pria.png" alt="pria" width={250} />
          <div className="absolute top-0 -right-7 -z-10">
            <img
              className="mb-5"
              src="/assets/hiasan.png"
              alt="hiasan"
              width={150}
            />
          </div>
        </div>
        <div className="w-full overflow-hidden relative gap-5 h-screen flex flex-col justify-center items-center bg-accent">
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
            className="mb-5"
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

      <section id="event">
        <div className="w-full overflow-hidden relative h-screen flex flex-col justify-center items-center bg-accent">
          <div className="w-full flex items-start justify-start">
            <div className="text-center mx-5 -mt-10">
              <p className="text-4xl" style={{ fontFamily: "Cardo-bold" }}>
                Akad
              </p>
              <p style={{ fontFamily: "Cardo" }}>Pukul 07:00 - 09:00 WIB</p>
            </div>
          </div>
          <img src="./assets/tangan.png" alt="tangan" width={300} />
          <div className="w-full flex items-end justify-end">
            <div className="text-center mx-5">
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
            <div className="absolute top-2 w-[70%] -z-10">
              <img src="./assets/buletan.png" alt="buletan" />
            </div>
          </div>

          <div className="text-center mb-3" style={{ fontFamily: "Cardo" }}>
            <p className="font-bold">Kediaman Mempelai Wanita</p>
            <p className="text-lg">Kemang Selatan, Rt.04 Rw.04</p>
            <p className="text-lg">Kec. Duren Kab.Kelapakuningan</p>
          </div>

          <div className="relative place-content-center items-center justify-center flex flex-col">
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
          className="w-full overflow-hidden relative gap-5 h-screen flex flex-col justify-center items-center bg-accent"
          style={{ fontFamily: "Cardo" }}
        >
          <div className="w-full flex flex-col items-center">
            <div className="-ml-5">
              <img src="./assets/cincin.png" alt="cincin" width={100} />
            </div>
            <h1 className="text-4xl font-medium text-center mx-16">
              Kisah kita berdua
            </h1>
          </div>

          <div className="flex w-full items-center justify-center flex-wrap">
            <img src="./assets/foto.png" alt="foto" width={120} />
            <img src="./assets/foto1.png" alt="foto1" width={120} />
            <img src="./assets/foto2.png" alt="foto2" width={120} />
            <img src="./assets/foto3.png" alt="foto3" width={120} />
            <img src="./assets/foto4.png" alt="foto4" width={120} />
            <img src="./assets/foto5.png" alt="foto5" width={120} />
          </div>

          <div className="scale-125">
            <img src="./assets/gantungan.png" alt="gantungan" width={400} />
          </div>
        </div>
      </section>

      <section id="countdown">
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
    </>
  );
}

export default App;
