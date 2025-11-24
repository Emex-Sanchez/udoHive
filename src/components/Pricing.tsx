import { Check, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Pricing() {
  const [currency, setCurrency] = useState<'USD' | 'NGN'>('USD');

  const exchangeRate = 1550;

  const formatPrice = (usdPrice: number) => {
    if (currency === 'USD') {
      return `$${usdPrice}`;
    }
    return `₦${Math.round(usdPrice * exchangeRate).toLocaleString()}`;
  };

  const tiers = [
    {
      name: 'Starter',
      priceUSD: 25,
      period: 'per month',
      description: 'Perfect for small businesses getting started with automation',
      setupFeeUSD: 800,
      features: [
        'Up to 3 automated workflows',
        'Basic n8n setup & configuration',
        'Standard integrations (5 apps)',
        'Email & chat support',
        'Monthly maintenance & monitoring',
        'Documentation & training',
        'Quarterly optimization review',
      ],
      cta: 'Get Started',
      highlight: false,
    },
    {
      name: 'Growth',
      priceUSD: 50,
      period: 'per month',
      description: 'For growing businesses ready to scale with advanced automation',
      setupFeeUSD: 1500,
      features: [
        'Up to 10 automated workflows',
        'Advanced n8n workflows',
        'Unlimited integrations',
        'AI agent development',
        'Priority support (24-hour response)',
        'Monthly maintenance & optimization',
        'Custom dashboard & reporting',
        'Bi-weekly strategy calls',
      ],
      cta: 'Start Growing',
      highlight: true,
    },
    {
      name: 'Enterprise',
      priceUSD: null,
      period: 'per month',
      description: 'Full-scale automation infrastructure for large operations',
      setupFeeUSD: null,
      features: [
        'Unlimited workflows',
        'Custom AI solutions',
        'Dedicated automation engineer',
        'Advanced analytics & reporting',
        '24/7 priority support',
        'Continuous monitoring & maintenance',
        'Performance monitoring & scaling',
        'Weekly strategy sessions',
        'White-glove onboarding & support',
      ],
      cta: 'Contact Sales',
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-bold text-sm tracking-wider">
            PRICING
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transparent pricing for automation that scales with your business
          </p>

          <div className="flex items-center justify-center gap-4 mt-8">
            <span className="text-gray-700 dark:text-gray-300 font-semibold">Currency:</span>
            <div className="flex gap-2 bg-white dark:bg-gray-900 p-1 border-2 border-gray-200 dark:border-gray-800 rounded">
              <button
                onClick={() => setCurrency('USD')}
                className={`px-4 py-2 font-semibold transition-all ${
                  currency === 'USD'
                    ? 'bg-yellow-400 text-gray-900'
                    : 'text-gray-700 dark:text-gray-300 hover:text-yellow-400'
                }`}
              >
                USD
              </button>
              <button
                onClick={() => setCurrency('NGN')}
                className={`px-4 py-2 font-semibold transition-all ${
                  currency === 'NGN'
                    ? 'bg-yellow-400 text-gray-900'
                    : 'text-gray-700 dark:text-gray-300 hover:text-yellow-400'
                }`}
              >
                NGN
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-900 p-8 border-2 ${
                tier.highlight
                  ? 'border-yellow-400 shadow-2xl scale-105'
                  : 'border-gray-200 dark:border-gray-800'
              } hover:border-yellow-400 transition-all duration-300`}
            >
              {tier.highlight && (
                <div className="bg-yellow-400 text-gray-900 text-center py-2 -mt-8 -mx-8 mb-6 font-bold text-sm">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {tier.name}
              </h3>

              <div className="mb-2">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  {tier.priceUSD !== null ? formatPrice(tier.priceUSD) : 'Custom'}
                </span>
                <span className="text-gray-600 dark:text-gray-400 ml-2">
                  {tier.period}
                </span>
              </div>

              <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {tier.setupFeeUSD !== null ? `${formatPrice(tier.setupFeeUSD)} one-time setup` : 'Custom setup included'}
                </p>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {tier.description}
              </p>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-4 font-bold transition-all duration-300 ${
                  tier.highlight
                    ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
                    : 'border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900'
                }`}
              >
                {tier.cta}
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            All plans include a free consultation. Setup fee covers initial workflow implementation and integrations.
            <a href="#contact" className="text-yellow-400 hover:underline ml-2">
              Contact us for details
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
