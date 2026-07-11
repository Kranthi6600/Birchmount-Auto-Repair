"use client";

import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const CAR_GLB_PATH = "/assets/glb/carglb/source/car_glb.glb";
const TARGET_SIZE = 6;

const CarModel: React.FC = () => {
    const { scene } = useGLTF(CAR_GLB_PATH);
    const wrapperRef = useRef<THREE.Group>(null);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;

        wrapper.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = false;
                child.receiveShadow = false;
                if (child.material) {
                    const mat = child.material as THREE.MeshStandardMaterial;
                    if (mat.envMapIntensity !== undefined) {
                        mat.envMapIntensity = 3;
                    }
                    mat.needsUpdate = true;
                }
            }
        });

        const box = new THREE.Box3().setFromObject(wrapper);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = maxDim > 0 ? TARGET_SIZE / maxDim : 1;

        wrapper.scale.setScalar(scale);
        // Center horizontally, but shift down so the bottom of the car sits near y=0
        wrapper.position.x -= center.x * scale;
        wrapper.position.z -= center.z * scale;
        wrapper.position.y -= (center.y + size.y / 2) * scale;

        console.log("[CarModel] Bounding box size:", size, "Center:", center, "Scale:", scale);
    }, [scene]);

    return <group ref={wrapperRef}><primitive object={scene} /></group>;
};

const Car: React.FC<{ scrollProgress: number }> = ({ scrollProgress }) => {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!groupRef.current) return;
        const t = state.clock.elapsedTime;
        const p = scrollProgress;

        // Continuous slow spin + scroll-driven rotation
        groupRef.current.rotation.y = t * 0.3 + p * Math.PI * 0.5;

        // Floating bob (offset from base position on podium)
        groupRef.current.position.y = -1.35 + Math.sin(t * 0.8) * 0.08 + Math.sin(p * Math.PI) * 0.1;

        // Subtle tilt for dynamic feel
        groupRef.current.rotation.x = Math.sin(t * 0.5) * 0.04;
        groupRef.current.rotation.z = Math.sin(t * 0.7) * 0.03;

        // Slight scale breathing
        const breath = 1 + Math.sin(t * 1.2) * 0.015;
        groupRef.current.scale.setScalar(breath);
    });

    return (
        <group ref={groupRef} position={[0, -1.35, 0]}>
            <CarModel />
        </group>
    );
};

const OrbitingTool: React.FC<{
    radius: number;
    height: number;
    speed: number;
    phase: number;
    modelPath: string;
    targetSize: number;
}> = ({ radius, height, speed, phase, modelPath, targetSize }) => {
    const ref = useRef<THREE.Group>(null);
    const { scene } = useGLTF(modelPath);
    const wrapperRef = useRef<THREE.Group>(null);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;

        wrapper.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                if (child.material) {
                    const mat = child.material as THREE.MeshStandardMaterial;
                    if (mat.envMapIntensity !== undefined) {
                        mat.envMapIntensity = 2;
                    }
                    mat.needsUpdate = true;
                }
            }
        });

        const box = new THREE.Box3().setFromObject(wrapper);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = maxDim > 0 ? targetSize / maxDim : 1;

        wrapper.scale.setScalar(scale);
        wrapper.position.sub(center.multiplyScalar(scale));
    }, [scene, targetSize]);

    useFrame((state) => {
        if (!ref.current) return;
        const t = state.clock.elapsedTime * speed + phase;
        ref.current.position.x = Math.cos(t) * radius;
        ref.current.position.z = Math.sin(t) * radius;
        ref.current.position.y = height + Math.sin(t * 2) * 0.15;
        ref.current.rotation.y = -t + Math.PI / 2;
        ref.current.rotation.x = Math.sin(t * 1.5) * 0.2;
    });

    return (
        <group ref={ref}>
            <group ref={wrapperRef}>
                <primitive object={scene} />
            </group>
        </group>
    );
};

