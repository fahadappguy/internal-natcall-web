"use client";

import { useEffect, useMemo, useState } from "react";
import {
  defaultPopularDestinations,
  getPopularDestinations,
  type PopularDestination,
} from "@/lib/popular-destinations";

const visibleCardCount = 3;

function getVisibleDestinations(
  destinations: PopularDestination[],
  startIndex: number
) {
  if (destinations.length <= visibleCardCount) return destinations;

  return Array.from({ length: visibleCardCount }, (_, offset) => {
    const index = (startIndex + offset) % destinations.length;
    return destinations[index];
  });
}

export function PopularDestinationsCarousel() {
  const [destinations, setDestinations] = useState<PopularDestination[]>(
    defaultPopularDestinations
  );
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let isMounted = true;

    getPopularDestinations().then((items) => {
      if (!isMounted) return;

      setDestinations(items);
      setActiveIndex(0);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (destinations.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % destinations.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [destinations.length]);

  const activeDestination =
    destinations[activeIndex] ?? destinations[0] ?? defaultPopularDestinations[0];

  const visibleDestinations = useMemo(
    () => getVisibleDestinations(destinations, activeIndex),
    [activeIndex, destinations]
  );

  function goToPrevious() {
    setActiveIndex((current) =>
      current === 0 ? destinations.length - 1 : current - 1
    );
  }

  function goToNext() {
    setActiveIndex((current) => (current + 1) % destinations.length);
  }

  return (
    <section className="mx-auto w-full max-w-[1200px] px-4 pb-14 pt-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-[clamp(2.25rem,4vw,36px)] font-extrabold leading-[1.2] tracking-[-0.01em] text-white">
          Top calling destinations
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#b6b6b6] sm:text-lg">
          Highlighting key regions like Eritrea, Ethiopia, Norway and more with
          a smooth animated slideshow.
        </p>
      </div>

      <div className="relative mt-10 overflow-hidden rounded-[32px] border border-[#2a2a2a] bg-[#0f0f0f] p-5 shadow-[0_40px_120px_rgba(0,0,0,0.35)] sm:p-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0d0d0d] to-transparent" />

        <div className="grid gap-8 lg:grid-cols-[1.5fr_0.95fr] lg:items-center">
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-4">
              <div className="animate-destination-float inline-flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-[#111111] via-[#1f1f1f] to-[#272727] text-5xl shadow-[0_0_0_1px_rgba(246,198,23,0.12)]">
                {activeDestination.flag}
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f6c617]">
                  Featured route
                </p>
                <h3 className="mt-2 text-4xl font-semibold leading-[1.05] text-white sm:text-5xl">
                  {activeDestination.country}
                </h3>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#2a2a2a] bg-[#111111]/80 p-6 text-[#d4d4d4] shadow-[inset_0_0_0_1px_rgba(246,198,23,0.08)]">
              <p className="text-lg leading-8 text-[#e5e5e5]">
                {activeDestination.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {destinations.map((destination, index) => (
                <button
                  key={destination.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${destination.country}`}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-8 bg-[#f6c617]"
                      : "w-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="relative grid gap-4 pb-14">
            {visibleDestinations.map((destination) => {
              const destinationIndex = destinations.findIndex(
                (item) => item.id === destination.id
              );
              const isActive = destination.id === activeDestination.id;

              return (
                <button
                  key={destination.id}
                  type="button"
                  onClick={() => setActiveIndex(destinationIndex)}
                  className={`rounded-[28px] border p-5 text-left transition-all duration-500 ${
                    isActive
                      ? "border-[#f6c617] bg-[#171717] shadow-[0_0_0_8px_rgba(246,198,23,0.06)]"
                      : "border-[#2a2a2a] bg-[#121212] hover:border-[#f6c617]/50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0f0f0f] text-3xl">
                      {destination.flag}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        {destination.country}
                      </h4>
                      <p className="text-sm leading-6 text-[#a7a7a7]">
                        {destination.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}

            {destinations.length > 1 ? (
              <div className="absolute bottom-0 right-0 flex items-center gap-2">
                <button
                  type="button"
                  onClick={goToPrevious}
                  aria-label="Show previous destination"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#2a2a2a] bg-[#121212] text-white transition hover:border-[#f6c617] hover:text-[#f6c617]"
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M15 6l-6 6 6 6"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  aria-label="Show next destination"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#f6c617] bg-[#f6c617] text-black transition hover:bg-transparent hover:text-[#f6c617]"
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9 6l6 6-6 6"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
