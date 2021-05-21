import React, { useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Preloader from "./components/layout/Preloader";
import Landing from "./pages/Landing";
import { IcProvider, useIc } from "./context/IcContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const { staticSetup } = useIc();

  useEffect(() => {
    if (staticSetup) {
      staticSetup.styling.colorPalette = staticSetup.styling.colorPalette || {};
      staticSetup.styling.colorPalette.primaryColors =
        staticSetup.styling.colorPalette.primaryColors || [];
      staticSetup.styling.colorPalette.secondaryColors =
        staticSetup.styling.colorPalette.secondaryColors || [];
      staticSetup.styling.colorPalette.primaryColors.forEach((pc, idx) => {
        document.documentElement.style.setProperty(
          `--ic-colors-primary-${idx + 1}`,
          pc
        );
      });
      staticSetup.styling.colorPalette.secondaryColors.forEach((pc, idx) => {
        document.documentElement.style.setProperty(
          `--ic-colors-secondary-${idx + 1}`,
          pc
        );
      });
      Object.keys(staticSetup.styling.colorPalette.complementary).forEach(
        (k) => {
          document.documentElement.style.setProperty(
            `--ic-colors-complementary-${k}`,
            staticSetup.styling.colorPalette.complementary[k]
          );
        }
      );
    }
  }, [staticSetup]);

  return (
    <>
      {!!staticSetup && (
        <div className="App">
          <Header />
          <Landing />
          <Footer />
        </div>
      )}
    </>
  );
};

const provider = () => (
  <IcProvider>
    <App />
  </IcProvider>
);
export default provider;
