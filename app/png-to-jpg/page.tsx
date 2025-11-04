'use client';
import { useState, useRef } from 'react';
import AdSlot from "../../components/AdSlot";


export default function PngToJpg() {
  const [file, setFile] = useState<File | null>(null);
  const [outputUrl, setOutputUrl] = useState<string | null>(null);
  const [quality, setQuality] = useState<number>(0.9);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const onFile = (f: File) => {
    setOutputUrl(null);
    setFile(f);
  };

  const convert = async () => {
    if (!file) return;
    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current!;
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d')!;
      ctx.drawImage(img, 0, 0);
      const dataUrl = canvas.toDataURL('image/jpeg', quality);
      setOutputUrl(dataUrl);
    };
    img.src = URL.createObjectURL(file);
  };

  const download = () => {
    if (!outputUrl) return;
    const a = document.createElement('a');
    a.href = outputUrl;
    a.download = (file?.name.replace(/\.png$/i, '') || 'image') + '.jpg';
    a.click();
  };

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold">PNG to JPG</h1>
      <p className="text-gray-600 mt-2">Convert PNG images to JPG instantly, right in your browser. No upload required.</p>

      <AdSlot />

      <div className="card p-6 mt-6">
        <input
          type="file"
          accept="image/png,image/*"
          onChange={(e) => e.target.files && onFile(e.target.files[0])}
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
        <button onClick={convert} className="mt-4 px-5 py-2 rounded-xl bg-brand text-white">Convert</button>
        <canvas ref={canvasRef} className="hidden" />
        {outputUrl && (
          <div className="mt-6">
            <img src={outputUrl} alt="result" className="max-h-64 rounded-xl border" />
            <button onClick={download} className="mt-4 px-5 py-2 rounded-xl border">Download JPG</button>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">How to convert PNG to JPG</h2>
        <ol className="list-decimal ml-5 text-gray-700 mt-2 space-y-1 text-sm">
          <li>Select your PNG image.</li>
          <li>Choose JPG quality.</li>
          <li>Click Convert and download your JPG file.</li>
        </ol>
      </section>
    </div>
  );
}
