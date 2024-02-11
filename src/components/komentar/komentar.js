import { useState, useEffect } from "react";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";

const Komentar = () => {
  const [nama, setNama] = useState("");
  const [ucapan, setUcapan] = useState("");
  const [kehadiran, setKehadiran] = useState("");
  const [data, setData] = useState([]);
  const [isUcapanTerikirim, setIsUcapanTerikirim] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://apiucapanmariovenny.divitation.com/komentar"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const pollData = async () => {
    try {
      const response = await axios.get(
        "https://apiucapanmariovenny.divitation.com/komentar"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error polling data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const moment = require("moment-timezone");
      moment.tz.setDefault("Asia/Jakarta");
      const currentDate = moment();
      const newDate = currentDate.add(7, "hours");
      const createdate = newDate.toISOString();
      const response = await axios.post(
        "https://apiucapanmariovenny.divitation.com/postkomentar",
        { nama, ucapan, kehadiran, createdate }
      );

      console.log(response.data);
      setNama("");
      setUcapan("");
      setKehadiran("");
      setIsUcapanTerikirim(true);

      setTimeout(() => {
        setIsUcapanTerikirim(false);
      }, 8000); // Menutup alert setelah 3 detik
    } catch (error) {
      console.error(error);
    }
  };

  const getTimeAgo = (date) => {
    const currentDate = new Date();
    const commentDate = new Date(date);
    const timeDifference = Math.abs(
      currentDate.getTime() - commentDate.getTime()
    );

    if (timeDifference < 60000) {
      return "Baru saja";
    } else if (timeDifference < 3600000) {
      const minutesAgo = Math.floor(timeDifference / 60000);
      return `${minutesAgo} menit yang lalu`;
    } else if (timeDifference < 86400000) {
      const hoursAgo = Math.floor(timeDifference / 3600000);
      return `${hoursAgo} jam yang lalu`;
    } else {
      return `${commentDate.toLocaleDateString()}`;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      pollData();
    }, 2000); // Polling setiap 3 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {isUcapanTerikirim && (
        <div className="animation">Ucapan berhasil terkirim!</div>
      )}
      <form onSubmit={handleSubmit} className="w-full px-2" id="komentar">
        <div className="mb-5">
          <label
            htmlFor="nama"
            className="block text-sm font-medium text-secondary font-Montserrat"
          >
            Nama :
          </label>
          <input
            type="text"
            id="nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="mt-1 p-2 border-b-2 border-primary w-full focus:outline-none font-Montserrat inputan font-medium"
            placeholder=""
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="ucapan"
            className="block text-sm font-medium text-secondary font-Montserrat"
          >
            Ucapan :
          </label>
          <textarea
            id="ucapan"
            value={ucapan}
            onChange={(e) => setUcapan(e.target.value)}
            className="mt-1 p-2 border-b-2 border-primary w-full focus:outline-none font-Montserrat inputan font-medium"
          ></textarea>
        </div>
        <div className="mb-5">
          <label
            htmlFor="kehadiran"
            className="block text-sm font-medium text-secondary font-Montserrat"
          >
            Konfirmasi Kehadiran :
          </label>
          <select
            id="kehadiran"
            value={kehadiran}
            onChange={(e) => setKehadiran(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full font-Montserrat inputan"
          >
            <option value="">Pilih</option>
            <option value="0">Hadir</option>
            <option value="1">Tidak Hadir</option>
          </select>
        </div>
        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="px-6 font-Montserrat py-2 rounded-2xl transition-colors duration-300 text-end bg-primary hover:bg-secondary text-white"
          >
            Kirim Pesan
          </button>
        </div>
      </form>

      <div
        className="w-auto max-h-72 px-2 flex flex-col items-start overflow-y-auto mt-2"
        data-aos="fade-up"
        data-aos-duration="1700"
      >
        {data.map((komentar) => (
          <div key={komentar.id}>
            <div className="flex gap-3 py-2 w-full">
              <div className="w-8">
                <FaUserCircle size={30} className="text-[#B3B3B3]" />
              </div>
              <div className="w-auto">
                <div className="flex items-center gap-2">
                  <p className="font-semibold font-Montserrat text-[#000000] text-lg">
                    {komentar.nama}
                  </p>
                  {komentar.kehadiran !== 0 ? (
                    <IoMdCloseCircle className="text-secondary" />
                  ) : (
                    <MdVerified className="text-secondary" />
                  )}
                </div>
                <p className="font-Montserrat font-medium text-balance text-wrap">
                  {data
                    .sort(
                      (a, b) => new Date(b.createdate) - new Date(a.createdate)
                    )
                    .map((komentar) => (
                      <div key={komentar.id}>{/* Konten komentar */}</div>
                    ))}
                </p>
                <p className="font-Montserrat font-medium text-justify flex items-center gap-1 text-xs italic text-secondary pt-1">
                  <IoMdTime size={15} />
                  {getTimeAgo(komentar.createdate)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Komentar;
