"use client";

import Link from "next/link";

export default function DevelopersPage() {
  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-semibold">Developers / Dashboard</h1>

      <nav className="mt-6 flex gap-3">
        <Link className="rounded bg-[#111827] px-4 py-2 text-sm text-white" href="/developers/contact-settings">
          Contact Settings
        </Link>
      </nav>

      <p className="mt-6 text-sm text-[#9ca3af]">Use the Contact Settings tab to update the footer contact information.</p>
    </div>
  );
}
