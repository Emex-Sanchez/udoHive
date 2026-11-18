import React from 'react';
import { ArrowRight, Mail, Cpu } from 'lucide-react';
import AfricanPattern from './AfricanPattern';
import PixelGrid from './pixel/PixelGrid';
import PixelHeroScene from './pixel/PixelHeroScene';

export default function Hero(): React.JSX.Element {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-gray-900 dark:bg-black">
      <div className="absolute inset-0 opacity-10">
        <AfricanPattern />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-500/10 via-transparent to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <PixelGrid className="opacity-30 dark:opacity-10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-gray-500/30 bg-gray-800/50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
            Automation Engineering Company
          </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              We engineer intelligent automation infrastructure for modern industries.
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-gray-300">
              UdoHive builds software products and automation systems that improve how businesses operate at scale.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#products"
              className="group flex items-center justify-center rounded-xl bg-gray-400 px-7 py-4 text-lg font-semibold text-black transition-all duration-300 hover:bg-gray-300"
            >
              Explore our products
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="mailto:udohive.ai@gmail.com"
              className="group flex items-center justify-center rounded-xl border border-gray-500/60 px-7 py-4 text-lg font-semibold text-gray-400 transition-all duration-300 hover:bg-gray-400 hover:text-black"
            >
                <Mail className="mr-2 h-5 w-5" /> Contact us
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <PixelHeroScene size={10} className="pixelated" />
            <div className="rounded-3xl border border-gray-800 bg-gray-800/70 p-8 shadow-2xl backdrop-blur-sm sm:max-w-xs w-full">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <Cpu className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
                    What we build
                  </p>
                  <h2 className="text-xl font-semibold text-white">
                    Product-grade automation systems with long-term impact.
                  </h2>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                From intelligent infrastructure to operational software, UdoHive is focused on building durable technology that helps businesses operate with greater precision and control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
