"use client";

import { useEffect, useState } from "react";

type PrivacyNavSection = {
  id: string;
  label: string;
};

type PrivacyNavProps = {
  sections: PrivacyNavSection[];
};

export function PrivacyNav({ sections }: PrivacyNavProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    if (sections.length === 0) {
      return;
    }

    let ticking = false;

    const updateActiveSection = () => {
      const sectionElements = sections
        .map((section) => document.getElementById(section.id))
        .filter((section): section is HTMLElement => Boolean(section));

      if (sectionElements.length === 0) {
        return;
      }

      const scrollPosition = window.scrollY + 120;
      const pageBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;

      if (pageBottom) {
        setActiveSection(sections[sections.length - 1].id);
        return;
      }

      const currentSection = sectionElements.reduce(
        (current, section) => {
          return section.offsetTop <= scrollPosition ? section : current;
        },
        sectionElements[0],
      );

      setActiveSection(currentSection?.id ?? sections[0].id);
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
  }, [sections]);

  return (
    <nav className="grid gap-1 text-[14px] text-[#cfcfcf]" aria-label="Privacy sections">
      {sections.map((section) => {
        const isActive = activeSection === section.id;

        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={() => setActiveSection(section.id)}
            className={`border-l-2 px-3 py-3 transition ${
              isActive
                ? "border-[#f6c617] bg-[#1c1607] text-white"
                : "border-transparent hover:border-[#f6c617] hover:bg-[#1c1607] hover:text-white"
            }`}
          >
            {section.label}
          </a>
        );
      })}
    </nav>
  );
}
