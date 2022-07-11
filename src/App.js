import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Beauty from "./pages/beauty/Beauty";
import DetailPage from "./pages/detailpage/DetailPage";
import Govenment from "./pages/government/Govenment";
import History from "./pages/history/History";
import Home from "./pages/home/Home";
import ComedyPage from "./pages/literature/ComedyPage";
import DramaPage from "./pages/literature/DramaPage";
import FictionPage from "./pages/literature/FictionPage";
import LiteraturePage from "./pages/literature/LiteraturePage";
import NovelPage from "./pages/literature/NovelPage";
import PoetryPage from "./pages/literature/PoetryPage";
import RomancePage from "./pages/literature/RomancePage";
import ShortstoryPage from "./pages/literature/ShortstoryPage";
import PostformPage from "./pages/post/PostformPage";
import AstronomyPage from "./pages/science/AstronomyPage";
import BilologyPage from "./pages/science/BilologyPage";
import ChemistryPage from "./pages/science/ChemistryPage";
import EarthSciencePage from "./pages/science/EarthSciencePage";
import MammalsPage from "./pages/science/MammalsPage";
import PhysicsPage from "./pages/science/PhysicsPage";
import PlantsPage from "./pages/science/PlantsPage";
import SciencePage from "./pages/science/SciencePage";
import ComputerPage from "./pages/tecnology/ComputerPage";
import ElectronicPage from "./pages/tecnology/ElectronicPage";
import InnovationPage from "./pages/tecnology/InnovationPage";
import SmartphonePage from "./pages/tecnology/SmartphonePage";
import SoftwarePage from "./pages/tecnology/SoftwarePage";
import TecnologyPages from "./pages/tecnology/TecnologyPage";

import Advanture from "./pages/travelling/Advanture";
import Beach from "./pages/travelling/Beach";
import Mountain from "./pages/travelling/Mountain";
import Pagoda from "./pages/travelling/Pagoda";
import Travel from "./pages/travelling/Travel";
import Waterfall from "./pages/travelling/Waterfall";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technology" element={<TecnologyPages />} />

        <Route path="/travel" element={<Travel />} />
        <Route path="/pagoda" element={<Pagoda />} />
        <Route path="/beach" element={<Beach />} />
        <Route path="/waterfall" element={<Waterfall />} />
        <Route path="/mountains" element={<Mountain />} />
        <Route path="/Advanture_trip" element={<Advanture />} />
        <Route path="/computer" element={<ComputerPage />} />
        <Route path="/electronic" element={<ElectronicPage />} />
        <Route path="/innovation" element={<InnovationPage />} />
        <Route path="/smartphone" element={<SmartphonePage />} />
        <Route path="/software" element={<SoftwarePage />} />

        <Route path="/beauty" element={<Beauty />} />
        <Route path="/govenment" element={<Govenment />} />
        <Route path="/history" element={<History />} />
        <Route path="/science" element={<SciencePage />} />
        <Route path="/astronomy" element={<AstronomyPage />} />
        <Route path="/biology" element={<BilologyPage />} />
        <Route path="/chemistry" element={<ChemistryPage />} />
        <Route path="/earthscience" element={<EarthSciencePage />} />
        <Route path="/plants" element={<PlantsPage />} />
        <Route path="/physics" element={<PhysicsPage />} />
        <Route path="/mammals" element={<MammalsPage />} />

        <Route path="/literature" element={<LiteraturePage />} />
        <Route path="/poetry" element={<PoetryPage />} />
        <Route path="/fiction" element={<FictionPage />} />
        <Route path="/drama" element={<DramaPage />} />
        <Route path="/comedy" element={<ComedyPage />} />
        <Route path="/novel" element={<NovelPage />} />
        <Route path="/shortstory" element={<ShortstoryPage />} />
        <Route path="/romance" element={<RomancePage />} />

        <Route path="/post" element={<PostformPage />} />

        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
