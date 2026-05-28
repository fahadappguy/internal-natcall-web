import type { DownloadLinks } from "@/lib/download-links";
import type { ReactNode } from "react";

type DownloadButtonVariant = "hero" | "cta";

type DownloadButtonsProps = {
  downloadLinks: DownloadLinks;
  variant: DownloadButtonVariant;
};

const appStoreIcon = (
  <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 18 18" fill="none">
    <path
      d="M12.765 9.558c-.015-1.642 1.342-2.426 1.403-2.463-.767-1.118-1.956-1.271-2.38-1.289-1.012-.106-1.978.6-2.49.6-.525 0-1.318-.585-2.17-.57-1.114.017-2.16.663-2.732 1.663-1.184 2.05-.301 5.06.833 6.698.567.802 1.228 1.696 2.094 1.664.848-.035 1.165-.54 2.17-.54.995 0 1.293.54 2.178.52.91-.015 1.485-.814 2.032-1.623.656-.92.918-1.826.928-1.872-.02-.007-1.76-.672-1.796-2.788Z"
      fill="currentColor"
    />
    <path
      d="M11.637 5.072c.455-.57.767-1.346.68-2.135-.66.03-1.485.456-1.96 1.011-.423.492-.8 1.3-.703 2.058.74.055 1.5-.373 1.983-.934Z"
      fill="currentColor"
    />
  </svg>
);

const playStoreIcon = (
  <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 18 18" fill="none">
    <path d="M3.8 3.1 11.8 8.85 3.8 14.9V3.1Z" fill="currentColor" />
    <path
      d="M11.8 8.85 14.2 7.2c.42-.3.42-.92 0-1.22L12 4.4 9.5 6.22l2.3 2.63Z"
      fill="currentColor"
      opacity="0.78"
    />
    <path
      d="M11.8 8.85 14.2 10.5c.42.3.42.92 0 1.22L12 13.3 9.5 11.48l2.3-2.63Z"
      fill="currentColor"
      opacity="0.58"
    />
  </svg>
);

function storeButtonClass(variant: DownloadButtonVariant, tone: "primary" | "secondary") {
  if (variant === "cta" && tone === "primary") {
    return "btn-premium-primary inline-flex w-full items-center justify-center rounded-full bg-[#f6c617] px-10 py-3 text-base font-semibold text-black sm:w-auto sm:py-2 sm:text-lg";
  }

  if (variant === "cta") {
    return "btn-premium-secondary inline-flex w-full items-center justify-center rounded-full border border-[#383838] bg-[#1c1c1c] px-10 py-3 text-base font-semibold text-white sm:w-auto sm:py-2 sm:text-lg";
  }

  return "btn-premium-secondary inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#383838] bg-[#1c1c1c] px-8 py-3 text-sm font-medium text-white sm:w-auto";
}

function StoreButton({
  href,
  icon,
  label,
  live,
  tone,
  variant,
}: {
  href: string;
  icon?: ReactNode;
  label: string;
  live: boolean;
  tone: "primary" | "secondary";
  variant: DownloadButtonVariant;
}) {
  const className = storeButtonClass(variant, tone);
  const content = (
    <>
      {variant === "hero" ? icon : null}
      {live && href ? label : `${label} - Coming Soon`}
    </>
  );

  if (!live || !href) {
    return (
      <span aria-disabled="true" className={`${className} cursor-not-allowed opacity-70`}>
        {content}
      </span>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {content}
    </a>
  );
}

export function DownloadButtons({ downloadLinks, variant }: DownloadButtonsProps) {
  return (
    <div className="grid w-full gap-3 sm:flex sm:w-auto sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
      <StoreButton
        href={downloadLinks.iosUrl}
        icon={appStoreIcon}
        label={variant === "cta" ? "Download for iOS" : "App Store"}
        live={downloadLinks.iosIsLive}
        tone="primary"
        variant={variant}
      />
      <StoreButton
        href={downloadLinks.androidUrl}
        icon={playStoreIcon}
        label={variant === "cta" ? "Get it on Android" : "Play Store"}
        live={downloadLinks.androidIsLive}
        tone="secondary"
        variant={variant}
      />
    </div>
  );
}
