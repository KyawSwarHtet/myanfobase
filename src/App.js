import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Beauty from "./pages/beauty/Beauty";
import Govenment from "./pages/government/Govenment";
import Law from "./pages/government/Law";
import Leader from "./pages/government/Leader";
import Ministry from "./pages/government/Ministry";
import Passport from "./pages/government/Passport";
import Police from "./pages/government/Police";
import Culture from "./pages/history/Culture";
import Dress from "./pages/history/Dress";
import Dynasty from "./pages/history/Dynasty";
import History from "./pages/history/History";
import Region from "./pages/history/Region";
import Religous from "./pages/history/Religous";
import Home from "./pages/home/Home";
import LiteraturePage from "./pages/literature/LiteraturePage";
import AstronomyPage from "./pages/science/AstronomyPage";
import BilologyPage from "./pages/science/BilologyPage";
import ChemistryPage from "./pages/science/ChemistryPage";
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
        <Route path="/ministry" element={<Ministry />} />
        <Route path="/police_station" element={<Police />} />
        <Route path="/leader" element={<Leader />} />
        <Route path="/passport" element={<Passport />} />
        <Route path="/law" element={<Law />} />

        <Route path="/history" element={<History />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/dynasty" element={<Dynasty />} />
        <Route path="/religion" element={<Religous />} />
        <Route path="/dress" element={<Dress />} />
        <Route path="/region" element={<Region />} />

        <Route path="/science" element={<SciencePage />} />
        <Route path="/astronomy" element={<AstronomyPage />} />
        <Route path="/biology" element={<BilologyPage />} />
        <Route path="/chemistry" element={<ChemistryPage />} />

        <Route path="/literature" element={<LiteraturePage />} />
      </Routes>
    </div>
  );
}

export default App;
