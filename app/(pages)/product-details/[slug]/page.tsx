import { products } from "@/app/(pages)/product-details/product";

export default async function Product({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // ✅ Unwrap the promise
  const productData = products[slug];

  // Lazy imports AFTER params (so file stays a server component)
  const Navbar = (await import("@/app/components/Navbar")).default;
  const Footer = (await import("@/app/components/Footer")).default;
  const ProductPage = (await import("@/app/(pages)/product-details/[slug]/ProductPage")).default;
  
  const ContactPricing = (await import("@/app/(pages)/product-details/[slug]/ContactPricing")).default;

  if (!productData) {
    return (
      <>
        <Navbar />
        <div className="pt-40 text-center text-red-500 text-xl">
          Product not found
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="pt-24 md:pt-28 pb-8 px-6 bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
           
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white mb-3">
              {productData.title}
            </h1>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Premium products – {productData.productOptions.length} options
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <ProductPage productData={productData} />
       
      </section>

      <ContactPricing />
      <Footer />
    </>
  );
}
