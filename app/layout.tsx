import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://any2all.net"),
  title: {
    default: "Any2All — Convert any file online, fast & free",
    template: "%s | Any2All",
  },
  description:
    "Any2All lets you convert files online for free — PDF↔Word, JPG↔PDF, PNG↔JPG, image compression, and more. Fast, private, and no sign up required.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google AdSense Verification */}
        <meta
          name="google-adsense-account"
          content="ca-pub-7635659670642521"
        />

        {/* ✅ Google Analytics (replace YOUR_TAG_ID with your real ID, e.g. G-27P9594EQQ) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-27P9594EQQ"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-27P9594EQQ');
            `,
          }}
        />
      </head>

      <body className="min-h-screen antialiased flex flex-col">
        <header className="border-b bg-white/70 backdrop-blur sticky top-0 z-50">
          <div className="container py-3 flex items-center justify-between">
            <a
              href="/"
              className="flex items-center gap-2 font-semibold text-gray-900"
            >
              <span className="inline-flex h-8 w-8 rounded-xl bg-brand text-white items-center justify-center">
                A
              </span>
              <span>Any2All</span>
            </a>
            <nav className="hidden sm:flex items-center gap-6 text-sm">
              <a className="hover:text-brand" href="/tools">
                All tools
              </a>
              <a className="hover:text-brand" href="/blog">
                Blog
              </a>
              <a className="hover:text-brand" href="/about">
                About
              </a>
              <a className="hover:text-brand" href="/contact">
                Contact
              </a>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t bg-white">
          <div className="container py-10 grid sm:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="flex items-center gap-2 font-semibold mb-2">
                <span className="inline-flex h-8 w-8 rounded-xl bg-brand text-white items-center justify-center">
                  A
                </span>
                <span>Any2All</span>
              </div>
              <p className="text-gray-600">
                Convert any file online — fast, private, and free. No signup
                required.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Company</h3>
              <ul className="space-y-1 text-gray-700">
                <li>
                  <a href="/about" className="hover:text-brand">
                    About
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-brand">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-brand">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-brand">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Tools</h3>
              <ul className="space-y-1 text-gray-700">
                <li>
                  <a href="/png-to-jpg" className="hover:text-brand">
                    PNG to JPG
                  </a>
                </li>
                <li>
                  <a href="/jpg-to-pdf" className="hover:text-brand">
                    JPG to PDF
                  </a>
                </li>
                <li>
                  <a href="/compress-image" className="hover:text-brand">
                    Compress Image
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t py-4 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Any2All. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
