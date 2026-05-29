import React from 'react';
import { Presentation, Globe, BarChart3, Hourglass, ArrowRight, LucideIcon } from 'lucide-react';

interface VentureItem {
  id: number;
  icon: LucideIcon;
  track: '⚡ Micro Tool' | '🏢 Enterprise Solution';
  title: string;
  status: 'LIVE & OPERATIONAL' | 'PRE-REGISTRATION' | 'PIPELINE';
  description: string;
  pricing: string;
  features: string[];
  actionLabel: string;
  actionUrl: string;
  accentClass: string;
  badgeClass: string;
}

export default function Portfolio(): React.JSX.Element {
  const ventures: VentureItem[] = [
    {
      id: 1,
      icon: Presentation,
      track: '⚡ Micro Tool',
      title: 'Udo-slide',
      status: 'LIVE & OPERATIONAL',
      description: 'Turn any topic, structural brief, or text prompt into a fully formatted, beautifully stylized editable PowerPoint presentation (.pptx) in 60 seconds.',
      pricing: '₦1,500 per export (Free Preview)',
      features: [
        'Zero account signups required',
        'Direct local Paystack processing',
        'Fully editable native PPTX layouts',
      ],
      actionLabel: 'Launch Slide Agent',
      actionUrl: '/slides',
      accentClass: 'border-yellow-400',
      badgeClass: 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20',
    },
    {
      id: 2,
      icon: Globe,
      track: '🏢 Enterprise Solution',
      title: 'Udo-Afrika',
      status: 'PRE-REGISTRATION',
      description: 'The definitive automated backend system built specifically for modern African businesses to route localized operations, coordinate admin reports, and manage cross-platform workflows safely.',
      pricing: 'Flexible Monthly / Annual Tiers',
      features: [
        'Secure team permission frameworks',
        'Localized tax & processing rules',
        'Direct webhooks & app integrations',
      ],
      actionLabel: 'Join Waitlist',
      actionUrl: '#contact',
      accentClass: 'border-amber-500',
      badgeClass: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
    },
    {
      id: 3,
      icon: BarChart3,
      track: '🏢 Enterprise Solution',
      title: 'StockBud',
      status: 'PIPELINE',
      description: 'Your intelligent inventory automation assistant that constantly tracks stock parameters, flags predictive shortages, and auto-generates supplier purchase manifests.',
      pricing: 'Subscription Tier Pricing',
      features: [
        'Real-time transaction integration',
        'Predictive demand scaling models',
        'Multi-warehouse synchronization',
      ],
      actionLabel: 'Coming Soon',
      actionUrl: '#portfolio',
      accentClass: 'border-amber-700/40 opacity-70',
      badgeClass: 'bg-gray-800 text-gray-400 border-gray-700',
    },
  ];

  return (
    <section id="pipelines" className="py-24 bg-white dark:bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-bold text-sm tracking-wider uppercase">
            Studio Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            Active Venture Pipelines
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore the ecosystem tracks built under the UdoHive banner. We construct high-growth micro utilities alongside resilient enterprise engines.
          </p>
        </div>

        {/* Ventures Component Layout Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {ventures.map((venture) => {
            const IconComponent = venture.icon;
            const isPipeline = venture.status === 'PIPELINE';
            
            return (
              <div 
                key={venture.id} 
                className={`bg-gray-50 dark:bg-gray-900/40 p-8 border-l-8 ${venture.accentClass} rounded-r-xl flex flex-col justify-between hover:shadow-xl transition-all duration-300 backdrop-blur-sm`}
              >
                <div>
                  {/* Category Status Bar */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="text-sm text-yellow-400 font-bold tracking-wide mb-1">
                        {venture.track}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {venture.title}
                      </h3>
                    </div>
                    <div className="w-12 h-12 bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center rounded-lg flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-yellow-400" />
                    </div>
                  </div>

                  {/* Description Info blocks */}
                  <div className="space-y-4 mb-8">
                    <span className={`inline-block text-[10px] font-black px-2.5 py-1 rounded-md border tracking-wider ${venture.badgeClass}`}>
                      {venture.status}
                    </span>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed min-h-[80px]">
                      {venture.description}
                    </p>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-xs tracking-wider uppercase mb-2">Capabilities</h4>
                      <ul className="space-y-2">
                        {venture.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <ArrowRight className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Base Context Lower Action Blocks */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-800/60 flex items-center justify-between mt-auto">
                  <span className="text-sm font-bold text-gray-900 dark:text-gray-300">
                    {venture.pricing}
                  </span>
                  {isPipeline ? (
                    <span className="text-xs text-gray-400 dark:text-gray-500 font-semibold tracking-wider uppercase bg-gray-100 dark:bg-gray-800/50 px-3 py-1.5 rounded">
                      {venture.actionLabel}
                    </span>
                  ) : (
                    <a 
                      href={venture.actionUrl}
                      className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-xs px-4 py-2 rounded transition shadow-md shadow-yellow-400/5"
                    >
                      {venture.actionLabel} →
                    </a>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
