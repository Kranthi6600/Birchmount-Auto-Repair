"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

const SparkRing: React.FC<{ radius: number; count: number; color: string; y: number }> = ({
    radius,
    count,
    color,
    y,
}) => {
    return (
        <group>
            {Array.from({ length: count }).map((_, i) => {
                const angle = (i / count) * Math.PI * 2;
                const x = Math.cos(angle) * radius;
                const z = Math.sin(angle) * radius;
                return (
                    <Float key={i} speed={2} floatIntensity={2} rotationIntensity={1}>
                        <mesh position={[x, y, z]}>
                            <sphereGeometry args={[0.06, 16, 16]} />
                            <meshStandardMaterial
                                color={color}
                                emissive={color}
                                emissiveIntensity={2}
                                metalness={0.5}
                                roughness={0.3}
                            />
                        </mesh>
                    </Float>
                );
            })}
        </group>
    );
};

const HolographicCar: React.FC = () => {
    const ref = useRef<THREE.Group>(null);
    useFrame((state) => {
        if (!ref.current) return;
        ref.current.rotation.y = state.clock.elapsedTime * 0.5;
        const scale = 0.8 + Math.sin(state.clock.elapsedTime * 2) * 0.03;
        ref.current.scale.setScalar(scale);
    });

    return (
        <group ref={ref}>
            {/* Wireframe car silhouette */}
            <mesh>
                <boxGeometry args={[3.5, 0.7, 1.6]} />
                <meshStandardMaterial
                    color="#ffffff"
                    emissive="#ffffff"
                    emissiveIntensity={0.8}
                    wireframe
                    transparent
                    opacity={0.6}
                />
            </mesh>
            <mesh position={[0, 0.9, 0]}>
                <boxGeometry args={[2, 0.6, 1.4]} />
                <meshStandardMaterial
                    color="#ffffff"
                    emissive="#ffffff"
                    emissiveIntensity={0.6}
                    wireframe
                    transparent
                    opacity={0.5}
                />
            </mesh>
            {/* Core glow */}
            <mesh position={[0, 0.4, 0]}>
                <sphereGeometry args={[0.3, 32, 32]} />
                <meshStandardMaterial
                    color="#ffffff"
                    emissive="#ffffff"
                    emissiveIntensity={3}
                    transparent
                    opacity={0.8}
                />
            </mesh>
        </group>
    );
};

export const TechScene: React.FC = () => {
    return (
        <>
            <ambientLight intensity={0.2} />
            <pointLight position={[0, 5, 0]} intensity={3} color="#ffffff" distance={15} />
            <pointLight position={[-5, 2, 5]} intensity={2} color="#ffffff" distance={10} />

            <HolographicCar />

            <SparkRing radius={4} count={40} color="#ffffff" y={0} />
            <SparkRing radius={3} count={30} color="#aaaaaa" y={1} />

            <Sparkles count={80} scale={[12, 6, 12]} size={2} speed={0.3} color="#ffffff" opacity={0.6} />

            <pointLight position={[5, 3, -5]} intensity={1.5} color="#aabbff" distance={12} />
            <pointLight position={[-3, -2, 3]} intensity={1} color="#ffffff" distance={8} />
        </>
    );
};
