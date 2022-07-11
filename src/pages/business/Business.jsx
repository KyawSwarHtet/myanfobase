import React from "react";
import Businbenner from "../../components/business/Businbenner";
import Businhead from "../../components/business/Businhead";
import BusinRight from "../../components/business/BusinRight";
import BusinSide from "../../components/business/BusinSide";
import Footer from "../../components/footer/Footer";

export default function Business() {
  return (
    <>
      <Businhead />
      <Businbenner />
      <section className="container travel1">
        <BusinSide />
        <BusinRight />
      </section>
      <Footer />
    </>
  );
}
