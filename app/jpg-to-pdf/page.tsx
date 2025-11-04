'use client';
import { useState } from 'react';
import { jsPDF } from "jspdf";
import AdSlot from "../../components/AdSlot";


export default function JpgToPdf() {
  const [files, setFiles] = useState<FileList | null>(null);
  const [busy, setBusy] = useState(false);

  const convert = async () => {
    if (!files || files.length === 0) return;
    setBusy(true);
    try {
      const pdf = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const dataUrl = await fileToDataURL(file);
        const img = await loadImage(dataUrl);
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const { w, h } = fitContain(img.width, img.height, pageWidth, pageHeight);
        if (i > 0) pdf.addPage();
        pdf.addImage(img, "JPEG", (pageWidth - w)/2, (pageHeight - h)/2, w, h);
      }
      pdf.save("images.pdf");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold">JPG to PDF</h1>
      <p className="text-gray-600 mt-2">Combine images into a single PDF file — processed in your browser.</p>

      <AdSlot />

      <div className="card p-6 mt-6">
        <input
          type="file"
          accept="image/jpeg,image/png,image/webp"
          multiple
          onChange={(e) => setFiles(e.target.files)}
          className="block w-full text-sm"
        />
        <button onClick={convert} disabled={busy} className="mt-4 px-5 py-2 rounded-xl bg-brand text-white disabled:opacity-60">
          {busy ? "Converting..." : "Convert & Download PDF"}
        </button>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Tips</h2>
        <ul className="list-disc ml-5 text-gray-700 mt-2 space-y-1 text-sm">
          <li>Use high-resolution JPGs for sharp PDFs.</li>
          <li>Images are scaled to fit A4 pages while preserving aspect ratio.</li>
        </ul>
      </section>
    </div>
  );
}

function fileToDataURL(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function fitContain(w: number, h: number, maxW: number, maxH: number) {
  const r = Math.min(maxW / w, maxH / h);
  return { w: w * r, h: h * r };
}
