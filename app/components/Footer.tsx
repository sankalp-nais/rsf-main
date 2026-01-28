"use client";
import Image from "next/image";
export default function Footer() {
  return (
    <>
      <footer className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl"
          style={{ transform: "scale(1.02388)" }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-white/10">
            
            {/* BRAND */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <a href="#home" className="flex items-center shrink-0 group cursor-pointer">
                  <Image
                    src="/assets/icons/nav-logo-white.png"
                    alt="ALU FRESHH"
                    className="h-7 sm:h-8 md:h-9 lg:h-10 w-auto transition-all duration-300 group-hover:scale-110 brightness-0 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                    style={{ transform: "none" }}
                    width={40}
                    height={40}
                  />
                </a>
              </div>
              

              <p className="text-gray-300 leading-relaxed mb-6">
                Three generations of packaging excellence, delivering premium aluminum foil and packaging solutions worldwide.
              </p>

              <div className="flex gap-3">
                <a
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-cyan-500 backdrop-blur-sm flex items-center justify-center transition-all duration-300"
                  href="mailto:info@alu-freshh.com"
                  tabIndex={0}
                >
                  <svg
                    aria-hidden="true"
                    className="lucide lucide-mail w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    <rect height="16" rx="2" width="20" x="2" y="4"></rect>
                  </svg>
                </a>

                <a
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-cyan-500 backdrop-blur-sm flex items-center justify-center transition-all duration-300"
                  href="tel:+912651234567"
                  tabIndex={0}
                >
                  <svg
                    aria-hidden="true"
                    className="lucide lucide-phone w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* CERTIFICATIONS */}
            <div>
              <h4 className="text-lg mb-4 flex items-center gap-2">
                <svg
                  aria-hidden="true"
                  className="lucide lucide-shield w-5 h-5 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
                Certified & Trusted
              </h4>

              <div className="space-y-3">

                {/* ISO */}
                <div
                  className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <svg
                      aria-hidden="true"
                      className="lucide lucide-award w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                      <circle cx="12" cy="8" r="6"></circle>
                    </svg>
                  </div>
                  <span className="text-gray-200">ISO 9001:2015</span>
                </div>

                {/* Food Safe */}
                <div
                  className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1  flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <svg
                      aria-hidden="true"
                      className="lucide lucide-shield w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    </svg>
                  </div>
                  <span className="text-gray-200">Food Safe</span>
                </div>

                {/* Eco */}
                <div
                  className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <svg
                      aria-hidden="true"
                      className="lucide lucide-leaf w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                    </svg>
                  </div>
                  <span className="text-gray-200">Eco Certified</span>
                </div>
              </div>

              {/* Countries */}
              <div
                className="mt-6 p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-2 border-slate-900"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 border-2 border-slate-900"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 border-2 border-slate-900"></div>
                  </div>
                  <span className="text-cyan-400">12+</span>
                </div>

                <p className="text-sm text-gray-300">Countries trust our products</p>
              </div>
            </div>

            {/* PLANT */}
            <div>
              <h4 className="text-lg mb-4 flex items-center gap-2">
                <svg
                  aria-hidden="true"
                  className="lucide lucide-map-pin w-5 h-5 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Headquater Address
              </h4>

              <div className="space-y-4">
                
                {/* Main Plant card */}
                <div
                  className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 relative p-4 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300 overflow-hidden"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full">
                      Main Plant
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center flex-shrink-0">
                      <svg
                        aria-hidden="true"
                        className="lucide lucide-map-pin w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>

                    <div>
                      <div className="text-white mb-1">Vadodara</div>
                      <div className="text-sm text-gray-300">Gujarat, India</div>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Survey No. 274/1,
                    <br />
                    Samlaya - Savli Road,
                    <br />
                    Tal. - Savli, Dist. - Vadodara
                    <br />
                    Gujarat, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER BOTTOM */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <span>© 2026 Alu-Freshh</span>
              <span className="text-gray-600">•</span>
              <span>All rights reserved</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span>Committed to sustainable packaging</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
