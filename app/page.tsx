"use client";

import HeaderInitial from "./components/header";
import Schedule from "./components/schedule";
import WarriorCourse from "./components/warrior-course";
import Location from "./components/location";
import Gallery from "./components/gallery";
import Footer from "./components/footer";
import SocialSection from "./components/SocialSection";
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
              <section id="curso-guerreiros">
                <WarriorCourse />
              </section>
              <section id="gallery">
                <Gallery />
              </section>
              <section id="location">
                <Location />
              </section>
              <section id="social">
                <SocialSection />
              </section>
              <Footer />
            </>
          )}
        </div>
      </SmoothScroll>
    </>
  );
}
