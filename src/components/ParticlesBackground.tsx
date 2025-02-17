"use client";

import { useEffect } from "react";

// Declaring types for particlesJS to avoid 'any' usage
declare global {
  interface Window {
    particlesJS: {
      load: (elementId: string, configPath: string, callback: () => void) => void;
    };
  }
}

const ParticlesBackground = () => {
  useEffect(() => {
    import("particles.js").then(() => {
      if (typeof window !== "undefined" && window.particlesJS) {
        window.particlesJS.load("particles-js", "/particles.json", () => {
          console.log("callback - particles-js config loaded");
        });
      }
    });
  }, []);

  return <div id="particles-js" className="absolute top-0 left-0 w-full h-full"></div>;
};

export default ParticlesBackground;
