"use client";

import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, PresentationControls } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

const MODEL_PATH = "/assets/glb/game_ready__free_car_tires.glb";

const DrillModel: React.FC = () => {
    const { scene } = useGLTF(MODEL_PATH);
    const wrapperRef = useRef<THREE.Group>(null);
    const floatRef = useRef<THREE.Group>(null);
    const scaledRef = useRef(false);

    React.useEffect(() => {
        const wrapper = wrapperRef.current;
        if (!wrapper || scaledRef.current) return;
        wrapper.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                if (child.material) {
                    const mat = child.material as THREE.MeshStandardMaterial;
                    if (mat.envMapIntensity !== undefined) mat.envMapIntensity = 2;
                    mat.needsUpdate = true;
                }
            }
        });
        const box = new THREE.Box3().setFromObject(wrapper);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = maxDim > 0 ? 2.6 / maxDim : 1;
        wrapper.scale.setScalar(scale);
        wrapper.position.sub(center.multiplyScalar(scale));
        scaledRef.current = true;
        console.log("[TiresModel] size:", size, "maxDim:", maxDim, "scale:", scale);
    }, [scene]);

    useFrame((state) => {
        if (!floatRef.current) return;
        const t = state.clock.elapsedTime;
        floatRef.current.rotation.y = t * 0.3;
        floatRef.current.position.y = Math.sin(t * 0.8) * 0.15;
        floatRef.current.rotation.x = Math.sin(t * 0.5) * 0.06;
    });

    return (
        <group ref={floatRef}>
            <group ref={wrapperRef}>
                <primitive object={scene} />
            </group>
        </group>
    );
};

const Contact3D: React.FC = () => {
    const [ctaHovered, setCtaHovered] = useState(false);
    return (
        <section
            style={{
                position: "relative",
                width: "100%",
                background: "#ffffff",
                padding: "5rem 2rem 2rem",
                zIndex: 10,
                overflow: "hidden",
            }}
        >
            {/* Ambient glow */}
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    right: "10%",
                    width: 400,
                    height: 400,
                    transform: "translateY(-50%)",
                    background: "radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            <div style={{ maxWidth: 1024, margin: "0 auto", position: "relative" }}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "3rem",
                        flexWrap: "wrap",
                    }}
                >
                    {/* Left — minimal info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        style={{ flex: "1 1 320px" }}
                    >
                        <p
                            style={{
                                fontSize: "0.6rem",
                                fontWeight: 600,
                                letterSpacing: "0.3em",
                                textTransform: "uppercase",
                                color: "rgba(0,0,0,0.35)",
                                margin: "0 0 0.6rem",
                            }}
                        >
                            Find Us
                        </p>
                        <h2
                            style={{
                                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                                fontWeight: 800,
                                letterSpacing: "0.01em",
                                margin: "0 0 1.5rem",
                                color: "#000000",
                                fontFamily: "var(--font-archivo), sans-serif",
                            }}
                        >
                            Birchmount Auto Repair
                        </h2>

                        {/* Location */}
                        <div style={{ marginBottom: "2rem" }}>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.6rem",
                                    marginBottom: "0.4rem",
                                }}
                            >
                                <span style={{ fontSize: "0.5rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(0,0,0,0.3)" }}>
                                    Location
                                </span>
                                <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(0,0,0,0.1), transparent)" }} />
                            </div>
                            <p
                                style={{
                                    fontSize: "0.9rem",
                                    color: "rgba(0,0,0,0.7)",
                                    margin: 0,
                                    lineHeight: 1.6,
                                    fontFamily: "var(--font-titillium), sans-serif",
                                }}
                            >
                                123 Birchmount Rd<br />
                                Scarborough, ON M1K 1B3
                            </p>
                        </div>

                        {/* Hours */}
                        <div style={{ marginBottom: "2rem" }}>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.6rem",
                                    marginBottom: "0.4rem",
                                }}
                            >
                                <span style={{ fontSize: "0.5rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(0,0,0,0.3)" }}>
                                    Hours
                                </span>
                                <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(0,0,0,0.1), transparent)" }} />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                                {[
                                    { day: "Mon \u2013 Fri", time: "8:00 AM \u2013 6:00 PM" },
                                    { day: "Saturday", time: "9:00 AM \u2013 4:00 PM" },
                                    { day: "Sunday", time: "Closed" },
                                ].map((row) => (
                                    <div key={row.day} style={{ display: "flex", justifyContent: "space-between", maxWidth: 280 }}>
                                        <span style={{ fontSize: "0.75rem", color: "rgba(0,0,0,0.5)", fontFamily: "var(--font-titillium), sans-serif" }}>
                                            {row.day}
                                        </span>
                                        <span style={{ fontSize: "0.75rem", color: "rgba(0,0,0,0.7)", fontFamily: "var(--font-titillium), sans-serif" }}>
                                            {row.time}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <a
                            href="/contact"
                            onMouseEnter={() => setCtaHovered(true)}
                            onMouseLeave={() => setCtaHovered(false)}
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                fontSize: "0.6rem",
                                fontWeight: 700,
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                color: "#fff",
                                textDecoration: "none",
                                padding: "0.7rem 1.5rem",
                                borderRadius: 30,
                                background: "linear-gradient(135deg, #1a1a1a, #000000)",
                                boxShadow: ctaHovered ? "0 8px 30px rgba(0,0,0,0.2)" : "0 0 24px rgba(0,0,0,0.08)",
                                transform: ctaHovered ? "translateY(-3px) scale(1.03)" : "translateY(0) scale(1)",
                                filter: ctaHovered ? "brightness(1.15)" : "brightness(1)",
                                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                            }}
                        >
                            Book Appointment
                            <span>&rarr;</span>
                        </a>
                    </motion.div>

                    {/* Right — 3D model (hidden on mobile) */}
                    <motion.div
                        className="contact3d-model-wrapper"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        style={{ flex: "1 1 340px", height: 480 }}
                    >
                        <Canvas
                            camera={{ position: [0, 0.5, 4], fov: 50 }}
                            gl={{ antialias: true, alpha: true }}
                            dpr={[1, 2]}
                        >
                            <ambientLight intensity={0.9} />
                            <directionalLight position={[3, 5, 3]} intensity={2} castShadow />
                            <spotLight position={[-3, 4, 2]} intensity={1} angle={0.5} penumbra={0.8} color="#ffffff" />
                            <pointLight position={[0, 2, 3]} intensity={0.8} color="#ffffff" distance={10} />
                            <pointLight position={[-2, 1, -2]} intensity={0.4} color="#aabbff" distance={8} />
                            <PresentationControls
                                global
                                cursor
                                speed={0.8}
                                zoom={1}
                                rotation={[0, 0, 0]}
                                polar={[-0.5, 0.5]}
                                azimuth={[-1, 1]}
                            >
                                <Suspense fallback={null}>
                                    <DrillModel />
                                </Suspense>
                            </PresentationControls>
                        </Canvas>
                    </motion.div>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .contact3d-model-wrapper {
                        display: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

useGLTF.preload("/assets/glb/game_ready__free_car_tires.glb");

export default Contact3D;
