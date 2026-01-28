"use client";

export default function Contact() {
  return (
    <>
    <section className="relative py-15 px-6 overflow-hidden" id="contact">
    <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-cyan-50 dark:from-slate-900 dark:via-sky-600 dark:to-slate-900"></div>

    <div
        className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-orange-400/10 to-cyan-400/10 rounded-full blur-3xl"
        style={{ transform: "scale(1.07753) rotate(34.8871deg)" }}
    ></div>

    <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12" style={{ opacity: 1, transform: "none" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-50 to-cyan-50 dark:from-orange-900/20 dark:to-cyan-900/20 border border-orange-200 dark:border-orange-800 mb-6">
                <svg
                    aria-hidden="true"
                    className="lucide lucide-users w-4 h-4 text-orange-600 dark:text-orange-400"
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                </svg>
                <span className="text-orange-700 dark:text-orange-300">Let's Talk</span>
            </div>

            <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-slate-900 via-orange-900 to-cyan-900 dark:from-white dark:via-orange-200 dark:to-cyan-200 bg-clip-text text-transparent">
                We're Real People, Ready to Help
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Got questions? Need samples? Our team replies within 24 hours no bots, no automated responses. Just real
                humans who care about your business.
            </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">

            {/* LEFT SIDE CONTACT CARDS */}
            <div className="lg:col-span-2 space-y-4">
                
                {/* Visit Plant */}
                {/*<div className="group relative" style={{ opacity: 1, transform: "none" }}>
                    <div className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl p-6 border-2 border-gray-200 dark:border-slate-700 hover:border-orange-400 dark:hover:border-orange-500 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-5" style={{ opacity: 0 }}></div>

                        <div className="relative flex items-start gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                                <svg
                                    aria-hidden="true"
                                    className="lucide lucide-map-pin w-7 h-7 text-white"
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
                                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>

                            <div className="flex-1">
                                <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Visit Our Plant</h4>
                                <p className="text-lg text-gray-900 dark:text-white mb-1">Vadodara, Gujarat, India</p>
                                <p className="text-sm text-gray-600 dark:text-gray-300">Open for business visits</p>
                            </div>
                        </div>
                    </div>
                </div>*/}

                {/* Call */}
                <div className="group relative" style={{ opacity: 1, transform: "none" }}>
                    <div className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1  relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl p-6 border-2 border-gray-200 dark:border-slate-700 hover:border-orange-400 dark:hover:border-orange-500 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-5" style={{ opacity: 0 }}></div>

                        <div className="relative flex items-start gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                                <svg
                                    aria-hidden="true"
                                    className="lucide lucide-phone w-7 h-7 text-white"
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
                                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                                </svg>
                            </div>

                            <div className="flex-1">
                                <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Call Anytime</h4>
                                <p className="text-lg text-gray-900 dark:text-white mb-1">+91 (265) 123-4567</p>
                                <p className="text-sm text-gray-600 dark:text-gray-300">Mon-Sat, 9 AM - 6 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Email */}
                <div className="group relative" style={{ opacity: 1, transform: "none" }}>
                    <div className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl p-6 border-2 border-gray-200 dark:border-slate-700 hover:border-orange-400 dark:hover:border-orange-500 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-5" style={{ opacity: 0 }}></div>

                        <div className="relative flex items-start gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                                <svg
                                    aria-hidden="true"
                                    className="lucide lucide-mail w-7 h-7 text-white"
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
                                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                    <rect height="16" rx="2" width="20" x="2" y="4"></rect>
                                </svg>
                            </div>

                            <div className="flex-1">
                                <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Email Us</h4>
                                <p className="text-lg text-gray-900 dark:text-white mb-1">sales@rsfhytek.com</p>
                                <p className="text-sm text-gray-600 dark:text-gray-300">We reply within 24 hours</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Response */}
                <div
                    className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 relative bg-gradient-to-br from-orange-500 to-cyan-600 rounded-2xl p-6 overflow-hidden shadow-xl"
                    style={{ opacity: 1, transform: "none" }}
                >
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                    <div className="relative flex items-start gap-4">
                        <div
                            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
                            style={{ transform: "scale(1.09973)" }}
                        >
                            <svg
                                aria-hidden="true"
                                className="lucide lucide-zap w-6 h-6 text-white"
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
                                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                            </svg>
                        </div>

                        <div className="text-white">
                            <h4 className="text-lg mb-1">Quick Response Guarantee</h4>
                            <p className="text-white/90 text-sm leading-relaxed">
                                Our team responds to all inquiries within 24 hours, including weekends.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE: FORM */}
            <div className="lg:col-span-3" style={{ opacity: 1, transform: "none" }}>
                <div className="relative group">
                    <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl p-8 border-2 border-gray-200 dark:border-slate-700 shadow-xl overflow-hidden">

                        <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                            <div
                                className="absolute -inset-[100%] opacity-30"
                                style={{
                                    background: "conic-gradient(transparent, rgba(251, 146, 60, 0.3), transparent 60deg)",
                                    transform: "rotate(89.316deg)"
                                }}
                            ></div>
                        </div>

                        <form className="relative space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm text-gray-700 dark:text-gray-200">
                                        Your Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        placeholder="John Doe"
                                        className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex w-full min-w-0 rounded-md px-3 py-1 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-white dark:bg-slate-700 border-2 border-gray-300 dark:border-slate-600 focus:border-orange-400 dark:focus:border-orange-500 focus:ring-orange-400/20 dark:focus:ring-orange-500/20 transition-all duration-300 h-12 text-black dark:text-white"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm text-gray-700 dark:text-gray-200">
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        placeholder="john@company.com"
                                        className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex w-full min-w-0 rounded-md px-3 py-1 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-white dark:bg-slate-700 border-2 border-gray-300 dark:border-slate-600 focus:border-orange-400 dark:focus:border-orange-500 focus:ring-orange-400/20 dark:focus:ring-orange-500/20 transition-all duration-300 h-12 text-black dark:text-white"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm text-gray-700 dark:text-gray-200">
                                    How Can We Help?
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    required
                                    placeholder="Tell us about your requirements, and we'll get back to you with the best solution..."
                                    className="placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex field-sizing-content min-h-16 w-full rounded-md px-3 py-2 text-base outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-white dark:bg-slate-700 border-2 border-gray-300 dark:border-slate-600 focus:border-orange-400 dark:focus:border-orange-500 focus:ring-orange-400/20 dark:focus:ring-orange-500/20 resize-none transition-all duration-300 text-black dark:text-white"
                                ></textarea>
                            </div>

                            <div style={{ transform: "none" }} tabIndex={0}>
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 px-4 py-2 has-[>svg]:px-3 w-full h-14 bg-gradient-to-r from-orange-500 via-orange-600 to-cyan-600 hover:from-orange-600 hover:via-orange-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl hover:shadow-orange-500/50 transition-all duration-300 text-lg group"
                                >
                                    <span className="flex items-center justify-center gap-3">
                                        <svg
                                            aria-hidden="true"
                                            className="lucide lucide-message-square w-5 h-5"
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
                                            <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>

                                        Send Message

                                        <span style={{ transform: "translateX(2.88861px)" }}>
                                            <svg
                                                aria-hidden="true"
                                                className="lucide lucide-send w-5 h-5"
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
                                                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                                                <path d="m21.854 2.147-10.94 10.939"></path>
                                            </svg>
                                        </span>
                                    </span>
                                </button>
                            </div>

                            <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300 text-sm">
                                <svg
                                    aria-hidden="true"
                                    className="lucide lucide-clock w-4 h-4 text-orange-500"
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
                                    <path d="M12 6v6l4 2"></path>
                                    <circle cx="12" cy="12" r="10"></circle>
                                </svg>
                                <span>Typical response time: Within 24 hours</span>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    </div>
</section>

    </>
    );
}