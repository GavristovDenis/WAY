import "./App.scss";
import { Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { LoadingPage } from "./LoadingPage/LoadingPage";
import { Sidebar } from "./Sidebar/Sidebar";
import { Help } from "./Help/Help";

function App() {
  const [state, setState] = useState();
  useEffect(() => {
    //@ts-ignore
    setState(window.Telegram);
  });

  return (
    <Suspense fallback="loading">
      {JSON.stringify(state)}
      <Routes>
        <Route path="/aaa" element={<LoadingPage />} />
        <Route path="/aaa" element={<Sidebar />} />

        <Route path="/" element={<Help />} />
      </Routes>
    </Suspense>
  );
}

export default App;
