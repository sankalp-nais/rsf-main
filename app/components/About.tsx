"use client";
import { useEffect, useRef, useState } from "react";


type CounterProps = {
  max: number;
  duration?: number;
  suffix?: string;
  triggerId: string;
};

function AnimatedCounter({
  max,
  duration = 3000,
  suffix = "+",
  triggerId,
}: CounterProps) {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const target = document.getElementById(triggerId);
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          const start = performance.now();

          const animate = (time: number) => {
            const progress = Math.min((time - start) / duration, 1);
            setValue(Math.floor(progress * max));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [max, duration, triggerId]);

  return (
    <>
      {value}
      {suffix}
    </>
  );
}


export default function CTA() {
  return (
    <>
    <section
  id="about"
  className="relative py-10 px-6 overflow-hidden"
>
  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-cyan-50/30 to-blue-100/40 dark:from-slate-900 dark:via-sky-600 dark:to-blue-950" />

  <div
    className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"
    style={{ transform: "scale(1.09875) rotate(44.4397deg)" }}
  />

  <div
    className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-400/20 to-cyan-500/20 rounded-full blur-3xl"
    style={{ transform: "scale(1.01684) rotate(7.57644deg)" }}
  />

  <div className="relative z-10 max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-8">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-800 mb-6">
        <svg
          className="lucide lucide-award w-4 h-4 text-cyan-600 dark:text-cyan-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
          <circle cx="12" cy="8" r="6" />
        </svg>
        <span className="text-cyan-700 dark:text-cyan-300">Who We Are</span>
      </div>

      <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-slate-900 via-cyan-900 to-slate-900 dark:from-white dark:via-cyan-200 dark:to-white bg-clip-text text-transparent">
        Trusted. Certified. Sustainable.
      </h2>

      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
        Alu-Freshh was built with a clear vision to create a reliable, high-quality, and scalable food packaging manufacturing platform.
       Backed by more than 5 Decades with group experience, we specialise in<br />producing food-safe packaging materials that meet the evolving requirements of retail, institutional, and export customers.
      </p>
    </div>

    {/* Stats Boxes */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
      {/* 1 */}
      <div className="group relative">
        <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl p-6 border-2 border-gray-200 dark:border-slate-700 hover:border-cyan-400 dark:hover:border-cyan-500 transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 opacity-0" />
          <div className="relative mb-4 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
            <svg
              className="lucide lucide-award w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
              <circle cx="12" cy="8" r="6" />
            </svg>
          </div>
          <div className="relative text-4xl md:text-5xl mb-2 bg-gradient-to-r from-slate-900 to-cyan-900 dark:from-white dark:to-cyan-200 bg-clip-text text-transparent">
            <AnimatedCounter max={1000} duration={2000} suffix="+"  triggerId="about" />
          </div>
          <div className="relative text-sm text-gray-600 dark:text-gray-300">
           Happy Clients
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="group relative">
        <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl p-6 border-2 border-gray-200 dark:border-slate-700 hover:border-cyan-400 dark:hover:border-cyan-500 transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 opacity-0" />
          <div className="relative mb-4 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
            <svg
              className="lucide lucide-trending-up w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M16 7h6v6" />
              <path d="m22 7-8.5 8.5-5-5L2 17" />
            </svg>
          </div>
          <div className="relative text-4xl md:text-5xl mb-2 bg-gradient-to-r from-slate-900 to-cyan-900 dark:from-white dark:to-cyan-200 bg-clip-text text-transparent">
            <AnimatedCounter max={100} duration={2000} suffix="+"  triggerId="about" />
          </div>
          <div className="relative text-sm text-gray-600 dark:text-gray-300">
            Products(250+ SKUs)
          </div>
        </div>
      </div>

      {/* 3 */}
      <div className="group relative">
        <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl p-6 border-2 border-gray-200 dark:border-slate-700 hover:border-cyan-400 dark:hover:border-cyan-500 transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-green-500 opacity-0" />
          <div className="relative mb-4 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center">
            <svg
              className="lucide lucide-factory w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M12 16h.01" />
              <path d="M16 16h.01" />
              <path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" />
              <path d="M8 16h.01" />
            </svg>
          </div>
          <div className="relative text-4xl md:text-5xl mb-2 bg-gradient-to-r from-slate-900 to-cyan-900 dark:from-white dark:to-cyan-200 bg-clip-text text-transparent">
            <AnimatedCounter max={5} duration={2000} suffix="+"  triggerId="about" />
          </div>
          <div className="relative text-sm text-gray-600 dark:text-gray-300">
            Decades Group Experience
          </div>
        </div>
      </div>

      {/* 4 */}
      <div className="group relative">
        <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl p-6 border-2 border-gray-200 dark:border-slate-700 hover:border-cyan-400 dark:hover:border-cyan-500 transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-500 opacity-0" />
          <div className="relative mb-4 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center">
            <svg
              className="lucide lucide-shield w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            </svg>
          </div>
          <div className="relative text-4xl md:text-5xl mb-2 bg-gradient-to-r from-slate-900 to-cyan-900 dark:from-white dark:to-cyan-200 bg-clip-text text-transparent">
            <AnimatedCounter max={8} duration={2000} suffix="+"  triggerId="about" />
          </div>
          <div className="relative text-sm text-gray-600 dark:text-gray-300">
           Countries
          </div>
        </div>
      </div>
    </div>

    {/* Large testimonial box */}
    <div className="mt-16 relative">
      <div className="relative bg-gradient-to-br from-white/90 to-cyan-50/90 dark:from-slate-800/90 dark:to-blue-900/30 backdrop-blur-xl rounded-3xl p-8 md:p-12 border-2 border-cyan-200 dark:border-cyan-800 overflow-hidden">
        <div className="absolute top-6 left-6 text-8xl text-cyan-500/10 dark:text-cyan-400/10">
        {/*  " */}
        </div>

        <div className="relative text-center">
          <svg
            className="lucide lucide-users w-12 h-12 mx-auto mb-6 text-cyan-600 dark:text-cyan-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <path d="M16 3.128a4 4 0 0 1 0 7.744" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <circle cx="9" cy="7" r="4" />
          </svg>

          <blockquote className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 mb-6 italic leading-relaxed">
            &quot; We don&apos;t just manufacture products. We protect what matters most
            your food, your brand, your trust.&quot;
          </blockquote>

          <div className="text-gray-600 dark:text-gray-300">
            <p className="text-lg">The Alu-Freshh Team</p>
            <p className="text-sm mt-1"></p>
          </div>
        </div>
      </div>
      
    </div>  
  </div>
  
</section>

    </>
    );
}