import Link from "next/link";

const tools = [
  { href: "/png-to-jpg", title: "PNG to JPG", desc: "Convert PNG images to JPG instantly." },
  { href: "/jpg-to-pdf", title: "JPG to PDF", desc: "Merge images into a single PDF." },
  { href: "/compress-image", title: "Compress Image", desc: "Shrink image size while keeping decent quality." },
  // Placeholders for future routes:
  { href: "/word-to-pdf", title: "Word to PDF", desc: "Coming soon." },
  { href: "/pdf-to-word", title: "PDF to Word", desc: "Coming soon." },
  { href: "/merge-pdf", title: "Merge PDF", desc: "Coming soon." },
  { href: "/split-pdf", title: "Split PDF", desc: "Coming soon." },
  { href: "/image-to-text", title: "Image to Text (OCR)", desc: "Coming soon." },
  { href: "/video-compressor", title: "Video Compressor", desc: "Coming soon." },
];

export default function Tools() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold">All tools</h1>
      <p className="text-gray-600 mt-2">We’re adding new tools regularly. Tell us what to build next on the Contact page.</p>
      <div className="grid sm:grid-cols-3 gap-6 mt-8">
        {tools.map((t) => (
          <Link key={t.href} href={t.href} className="card p-6 block hover:shadow-md transition">
            <h3 className="font-semibold">{t.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{t.desc}</p>
            <span className="inline-block mt-4 text-brand text-sm">Open →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
