"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export default function ImageMapPro() {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const configRef = useRef<Record<string, unknown> | null>(null);
  const isMountedRef = useRef(true);
  const scriptLoadedRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    isMountedRef.current = true;
    let observer: MutationObserver | null = null;

    async function init() {
      try {
        if (!isMountedRef.current) return;
        setIsLoading(true);

        // Fetch config only once
        if (!configRef.current) {
          const response = await fetch("/script/image-map-config.json");
          configRef.current = await response.json();
        }

        const startObserver = () => {
          if (!containerRef.current) return;

          observer = new MutationObserver(() => {
            if (containerRef.current?.children.length && isMountedRef.current) {
              setIsLoading(false);
              observer?.disconnect();
            }
          });

          observer.observe(containerRef.current, { childList: true });
        };

        const initializeMap = () => {
          if (!configRef.current || !isMountedRef.current) return;

          startObserver();

          // Check if library is available
          if (typeof window.ImageMapPro?.init === "function") {
            // Use selector string instead of DOM element
            window.ImageMapPro.init("#image-map-pro", configRef.current);
          }
        };

        const loadScript = () => {
          const existingScript = document.querySelector(
            'script[src="/script/image-map-pro.min.js"]'
          );

          if (!existingScript && !scriptLoadedRef.current) {
            scriptLoadedRef.current = true;
            const script = document.createElement("script");
            script.src = "/script/image-map-pro.min.js";
            script.async = true;
            script.onload = () => {
              if (isMountedRef.current) initializeMap();
            };
            document.body.appendChild(script);
          } else {
            initializeMap();
          }
        };

        loadScript();
      } catch (error) {
        if (isMountedRef.current) {
          console.error("Failed to initialize ImageMapPro:", error);
          setIsLoading(false);
        }
      }
    }

    init();

    return () => {
      isMountedRef.current = false;
      observer?.disconnect();

      // Cleanup DOM completely
      if (containerRef.current) {
        // Remove all children
        while (containerRef.current.firstChild) {
          containerRef.current.removeChild(containerRef.current.firstChild);
        }
      }
    };
  }, [pathname]);

  return (
    <div className='relative w-full overflow-hidden h-full min-h-[353px] lg:min-h-[652px]'>
      {isLoading && (
        <div className='absolute inset-0 z-10'>
          <Image
            src='/images/banner/banner.jpg'
            alt='banner'
            fill
            className='object-cover'
            priority
          />
        </div>
      )}

      <div
        ref={containerRef}
        id='image-map-pro'
        className='w-full !h-full !min-h-[353px] lg:min-h-[652px] overflow-hidden'
      />
    </div>
  );
}
