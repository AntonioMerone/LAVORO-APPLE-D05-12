// src/App.jsx
import Container from "react-bootstrap/Container";
import MyNavbar from "./components/MyNavbar"; // header mobile
import Sidebar from "./components/Sidebar"; // sidebar desktop
import DesktopTopBar from "./components/DesktopTopBar"; // topbar desktop

import HeroSection from "./components/HeroSection";
import RadioSection from "./components/RadioSection";
import NewReleasesSection from "./components/NewReleasesSection";
import ExploreSection from "./components/ExploreSection";
import FooterSection from "./components/FooterSection";
import MiniPlayer from "./components/MiniPlayer";
import MusicaLogo from "./assets/logos/music.svg";

import "./App.css";

function App() {
  return (
    <div className="app-root">
      {/* HEADER MOBILE (solo < md) */}
      <div className="d-md-none">
        <MyNavbar />
      </div>

      <div className="d-flex">
        {/* SIDEBAR DESKTOP (da md in su) */}
        <div className="d-none d-md-flex">
          <Sidebar />
        </div>

        {/* COLONNA DESTRA: topbar + contenuti */}
        <div className="flex-grow-1 d-flex flex-column">
          {/* TOPBAR DESKTOP (solo >= md) */}
          <div className="d-none d-md-block">
            <DesktopTopBar />
          </div>

          {/* CONTENUTO PRINCIPALE (mobile e desktop) */}
          <Container fluid className="main-container px-3 px-md-4 pb-5">
            <h1 className="page-title mt-4 mb-3">Novità</h1>

            <HeroSection />
            <RadioSection />
            <NewReleasesSection />
            <ExploreSection />
          </Container>

          <FooterSection />
        </div>
      </div>

      {/* MINIPLAYER SEMPRE VISIBILE IN BASSO */}
      <MiniPlayer />
    </div>
  );
}

export default App;
