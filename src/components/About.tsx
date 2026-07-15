import React from 'react';
import { ArrowRight, CheckCircle2, Compass, ShieldCheck } from 'lucide-react';
import AfricanPattern from './AfricanPattern';

export default function About(): React.JSX.Element {
  const pillars = [
    'Engineering-led product development',
    'Scalable infrastructure for critical operations',
    'Reliable automation built for long-term use',
  ];

  return (
    <section id="about" className="relative overflow-hidden border-t border-gray-200 bg-white py-24 dark:border-gray-900 dark:bg-black">
      <div className="absolute right-0 top-0 h-full w-1/3 opacity-5">
        <AfricanPattern />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">About UdoHive</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              UdoHive is an Automation Engineering Company building intelligent infrastructure for real-world operations.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              We design and build software products that bring automation, intelligence, and operational clarity to complex business environments. Our work spans high-impact sectors where reliability, scale, and precision matter.
            </p>

            <div className="mt-8 space-y-4">
              {pillars.map((pillar) => (
                <div key={pillar} className="flex items-start gap-3 rounded-xl bg-gray-50 p-4 dark:bg-gray-900/50">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-400" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">{pillar}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-400/20 bg-gray-900 p-8 text-white shadow-xl dark:bg-gray-900/70">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400/10 text-yellow-400">
                <Compass className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">Our position</p>
                <h3 className="text-xl font-semibold">Built for scale, designed for impact</h3>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-gray-300">
              UdoHive is building foundational automation tools for Africa and global markets, with a focus on durability, practical performance, and products that solve large-scale problems.
            </p>

            <div className="mt-8 rounded-2xl border border-gray-800 bg-gray-800/80 p-5">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-400" />
                <div>
                  <p className="font-semibold">Engineering the next layer of operational software</p>
                  <p className="mt-1 text-sm text-gray-400">We create dependable technology that helps teams move faster and operate with greater clarity.</p>
                </div>
              </div>
            </div>

            <a href="#products" className="mt-8 inline-flex items-center text-sm font-semibold text-yellow-400">
              View flagship products
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
