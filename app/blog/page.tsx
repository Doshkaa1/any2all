import Link from "next/link";

const posts = [
  { slug: "convert-pdf-to-word-guide", title: "How to convert PDF to Word (free & fast)", excerpt: "A quick guide to turn your PDF into editable DOCX without losing formatting." },
  { slug: "reduce-image-size", title: "3 simple ways to reduce image size online", excerpt: "Balance quality and size using browser‑based compression." },
];

export default function Blog() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold">Blog</h1>
      <p className="text-gray-600 mt-2">Guides and tutorials to help you get more done with your files.</p>
      <div className="grid gap-6 mt-8">
        {posts.map(p => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="card p-6 block hover:shadow-md transition">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{p.excerpt}</p>
            <span className="inline-block mt-4 text-brand text-sm">Read →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
