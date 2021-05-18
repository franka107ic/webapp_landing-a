import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");
  const [componentMounted, setComponentMounted] = useState(false);

  const toggleTheme = () => {
    if (theme === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    !localTheme
      ? setMode("dark")
      : localTheme
      ? setTheme(localTheme)
      : setTheme("light");
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};
