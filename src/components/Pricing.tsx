import React from 'react';
import { ArrowRight, Check, Zap, Building2, HelpCircle } from 'lucide-react';

interface PricingTier {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  badge: string;
  pricingText: string;
  description: string;
  benefits: string[];
  ctaText: string;
  ctaUrl: string;
  isPopular: boolean;
  accentClass: string;
}

export default function Pricing(): React.JSX.Element {
  const tiers: PricingTier[] = [
    {
      id: 1,
      icon: Zap,
      title: 'Micro Automation Tools',
      badge: 'NO SUBSCRIPTION',
      pricingText: 'Pay-Per-Export',
      description: 'Single-purpose AI utility agents built for lightning-fast tasks. Perfect for individuals, students, and freelancers who hate monthly commitments.',
      benefits: [
        'Zero account signups or logins required',
        'Inspect the free preview before paying',
        'Flat, low Naira micro-fees via Paystack',
        'Download fully editable source files natively',
        'No sneaky automatic card renewals ever',
      ],
      ctaText: 'Launch Udo-slide (₦1,500)',
      ctaUrl: '/slides',
      isPopular: true,
      accentClass: 'border-yellow-400 bg-yellow-400/5 dark:bg-yellow-400/[0.02]',
    },
    {
      id: 2,
      icon: Building2,
      title: 'Enterprise Solutions',
      badge: 'B2B CONTRACTS',
      pricingText: 'Monthly Subscription',
      description: 'Hardened corporate workflow systems that link your entire team, manage internal compliance data, and orchestrate complex business routing securely.',
      benefits: [
        'Secure multi-user authentication modules',
        'Continuous team role & permission configurations',
        'Custom workspace databases & system integrations',
        'Dedicated secure servers & isolated data pools',
        'End-to-end local regulatory compliance tracking',
      ],
      ctaText: 'Join Enterprise Waitlist',
      ctaUrl: '#contact',
      isPopular: false,
      accentClass: 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40',
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50 dark:bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-bold text-sm tracking-wider uppercase">
            Pricing Framework
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            Transparent, Commitment-Free Billing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We bypass subscription wall burnout. Choose the track that fits your operational scale perfectly.
          </p>
        </div>

        {/* Dual Tier Pricing Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {tiers.map((tier) => {
            const IconComponent = tier.icon;
            return (
              <div 
                key={tier.id} 
                className={`p-10 border-2 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:shadow-xl relative ${
                  tier.isPopular ? 'shadow-lg' : ''
                } ${tier.accentClass}`}
              >
                {/* Popular / Framework Tag */}
                <div className="absolute top-4 right-6">
                  <span className={`text-[10px] font-black px-2.5 py-1 rounded border tracking-wider ${
                    tier.isPopular 
                      ? 'bg-yellow-400 text-gray-900 border-yellow-500' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700'
                  }`}>
                    {tier.badge}
                  </span>
                </div>

                <div>
                  {/* Title & Icon Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center rounded-lg">
                      <IconComponent className="w-5 h-5 text-yellow-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {tier.title}
                    </h3>
                  </div>

                  {/* Large Financial Text */}
                  <div className="my-6">
                    <span className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                      {tier.pricingText}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8 min-h-[60px]">
                    {tier.description}
                  </p>

                  {/* Core Benefits Checklist */}
                  <ul className="space-y-4 mb-10 border-t border-gray-200 dark:border-gray-800/60 pt-6">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <Check className="w-4 h-4 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-400">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Lower Action Trigger Call to Action */}
                <div>
                  <a 
                    href={tier.ctaUrl} 
                    className={`group w-full py-4 font-bold text-sm rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-[1.02] ${
                      tier.isPopular
                        ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-900 shadow-md shadow-yellow-400/5'
                        : 'border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900'
                    }`}
                  >
                    {tier.ctaText}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Pricing Subtext Alert */}
        <div className="mt-12 text-center flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-500 max-w-2xl mx-auto">
          <HelpCircle className="w-4 h-4 text-yellow-400/50 flex-shrink-0" />
          <p>
            Micro tool executions (like Udo-slide) run securely in-browser without caching operational data logs. Enterprise subscription setups require custom server sandboxing.
          </p>
        </div>

      </div>
    </section>
  );
}
