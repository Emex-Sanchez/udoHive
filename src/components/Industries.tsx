import React from 'react';
import { Building2, Factory, MapPinned, ShoppingCart, Tractor, ShieldCheck, Warehouse, BrainCircuit } from 'lucide-react';

interface IndustryItem {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

export default function Industries(): React.JSX.Element {
  const industries: IndustryItem[] = [
    {
      id: 1,
      title: 'Retail',
      description: 'Inventory visibility, replenishment planning, and operational control for modern retail teams.',
      icon: ShoppingCart,
    },
    {
      id: 2,
      title: 'Logistics',
      description: 'Automation across movement, coordination, monitoring, and distribution workflows.',
      icon: Warehouse,
    },
    {
      id: 3,
      title: 'Agriculture',
      description: 'Decision support tools that connect field intelligence with operational planning.',
      icon: Tractor,
    },
    {
      id: 4,
      title: 'Geospatial Intelligence',
      description: 'Spatial analytics and monitoring systems for land, infrastructure, and environmental insight.',
      icon: MapPinned,
    },
    {
      id: 5,
      title: 'Enterprise Operations',
      description: 'Workflow infrastructure built for scale, reliability, and cross-team execution.',
      icon: Building2,
    },
    {
      id: 6,
      title: 'Business Intelligence',
      description: 'Automation and insight layers that help organizations act on structured signals faster.',
      icon: BrainCircuit,
    },
    {
      id: 7,
      title: 'Government',
      description: 'Secure systems for planning, coordination, and operational visibility in public institutions.',
      icon: ShieldCheck,
    },
    {
      id: 8,
      title: 'Infrastructure',
      description: 'Technology that supports monitoring, planning, and maintenance across critical assets.',
      icon: Factory,
    },
  ];

  return (
    <section id="industries" className="border-t border-gray-200 bg-white py-24 dark:border-gray-900 dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">Industries we are building for</p>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Infrastructure for sectors that need better operational intelligence.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            UdoHive designs products for organizations where accuracy, visibility, and reliability are essential.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry) => {
            const IconComponent = industry.icon;
            return (
              <div key={industry.id} className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/70">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{industry.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{industry.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
