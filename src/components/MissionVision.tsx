import React from 'react';
import { ArrowRight, Goal, Orbit } from 'lucide-react';

export default function MissionVision(): React.JSX.Element {
  return (
    <section id="mission" className="border-t border-gray-200 bg-gray-50 py-24 dark:border-gray-900 dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">Mission and vision</p>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Building foundational automation infrastructure for the next generation of African enterprise.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-400">
              <Goal className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Mission</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              To design and engineer intelligent software systems that help businesses operate more efficiently, more reliably, and at greater scale.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-400">
              <Orbit className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              To build durable automation infrastructure that gives African organizations the tools to compete, scale, and operate with confidence in a rapidly changing economy.
            </p>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-3 text-sm font-semibold text-yellow-400">
          <ArrowRight className="h-4 w-4" />
          Product-focused engineering for long-term operational value.
        </div>
      </div>
    </section>
  );
}
