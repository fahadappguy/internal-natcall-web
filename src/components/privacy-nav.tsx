"use client";

import { useEffect, useState } from "react";
import { privacySections } from "@/lib/site";

export function PrivacyNav() {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const sectionElements = privacySections
        .map((section) => document.getElementById(section.id))
        .filter((section): section is HTMLElement => Boolean(section));

      const scrollPosition = window.scrollY + 120;
      const pageBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;

      if (pageBottom) {
        setActiveSection(privacySections[privacySections.length - 1].id);
        return;
      }

      const currentSection = sectionElements.reduce(
        (current, section) => {
          return section.offsetTop <= scrollPosition ? section : current;
        },
        sectionElements[0],
      );

      setActiveSection(currentSection?.id ?? "introduction");
    };

    const requestUpdate = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.addEventListener("hashchange", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.removeEventListener("hashchange", requestUpdate);
    };
  }, []);

  return (
    <nav className="grid gap-1" aria-label="Privacy sections">
      {privacySections.map((section) => {
        const isActive = activeSection === section.id;

        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={() => setActiveSection(section.id)}
            className={`flex items-center gap-3 border-l-4 px-4 py-3 text-[14px] transition ${
              isActive
                ? "border-l-[#f6c617] bg-[#211a08] text-[#f6c617]"
                : "border-l-transparent text-[#d4d4d4] hover:border-l-[#444444] hover:text-white"
            }`}
          >
            {section.label}
          </a>
        );
      })}
    </nav>
  );
}
