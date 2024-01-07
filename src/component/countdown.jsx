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
        className="flex flex-col items-center justify-center text-white font-Poppins"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <p className="text-3xl font-medium">Save The Date</p>
        <p className="text-sm md:text-base my-4 md:my-2">
          Hitung mundur ke hari H
        </p>
        <div className="bg-[#0E1A0A] bg-opacity-50 rounded-2xl w-full flex justify-center gap-5">
          <div className="flex flex-col items-center my-3">
            <p className="text-3xl font-semibold">{countdownValue.days}</p>
            <p className="text-sm">Hari</p>
          </div>
          <div className="flex flex-col items-center my-3">
            <p className="text-3xl font-semibold">{countdownValue.hours}</p>
            <p className="text-sm">Jam</p>
          </div>
          <div className="flex flex-col items-center my-3">
            <p className="text-3xl font-semibold">{countdownValue.minutes}</p>
            <p className="text-sm">Menit</p>
          </div>
          <div className="flex flex-col items-center my-3">
            <p className="text-3xl font-semibold">{countdownValue.seconds}</p>
            <p className="text-sm">Detik</p>
          </div>
        </div>
        <a
          target="_blank"
          href="https://www.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Ainul+%26+Elly&details=Di+kediaman+mempelai+wanita&location=https%3A%2F%2Fwww.google.com%2Fmaps%3Fq%3D-6.985318660736084%2C109.58277893066406%26z%3D17%26hl%3Did&dates=20240123T060000Z%2Fundefined"
          className="border border-white rounded-full pl-3 pr-3 flex items-center w-fit gap-2 mt-4 py-1"
          rel="noreferrer"
        >
          <span>SIMPAN TANGGAL</span>
          <div>
            <img
              src="./icons/circle-right.png"
              alt="cover"
              className="w-5 h-5 "
            />
          </div>
        </a>
      </div>
    </>
  );
};

export default CountdownComponent;
