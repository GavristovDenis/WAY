import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
type Lang = "ru" | "en";

export const LangSwither = () => {
  const { i18n } = useTranslation();
  const [state, setState] = useState(true);
  const toggle = (lang: Lang) => i18n.changeLanguage(lang);
  useEffect(() => {
    setTimeout(() => {
      setState(true);
    }, 2000);
  });
  if (state) {
    return (
      <div className="App">
        <p className="welcome">WELCOME</p>
        <div className="wayWrapper">
          <div className="way">WAY</div>
        </div>

        <p className="welcome reverse">WELCOME</p>
      </div>
    );
  }
  return (
    <div className="App">
      <div className="appWrapper">
        <div className="langButton" onClick={() => toggle("ru")}>
          <Link className="link" to="/main">
            Русский
          </Link>
        </div>
        <div className="langButton" onClick={() => toggle("en")}>
          <Link className="link" to="/main">
            English
          </Link>
        </div>
      </div>
    </div>
  );
};
