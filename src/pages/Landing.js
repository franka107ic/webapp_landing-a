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
  const { staticSetup, dynamicSetup } = useIc();

  return (
    <Fragment>
      {!!dynamicSetup.content.blocks &&
        dynamicSetup.content.blocks.map((block, indexArea) => {
          switch (block.type) {
            case "header":
              return <HeaderArea key={indexArea} params={block.params} />;
            case "inline":
              return (
                <InlineFeatureArea key={indexArea} params={block.params} />
              );
            case "rightlist":
              return (
                <RightListFeatureArea key={indexArea} params={block.params} />
              );
            case "leftlist":
              return (
                <LeftListFeatureArea key={indexArea} params={block.params} />
              );
            case "blockfeature":
              return <BlockFeatureArea key={indexArea} params={block.params} />;
            case "introvideo":
              return <IntroVideoArea key={indexArea} params={block.params} />;
            case "product":
              return <ProductArea key={indexArea} params={block.params} />;
            case "testimonial":
              return <TestimonialArea key={indexArea} params={block.params} />;
            case "faq":
              return <FaqArea key={indexArea} params={block.params} />;
            case "contact":
              return <ContactArea key={indexArea} params={block.params} />;
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
