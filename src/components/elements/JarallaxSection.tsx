"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

interface JarallaxSectionProps {
    children: ReactNode;
    className?: string;
    imgSrc?: string;
    videoSrc?: string;
    speed?: number;
    type?: "scroll" | "scale" | "opacity" | "scroll-opacity" | "scale-opacity";
    imgPosition?: string;
    imgRepeat?: "no-repeat" | "repeat";
    imgSize?: "cover" | "contain" | "auto" | string;
    zIndex?: number;
    disableParallax?: boolean | RegExp | (() => boolean);
    disableVideo?: boolean | RegExp | (() => boolean);
    absoluteContent?: ReactNode;
    overlayColor?: string;
    overlayOpacity?: number;
}

export default function JarallaxSection({
    children,
    className = "",
    imgSrc,
    videoSrc,
    speed = 0.5,
    type = "scroll",
    imgPosition = "50% 50%",
    imgRepeat = "no-repeat",
    imgSize = "cover",
    zIndex = -100,
    disableParallax,
    disableVideo,
    absoluteContent,
    overlayColor = "rgba(0, 0, 0, 1)",
    overlayOpacity = 0.8,
}: JarallaxSectionProps) {
    const jarallaxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = jarallaxRef.current;
        if (!element) return;

        //  Dynamic import keeps jarallax out of SSR module evaluation
        import("jarallax").then(({ jarallax }) => {
            jarallax(element, {
                speed,
                type,
                imgSrc,
                videoSrc,
                imgPosition,
                imgRepeat,
                imgSize,
                zIndex,
                disableParallax,
                disableVideo,
            });
        });

        return () => {
            import("jarallax").then(({ jarallax }) => {
                jarallax(element, "destroy");
            });
        };
    }, [
        speed,
        type,
        imgSrc,
        videoSrc,
        imgPosition,
        imgRepeat,
        imgSize,
        zIndex,
        disableParallax,
        disableVideo,
    ]);

    return (
        <div ref={jarallaxRef} className={`jarallax ${className}`}>
            {overlayColor && (
                <div
                    className="jarallax-overlay"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: overlayColor,
                        opacity: overlayOpacity,
                        zIndex: 0,
                    }}
                />
            )}
            {absoluteContent}
            <div className="jarallax-content" style={{ position: "relative", zIndex: 1 }}>
                {children}
            </div>
        </div>
    );
}