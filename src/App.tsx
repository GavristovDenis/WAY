import "./App.scss";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { LoadingPage } from "./LoadingPage/LoadingPage";
import { Sidebar } from "./Sidebar/Sidebar";
import { Help } from "./Help/Help";
import { Places } from "./Places/Places";
import { CityItem } from "./Description/Description";
import { Header } from "./Header/Header";
import { Events } from "./Events/Events";

function App() {
  // const location = useLocation();
  return (
    <Suspense fallback="loading">
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<LoadingPage />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/events" element={<Events />} />
          <Route path="/places" element={<Places />} />
          <Route path="/events/:id" element={<CityItem />} />
          <Route path="/places/:id" element={<CityItem />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
