"use client";

import { useState } from "react";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import {products} from "@/app/data/products";
export default function CTA() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const uniqueCategories = ["All", ...products.map((c) => c.name)];

  const filtered = products.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      selectedCategory === "All" || c.name === selectedCategory;
    return matchSearch && matchCategory;
  });

  return (
    <>
      <Navbar />

      {/* ================= HEADER SECTION ================= */}
      <section className="pt-24 md:pt-28 pb-6 px-6 bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="lucide lucide-grid3x3 w-4 h-4 text-cyan-400"
              >
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M3 9h18"></path>
                <path d="M3 15h18"></path>
                <path d="M9 3v18"></path>
                <path d="M15 3v18"></path>
              </svg>
              <span className="text-cyan-400">Complete Collection</span>
            </div>

            <h1 className="text-3xl md:text-4xl text-white mb-3">
              All Categories
            </h1>
            <p className="text-lg text-gray-300 max-w-xl mx-auto mb-6">
              9 product categories
            </p>

            {/* Search + Dropdown */}
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Search */}
                <div className="relative flex-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="lucide lucide-search absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                  >
                    <path d="m21 21-4.34-4.34"></path>
                    <circle cx="11" cy="11" r="8"></circle>
                  </svg>

                  <input
                    type="text"
                    placeholder="Search categories..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                  />
                </div>

                {/* Dropdown */}
                <div className="sm:w-56 relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="flex items-center justify-between gap-2 border px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none bg-white/10 backdrop-blur-sm border-white/20 text-white focus:ring-2 focus:ring-cyan-400 w-full h-12 rounded-full appearance-none"
                  >
                    {uniqueCategories.map((cat) => (
                      <option key={cat} value={cat} className="text-black">
                        {cat}
                      </option>
                    ))}
                  </select>

                  {/* Chevron */}
                  <div className="pointer-events-none absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-10 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="lucide lucide-chevron-down w-4 h-4 text-cyan-400"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES STRIP ================= */}
      <section className="py-4 md:py-6 px-4 md:px-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-y border-gray-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 md:gap-8">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <img src="assets/icons/feature-premium.svg" alt="" />
              </div>
              <span className="text-xs md:text-base text-gray-900 dark:text-white">
                Premium Durability
              </span>
            </div>

            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                <img src="assets/icons/feature-foodsafe.svg" alt="" />
              </div>
              <span className="text-xs md:text-base text-gray-900 dark:text-white">
                Food-Safe Certified
              </span>
            </div>

            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <img src="assets/icons/feature-recyclable.svg" alt="" />
              </div>
              <span className="text-xs md:text-base text-gray-900 dark:text-white">
                100% Recyclable
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORY GRID ================= */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              Showing {filtered.length} categories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filtered.map((cat) => (
              <div key={cat.id}>
                <a key={cat.id} href={`/product-details/${cat.slug}`}>
                <div className="group cursor-pointer">
                  <div className="relative">
                    {/* Number Badge */}
                    <div className="absolute -top-2 -left-2 z-20 flex items-center justify-center">
                      <div className="animate-ping absolute w-7 h-7 rounded-full bg-emerald-400"></div>
                      <div className=" relative w-7 h-7 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-xl flex items-center justify-center border-2 border-white dark:border-emerald-600">
                        <span className="text-[11px] text-white font-bold">
                          {cat.id}
                        </span>
                      </div>
                    </div>

                    {/* Card */}
                    <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-700 shadow-lg hover:shadow-2xl transition-shadow">
                      <div className="aspect-[3/4] overflow-hidden">
                        <img
                          src={cat.img}
                          alt={cat.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                        />
                      </div>
                      <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-opacity"></div>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="mt-3 px-2">
                    <p className="text-sm md:text-base text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {cat.name}
                    </p>
                  </div>
                </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
