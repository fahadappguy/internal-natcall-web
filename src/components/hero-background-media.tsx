"use client";

import { HeroMedia, fallbackHeroMedia } from "@/lib/hero-media";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

function getVideoMimeType(url: string) {
  const cleanUrl = url.split("?")[0].toLowerCase();

  if (cleanUrl.endsWith(".webm")) return "video/webm";
  if (cleanUrl.endsWith(".ogg") || cleanUrl.endsWith(".ogv")) return "video/ogg";

  return "video/mp4";
}

export function HeroBackgroundMedia({ heroMedia }: { heroMedia: HeroMedia | null }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failedMediaUrl, setFailedMediaUrl] = useState("");
  const useFallback = Boolean(heroMedia && failedMediaUrl === heroMedia.mediaUrl);
  const activeMedia = useFallback ? fallbackHeroMedia : heroMedia;
  const activeMediaType = activeMedia?.mediaType;
  const activeMediaUrl = activeMedia?.mediaUrl;
  const videoMimeType = useMemo(
    () => getVideoMimeType(activeMediaUrl ?? ""),
    [activeMediaUrl]
  );

  useEffect(() => {
    if (activeMediaType !== "video" || !activeMediaUrl) return;

    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.load();
    video.play().catch(() => {
      // Browsers can block autoplay; the first frame/poster still provides a background.
    });
  }, [activeMediaType, activeMediaUrl]);

  if (!activeMedia) return null;

  if (activeMedia.mediaType === "image") {
    return (
      <Image
        className="absolute inset-0 -z-30 h-full w-full object-cover"
        src={activeMedia.mediaUrl}
        alt={activeMedia.altText ?? "Natcall hero background"}
        fill
        priority
        sizes="100vw"
        unoptimized
      />
    );
  }

  return (
    <video
      key={activeMedia.mediaUrl}
      ref={videoRef}
      className="absolute inset-0 -z-30 h-full w-full object-cover"
      poster={activeMedia.posterUrl}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      onError={() => {
        if (!useFallback) setFailedMediaUrl(activeMedia.mediaUrl);
      }}
    >
      <source src={activeMedia.mediaUrl} type={videoMimeType} />
    </video>
  );
}
