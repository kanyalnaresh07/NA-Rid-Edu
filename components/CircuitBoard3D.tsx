
import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Line, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const CircuitLine = ({ start, end, delay }: { start: [number, number, number], end: [number, number, number], delay: number }) => {
  const pulseRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pulseRef.current) {
      const t = (time + delay) % 4;
      const progress = t / 4;
      
      const x = start[0] + (end[0] - start[0]) * progress;
      const y = start[1] + (end[1] - start[1]) * progress;
      const z = start[2] + (end[2] - start[2]) * progress;
      
      pulseRef.current.position.set(x, y, z);
      pulseRef.current.scale.setScalar(Math.sin(progress * Math.PI) * 0.2 + 0.05);
    }
    if (glowRef.current) {
      glowRef.current.scale.setScalar(Math.sin(time * 2 + delay) * 0.1 + 1.1);
    }
  });

  return (
    <group>
      <Line
        points={[start, end]}
        color="#0ea5e9"
        lineWidth={0.8}
        transparent
        opacity={0.3}
      />
      {/* Subtle secondary glow line */}
      <Line
        points={[start, end]}
        color="#38bdf8"
        lineWidth={2}
        transparent
        opacity={0.05}
      />
      <Sphere ref={pulseRef} args={[0.15, 16, 16]}>
        <meshBasicMaterial color="#7dd3fc" toneMapped={false} />
      </Sphere>
    </group>
  );
};

const CircuitBoard = () => {
  const groupRef = useRef<THREE.Group>(null);

  const { lines, nodes } = useMemo(() => {
    const tempLines = [];
    const tempNodes = [];
    const size = 20;
    const step = 2;

    for (let x = -size; x <= size; x += step) {
      for (let y = -size; y <= size; y += step) {
        // Intersection nodes
        if (Math.random() > 0.6) {
          tempNodes.push([x, y, 0] as [number, number, number]);
        }

        // Horizontal lines
        if (Math.random() > 0.7) {
          tempLines.push({
            start: [x, y, 0] as [number, number, number],
            end: [x + step, y, 0] as [number, number, number],
            delay: Math.random() * 4
          });
        }
        // Vertical lines
        if (Math.random() > 0.7) {
          tempLines.push({
            start: [x, y, 0] as [number, number, number],
            end: [x, y + step, 0] as [number, number, number],
            delay: Math.random() * 4
          });
        }
        // Z-axis connections for 3D feel
        if (Math.random() > 0.9) {
          tempLines.push({
            start: [x, y, 0] as [number, number, number],
            end: [x, y, -2] as [number, number, number],
            delay: Math.random() * 4
          });
        }
      }
    }
    return { lines: tempLines, nodes: tempNodes };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      const mouseX = (state.mouse.x * state.viewport.width) / 2;
      const mouseY = (state.mouse.y * state.viewport.height) / 2;
      
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouseX * 0.05, 0.1);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mouseY * 0.05, 0.1);
    }
  });

  return (
    <group ref={groupRef}>
      {lines.map((line, i) => (
        <CircuitLine key={i} {...line} />
      ))}
      
      {nodes.map((pos, i) => (
        <Sphere key={`node-${i}`} position={pos} args={[0.08, 16, 16]}>
          <meshBasicMaterial color="#0ea5e9" transparent opacity={0.4} />
        </Sphere>
      ))}
      
      {/* Background Glow */}
      <Sphere args={[30, 32, 32]} position={[0, 0, -10]}>
        <MeshDistortMaterial
          color="#1e3a8a"
          speed={2}
          distort={0.4}
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  );
};

const CircuitBoard3D = () => {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#020617]">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <color attach="background" args={['#020617']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <CircuitBoard />
        </Float>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617]" />
    </div>
  );
};

export default CircuitBoard3D;
