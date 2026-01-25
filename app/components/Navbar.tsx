"use client";
 
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
 
export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
 
  useEffect(() => {
  setMounted(true);
}, []);
 
useEffect(() => {
  if (!mounted) return;
 
  const hash = window.location.hash;
  if (!hash) return;
 
  const el = document.getElementById(hash.slice(1));
  if (!el) return;
 
  requestAnimationFrame(() => {
    el.scrollIntoView({ behavior: "smooth" });
  });
}, [mounted]);
 
 
  return (
    <>
      <nav
        className="fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 top-2 sm:top-4"
        style={{ transform: "none" }}
      >
        <div className="relative rounded-full border backdrop-blur-xl shadow-2xl transition-all duration-300 border-slate-200/50 bg-white/70">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5"></div>
          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(100,116,139,0.05)]"></div>
 
          <div className="relative px-4 sm:px-3 md:px-4 py-4 sm:py-2 flex items-center justify-between gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            <Link href="/#home" className="flex items-center shrink-0 group cursor-pointer">
              <Image
                src="/assets/icons/nav-logo.png"
                alt="ALU FRESHH"
                className="h-7 sm:h-8 md:h-9 lg:h-10 w-auto transition-all duration-300 group-hover:scale-110 brightness-0 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                style={{ transform: "none" }}
                width={40}
                height={40}
              />
            </Link>
 
            <ul className="hidden lg:flex items-center gap-0.5">
              <li><Link href="/#home" className="px-2.5 py-1.5 text-sm rounded-full transition-all duration-200 whitespace-nowrap text-slate-700 hover:text-slate-900 hover:bg-slate-100/60">Home</Link></li>
              <li><Link href="/#products" className="px-2.5 py-1.5 text-sm rounded-full transition-all duration-200 whitespace-nowrap text-slate-700 hover:text-slate-900 hover:bg-slate-100/60">Products</Link></li>
              <li><Link href="/#about" className="px-2.5 py-1.5 text-sm rounded-full transition-all duration-200 whitespace-nowrap text-slate-700 hover:text-slate-900 hover:bg-slate-100/60">About</Link></li>
              <li><Link href="/#gallery" className="px-2.5 py-1.5 text-sm rounded-full transition-all duration-200 whitespace-nowrap text-slate-700 hover:text-slate-900 hover:bg-slate-100/60">Gallery</Link></li>
              <li><Link href="/#contact" className="px-2.5 py-1.5 text-sm rounded-full transition-all duration-200 whitespace-nowrap text-slate-700 hover:text-slate-900 hover:bg-slate-100/60">Contact Us</Link></li>
            </ul>
 
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="group relative w-7 h-7 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-full bg-gradient-to-br from-cyan-500/80 to-blue-500/80 dark:from-slate-600/80 dark:to-slate-700/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center shrink-0"
                aria-label="Toggle theme"
                style={{ opacity: 1, transform: "none" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun w-3.5 h-3.5 text-white">
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </svg>
                <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></span>
              </button>
 
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden p-1 rounded-full transition-all shrink-0 text-slate-700 hover:bg-slate-100/60 dark:text-white"
              >
                {open ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x w-6 h-6">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu w-6 h-6">
                    <path d="M4 6h16"></path>
                    <path d="M4 12h16"></path>
                    <path d="M4 18h16"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
 
      {open && (
        <div className="lg:hidden fixed top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-sm rounded-3xl bg-white/70 dark:bg-slate-700/60 backdrop-blur-xl border border-slate-200/50 shadow-2xl p-6 space-y-4 z-40 animate-fadeIn">
          <Link href="/#home" onClick={() => setOpen(false)} className="block text-slate-700 dark:text-white text-lg">Home</Link>
          <a href="/#products" onClick={() => setOpen(false)} className="block text-slate-700 dark:text-white text-lg">Products</a>
          <a href="/#about" onClick={() => setOpen(false)} className="block text-slate-700 dark:text-white text-lg">About</a>
          <a href="/#gallery" onClick={() => setOpen(false)} className="block text-slate-700 dark:text-white text-lg">Gallery</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block text-slate-700 dark:text-white text-lg">Contact Us</a>
        </div>
      )}
    </>
  );
}