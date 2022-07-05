import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Beauty from "./pages/beauty/Beauty";
import Beautyblogger from "./pages/beauty/Beautyblogger";
import Clinicpage from "./pages/beauty/Clinicpage";
import Makeuppage from "./pages/beauty/makeupPage";
import SalonPage from "./pages/beauty/SalonPage";
import Skinpage from "./pages/beauty/Skinpage";
import Health from "./pages/healthpage/Health";
import Home from "./pages/home/Home";
import ExercisePage from "./pages/lifestylepage/exercisePage";
import Lifestyle from "./pages/lifestylepage/Lifestyle";
import Govenment from "./pages/government/Govenment";
import History from "./pages/history/History";
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
        <Route path="/health" element={<Health />} />
        <Route path="/science" element={<SciencePage />} />
        <Route path="/lifestyles" element={<Lifestyle />} />
        <Route path="/Blogger" element={<Beautyblogger />} />
        <Route path="/clinic" element={<Clinicpage />} />
        <Route path="/makeup" element={<Makeuppage />} />
        <Route path="/salon" element={<SalonPage />} />
        <Route path="/skincare" element={<Skinpage />} />
        <Route path="/exercise" element={<ExercisePage />} />

        <Route path="/govenment" element={<Govenment />} />
        <Route path="/history" element={<History />} />
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
