"use client";

import { useState } from "react";

import Alert from "./components/Alert";
import { defaultBody, longBody } from "./constants";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <header className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
            PrimeRevenue UI Exercise
          </p>
          <h1 className="text-2xl font-semibold">Alert / Banner Component</h1>
          <p className="max-w-2xl text-sm text-grey-700">
            Examples below demonstrate the supported options from the Figma
            design: optional icon, close control, CTA, and long-form content.
          </p>
        </header>

        <section className="flex flex-col gap-4">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
            Interactive
          </h2>
          {isOpen ? (
            <Alert
              title="Alert heading"
              body={defaultBody}
              ctaLabel="View more"
              onClose={() => setIsOpen(false)}
            />
          ) : (
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="w-fit text-sm font-semibold text-red-800 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Reopen alert
            </button>
          )}
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
            Variants
          </h2>
          <div className="flex flex-col gap-4">
            <Alert
              title="Default alert"
              body={defaultBody}
              ctaLabel="View more"
            />
            <Alert
              title="Alert without icon"
              body={defaultBody}
              ctaLabel="View more"
              showIcon={false}
            />
            <Alert title="Alert without CTA" body={defaultBody} />
            <Alert
              title="Alert without close"
              body={defaultBody}
              ctaLabel="View more"
              showClose={false}
            />
            <Alert title="Long content" body={longBody} ctaLabel="View more" />
          </div>
        </section>
      </main>
    </div>
  );
}
