"use client";

import { useEffect, RefObject } from 'react';

interface UseStickySidebarOptions {
    mainRef: RefObject<HTMLDivElement | null>;
    widgetRef: RefObject<HTMLElement | null>;
    placeholderRef: RefObject<HTMLDivElement | null>;
    offset?: number;
    buffer?: number;
    enabled?: boolean;
}

export function useStickySidebar({
    mainRef,
    widgetRef,
    placeholderRef,
    offset = 120,
    buffer = 50,
    enabled = true,
}: UseStickySidebarOptions) {
    useEffect(() => {
        if (!enabled) return;

        let pinned = false;
        let rafId: number | null = null;

        const setFixedPos = (widget: HTMLElement, placeholder: HTMLDivElement) => {
            const rect = placeholder.getBoundingClientRect();
            widget.style.left = `${rect.left}px`;
            widget.style.width = `${rect.width}px`;
        };

        const tick = () => {
            const main = mainRef.current;
            const widget = widgetRef.current;
            const placeholder = placeholderRef.current;
            if (!main || !widget || !placeholder) return;

            const placeRect = placeholder.getBoundingClientRect();
            const mainRect = main.getBoundingClientRect();
            const widgetHeight = widget.offsetHeight;

            const shouldRelease = mainRect.bottom <= widgetHeight + offset + 20;
            const shouldPin = !shouldRelease && placeRect.top <= offset;
            const shouldUnpin = pinned && placeRect.top > offset + buffer;

            if ((shouldUnpin || shouldRelease) && pinned) {
                pinned = false;
                placeholder.style.height = '0px';
                widget.style.position = 'static';
                widget.style.top = 'auto';
                widget.style.left = 'auto';
                widget.style.width = 'auto';
                widget.style.zIndex = 'auto';
            } else if (shouldPin && !pinned) {
                pinned = true;
                placeholder.style.height = `${widgetHeight}px`;
                setFixedPos(widget, placeholder);
                widget.style.position = 'fixed';
                widget.style.top = `${offset}px`;
                widget.style.zIndex = 'auto';
            } else if (pinned) {
                setFixedPos(widget, placeholder);
            }
        };

        const onScroll = () => {
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                rafId = null;
                tick();
            });
        };

        const onResize = () => {
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                rafId = null;
                tick();
            });
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onResize, { passive: true });
        tick();

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onResize);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [mainRef, widgetRef, placeholderRef, offset, buffer, enabled]);
}
