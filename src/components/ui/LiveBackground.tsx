"use client";

import React, { useEffect, useRef } from 'react';

// Each layer has a unique parallax speed for cursor (cx, cy) and scroll (sy)
const LAYERS = [
  // Layer 1 — base blob, deep navy, very slow cursor response, subtle scroll
  {
    w: 900, h: 700,
    x: 20, y: 10,
    color: 'rgba(15, 23, 80, 0.55)',
    blur: 180,
    cursorSpeed: 0.008,
    scrollSpeed: 0.04,
  },
  // Layer 2 — mid blob, indigo, medium speed
  {
    w: 700, h: 600,
    x: 55, y: 30,
    color: 'rgba(49, 46, 129, 0.45)',
    blur: 160,
    cursorSpeed: 0.018,
    scrollSpeed: 0.08,
  },
  // Layer 3 — mid blob, violet, slightly faster
  {
    w: 600, h: 500,
    x: 10, y: 50,
    color: 'rgba(76, 29, 149, 0.30)',
    blur: 140,
    cursorSpeed: 0.030,
    scrollSpeed: 0.12,
  },
  // Layer 4 — upper blob, cool navy-blue, faster cursor response
  {
    w: 500, h: 400,
    x: 70, y: 60,
    color: 'rgba(30, 27, 97, 0.35)',
    blur: 120,
    cursorSpeed: 0.045,
    scrollSpeed: 0.18,
  },
  // Layer 5 — top diffusion layer, wide violet wash, fastest
  {
    w: 1100, h: 400,
    x: 30, y: 70,
    color: 'rgba(88, 28, 135, 0.12)',
    blur: 200,
    cursorSpeed: 0.060,
    scrollSpeed: 0.25,
  },
];

export function LiveBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const smoothMouse = useRef({ x: 0, y: 0 });
  const scrollY = useRef(0);
  const raf = useRef<number>(0);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      // Normalize to [-1, 1] range relative to viewport center
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    const onScroll = () => {
      scrollY.current = window.scrollY;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    const tick = () => {
      // Lerp smoothMouse toward mouse for buttery smoothness
      smoothMouse.current.x += (mouse.current.x - smoothMouse.current.x) * 0.05;
      smoothMouse.current.y += (mouse.current.y - smoothMouse.current.y) * 0.05;

      LAYERS.forEach((layer, i) => {
        const el = blobRefs.current[i];
        if (!el) return;
        const dx = smoothMouse.current.x * layer.cursorSpeed * window.innerWidth;
        const dy = smoothMouse.current.y * layer.cursorSpeed * window.innerHeight
                  + scrollY.current * layer.scrollSpeed;
        el.style.transform = `translate(${dx}px, ${dy}px)`;
      });

      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Static deep-dark base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020817] via-[#04091a] to-[#080415]" />

      {/* Very subtle 64px dot grid — ultra faint */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Parallax blob layers */}
      {LAYERS.map((layer, i) => (
        <div
          key={i}
          ref={el => { blobRefs.current[i] = el; }}
          className="absolute rounded-full will-change-transform"
          style={{
            width:  `${layer.w}px`,
            height: `${layer.h}px`,
            left:   `calc(${layer.x}% - ${layer.w / 2}px)`,
            top:    `calc(${layer.y}% - ${layer.h / 2}px)`,
            background: layer.color,
            filter: `blur(${layer.blur}px)`,
            // Pre-paint hint — keeps GPU compositing fast
            transform: 'translate(0px, 0px)',
          }}
        />
      ))}

      {/* Top soft vignette — edges darken to focus the center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_50%,transparent_40%,rgba(2,8,23,0.6)_100%)]" />
    </div>
  );
}
