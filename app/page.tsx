"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import CTA from "./components/Home";
import Product from "./components/Product";
import About from "./components/About";
import GallerySection from "./components/GallarySection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Page() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
    <Navbar />
    <CTA />
    <Product />
    <About />
    <GallerySection />
    <Contact />
    <Footer />
    </>
  );
}
