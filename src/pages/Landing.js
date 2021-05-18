import React, { Fragment } from "react";
import HeaderArea from "../components/areas/HeaderArea";
import InlineFeatureArea from "../components/areas/InlineFeatureArea";
import RightListFeatureArea from "../components/areas/RightListFeatureArea";
import LeftListFeatureArea from "../components/areas/LeftListFeatureArea";
import BlockFeatureArea from "../components/areas/BlockFeatureArea";
import IntroVideoArea from "../components/areas/IntroVideoArea";
import ProductArea from "../components/areas/ProductArea";
import TestimonialArea from "../components/areas/TestimonialArea";
import FaqArea from "../components/areas/FaqArea";
import ContactArea from "../components/areas/ContactArea";
import { useIc } from "../context/IcContext.jsx";

function Landing() {
  const { staticSetup } = useIc();

  return (
    <Fragment>
      {!!staticSetup.content.areas &&
        staticSetup.content.areas.map((area, indexArea) => {
          switch (area.type) {
            case "header":
              return <HeaderArea key={indexArea} params={area.params} />;
            case "inline":
              return <InlineFeatureArea key={indexArea} params={area.params} />;
            case "rightlist":
              return (
                <RightListFeatureArea key={indexArea} params={area.params} />
              );
            case "leftlist":
              return (
                <LeftListFeatureArea key={indexArea} params={area.params} />
              );
            case "blockfeature":
              return <BlockFeatureArea key={indexArea} params={area.params} />;
            case "introvideo":
              return <IntroVideoArea key={indexArea} params={area.params} />;
            case "product":
              return <ProductArea key={indexArea} params={area.params} />;
            case "testimonial":
              return <TestimonialArea key={indexArea} params={area.params} />;
            case "faq":
              return <FaqArea key={indexArea} params={area.params} />;
            case "contact":
              return <ContactArea key={indexArea} params={area.params} />;
            default:
              return (
                <h1 key={indexArea} class="text-danger text-center">
                  Area no valida
                </h1>
              );
          }
        })}
    </Fragment>
  );
}

export default Landing;
