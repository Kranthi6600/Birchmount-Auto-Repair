"use client";

import { create } from "zustand";

interface Scene3DState {
    scrollProgress: number;
    setScrollProgress: (v: number) => void;
}

export const useScene3DStore = create<Scene3DState>((set) => ({
    scrollProgress: 0,
    setScrollProgress: (v) => set({ scrollProgress: v }),
}));
