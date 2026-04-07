import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface VantaBackgroundProps {
  children: React.ReactNode;
}

export default function VantaBackground({ children }: VantaBackgroundProps) {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let effect: any;
    
    const initVanta = async () => {
      if (!vantaEffect && vantaRef.current) {
        try {
          // Make THREE global for Vanta
          (window as any).THREE = THREE;
          
          // @ts-ignore
          const BIRDS = (await import('vanta/dist/vanta.birds.min')).default;
          
          effect = BIRDS({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0x07192f,
            color1: 0xff0055,
            color2: 0x00d1ff,
            colorMode: "varianceGradient",
            quantity: 5.00, // Slightly increased for more birds, but safe from overflow
            birdSize: 2.00, // Adjusted size
            wingSpan: 30.00, // Adjusted wingspan
            speedLimit: 6.00,
            separation: 100.00, // Increased separation to spread across screen
            alignment: 20.00,
            cohesion: 10.00, // Decreased cohesion so they don't clump together
            backgroundAlpha: 1.00
          });
          
          setVantaEffect(effect);
        } catch (error) {
          console.error("Vanta initialization failed:", error);
        }
      }
    };

    initVanta();

    return () => {
      if (effect) effect.destroy();
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="relative w-full min-h-screen">
      <div ref={vantaRef} className="fixed inset-0 w-full h-full z-0 pointer-events-none" />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
