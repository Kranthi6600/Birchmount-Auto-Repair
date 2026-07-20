"use client";

import React, { useRef, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, Bloom, Vignette, ChromaticAberration, SMAA } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";
import { CarScene } from "./CarScene";
import { TechScene } from "./TechScene";
import { ScrollOverlay } from "./ScrollOverlay";
import Services3D from "./Services3D";
import Contact3D from "./Contact3D";
import Blog3D from "./Blog3D";
import Footer3D from "./Footer3D";
import MobileHero3D from "./MobileHero3D";

const ScrollCamera: React.FC<{ scrollProgress: React.MutableRefObject<number> }> = ({ scrollProgress }) => {
    const { camera } = useThree();

    useFrame(() => {
        const p = scrollProgress.current;

        const phase1 = Math.min(p * 2, 1);
        const phase2 = Math.max(0, Math.min((p - 0.5) * 2, 1));

        const angle = phase1 * Math.PI * 0.4;
        const radius = 12 - phase1 * 2;

        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;
        const y = 1.5 + Math.sin(phase1 * Math.PI) * 1.5;

        camera.position.set(
            THREE.MathUtils.lerp(camera.position.x, x, 0.08),
            THREE.MathUtils.lerp(camera.position.y, y, 0.08),
            THREE.MathUtils.lerp(camera.position.z, z, 0.08),
        );

        const lookY = phase2 * 1.5;
        camera.lookAt(0, lookY, 0);
    });

    return null;
};

const SceneManager: React.FC<{ scrollProgress: React.MutableRefObject<number> }> = ({ scrollProgress }) => {
    const carSceneRef = useRef<THREE.Group>(null);
    const techSceneRef = useRef<THREE.Group>(null);

    useFrame(() => {
        const p = scrollProgress.current;
        const techOpacity = Math.max(0, Math.min((p - 0.35) * 2, 1));

        if (carSceneRef.current) {
            carSceneRef.current.visible = true;
        }
        if (techSceneRef.current) {
            techSceneRef.current.visible = techOpacity > 0.01;
            techSceneRef.current.scale.setScalar(0.3 + techOpacity * 0.2);
        }
    });

    return (
        <>
            <fogExp2 attach="fog" args={["#ffffff", 0]} />
            <group ref={carSceneRef}>
                <CarScene scrollProgress={scrollProgress.current} />
            </group>
            <group ref={techSceneRef} position={[0, -1.5, 0]} scale={0.5}>
                <TechScene />
            </group>
        </>
    );
};

const Scene3D: React.FC = () => {
    const scrollProgress = useRef(0);
    const heroRef = useRef<HTMLDivElement>(null);
    const [canvasOpacity, setCanvasOpacity] = useState(1);

    useEffect(() => {
        const originalWarn = console.warn;
        console.warn = (...args: unknown[]) => {
            if (typeof args[0] === "string" && args[0].includes("THREE.Clock: This module has been deprecated")) {
                return;
            }
            originalWarn.apply(console, args as never[]);
        };
        return () => { console.warn = originalWarn; };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const heroHeight = heroRef.current?.offsetHeight ?? window.innerHeight * 3;
            const heroScrollable = heroHeight - window.innerHeight;
            const p = heroScrollable > 0 ? Math.min(scrollTop / heroScrollable, 1) : 0;
            scrollProgress.current = p;

            const fadeStart = 0.95;
            const opacity = p < fadeStart ? 1 : Math.max(0, 1 - (p - fadeStart) / (1 - fadeStart));
            setCanvasOpacity(opacity);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                background: "linear-gradient(180deg, #ffffff 0%, #f5f5f5 40%, #fafafa 70%, #ffffff 100%)",
            }}
        >
            {/* 3D Hero — hidden on mobile */}
            <div className="hero-3d-wrapper">
                {/* Scrollable height — 3 viewport heights */}
                <div ref={heroRef} style={{ height: "300vh", width: "100%", pointerEvents: "none" }} />

                {/* Fixed full-screen Canvas */}
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100vh",
                        pointerEvents: "none",
                        zIndex: 1,
                        opacity: canvasOpacity,
                        transition: "opacity 0.1s linear",
                    }}
                >
                    <Canvas
                        camera={{ position: [0, 3, 14], fov: 50 }}
                        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
                        dpr={[1, 2]}
                        shadows="basic"
                    >
                        <Suspense fallback={null}>
                            <ScrollCamera scrollProgress={scrollProgress} />
                            <SceneManager scrollProgress={scrollProgress} />
                            <EffectComposer multisampling={0}>
                                <Bloom
                                    intensity={0.4}
                                    luminanceThreshold={0.6}
                                    luminanceSmoothing={0.9}
                                    mipmapBlur
                                />
                                <ChromaticAberration
                                    blendFunction={BlendFunction.NORMAL}
                                    offset={new THREE.Vector2(0.0005, 0.0005)}
                                />
                                <Vignette eskil={false} offset={0.3} darkness={0} />
                                <SMAA />
                            </EffectComposer>
                        </Suspense>
                    </Canvas>
                </div>

                <div style={{ opacity: canvasOpacity, transition: "opacity 0.1s linear" }}>
                    <ScrollOverlay scrollProgress={scrollProgress} />
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .hero-3d-wrapper {
                        display: none !important;
                    }
                    .mobile-hero-3d-wrapper {
                        display: block !important;
                    }
                }
                @media (min-width: 769px) {
                    .mobile-hero-3d-wrapper {
                        display: none !important;
                    }
                }
            `}</style>

            {/* Mobile hero — visible only on mobile */}
            <div className="mobile-hero-3d-wrapper" style={{ display: "none" }}>
                <MobileHero3D />
            </div>

            <Services3D />
            <Contact3D />
            <Blog3D />
            <Footer3D />
        </div>
    );
};

export default Scene3D;
