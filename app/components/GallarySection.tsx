"use client";
import Image from "next/image";
export default function FacilitiesSection() {
  const facilities = [
    {
      image: "assets/images/Facility1.avif",
      label: "Facility 1",
      title: "Production Line",
      desc: "Advanced automated production with precision engineering",
      rotation: "-2deg",
    },
    {
      image: "assets/images/Facility2.avif",
      label: "Facility 2",
      title: "Quality Control",
      desc: "Rigorous testing ensures premium quality standards",
      rotation: "0deg",
    },
    {
      image: "assets/images/Facility3.avif",
      label: "Facility 3",
      title: "Packaging Unit",
      desc: "Modern packaging systems for product safety",
      rotation: "0deg",
    },
    {
      image: "assets/images/Facility4.avif",
      label: "Facility 4",
      title: "Storage Facility",
      desc: "Climate-controlled storage for optimal freshness",
      rotation: "0deg",
    },
    {
      image: "assets/images/Facility5.avif",
      label: "Facility 5",
      title: "R&D Department",
      desc: "Innovation lab driving product development",
      rotation: "0deg",
    },
    {
      image: "assets/images/Facility6.avif",
      label: "Facility 6",
      title: "Logistics Center",
      desc: "Efficient distribution network across regions",
      rotation: "2deg",
    },
    {
      image: "assets/images/Facility7.avif",
      label: "Facility 7",
      title: "Manufacturing Floor",
      desc: "State-of-the-art manufacturing capabilities",
      rotation: "-2deg",
    },
  ];

  const stats = [
    { value: "25+", label: "Years Experience" },
    { value: "500+", label: "Products Daily" },
    { value: "ISO", label: "Certified" },
    { value: "100%", label: "Quality Assured" },
  ];

  return (
    <section id="gallery" className="relative px-0 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/40 dark:from-slate-950 dark:via-blue-950/30 dark:to-Indigo-800" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(6, 123, 212, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59,130,246,0.15) 0%, transparent 50%)",
          backgroundSize: "200% 200%",
          backgroundPosition: "90.7938% 90.7938%",
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12 px-6">
          <div className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-800 mb-6">
            <svg
              className="w-4 h-4 text-cyan-600 dark:text-cyan-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M12 16h.01" />
              <path d="M16 16h.01" />
              <path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422L15.77 10.922A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" />
              <path d="M8 16h.01" />
            </svg>
            <span className="text-cyan-700 dark:text-cyan-300">Our Facilities</span>
          </div>

          <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-slate-900 via-cyan-900 to-slate-900 dark:from-white dark:via-cyan-200 dark:to-white bg-clip-text text-transparent">
            Where Quality Happens
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            State-of-the-art manufacturing with sustainability at its core
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="flex gap-4 md:gap-6 overflow-x-auto px-6 md:px-12 py-8 scrollbar-hide snap-x snap-mandatory scroll-smooth">
            {facilities.map((item, index) => (
              <div key={index} className="flex-shrink-0 snap-center group">
                <div
                  className="relative w-[280px] h-[380px] md:w-[320px] md:h-[440px] rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing"
                  style={{ transform: `rotate(${item.rotation})` }}
                >
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    draggable="false"
                  />
                 
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* ISO Certified Badge */}
                  <div
                    className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-xl border border-white/30 flex items-center gap-1.5"
                    style={{ opacity: 0, transform: "translateY(-20px)" }}
                  >
                    <svg
                      className="w-3 h-3 text-cyan-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.017 2.814a1 1 0 011.966 0l1.051 5.558a2 2 0 001.594 1.594l5.558 1.051a1 1 0 010 1.966l-5.558 1.051a2 2 0 00-1.594 1.594l-1.051 5.558a1 1 0 01-1.966 0l-1.051-5.558a2 2 0 00-1.594-1.594L3.548 12.98a1 1 0 010-1.966l5.558-1.051a2 2 0 001.594-1.594z" />
                      <path d="M20 2v4" />
                      <path d="M22 4h-4" />
                      <circle cx="4" cy="20" r="2" />
                    </svg>
                    <span className="text-xs text-white">ISO Certified</span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div style={{ opacity: 0, transform: "translateY(20px)" }}>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 16h.01" />
                            <path d="M16 16h.01" />
                            <path d="M3 19a2 2 0 002 2h14a2 2 0 002-2V8.5a.5.5 0 00-.769-.422L15.77 10.922A.5.5 0 0115 10.5v-2a.5.5 0 00-.769-.422L9.77 10.922A.5.5 0 019 10.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2z" />
                            <path d="M8 16h.01" />
                          </svg>
                        </div>
                        <span className="text-sm text-cyan-300">{item.label}</span>
                      </div>

                      <h3 className="text-xl text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Mobile sheen effect */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000"
                    style={{ transform: "skewX(-20deg)" }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Scroll indicator 
          <div className="flex justify-center mt-6 md:mt-8 px-6">
            <div className="flex items-center gap-3 md:gap-4 px-4 md:px-6 py-2.5 md:py-3 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-lg">
              <span className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
                Scroll to explore
              </span>
              <div className="w-24 md:w-32 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                  style={{ width: "0%" }}
                />
              </div>
            </div>
          </div>*/}
        </div>

        {/* Stats Section 
        <div className="mt-16 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((item, i) => (
              <div
                key={i}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl p-6 border-2 border-gray-200 dark:border-slate-700 text-center"
              >
                <div className="text-3xl md:text-4xl bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent mb-2">
                  {item.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>*/}
      </div>
      <div className="relative w-screen h-screen mt-1 ">
        <Image
          src="/assets/images/Sustainable future - V2(1).jpg"
          alt="fullscreen"  
          fill
          className="object-cover hidden lg:block"
          priority
        />
        <Image
          src="/assets/images/Sustainable - Mobile Video(1).jpg"
          alt="fullscreen"  
          fill
          className="object-cover lg:hidden"
          priority
        />

        <div className="absolute inset-0 bg-black/20" />

        {/*<div className="absolute inset-0 flex items-center justify-center md:items-start md:justify-start px-6 md:px-16 md:pt-24">
          <div className="max-w-3xl text-center md:text-left text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              CUSTOMIZE YOUR PACKAGING
            </h1>

            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Create custom packaging with AluFresh.
              <br />
              Fill out the form to get instant quotes, fast delivery,<br /> and flexible
              payment options.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 px-3 py-1.5 bg-gradient-to-r from-orange-500 via-orange-600 to-cyan-600 hover:from-orange-600 hover:via-orange-700 hover:to-cyan-700 text-white shadow-md hover:shadow-orange-500/40 transition-all duration-300 text-sm group"
            >
              Get Started
            </a>
          </div>
        </div>*/}
      </div>


    <div className="py-10 bg-slate-900">
      <div className="max-w-7xl mx-auto px-3">


        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Serving a diverse range of Industries
        </h2>


        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center">


          <a href="#" className="flex flex-col items-center gap-2 group">
            <img src="assets/images/cat01.png" className="w-16 h-16 object-contain" alt="Food Service" />
            <span className="text-sm font-medium">Food Service</span>
          </a>

          <a href="#" className="flex flex-col items-center gap-2 group">
            <img src="assets/images/cate08.png" className="w-16 h-16 object-contain" alt="Cafe/Catering" />
            <span className="text-sm font-medium">Cafe/Catering</span>
          </a>

          <a href="#" className="flex flex-col items-center gap-2 group">
            <img src="assets/images/cat11.png" className="w-16 h-16 object-contain" alt="Retail" />
            <span className="text-sm font-medium">Retail</span>
          </a>

          <a href="#" className="flex flex-col items-center gap-2 group">
            <img src="assets/images/cat12.png" className="w-16 h-16 object-contain" alt="Hotels" />
            <span className="text-sm font-medium">Hotels</span>
          </a>

          <a href="#" className="flex flex-col items-center gap-2 group">
            <img src="assets/images/cat13.png" className="w-16 h-16 object-contain" alt="Govt. Sectors" />
            <span className="text-sm font-medium">Govt. Sectors</span>
          </a>

          <a href="#" className="flex flex-col items-center gap-2 group">
            <img src="assets/images/cat03.png" className="w-16 h-16 object-contain" alt="Bakeries" />
            <span className="text-sm font-medium">Bakeries</span>
          </a>

          <a href="#" className="flex flex-col items-center gap-2 group">
            <img src="assets/images/cate02.png" className="w-16 h-16 object-contain" alt="Healthcare" />
            <span className="text-sm font-medium">Healthcare</span>
          </a>

          <a href="#" className="flex flex-col items-center gap-2 group">
            <img src="assets/images/cat06.png" className="w-16 h-16 object-contain" alt="Travel" />
            <span className="text-sm font-medium">Travel</span>
          </a>

          <a href="#" className="flex flex-col items-center gap-2 group">
            <img src="assets/images/cat04.png" className="w-16 h-16 object-contain" alt="Industrial" />
            <span className="text-sm font-medium">Industrial</span>
          </a>

          <a href="#" className="flex flex-col items-center gap-2 group">
            <img src="assets/images/cate09.png" className="w-16 h-16 object-contain" alt="Ship Chandlers/Cargo" />
            <span className="text-sm font-medium">Ship Chandlers/Cargo</span>
          </a>

          <a href="#" className="flex flex-col items-center gap-2 group">
            <img src="assets/images/cat10.png" className="w-16 h-16 object-contain" alt="Cloud Kitchens" />
            <span className="text-sm font-medium">Cloud Kitchens</span>
          </a>

          <a href="#" className="flex flex-col items-center gap-2 group">
            <img src="assets/images/cate14.png" className="w-16 h-16 object-contain" alt="E-Commerce" />
            <span className="text-sm font-medium">E-Commerce</span>
          </a>


          {/*<div className="flex flex-col items-center justify-center gap-1">
            <div className="flex items-center gap-1 text-3xl font-bold">
              <span id="industry-counter">13</span>
              <span>+</span>
            </div>
            <span className="text-sm font-medium">Industries</span>
          </div>*/}

        </div>
      </div>
    </div>


              {/*Customize your Packaging*/}
           <div className="relative w-screen h-screen mt-">
        <Image
          src="/assets/images/Customize Packaging.jpg"
          alt="fullscreen"  
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-center md:items-start md:justify-start px-6 md:px-16 md:pt-24">
          <div className="max-w-3xl text-center md:text-left text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              CUSTOMIZE YOUR PACKAGING
            </h1>

            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Create custom packaging with AluFresh.
              <br />
              Fill out the form to get instant quotes, fast delivery,<br /> and flexible
              payment options.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 mb-8"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    
      {/* Hide scrollbar CSS */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
