import Hero from "../components/Hero";
import Explore from "../components/Explore";
import Search from "../components/Search";
import Lifestyle from "../components/Lifestyle";
import Forum from "../components/DocAsst";
import Contact from "../components/Contact";

import React, { useEffect, useRef, useState } from "react";
import DocAsst from "../components/DocAsst";
import PeriodTracker from "../components/PeriodTracker";
import Dashboard from './../components/Dashboard';

const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onWindScroll = () => {
      const element = ref.current;
      if (element) {
        const { top } = element.getBoundingClientRect();
        const isVisible = top < window.innerHeight;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", onWindScroll);
    return () => {
      window.removeEventListener("scroll", onWindScroll);
    };
  }, []);

  const classes = `transition-opacity duration-1000
        ${isVisible ? "opacity-100" : "opacity-0"}`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <div id="Home">
        <Hero />
      </div>
      <RevealOnScroll>
        <div id="Explore">
          <Explore />
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <div id="Period Tracker">
          <PeriodTracker />
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <div id="Lifestyle">
          <Lifestyle />
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <div id="Dashboard">
          <Dashboard />
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <div id="Doctor">
          <DocAsst />
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <div id="Contact">
          <Contact />
        </div>
      </RevealOnScroll>
    </div>
  );
};

export default Home;
