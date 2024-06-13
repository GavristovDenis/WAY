import "./App.scss";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { LoadingPage } from "./LoadingPage/LoadingPage";
import { Sidebar } from "./Sidebar/Sidebar";
import { Help } from "./Help/Help";
import { Places } from "./Places/Places";
import { CityItem } from "./Description/Description";
import { Header } from "./Header/Header";

function App() {
  // const location = useLocation();
  return (
    <Suspense fallback="loading">
      {/* {location.pathname === "/" ? null : <Header />} */}
      <Header />
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/events" />
        <Route path="/places" element={<Places />} />
        <Route path="/events/:id" />
        <Route path="/places/:id" element={<CityItem />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Suspense>
  );
}

export default App;
