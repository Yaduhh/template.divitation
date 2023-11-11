import { useEffect, useState } from "react";

const CountdownComponent = ({
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
    const calculateCountdown = () => {
      const now = new Date();
      const target = new Date(
        now.getFullYear(),
        targetMonth - 1,
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

    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetMonth, targetDate, targetHour, targetMinute]);

  return (
    <>
      <div className="flex justify-center font-Courgette">
        <div className="grid grid-flow-col gap-2 md:gap-6 text-center auto-cols-max">
          <div>
            <div
              className="p-6 rounded-2xl shadow-neutral-400 shadow-inner flex flex-col bg-[#F3EAD3] rounded-box text-[#1A120B] text-sm"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <span id="hari" className="countdown font-mono text-3xl">
                <span>{countdownValue.days}</span>
              </span>
            </div>
            <div
              className="mt-3 text-clip font-Cardo"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              Hari
            </div>
          </div>
          <div>
            <div
              className="p-6 rounded-2xl shadow-neutral-400 shadow-inner flex flex-col bg-[#F3EAD3] rounded-box text-[#1A120B] text-sm"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span id="jam" className="countdown font-mono text-3xl">
                <span>{countdownValue.hours}</span>
              </span>
            </div>
            <div
              className="mt-3 text-clip font-Cardo"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              Jam
            </div>
          </div>
          <div>
            <div
              className="p-6 rounded-2xl shadow-neutral-400 shadow-inner flex flex-col bg-[#F3EAD3] rounded-box text-[#1A120B] text-sm"
              data-aos="fade-up"
              data-aos-duration="1600"
            >
              <span id="menit" className="countdown font-mono text-3xl">
                <span>{countdownValue.minutes}</span>
              </span>
            </div>
            <div
              className="mt-3 text-clip font-Cardo"
              data-aos="fade-up"
              data-aos-duration="1700"
            >
              Menit{" "}
            </div>
          </div>
          <div>
            <div
              className="p-6 rounded-2xl shadow-neutral-400 shadow-inner flex flex-col bg-[#F3EAD3] rounded-box text-[#1A120B] text-sm"
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              <span id="detik" className="countdown font-mono text-3xl">
                <span>{countdownValue.seconds}</span>
              </span>
            </div>
            <div
              className="mt-3 text-clip font-Cardo"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              detik
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountdownComponent;
