"use client";

import { useEffect } from "react";

const ParticlesBackground = () => {
  useEffect(() => {
    import("particles.js").then((module) => {
      if (typeof window !== "undefined") {
        (window as any).particlesJS.load("particles-js", "/particles.json", function () {
          console.log("callback - particles-js config loaded");
        });
      }
    });
  }, []);

  return <div id="particles-js" className="absolute top-0 left-0 w-full h-full"></div>;
};

export default ParticlesBackground;
