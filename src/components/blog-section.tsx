"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { blogPosts } from "@/lib/site";

const previewCount = 4;

const placeholderPosts = [
  {
    title: "Business Calling Tips for Global Teams",
    date: "Coming soon",
    excerpt:
      "Practical guidance for teams managing frequent international calls across departments and regions.",
    image: "/images/mockups/contacts-desktop.png",
  },
  {
    title: "How to Plan Monthly Calling Credits",
    date: "Coming soon",
    excerpt:
      "A simple framework for estimating credit usage, destination demand, and team calling needs.",
    image: "/images/mockups/topup-mobile.png",
  },
];

export function BlogSection() {
  const [showAll, setShowAll] = useState(false);
  const posts = [...blogPosts, ...placeholderPosts];
  const visiblePosts = showAll ? posts : posts.slice(0, previewCount);

  return (
    <section
      id="updates"
      className="mx-auto w-full max-w-[1200px] px-4 pb-20 pt-10 sm:px-6 lg:px-8"
    >
      <div className="text-center">
        <Reveal>
          <h2 className="mb-10 text-[clamp(2.25rem,4vw,36px)] font-extrabold leading-[1.2] tracking-[-0.01em] text-white">
            Blogs
          </h2>
        </Reveal>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {visiblePosts.map((post) => (
          <article
            key={post.title}
            className="flex h-full flex-col gap-4 overflow-hidden rounded-lg border border-[#2a2a2a] bg-[#1c1c1c] p-3 transition duration-300 hover:-translate-y-1 hover:border-[#f6c617]/40 sm:flex-row"
          >
            <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden rounded-md bg-[#111111] sm:h-28 sm:w-32 sm:aspect-auto">
              <Image
                src={post.image}
                alt=""
                fill
                className="object-cover opacity-85 transition duration-300 hover:scale-105"
                sizes="(min-width: 640px) 128px, 96px"
              />
            </div>
            <div className="min-w-0 py-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#f6c617]">
                {post.date}
              </p>
              <h3 className="mt-2 text-[16px] font-semibold leading-6 text-white">
                {post.title}
              </h3>
              <p className="mt-2 text-[13px] leading-6 text-[#bdbdbd]">
                {post.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>

      {posts.length > previewCount ? (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((value) => !value)}
            className="inline-flex h-11 w-full max-w-[220px] items-center justify-center rounded-full border border-[#383838] bg-[#151515] px-7 text-sm font-semibold text-white transition hover:border-[#f6c617]/70 hover:text-[#f6c617]"
            aria-expanded={showAll}
          >
            {showAll ? "Show less" : "Show more"}
          </button>
        </div>
      ) : null}
    </section>
  );
}
