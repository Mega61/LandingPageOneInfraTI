import './App.css';
import React from 'react'
import BannerPrincipal from './BannerPrincipal';
import BannerTwitch from './BannerTwitch';
import img1 from './img/foto_twitch.png'
import img2 from './img/fondo.png'

function App() {
  return (
    <div className="App">
      <div id="LangingPage1Parcial1TI">
        <img id="Fondo" src={img2} alt="FONDO"></img>
        <BannerPrincipal />
        <img id="foto_twitch" src={img1} alt="ImagenStream"></img>
        <BannerTwitch />
      </div>
    </div>
  );
}

export default App;
