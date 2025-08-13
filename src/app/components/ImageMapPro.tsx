"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ImageMapPro() {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    let observer: MutationObserver | null = null;
    let configData: Record<string, unknown> | null = null;

    async function init() {
      try {
        setIsLoading(true);

        const response = await fetch("/script/image-map-config.json");
        configData = await response.json();

        const startObserver = () => {
          const target = document.getElementById("image-map-pro");
          if (!target) return;

          observer = new MutationObserver(() => {
            if (target.children.length > 0) {
              setIsLoading(false);
              observer?.disconnect();
            }
          });

          observer.observe(target, { childList: true });
        };

        const initializeMap = () => {
          startObserver();
          if (window.ImageMapPro) {
            window.ImageMapPro.init("#image-map-pro", configData as Record<string, unknown>);
          }
        };

        const loadScript = () => {
          const existingScript = document.querySelector(
            'script[src="/script/image-map-pro.min.js"]'
          );

          if (!existingScript) {
            const script = document.createElement("script");
            script.src = "/script/image-map-pro.min.js";
            script.async = true;
            script.onload = () => {
              if (window.ImageMapPro) {
                initializeMap();
              }
            };
            document.body.appendChild(script);
          } else {
            if (window.ImageMapPro) {
              initializeMap();
            }
          }
        };

        loadScript();
      } catch (error) {
        console.error("Failed to initialize ImageMapPro:", error);
        setIsLoading(false);
      }
    }

    // Run on route change
    init();

    // Handle resize
    const handleResize = () => {
      if (window.ImageMapPro && configData) {
        setIsLoading(true);
        window.ImageMapPro.init("#image-map-pro", configData);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", handleResize);
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
        id='image-map-pro'
        className='w-full !h-full !min-h-[353px] lg:min-h-[652px] overflow-hidden'
      />
    </div>
  );
}
