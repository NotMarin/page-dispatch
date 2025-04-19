"use client";

import SlideShow from "@/components/slide-show/slide-show";
import IntroLru from "./components/intro-lru/intro-lru";
import SimulationLru from "./components/simulation-lru/simulation-lru";
import { useMemo } from "react";

export default function LayoutLru() {
  const slides = useMemo(
    () => [
      {
        id: 1,
        content: <IntroLru />,
      },
      {
        id: 2,
        content: <SimulationLru />,
      },
    ],
    []
  );

  return <SlideShow slides={slides} />;
}
