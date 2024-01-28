import { useEffect, useState } from "react";
import { LangSwitcherWelcome } from "./LangSwitcherWelcome";
import { LangSwitcherMain } from "./LangSwitcherMain";

export const LangSwither = () => {
  const [state, setState] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setState(false);
    }, 2000);
  });
  if (state) {
    return <LangSwitcherWelcome />;
  }
  return <LangSwitcherMain />;
};
