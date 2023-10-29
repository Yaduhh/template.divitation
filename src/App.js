import "./App.css";
import { BiLogoInstagram } from "react-icons/bi";

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
          {/* <img
            className="-ml-5 mb-5"
            src="./assets/cincin.png"
            alt="cincin"
            width={80}
          /> */}
          <div className="w-full flex items-start justify-start">
            <div className="text-center mx-5">
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

          <div className="text-center mb-8 -z-0 relative w-full flex flex-col items-center">
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

          <div className="relative">
            <img src="./assets/maps.png" alt="maps" width={180} />
            <div className="absolute bottom-0 right-0">
              <img src="./assets/hiasanbunga.png" alt="hiasan" width={80} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
