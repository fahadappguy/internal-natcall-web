"use client";

import { useEffect, useState, type ChangeEvent } from "react";
import Link from "next/link";

const defaultContact = {
  address: "Bergen, Kolstien 3B, Norway",
  phone: "+47 91393082",
  email: "support@natcall.com",
  whatsapp: "+47 91393082",
};

const defaultDestinations = [
  {
    id: "eritrea",
    country: "Eritrea",
    flag: "🇪🇷",
    description: "Direct calls to Eritrea at local-friendly rates.",
  },
  {
    id: "ethiopia",
    country: "Ethiopia",
    flag: "🇪🇹",
    description: "Crystal-clear connections across Ethiopia.",
  },
  {
    id: "norway",
    country: "Norway",
    flag: "🇳🇴",
    description: "Fast, reliable calls to Norway anytime.",
  },
];

const destinationStorageKey = "natcall_destinations";

export default function ContactSettingsPage() {
  const [contact, setContact] = useState(defaultContact);
  const [destinations, setDestinations] = useState(defaultDestinations);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("natcall_contact");
      if (raw) setContact((prev) => ({ ...prev, ...JSON.parse(raw) }));
    } catch (e) {
      // ignore
    }

    try {
      const rawDest = localStorage.getItem(destinationStorageKey);
      if (rawDest) {
        const parsed = JSON.parse(rawDest);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setDestinations(
            parsed.map((item: any) => ({
              id: typeof item?.id === "string" ? item.id : String(Date.now()),
              country: typeof item?.country === "string" ? item.country : "Unknown",
              flag: typeof item?.flag === "string" ? item.flag : "🌍",
              description: typeof item?.description === "string" ? item.description : "Great international calling routes.",
            }))
          );
        }
      }
    } catch (e) {
      // ignore
    }
  }, []);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setContact((c) => ({ ...c, [name]: value }));
  }

  function handleDestinationChange(
    id: string,
    field: "country" | "flag" | "description",
    value: string
  ) {
    setDestinations((list) =>
      list.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  }

  function addDestination() {
    setDestinations((list) => [
      ...list,
      {
        id: `dest-${Date.now()}`,
        country: "New Destination",
        flag: "🌍",
        description: "Add a description for this destination.",
      },
    ]);
  }

  function removeDestination(id: string) {
    setDestinations((list) => list.filter((item) => item.id !== id));
  }

  function handleSave() {
    try {
      localStorage.setItem("natcall_contact", JSON.stringify(contact));
      localStorage.setItem(destinationStorageKey, JSON.stringify(destinations));
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch (e) {
      // ignore
    }
  }

  return (
    <div className="mx-auto max-w-5xl p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Contact & Destination Settings</h1>
          <p className="mt-2 text-sm text-[#9ca3af]">
            Update footer contact details and the Popular Destinations slideshow.
          </p>
        </div>
        <Link href="/developers" className="text-sm text-[#9ca3af]">Back</Link>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 rounded-3xl border border-[#2a2a2a] bg-[#111111] p-6">
          <h2 className="text-xl font-semibold text-white">Footer Contact Info</h2>
          <div className="grid gap-4">
            <label className="grid gap-1 text-sm text-[#9ca3af]">
              Address
              <textarea
                name="address"
                value={contact.address}
                onChange={handleChange}
                className="rounded border border-[#2a2a2a] bg-[#0b0b0b] p-3 text-white"
              />
            </label>
            <label className="grid gap-1 text-sm text-[#9ca3af]">
              Phone
              <input
                name="phone"
                value={contact.phone}
                onChange={handleChange}
                className="rounded border border-[#2a2a2a] bg-[#0b0b0b] p-3 text-white"
              />
            </label>
            <label className="grid gap-1 text-sm text-[#9ca3af]">
              Support Email
              <input
                name="email"
                value={contact.email}
                onChange={handleChange}
                className="rounded border border-[#2a2a2a] bg-[#0b0b0b] p-3 text-white"
              />
            </label>
            <label className="grid gap-1 text-sm text-[#9ca3af]">
              Support WhatsApp
              <input
                name="whatsapp"
                value={contact.whatsapp}
                onChange={handleChange}
                className="rounded border border-[#2a2a2a] bg-[#0b0b0b] p-3 text-white"
              />
            </label>
          </div>
        </div>

        <div className="space-y-6 rounded-3xl border border-[#2a2a2a] bg-[#111111] p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-white">Popular Destinations</h2>
              <p className="mt-2 text-sm text-[#9ca3af]">
                Edit the list that appears on the landing page slideshow.
              </p>
            </div>
            <button
              type="button"
              onClick={addDestination}
              className="rounded-full bg-[#f6c617] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#e5c210]"
            >
              Add destination
            </button>
          </div>

          <div className="space-y-4">
            {destinations.map((destination) => (
              <div key={destination.id} className="rounded-3xl border border-[#2a2a2a] bg-[#0f0f0f] p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1 space-y-3">
                    <label className="grid gap-1 text-sm text-[#9ca3af]">
                      Country
                      <input
                        value={destination.country}
                        onChange={(event) => handleDestinationChange(destination.id, "country", event.target.value)}
                        className="rounded border border-[#2a2a2a] bg-[#090909] p-3 text-white"
                      />
                    </label>
                    <label className="grid gap-1 text-sm text-[#9ca3af]">
                      Flag
                      <input
                        value={destination.flag}
                        onChange={(event) => handleDestinationChange(destination.id, "flag", event.target.value)}
                        className="rounded border border-[#2a2a2a] bg-[#090909] p-3 text-white"
                      />
                    </label>
                    <label className="grid gap-1 text-sm text-[#9ca3af]">
                      Description
                      <textarea
                        value={destination.description}
                        onChange={(event) => handleDestinationChange(destination.id, "description", event.target.value)}
                        rows={2}
                        className="rounded border border-[#2a2a2a] bg-[#090909] p-3 text-white"
                      />
                    </label>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeDestination(destination.id)}
                    className="mt-2 rounded-full border border-[#7a7a7a] px-3 py-2 text-sm text-[#d4d4d4] transition hover:border-[#f6c617] hover:text-white"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <button onClick={handleSave} className="rounded bg-[#f6c617] px-5 py-2 text-sm font-semibold text-black transition hover:bg-[#e5c210]">
          Save all settings
        </button>
        {saved ? <span className="text-sm text-green-400">Saved</span> : null}
      </div>
    </div>
  );
}
