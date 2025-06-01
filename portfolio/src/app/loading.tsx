"use client";
import { Triangle } from "react-loader-spinner";
import { useEffect, useState } from "react";

export default function Loading() {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!showLoader) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#b9cfed] dark:bg-blue-950">
      <Triangle
        visible={true}
        height="120"
        width="120"
        color="#4539f5"
        wrapperStyle={{ display: "block" }}
      />
    </div>
  );
}