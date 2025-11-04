import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-b from-white to-gray-50">
        <div className="container py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight">Convert any file online — fast & free</h1>
            <p className="text-gray-600 mt-4">
              PDF ↔ Word, JPG ↔ PDF, PNG ↔ JPG, image compression, and more. Private, secure, and ad‑supported.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/tools" className="px-5 py-3 rounded-xl bg-brand text-white hover:bg-brand-dark transition">Browse all tools</Link>
              <Link href="/blog" className="px-5 py-3 rounded-xl border border-gray-300 bg-white hover:border-brand transition">Read the blog</Link>
            </div>
          </div>
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            <ToolCard title="PNG to JPG" href="/png-to-jpg" desc="Convert PNG images to JPG instantly in your browser." />
            <ToolCard title="JPG to PDF" href="/jpg-to-pdf" desc="Turn images into a single PDF file." />
            <ToolCard title="Compress Image" href="/compress-image" desc="Reduce image size without losing much quality." />
          </div>
        </div>
      </section>

      <section className="container py-12">
        <h2 className="text-2xl font-semibold mb-4">Why Any2All?</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <Value title="Private by design" desc="Files are processed in your browser whenever possible. No signup, no tracking beyond analytics." />
          <Value title="Fast & free" desc="No paywalls for essentials. We support the site with tasteful ads." />
          <Value title="SEO‑friendly & growing" desc="New tools added regularly. Follow our blog for updates and tutorials." />
        </div>
      </section>
    </div>
  );
}

function ToolCard({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <Link href={href} className="card p-6 block hover:shadow-md transition">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{desc}</p>
      <span className="inline-block mt-4 text-brand text-sm">Open →</span>
    </Link>
  );
}

function Value({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="card p-6">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{desc}</p>
    </div>
  );
}
