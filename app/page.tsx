"use client";

import HeaderInitial from "./components/header";
import Schedule from "./components/schedule";
import Location from "./components/location";
import Footer from "./components/footer";
import SmoothScroll from "./components/SmoothScroll";
import ScrollProgress from "./components/ScrollProgress";
import { useState } from "react";

export default function Home() {
  const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);

  return (
    <>
      <ScrollProgress />
      <SmoothScroll>
        <div className="transition-all duration-600 ease-in-out">
          <section id="header">
            <HeaderInitial onLoadComplete={() => setIsHeaderLoaded(true)} />
          </section>
          {isHeaderLoaded && (
            <>
              <section id="schedule">
                <Schedule />
              </section>
              <section id="location">
                <Location />
              </section>
              <Footer />
            </>
          )}
        </div>
      </SmoothScroll>
    </>
  );
}
