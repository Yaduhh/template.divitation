import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Aos from "aos";
import NavigationBottom from "./components/bottom-navigation";
import copyToClipboard from "./helpers/copyClipboard";

function App() {
  const [openCover, setOpenCover] = useState(false);
  const [end, setEnd] = useState(false);
  const [playSong, setplaySong] = useState(true);

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
    // handleAudio();
  }, []);

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

  // function handleAudio() {
  //   const audio = document.getElementById("audio");
  //   const disc = document.getElementById("disc");
  //   audio.play();
  //   if (playSong) {
  //     audio.play();
  //     disc.classList.add("animate-spin");
  //   } else {
  //     audio.pause();
  //     disc.classList.remove("animate-spin");
  //   }
  // }

  function handleCover() {
    setOpenCover(true);
    // handleAudio();s
  }

  const queryParameters = new URLSearchParams(window.location.search);
  const kepada = queryParameters.get("to");

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <p>Ini Overview</p>
      <NavigationBottom bgColor={""} />
    </div>
  );
}

export default App;
