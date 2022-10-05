import "./styles/main.css";
import logoImg from "./assets/logo-nlw-esports.svg";
import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data => {
        console.log(data)
      });
  });

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt=""></img>

      <h1 className="text-6xl text-white font-black mt-20">
        Seu {" "}
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          duo
        </span>
        {" "} está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <GameBanner bannerUrl="/game-1.png" title="League of Legends" adsCount={5} />
      </div>

      <CreateAdBanner />
    </div >
  );
}

export default App;
