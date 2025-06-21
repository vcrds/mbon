"use client";

import HeaderInitial from "./components/header";
import Schedule from "./components/schedule";
import { useState } from "react";

export default function Home() {
  const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);

  return (
    <div className="transition-all duration-1000 ease-in-out">
      <HeaderInitial onLoadComplete={() => setIsHeaderLoaded(true)} />
      {isHeaderLoaded && <Schedule />}
    </div>
  );
}
