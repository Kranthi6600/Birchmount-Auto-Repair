"use client";

import React from "react";

export const Scene3DStyles: React.FC = () => (
    <style>{`
        /* ===== Keyframes ===== */
        @keyframes title-slide-in {
            0% { opacity: 0; transform: translateX(-60px) scale(0.8); filter: blur(12px); }
            60% { opacity: 0.8; transform: translateX(10px) scale(1.05); filter: blur(2px); }
            100% { opacity: 1; transform: translateX(0) scale(1); filter: blur(0); }
        }
        @keyframes title-slide-in-right {
            0% { opacity: 0; transform: translateX(60px) scale(0.8); filter: blur(12px); }
            60% { opacity: 0.8; transform: translateX(-10px) scale(1.05); filter: blur(2px); }
            100% { opacity: 1; transform: translateX(0) scale(1); filter: blur(0); }
        }
        @keyframes divider-sweep {
            0% { opacity: 0; transform: scaleX(0) scaleY(0); }
            40% { opacity: 1; transform: scaleX(1.3) scaleY(1.5); }
            60% { transform: scaleX(0.9) scaleY(0.8); }
            100% { opacity: 1; transform: scaleX(1) scaleY(1); }
        }
        @keyframes subtitle-reveal {
            0% { opacity: 0; transform: translateY(10px); filter: blur(4px); }
            100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes desc-wipe-in {
            0% { opacity: 0; clip-path: inset(0 100% 0 0); transform: skewX(-10deg); }
            60% { opacity: 1; clip-path: inset(0 0 0 0); transform: skewX(0deg); }
            100% { opacity: 1; clip-path: inset(0 0 0 0); transform: skewX(0deg); }
        }
        @keyframes desc-wipe-in-right {
            0% { opacity: 0; clip-path: inset(0 0 0 100%); transform: skewX(10deg); }
            60% { opacity: 1; clip-path: inset(0 0 0 0); transform: skewX(0deg); }
            100% { opacity: 1; clip-path: inset(0 0 0 0); transform: skewX(0deg); }
        }
        @keyframes btn-pop-in {
            0% { opacity: 0; transform: translateY(20px) scale(0.7); }
            50% { opacity: 1; transform: translateY(-5px) scale(1.08); }
            70% { transform: translateY(2px) scale(0.97); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes contact3d-fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float-orb {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-30px) scale(1.05); }
        }
        @keyframes float-orb-reverse {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(25px) scale(0.95); }
        }
        @keyframes grid-pan {
            0% { background-position: 0 0; }
            100% { background-position: 60px 60px; }
        }
        @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        @keyframes pulse-ring {
            0% { transform: scale(0.8); opacity: 0.6; }
            50% { transform: scale(1.1); opacity: 0.2; }
            100% { transform: scale(0.8); opacity: 0.6; }
        }

        /* ===== Text Animations (applied when section is active) ===== */
        .text-anim-title-left {
            animation: title-slide-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .text-anim-title-right {
            animation: title-slide-in-right 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .text-anim-divider {
            animation: divider-sweep 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s both;
            transform-origin: center;
        }
        .text-anim-subtitle {
            animation: subtitle-reveal 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
        }
        .text-anim-desc-left {
            animation: desc-wipe-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.45s both;
        }
        .text-anim-desc-right {
            animation: desc-wipe-in-right 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.45s both;
        }
        .text-anim-btn-1 {
            animation: btn-pop-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s both;
        }
        .text-anim-btn-2 {
            animation: btn-pop-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.75s both;
        }
        .text-anim-cta-title {
            animation: title-slide-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .text-anim-cta-form {
            animation: contact3d-fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
        }

        .hero-orb-1 { animation: float-orb 6s ease-in-out infinite; }
        .hero-orb-2 { animation: float-orb-reverse 7s ease-in-out infinite; }
        .hero-orb-3 { animation: float-orb 8s ease-in-out infinite; }
        .hero-grid-bg { animation: grid-pan 20s linear infinite; }
        .hero-spin-ring { animation: spin-slow 30s linear infinite; }
        .hero-pulse-ring { animation: pulse-ring 4s ease-in-out infinite; }

        /* ===== Contact Form Input ===== */
        .contact3d-input::placeholder { color: rgba(0,0,0,0.35); }
        .contact3d-input:focus {
            border-color: rgba(0,0,0,0.4) !important;
            box-shadow: 0 0 0 3px rgba(0,0,0,0.08) !important;
        }
        .contact3d-input option {
            background: #ffffff;
            color: #000;
        }
    `}</style>
);

export default Scene3DStyles;
