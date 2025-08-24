"use client";

import Image from "next/image";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

// ✅ Cache config globally so it's only fetched once
let cachedConfig: Record<string, unknown> | null = null;

export default function ImageMapPro() {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  // ✅ Initialize map when script + config are ready
  const initializeMap = () => {
    if (!cachedConfig || !containerRef.current) return;
    if (typeof window !== "undefined" && typeof window.ImageMapPro?.init === "function") {
      window.ImageMapPro.init("#image-map-pro", cachedConfig);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let isMounted = true;

    async function init() {
      setIsLoading(true);

      try {
        // Fetch config only once
        if (!cachedConfig) {
          const response = await fetch("/script/image-map-config.json");
          cachedConfig = await response.json();
        }

        // Initialize after script is loaded
        if (isMounted) initializeMap();
      } catch (error) {
        console.error("Failed to initialize ImageMapPro:", error);
        if (isMounted) setIsLoading(false);
      }
    }

    init();

    return () => {
      isMounted = false;
      if (containerRef.current) {
        containerRef.current.innerHTML = ""; // ✅ lighter cleanup
      }
    };
  }, [pathname]);

  return (
    <div className='relative w-full overflow-hidden h-full min-h-[353px] lg:min-h-[652px]'>
      {/* ✅ Lazy load placeholder */}
      {isLoading && (
        <div className='absolute inset-0 z-10'>
          <Image
            src='/images/banner/banner.jpg'
            alt='banner'
            fill
            className='object-cover'
            loading='lazy'
          />
        </div>
      )}

      <div
        ref={containerRef}
        id='image-map-pro'
        className='w-full !h-full !min-h-[353px] lg:min-h-[652px] overflow-hidden'
      />

      {/* ✅ Load script once with Next.js */}
      <Script
        src='/script/image-map-pro.min.js'
        strategy='afterInteractive'
        onLoad={initializeMap}
      />
    </div>
  );
}
