import { useEffect, useState } from "react";

const CountdownComponent = ({
  targetYear,
  targetMonth,
  targetDate,
  targetHour,
  targetMinute,
}) => {
  const [countdownValue, setCountdownValue] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    let interval;

    const calculateCountdown = () => {
      const now = new Date();
      const target = new Date(
        targetYear,
        targetMonth,
        targetDate,
        targetHour,
        targetMinute,
        0
      );

      const diff = target - now;

      if (diff < 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setCountdownValue({ days, hours, minutes, seconds });
    };

    calculateCountdown(); // Hitung hitungan mundur saat komponen pertama kali dimuat

    interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetYear, targetMonth, targetDate, targetHour, targetMinute]);
  return (
    <>
      <div
        className="flex flex-col items-center justify-center text-white font-Cardo"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="bg-[#000000] bg-opacity-50 py-4 px-7 rounded-3xl w-full flex justify-center gap-9">
          <div className="flex flex-col items-center">
            <p className="text-3xl font-semibold">{countdownValue.days}</p>
            <p className="text-sm">Hari</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl font-semibold">{countdownValue.hours}</p>
            <p className="text-sm">Jam</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl font-semibold">{countdownValue.minutes}</p>
            <p className="text-sm">Menit</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl font-semibold">{countdownValue.seconds}</p>
            <p className="text-sm">Detik</p>
          </div>
        </div>

        <div className="">
          <p className="text-lg font-Montserrat tracking-[0.2rem] my-5 text-center">
            Minggu, 03 Maret 2024
          </p>
          <p className="text-justify font-Montserrat my-4">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i Berkenan hadir untuk memberikan do'a restu
            kepada kedua mempelai kami yang berbahagia.
          </p>
        </div>
        <a
          target="_blank"
          href="https://www.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Mario+%26+Venny&details=Di+kediaman+mempelai+wanita&location=https%3A%2F%2Fwww.google.com%2Fmaps%3Fq%3D-6.985318660736084%2C109.58277893066406%26z%3D17%26hl%3Did&dates=20240303%2F20240304"
          className="border border-white rounded-full px-10 flex items-center w-fit gap-2 mt-4 py-3"
          rel="noreferrer"
        >
          <div>
            <img src="./icons/simpan.svg" alt="cover" className="w-4 h-4" />
          </div>
          <span className="text-sm">SIMPAN TANGGAL</span>
        </a>
      </div>
    </>
  );
};

export default CountdownComponent;
