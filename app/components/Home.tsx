"use client";

import Image from "next/image";

export default function CTA() {
  return (
    <>
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900"
      id="home"
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
  <video
    src="/assets/videos/Alu freshh AD - Final Clean.mp4"
    autoPlay
    muted
    loop
    playsInline
    className="
      absolute inset-0
       w-full h-full
      object-cover
      object-center
      pointer-events-none
    "
  />

  <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-900/70 pointer-events-none" />
</div>


      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl"
          style={{ transform: "scale(1.07298)" }}
        ></div>

        <div
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl"
          style={{ transform: "scale(1.12702)" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/*<div
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 mb-6 sm:mb-8"
          style={{ opacity: 1, transform: "none" }}
        >
          <svg
            aria-hidden="true"
            className="lucide lucide-sparkles w-3 h-3 sm:w-4 sm:h-4 text-cyan-400"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
            <path d="M20 2v4"></path>
            <path d="M22 4h-4"></path>
            <circle cx="4" cy="20" r="2"></circle>
          </svg>

          {/*<span className="text-xs sm:text-sm text-cyan-300">
            Premium Quality Packaging Solutions
          </span>
        </div>*/}

        <div
          className="mb-4 sm:mb-6 flex justify-center"
          style={{ opacity: 1, transform: "none" }}
        >
          {/*<img
            alt="Alu-Freshh"
            className="animated-gradient-text w-[280px] sm:w-[400px] md:w-[550px] lg:w-[700px] h-auto drop-shadow-2xl"
            src="assets/images/Alu-fresh.avif"
            style={{
              filter:
                "drop-shadow(rgba(34, 211, 238, 0.4) 0px 0px 40px)",
            }}
          />*/}
        </div>

        {/*<p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto drop-shadow-lg px-4"
          style={{ opacity: 1, transform: "none" }}
        >
          Delivering premium aluminum foil and packaging solutions that preserve freshness and ensure quality.
        </p>*/}
      </div>
    </section>
    <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-5xl z-20 pointer-events-none" style={{ opacity: 1, transform: "none" }}>
     <div className="relative pointer-events-auto">
      <div className="relative overflow-hidden rounded-2xl md:rounded-2xl p-3 md:p-4 bg-white/10 dark:bg-black/20 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-2xl">
       <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-transparent opacity-50">
       </div>
       <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-300/50 to-transparent rounded-full blur-3xl" style={{ transform: "scale(1.14154)" }}>
        </div>
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-gradient-to-tr from-blue-300/50 to-transparent rounded-full blur-3xl" style={{ transform: "scale(1.29991)" }}>
        </div>
       </div>
       <div className="relative z-10 flex flex-row items-center justify-center md:justify-between gap-2 md:gap-4">
        <div className="flex md:hidden items-center gap-3 flex-1">
         <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500/20 backdrop-blur-sm">
          <svg aria-hidden="true" className="lucide lucide-phone w-5 h-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
           <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
           </path>
          </svg>
         </div>
         <p className="text-sm text-white/95 drop-shadow-lg" style={{ opacity: 1, transform: "none" }}>
          Know More Products
         </p>
        </div>
        <div className="hidden md:flex items-center gap-3" style={{ opacity: 1, transform: "none" }}>
         <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500/20 backdrop-blur-sm">
          <svg aria-hidden="true" className="lucide lucide-phone w-5 h-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
           <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
           </path>
          </svg>
         </div>
         <span className="text-lg text-white/95 drop-shadow-lg whitespace-nowrap">
          To Know About More Products
         </span>
        </div>
        <div className="shrink-0" style={{ opacity: 1, transform: "none" }}>
         <button className="group relative inline-flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 md:py-3 bg-white dark:bg-white text-blue-600 rounded-full shadow-2xl hover:shadow-cyan-500/50 dark:hover:shadow-cyan-400/50 transition-all duration-300 overflow-hidden min-w-[100px] md:min-w-0" tabIndex={0}>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-blue-50" style={{ transform: "translateX(-100%)" }}>
          </div>
          <svg aria-hidden="true" className="lucide lucide-phone w-4 h-4 md:hidden relative z-10" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
           <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
           </path>
          </svg>
          <span className="relative z-10 text-sm md:text-base">
           <span className="md:hidden">
            Call
           </span>
           <span className="hidden md:inline">
            Book a Call
           </span>
          </span>
          <span className="hidden md:inline relative z-10 text-lg" style={{ transform: "translateX(2.88861px)" }}>
           →
          </span>
          <div className="absolute inset-0 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300">
          </div>
         </button>
        </div>
       </div>
       <div className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden pointer-events-none">
        <div className="absolute -inset-[100%] opacity-30" style={{ background: "conic-gradient(transparent, rgba(34, 211, 238, 0.3), transparent 60deg)", transform: "rotate(89.316deg)" }}>
        </div>
       </div>
      </div>
     </div>
    </div>
    </>
  );
}
