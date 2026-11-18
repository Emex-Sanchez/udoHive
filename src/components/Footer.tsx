import React from 'react';
import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import PixelLogo from './pixel/PixelLogo';
import PixelDivider from './pixel/PixelDivider';

export default function Footer(): React.JSX.Element {
  return (
    <footer className="border-t border-gray-200 bg-white py-16 dark:border-gray-900 dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr_0.7fr_0.8fr]">
          <div>
            <div className="flex items-center gap-2">
              <PixelLogo size={6} className="pixelated" />
              <span className="font-bold text-gray-900 dark:text-white">udoHive</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              UdoHive engineers intelligent automation infrastructure and software products for modern businesses and institutions.
            </p>
            <p className="mt-4 text-sm font-medium text-gray-700 dark:text-gray-300">
              Engineering Intelligent Automation Infrastructure.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#home" className="hover:text-gray-400">Home</a></li>
              <li><a href="#about" className="hover:text-gray-400">About</a></li>
              <li><a href="#products" className="hover:text-gray-400">Products</a></li>
              <li><a href="#industries" className="hover:text-gray-400">Industries</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">Products</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>StockBud</li>
              <li>HiveVision</li>
              <li><a href="https://www.metysai.xyz/" className="hover:text-gray-400" >Metys AI</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <a href="mailto:udohive.ai@gmail.com" className="hover:text-gray-400">udohive.ai@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <ArrowUpRight className="h-4 w-4 text-gray-400" />
                Abuja, Nigeria
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-3">
              <a href="https://www.linkedin.com/company/udohive1" target="_blank" rel="noreferrer" className="rounded-full border border-gray-200 p-2 text-gray-600 transition-colors hover:border-gray-400 hover:text-gray-400 dark:border-gray-800 dark:text-gray-400">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/udohive?igsi=MXVqMXV3bmdjOXJtcQ==" target="_blank" rel="noreferrer" className="rounded-full border border-gray-200 p-2 text-gray-600 transition-colors hover:border-gray-400 hover:text-gray-400 dark:border-gray-800 dark:text-gray-400">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61584756130743" target="_blank" rel="noreferrer" className="rounded-full border border-gray-200 p-2 text-gray-600 transition-colors hover:border-gray-400 hover:text-gray-400 dark:border-gray-800 dark:text-gray-400">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <PixelDivider className="mt-12 mb-6 mx-auto max-w-xs" color="#999999" height={3} />

        <div className="border-t border-gray-200 pt-6 text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
          <p>© 2026 UdoHive Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
