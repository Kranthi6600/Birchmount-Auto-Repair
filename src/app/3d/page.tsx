"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Header3D from "@/features/three-d/Header3D";

const Scene3D = dynamic(() => import("@/features/three-d/Scene3D"), {
    ssr: false,
    loading: () => (
        <div
            style={{
                position: "fixed",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#000",
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
            }}
        >
            Loading 3D Experience…
        </div>
    ),
});

const ThreeDPage: React.FC = () => {
    return (
        <div style={{ background: "#000", color: "#fff" }}>
            <Header3D />
            <Suspense fallback={null}>
                <Scene3D />
            </Suspense>
        </div>
    );
};

export default ThreeDPage;
