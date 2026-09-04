import React from 'react';
import { ArrowRight, BarChart3, Compass, ScanSearch, LucideIcon } from 'lucide-react';

interface ProductItem {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
  badge: string;
  href: string;
}

export default function Portfolio(): React.JSX.Element {
  const products: ProductItem[] = [
    {
      id: 1,
      icon: BarChart3,
      title: 'StockBud',
      description: 'An intelligent inventory and retail operations platform that helps businesses monitor stock movement, manage replenishment, and automate retail workflows.',
      tag: 'Retail operations',
      badge: 'In development',
      href: '#Contact',
    },
    {
      id: 2,
      icon: Compass,
      title: 'HiveVision',
      description: 'An AI-powered geospatial intelligence platform that turns satellite imagery and spatial data into actionable insights for agriculture, infrastructure, security, and environmental monitoring.',
      tag: 'Geospatial intelligence',
      badge: 'In development',
      href: '#',
    },
    {
      id: 3,
      icon: ScanSearch,
      title: 'Metys AI',
      description: 'An AI-powered B2B lead intelligence platform that discovers, qualifies, and organizes high-quality business leads from across the web, helping companies find customers faster.',
      tag: 'Lead intelligence',
      badge: 'LIVE',
      href: 'https://www.leadgenudohive.xyz'
    },
  ];

  return (
    <section id="products" className="border-t border-gray-200 bg-white py-24 dark:border-gray-900 dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">Flagship products</p>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Product systems built for complex operational problems.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            UdoHive is building a portfolio of intelligent products designed to improve visibility, decision-making, and execution across critical sectors.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <div key={product.id} className="flex h-full flex-col rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/60">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-400">
                    <IconComponent className="h-7 w-7" />
                  </div>
                  <span className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-yellow-400">
                    {product.badge}
                  </span>
                </div>

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">{product.tag}</span>
                <h3 className="mt-3 text-2xl font-semibold text-gray-900 dark:text-white">{product.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{product.description}</p>

                <a href={product.href}
                   {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="mt-8 inline-flex items-center font-semibold text-yellow-400 transition-colors hover:text-yellow-300">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
