import "./App.scss";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { LangSwither } from "./LangSwither";
import { Slider } from "./Slider";
import { CityPage } from "./CityPage";
import { Itinerary } from "./Itinerary";

function App() {
  return (
    <Suspense fallback="loading">
      <Routes>
        <Route path="/" element={<LangSwither />} />
        <Route path="/main" element={<Slider />} />
        <Route path="/:id" element={<CityPage />} />
        <Route path="/itinerary/:id" element={<Itinerary />} />
      </Routes>
    </Suspense>
  );
}

export default App;
