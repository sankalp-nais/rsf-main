"use client"
import { useEffect, useState } from "react";
import type { ProductData } from "@/app/(pages)/product-details/product";
import CompareSlider from "./CompareSlider";

export default function ProductPage({ productData }: { productData: ProductData }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = productData.images;
  const [selectedOptionId, setSelectedOptionId] = useState<number>(productData.productOptions[0].id);
  const activeProduct = productData.productsByOption[selectedOptionId];
  const [selectedVariationId, setSelectedVariationId] = useState<number | null>(
    activeProduct && activeProduct.variations && activeProduct.variations.length > 0
      ? activeProduct.variations[0].id
      : null
  );

  useEffect(() => {
    const ap = productData.productsByOption[selectedOptionId];
    if (ap && ap.variations && ap.variations.length > 0) {
      setSelectedVariationId(ap.variations[0].id);
    } else {
      setSelectedVariationId(null);
    }
  }, [selectedOptionId, productData]);



  return (
    <>
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* LEFT IMAGE PANEL */}
        <div className="relative  lg:sticky lg:top-8 lg:self-start">
          <div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border-2 border-white/30 dark:border-white/20">
              <div className="product-image-glow"></div>
              <div className="product-glass-shimmer"></div>

              <div className="relative aspect-square overflow-hidden">
                <img
                  src={productData.images[activeIndex].src}
                  alt={productData.images[activeIndex].alt}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />


                {/* PREMIUM BADGE */}
                <div className="absolute top-3 right-3 bg-yellow-400 text-slate-900 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg z-20">
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
                    className="lucide lucide-star w-4 h-4 fill-current"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                  </svg>
                  <span className="text-sm">Premium</span>
                </div>

                {/* LEFT BUTTON */}
                <button onClick={() =>
                    setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1))
                  } className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 dark:bg-slate-900/30 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/30 dark:border-white/20 shadow-2xl hover:scale-110 hover:bg-white/30 dark:hover:bg-slate-800/40 transition-all duration-300 z-10 group">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="lucide lucide-chevron-left w-6 h-6 text-white drop-shadow-lg group-hover:text-cyan-300"
                  >
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                </button>

                {/* RIGHT BUTTON */}
                <button onClick={() =>
                    setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1))
                  } className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 dark:bg-slate-900/30 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/30 dark:border-white/20 shadow-2xl hover:scale-110 hover:bg-white/30 dark:hover:bg-slate-800/40 transition-all duration-300 z-10 group">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="lucide lucide-chevron-right w-6 h-6 text-white drop-shadow-lg group-hover:text-cyan-300"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </button>
              </div>

              {/* THUMBNAILS */}
              <div className="mt-6 flex justify-center gap-2 md:gap-3 px-6 pb-6">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`relative w-16 h-16 md:w-20 md:h-24 rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 ${
                      index === activeIndex
                        ? "ring-3 ring-cyan-500 dark:ring-cyan-400 shadow-xl shadow-cyan-500/50"
                        : "ring-2 ring-white/40 dark:ring-white/20 hover:ring-cyan-300 dark:hover:ring-cyan-600 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <div className="absolute inset-0 bg-white/10 dark:bg-slate-900/20  border-2 border-white/30 dark:border-white/20 rounded-xl md:rounded-2xl"></div>

                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="flex flex-col gap-6">
          {/* PRODUCT SELECTOR */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-slate-700">
            <h3 className="text-xl mb-4 text-gray-900 dark:text-white flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="lucide lucide-chevron-down w-5 h-5 text-cyan-500"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
              Select Product
            </h3>

            <div className="space-y-3">
              {productData.productOptions.map((op) => (
                <button
                  key={op.id}
                  onClick={() => setSelectedOptionId(op.id)}
                  className={`relative w-full text-left p-4 rounded-xl transition-all duration-300 border-2 ${
                    op.id === selectedOptionId
                      ? "border-cyan-500 dark:border-cyan-400 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 shadow-md"
                      : "border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 hover:border-cyan-300 dark:hover:border-cyan-600"
                  }`}
                >
                  <div className="absolute -top-1 -left-1 md:-top-2 md:-left-2 flex items-center justify-center">
                    <div
                      className="absolute w-5 h-5 md:w-6 md:h-6 rounded-full bg-emerald-400 animate-ping"
                      style={{ transform: "scale(1.06239)" }}
                    ></div>
                    <div className="relative w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg flex items-center justify-center border-2 border-white dark:border-slate-900">
                      <span className="text-[9px] md:text-[10px] text-white font-bold">
                        {op.count}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm md:text-base text-gray-900 dark:text-white pr-2">
                      {op.title}
                    </span>

                    {op.id === selectedOptionId && (
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
                        className="lucide lucide-circle-check-big w-5 h-5 text-cyan-500 dark:text-cyan-400 flex-shrink-0"
                        aria-hidden="true"
                        >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                        </svg>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* DETAILS */}
          <div className="bg-gradient-to-br from-white to-cyan-50/50 dark:from-slate-800 dark:to-blue-900/30 rounded-2xl p-6 shadow-xl border-2 border-cyan-500/30 dark:border-cyan-400/30  mt-5 mb-5">
            <h2 className="text-2xl md:text-3xl mb-3 bg-gradient-to-r from-slate-900 via-cyan-900 to-slate-900 dark:from-white dark:via-cyan-200 dark:to-white bg-clip-text text-transparent">
              {activeProduct?.title ?? productData.title}
            </h2>

            <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
              {activeProduct?.description ?? productData.description}
            </p>

            {/* FEATURES */}
            <div className="mb-6">
              <h4 className="text-lg mb-3 text-slate-700 dark:text-slate-300">
                Key Features
              </h4>

              <ul className="space-y-2">
                {(activeProduct?.features ?? []).map((f, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                  >
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
                    className="lucide lucide-circle-check-big w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AVAILABLE OPTIONS */}
            <div className="mb-6">
              <h4 className="text-lg mb-4 text-slate-700 dark:text-slate-300">
                Available Options
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
                {(activeProduct?.variations ?? []).map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariationId(v.id)}
                    className={`relative p-4 rounded-xl text-left transition-all duration-300 border-2 ${
                      v.id === selectedVariationId
                        ? "border-cyan-500 dark:border-cyan-400 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 shadow-md"
                        : "border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 hover:border-cyan-300 dark:hover:border-cyan-600"
                    }`}
                  >
                    {v.id === selectedVariationId && (
                      <div className="absolute top-2 right-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-4 h-4 text-white" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        </div>
                      </div>
                    )}

                    <div className="pr-8">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          Length:
                        </span>
                        <span className="text-sm text-slate-900 dark:text-white">
                          {v.length}
                        </span>
                      </div>

                      {v.thickness && (
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="text-xs text-slate-500 dark:text-slate-400">
                            Thickness:
                          </span>
                          <span className="text-sm text-slate-900 dark:text-white">
                            {v.thickness}
                          </span>
                        </div>
                      )}

                       {v.thickness && (
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="text-xs text-slate-500 dark:text-slate-400">
                            test:
                          </span>
                          <span className="text-sm text-slate-900 dark:text-white">
                            {v.thickness}
                          </span>
                        </div>
                      )}

                      <div className="flex items-baseline gap-2">
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          Packaging:
                        </span>
                        <span className="text-xs text-slate-700 dark:text-slate-300">
                          {v.packaging}
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* SPECIFICATIONS */}
            <div className="mb-6">
              <h4 className="text-lg mb-4 text-slate-700 dark:text-slate-300">
                Specifications
              </h4>

              <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                <div className="divide-y divide-slate-200 dark:divide-slate-700">
                  {(activeProduct?.specifications ?? []).map((spec, idx) => (
                    <div
                      key={idx}
                      className="grid grid-cols-2 p-3 text-sm hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                    >
                      <div className="text-gray-600 dark:text-gray-400">
                        {spec.label}
                      </div>
                      <div className="text-gray-900 dark:text-gray-100">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="lucide lucide-sparkles w-5 h-5"
                >
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                  <path d="M20 2v4"></path>
                  <path d="M22 4h-4"></path>
                  <circle cx="4" cy="20" r="2"></circle>
                </svg>
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
      <CompareSlider beforeImage={productData.compare_images[0].src} afterImage={productData.compare_images[1].src} beforeLabel={productData.compare_images[0].alt} afterLabel={productData.compare_images[1].alt}/>

      </>
  );
}
