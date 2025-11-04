// components/AdSlot.tsx
"use client";
import React from "react";

export default function AdSlot({ slot = "default-ad" }: { slot?: string }) {
  return (
    <div
      id={slot}
      style={{
        width: "100%",
        minHeight: "90px",
        backgroundColor: "#f9f9f9",
        border: "1px dashed #ccc",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "0.9rem",
        color: "#666",
        margin: "20px 0"
      }}
    >
      {/* Replace with your AdSense snippet later */}
      <p>Ad space - {slot}</p>
    </div>
  );
}