const Podium: React.FC = () => {
    const dots = [];
    const dotCount = 16;
    for (let i = 0; i < dotCount; i++) {
        const angle = (i / dotCount) * Math.PI * 2;
        const r = 4.7;
        dots.push(
            <mesh key={`dot-${i}`} position={[Math.cos(angle) * r, 0.16, Math.sin(angle) * r]}>
                <sphereGeometry args={[0.06, 16, 16]} />
                <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.3} metalness={0.8} roughness={0.2} />
            </mesh>
        );
    }

    return (
        <group position={[0, -1.5, 0]}>
            {/* Bottom wide tier */}
            <mesh position={[0, -0.15, 0]}>
                <cylinderGeometry args={[5, 5.3, 0.15, 64]} />
                <meshStandardMaterial color="#0a0a0a" metalness={0.7} roughness={0.3} />
            </mesh>

            {/* Main solid disc base */}
            <mesh>
                <cylinderGeometry args={[4, 4.5, 0.3, 64]} />
                <meshStandardMaterial color="#000000" metalness={0.6} roughness={0.4} />
            </mesh>

            {/* Top tier — slightly smaller, glossy */}
            <mesh position={[0, 0.18, 0]}>
                <cylinderGeometry args={[3.6, 4, 0.08, 64]} />
                <meshStandardMaterial color="#111111" metalness={0.9} roughness={0.15} />
            </mesh>

            {/* Glowing edge ring on top tier */}
            <mesh position={[0, 0.23, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[3.5, 3.65, 64]} />
                <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.4} transparent opacity={0.25} side={THREE.DoubleSide} />
            </mesh>

            {/* Outer glow ring on main base */}
            <mesh position={[0, 0.16, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[3.9, 4.05, 64]} />
                <meshStandardMaterial color="#333333" emissive="#333333" emissiveIntensity={0.2} transparent opacity={0.15} side={THREE.DoubleSide} />
            </mesh>

            {/* Decorative accent dots around the outer edge */}
            {dots}

            {/* Inner decorative ring */}
            <mesh position={[0, 0.17, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[2.5, 2.6, 64]} />
                <meshStandardMaterial color="#222222" emissive="#222222" emissiveIntensity={0.15} transparent opacity={0.3} side={THREE.DoubleSide} />
            </mesh>
        </group>
    );
};

export const CarScene: React.FC<{ scrollProgress: number }> = ({ scrollProgress }) => {
    return (
        <>
            {/* Clean 3-point lighting focused on the car */}
            <ambientLight intensity={0.9} />
            <directionalLight
                position={[6, 10, 6]}
                intensity={3}
                castShadow={false}
            />
            <spotLight position={[-6, 6, 4]} intensity={1.5} angle={0.4} penumbra={0.8} color="#ffffff" />
            <pointLight position={[0, -2, 0]} intensity={0.8} color="#ffffff" />
            <pointLight position={[0, 4, 6]} intensity={1.2} color="#ffffff" />
            <pointLight position={[-4, 2, -4]} intensity={0.8} color="#aabbff" />
            <pointLight position={[4, -1, -3]} intensity={0.6} color="#ffffff" />

            {/* Car — the hero */}
            <Car scrollProgress={scrollProgress} />

            {/* Clean podium underneath */}
            <Podium />

            {/* Orbiting repair tools around the car */}
            <OrbitingTool radius={5.5} height={1.0} speed={0.3} phase={Math.PI * 1.33} modelPath="/assets/glb/drill_soviet.glb" targetSize={1.0} />
            <OrbitingTool radius={6.5} height={2.0} speed={0.25} phase={Math.PI * 0.5} modelPath="/assets/glb/drill_soviet.glb" targetSize={0.8} />
            <OrbitingTool radius={5.0} height={0.5} speed={0.35} phase={Math.PI * 0.0} modelPath="/assets/glb/drill_soviet.glb" targetSize={0.9} />
            <OrbitingTool radius={7.0} height={1.5} speed={0.2} phase={Math.PI * 1.8} modelPath="/assets/glb/drill_soviet.glb" targetSize={0.7} />
            <OrbitingTool radius={6.0} height={2.5} speed={0.28} phase={Math.PI * 0.9} modelPath="/assets/glb/drill_soviet.glb" targetSize={0.85} />
        </>
    );
};

useGLTF.preload(CAR_GLB_PATH);
useGLTF.preload("/assets/glb/drill_soviet.glb");
