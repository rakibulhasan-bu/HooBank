import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Billing from "./components/Billing";
import CardDeal from "./components/CardDeal";
import Business from "./components/Business";
import Clients from "./components/Clients";
import CTA from "./components/CTA";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div className="w-full overflow-hidden bg-primary">
      <div className="paddingX flexCenter">
        <div className="boxWidth">
          <Navbar />
        </div>
      </div>

      <div className="flexStart bg-primary">
        <div className="boxWidth">
          <Hero />
        </div>
      </div>

      <div className="flexStart paddingX bg-primary">
        <div className="boxWidth">
          <Billing />
          <CardDeal />
          <Business />
          <Clients />
          <CTA />
          <Stats />
          <Footer />
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default App;
