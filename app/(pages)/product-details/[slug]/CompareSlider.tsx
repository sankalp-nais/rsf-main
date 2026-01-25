"use client"
import { useRef, useState } from "react";

export default function CompareSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
}: {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);

  const handleDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    let x = ((clientX - rect.left) / rect.width) * 100;
    x = Math.max(0, Math.min(100, x));
    setPosition(x);
  };

  const startDrag = () => {
    window.addEventListener("mousemove", handleDrag as any);
    window.addEventListener("touchmove", handleDrag as any);
    window.addEventListener("mouseup", endDrag);
    window.addEventListener("touchend", endDrag);
  };

  const endDrag = () => {
    window.removeEventListener("mousemove", handleDrag as any);
    window.removeEventListener("touchmove", handleDrag as any);
    window.removeEventListener("mouseup", endDrag);
    window.removeEventListener("touchend", endDrag);
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div
          ref={containerRef}
          className="relative aspect-video md:aspect-[21/9] lg:aspect-[2.5/1] w-full overflow-hidden shadow-2xl bg-gray-100 select-none cursor-col-resize"
          onMouseDown={startDrag}
          onTouchStart={startDrag}
        >
          {/* BEFORE IMAGE + LABEL (CLIPPED FROM RIGHT) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <img
              src={beforeImage}
              alt={beforeLabel}
              className="w-full h-full object-cover"
              draggable={false}
            />

            <div className="pointer-events-none absolute top-4 left-4 z-20 px-4 py-2 bg-black/70 backdrop-blur-sm text-white rounded-full text-sm md:text-base">
              {beforeLabel}
            </div>
          </div>

          {/* AFTER IMAGE + LABEL (CLIPPED FROM LEFT) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 0 0 ${position}% )` }}
          >
            <img
              src={afterImage}
              alt={afterLabel}
              className="w-full h-full object-cover"
              draggable={false}
            />

            <div className="pointer-events-none absolute top-4 right-4 z-20 px-4 py-2 bg-black/70 backdrop-blur-sm text-white rounded-full text-sm md:text-base">
              {afterLabel}
            </div>
          </div>

          {/* SLIDER LINE */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-30"
            style={{ left: `${position}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform cursor-grab active:cursor-grabbing">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-slate-700"
              >
                <path d="m18 8 4 4-4 4" />
                <path d="M2 12h20" />
                <path d="m6 8-4 4 4 4" />
              </svg>
            </div>
          </div>

          {/* CENTER THIN LINE */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white/50 z-20"
            style={{ left: `${position}%` }}
          />
        </div>
      </div>
    </section>
  );
}
