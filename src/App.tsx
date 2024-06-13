import "./App.scss";
import { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { LoadingPage } from "./LoadingPage/LoadingPage";
import { Sidebar } from "./Sidebar/Sidebar";
import { Help } from "./Help/Help";
import { Places } from "./Places/Places";
import { CityItem } from "./Description/Description";
import { Header } from "./Header/Header";

function App() {
  const location = useLocation();
  return (
    <Suspense fallback="loading">
      {location.pathname === "/" ? null : <Header />}

      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/aaa" element={<Sidebar />} />
        <Route path="/billboard" />
        <Route path="/places" element={<Places />} />
        <Route path="/billboard/:id" />
        <Route path="/places/:id" element={<CityItem />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Suspense>
  );
}

export default App;
