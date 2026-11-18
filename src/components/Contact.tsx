import React from 'react';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import AfricanPattern from './AfricanPattern';
import PixelDivider from './pixel/PixelDivider';

export default function Contact(): React.JSX.Element {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-gray-200 bg-gray-900 py-24 dark:border-gray-900">
      <div className="absolute bottom-0 left-0 h-full w-1/2 opacity-5">
        <AfricanPattern />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">Start a conversation</p>
            <PixelDivider className="mt-2 mb-4 w-20" color="#999999" height={3} />
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Let’s build something useful together.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-400">
              Whether you need a focused automation tool or a long-term product direction, we can help you turn the idea into a practical solution.
            </p>
            <a
              href="mailto:udohive.ai@gmail.com"
              className="mt-8 inline-flex items-center rounded-xl bg-gray-400 px-7 py-4 font-semibold text-black transition-all duration-300 hover:bg-gray-300"
            >
              Email the team
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="rounded-3xl border border-gray-800 bg-gray-800/70 p-8 shadow-xl backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">Contact</p>
                <a href="mailto:udohive.ai@gmail.com" className="mt-1 block text-lg font-semibold text-white hover:text-gray-400">
                  udohive.ai@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">Based in</p>
                <p className="mt-1 text-lg text-gray-300">Abuja, Nigeria</p>
              </div>
            </div>

            <p className="mt-8 text-sm leading-relaxed text-gray-400">
              We are open to practical collaborations, product conversations, and thoughtful automation projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
