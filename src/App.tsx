import "./App.scss";
import { Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { LoadingPage } from "./LoadingPage/LoadingPage";
import { Sidebar } from "./Sidebar/Sidebar";
import { Help } from "./Help/Help";
import { Places } from "./Places/Places";
import { CityItem } from "./Description/Description";
import { Header } from "./Header/Header";
import { Events } from "./Events/Events";
import { CitySelect } from "./CitySelect/CitySelect";
import { useCityStore } from "./store";
import { About } from "./About/About";
function App() {
  const location = useLocation();
  const selectedCity = useCityStore((state) => state.selectedCity);
  const setSelectedCity = useCityStore((state) => state.setSelectedCity);
  const isSelected = useCityStore((state) => state.isSelected);
  const setIsSelected = useCityStore((state) => state.setIsSelected);
  const selectedCityId = useCityStore((state) => state.selectedCityId);
  const setSelectedCityId = useCityStore((state) => state.setSelectedCityId);

  useEffect(() => {
    const selectedCityLocalStorage = localStorage.getItem("selectedCity");
    const isSelectedLocalStorage = localStorage.getItem("isSelected");
    const selectedCityIdLocalStorage = localStorage.getItem("selectedCityId");

    if (
      selectedCityLocalStorage !== null &&
      isSelectedLocalStorage !== null &&
      selectedCityIdLocalStorage !== null
    ) {
      setSelectedCity(JSON.parse(selectedCityLocalStorage));
      setIsSelected(JSON.parse(isSelectedLocalStorage));
      setSelectedCityId(JSON.parse(selectedCityIdLocalStorage));
    }
  }, [setIsSelected, setSelectedCity, setSelectedCityId]);
  useEffect(() => {
    localStorage.setItem("selectedCity", JSON.stringify(selectedCity));
    localStorage.setItem("selectedCityId", JSON.stringify(selectedCityId));
    localStorage.setItem("isSelected", JSON.stringify(isSelected));
  }, [isSelected, selectedCity, selectedCityId]);

  return (
    <Suspense fallback="loading">
      <div>
        {(location.pathname === "/city_select" && !selectedCity) ||
        location.pathname === "/" ? null : (
          <Header />
        )}

        <Routes>
          <Route path="/" element={<LoadingPage />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/events" element={<Events />} />
          <Route path="/places" element={<Places />} />
          <Route path="/events/:id" element={<CityItem />} />
          <Route path="/places/:id" element={<CityItem />} />
          <Route path="/help" element={<Help />} />
          <Route path="/city_select" element={<CitySelect />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
