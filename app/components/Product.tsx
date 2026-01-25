"use client";
import { useState, useMemo } from "react";
import {products}  from '@/app/data/products';

export default function Product() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...products.map((p) => p.name)];
  // SEARCH FILTER (works for both slider + grid)
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchCategory =
        selectedCategory === "All" || p.name === selectedCategory;
      return matchSearch && matchCategory;
    });
  }, [search, selectedCategory]);

  return (
    <>
      {/* ========================= PRODUCT CATEGORY SLIDER ========================= */}
      {/*<section
        id="product"
        className="py-12 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-800 dark:via-blue-950 dark:to-sky-600 overflow-hidden transition-colors duration-300 "
      >
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl mb-3 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-cyan-200 dark:to-white bg-clip-text text-transparent">
              Product Categories
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Explore our diverse range of quality products
            </p>
          </div>
        </div>

        {/* HORIZONTAL SCROLLER 
        <div className="relative">
          <div
            className="flex gap-4 overflow-x-auto px-6 scrollbar-hide snap-x"
            style={{
              touchAction: "pan-x pan-y",
              scrollSnapType: "x mandatory",
              scrollBehavior: "auto",
            }}
          >
            {filteredProducts.map((cat, index) => (
              <div
                key={index}
                className="category-item flex-shrink-0 w-32 sm:w-40 snap-start"
                style={{ opacity: 1, transform: "none" }}
              >
                <a key={index} href={`/product-details/${cat.slug}`}>
                <div className="group cursor-pointer select-none">
                  <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-slate-800">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        alt={cat.name}
                        src={cat.img}
                        draggable="false"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 pointer-events-none"
                      />
                    </div>
                  </div>

                  <div className="mt-2 px-1">
                    <h3 className="text-gray-900 dark:text-white text-xs sm:text-sm text-left group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                      {cat.name}
                    </h3>
                  </div>
                </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* ========================= PREMIUM PRODUCTS SECTION ========================= */}
      <section
        className="py-20 px-6 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-sky-800"
        id="products"
      >
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div
            className="text-center mb-12"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-800 mb-6">
              <svg
                aria-hidden="true"
                className="lucide lucide-package2 lucide-package-2 w-4 h-4 text-cyan-600 dark:text-cyan-400"
                fill="none"
                height="24"
                width="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 3v6" />
                <path d="M16.76 3a2 2 0 0 1 1.8 1.1l2.23 4.479a2 2 0 0 1 .21.891V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.472a2 2 0 0 1 .211-.894L5.45 4.1A2 2 0 0 1 7.24 3z" />
                <path d="M3.054 9.013h17.893" />
              </svg>

              <span className="text-cyan-700 dark:text-cyan-300">
                Our Product Range
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-cyan-200 dark:to-white bg-clip-text text-transparent">
              Premium Products
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Discover our comprehensive range of high-quality aluminum foil and
              packaging solutions
            </p>

            {/* FIXED BUTTON */}
            <a
              href="/all-categories"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 mb-8"
              tabIndex={0}
              style={{ transform: "none" }}
            >
              View All 9 Categories
              <svg
                aria-hidden="true"
                className="lucide lucide-grid3x3 lucide-grid-3x3 w-5 h-5"
                fill="none"
                height="24"
                width="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
                <path d="M3 15h18" />
                <path d="M9 3v18" />
                <path d="M15 3v18" />
              </svg>
            </a>

            {/* SEARCH + DROPDOWN */}
            <div
              className="max-w-4xl mx-auto"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="relative glass-container floating-controls p-4 sm:p-6">
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                  <div className="circulating-glow"></div>
                </div>

                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-50"></div>

                <div className="relative flex flex-col sm:flex-row gap-4">
                  {/* Search box */}
                  <div className="relative flex-1 group">
                    <input
                      className="w-full pl-14 pr-4 py-4 rounded-2xl border-2 border-white/20 dark:border-white/10 focus:border-cyan-400/50 dark:focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/20 outline-none transition-all bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl text-black dark:text-white dark:placeholder-gray-400 shadow-lg hover:shadow-xl hover:bg-white/90 dark:hover:bg-slate-800/90"
                      placeholder="Search categories..."
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>

                  {/* Dropdown */}
                  <div className="sm:w-72">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="flex items-center justify-between gap-2 px-3 py-2 text-sm w-full h-[56px] rounded-2xl border-2 border-white/20 dark:border-white/10 focus:ring-4 focus:ring-cyan-500/20 shadow-lg hover:shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl text-black dark:text-white hover:bg-white/90 dark:hover:bg-slate-800/90 transition-all duration-300 appearance-none"
                      style={{ outline: "none" }}
                    >
                      <option value="All">All Categories ({products.length})</option>

                      {products.map((p) => (
                        <option key={p.name} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </select>

                    {/* Dropdown Arrow Overlay (keeps your existing arrow icons visually) */}
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 flex items-center">
                      <svg
                        aria-hidden="true"
                        className="lucide lucide-chevron-down w-5 h-5 text-cyan-500 dark:text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===================== PRODUCT GRID (LINKED TO SEARCH) ===================== */}

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
            style={{ opacity: 1 }}
          >
            {filteredProducts.map((item, idx) => (
              <div key={idx} style={{ opacity: 1, transform: "none" }}>
                <a key={idx} href={`/product-details/${item.slug}`}>
                <div
                  className="group cursor-pointer"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div className="relative">
                    <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-700 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                      <div className="aspect-[3/4] overflow-hidden">
                        <img
                          alt={item.name}
                          src={item.img}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                    </div>
                  </div>

                  <div className="mt-3 px-2">
                    <p className="text-sm md:text-base text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300 text-left line-clamp-2">
                      {item.name}
                    </p>
                  </div>
                </div>
                </a>
              </div>
              
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
