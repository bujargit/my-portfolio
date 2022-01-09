import React, { useEffect, useState } from "react";
import { VscColorMode } from "react-icons/vsc";


const Themetoggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const themetoggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme ); 
  }, [theme]);
  return (
    <div className="nav_ac" onClick={themetoggle}>
      <VscColorMode />
    </div>
  );
};

export default Themetoggle;
