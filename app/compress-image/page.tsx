'use client';
import { useRef, useState } from 'react';
import AdSlot from "@/components/AdSlot";

export default function CompressImage() {
  const [file, setFile] = useState<File | null>(null);
  const [outputUrl, setOutputUrl] = useState<string | null>(null);
  const [quality, setQuality] = useState<number>(0.7);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const compress = async () => {
    if (!file) return;
    const dataUrl = await fileToDataURL(file);
    const img = await loadImage(dataUrl);
    const canvas = canvasRef.current!;
    // Keep original dimensions for now; you can add resize controls later.
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d')!;
    ctx.drawImage(img, 0, 0);
    const out = canvas.toDataURL("image/jpeg", quality);
    setOutputUrl(out);
  };

  const download = () => {
    if (!outputUrl) return;
    const a = document.createElement('a');
    a.href = outputUrl;
    a.download = (file?.name.replace(/\.(png|jpg|jpeg|webp)$/i, '') || 'image') + '-compressed.jpg';
    a.click();
  };

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold">Compress Image</h1>
      <p className="text-gray-600 mt-2">Reduce image file size with adjustable quality — browser‑based, no upload required.</p>

      <AdSlot />

      <div className="card p-6 mt-6">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="block w-full text-sm"
        />
        <div className="mt-4">
          <label className="text-sm text-gray-700">Quality: {(quality*100).toFixed(0)}%</label>
          <input
            className="w-full"
            type="range"
            min={0.2}
            max={1}
            step={0.05}
            value={quality}
            onChange={(e) => setQuality(parseFloat(e.target.value))}
          />
        </div>
        <button onClick={compress} className="mt-4 px-5 py-2 rounded-xl bg-brand text-white">Compress</button>
        <canvas ref={canvasRef} className="hidden" />
        {outputUrl && (
          <div className="mt-6">
            <img src={outputUrl} alt="preview" className="max-h-64 rounded-xl border" />
            <button onClick={download} className="mt-4 px-5 py-2 rounded-xl border">Download</button>
          </div>
        )}
      </div>
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
