import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Preloader from "./components/layout/Preloader";
import Landing from "./pages/Landing";
import { IcProvider, useIc } from "./context/IcContext";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from './utilities/theme/global'
import { lightTheme, darkTheme } from "./utilities/theme/theme";
import { useDarkMode } from './utilities/theme/useDarkMode'


const App = () => {
  const { staticSetup, loading } = useIc();
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  let themeMode = theme === 'light' ? lightTheme:  darkTheme
  if( !window.localStorage.getItem("theme")) {
    themeMode = staticSetup && staticSetup.styling.darkMode ? darkTheme : lightTheme
  }


  if(!componentMounted) {
    return <Preloader loading={true} />
  }

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles/>
      {!!staticSetup && (
        <div className="App">
          <Preloader loading={loading} />
          <Header theme={theme} toggleTheme={toggleTheme} />
          <Landing />
          <Footer />
        </div>
      )}
    </ThemeProvider>
  );
};

const provider = () => (
  <IcProvider>
    <App />
  </IcProvider>
);
export default provider;
