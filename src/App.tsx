import "./App.scss";
import { Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { LoadingPage } from "./LoadingPage/LoadingPage";
import { Sidebar } from "./Sidebar/Sidebar";
import { Help } from "./Help/Help";

function App() {
  const [state, setState] = useState();
  const [stateq, setStateq] = useState(1);

  useEffect(() => {
    //@ts-ignore
    setState(window.Telegram.WebApp.initDataUnsafe);
  }, [stateq]);

  return (
    <Suspense fallback="loading">
      {JSON.stringify(state)}
      <div onClick={() => setStateq((prev) => prev + 1)}>xxx</div>
      <Routes>
        <Route path="/aaa" element={<LoadingPage />} />
        <Route path="/aaa" element={<Sidebar />} />

        <Route path="/" element={<Help />} />
      </Routes>
    </Suspense>
  );
}

export default App;
