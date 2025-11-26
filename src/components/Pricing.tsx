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
    setupFeeUSD: 800,
    subscriptionUSD: 200, // yearly renewal
    priceUSD: null,
    period: 'one time setup',
    description: 'Ideal for businesses that need a simple automation system with annual hosting & maintenance.',
    features: [
      'Single workflow ',
      '1-year hosting included',
      '1-year maintenance included',
      'Basic support',
      'Fast delivery (3–7 days)',
      'Run-it-yourself option available',
      'Optional yearly renewal: $200/year'
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Growth',
    setupFeeUSD: 1500,
    subscriptionUSD: 400, // yearly renewal
    priceUSD: null,
    period: 'one time setup',
    description: 'Perfect for growing businesses that need multiple workflows with deeper automation.',
    features: [
      'Up to 3 workflows',
      'Advanced automation setup',
      'API & external service integrations',
      '1-year hosting & maintenance included',
      'Monthly optimization checks',
      'Priority support',
      'Delivery in 7–14 days',
      'Optional yearly renewal: $400/year'
    ],
    cta: 'Start Growing',
    highlight: true,
  },
  {
    name: 'Business',
    setupFeeUSD: 3000,
    subscriptionUSD: 900, // yearly renewal
    priceUSD: null,
    period: 'one time setup',
    description: 'A comprehensive automation package built for companies with complex, multi-workflow operations.',
    features: [
      'Up to 6 workflows',
      'Complex API integrations',
      'Full automation mapping',
      '1-year hosting & maintenance included',
      '24/7 support line',
      'Monthly optimization & performance review',
      'Documentation & team training',
      'Delivery in 14–30 days',
      'Optional yearly renewal: $900/year'
    ],
    cta: 'Contact Sales',
    highlight: false,
  }
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
                 {formatPrice(tier.setupFeeUSD)}
                </span>
                <span className="text-gray-600 dark:text-gray-400 ml-2">
                  {tier.period}
                </span>
              </div>

              <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Hosting: {formatPrice(tier.subscriptionUSD)} / year
                    </p>
              </div>


{/* 
<div className="mb-2">
  <span className="text-4xl font-bold text-gray-900 dark:text-white">
    {formatPrice(tier.setupFeeUSD)}
  </span>
  <span className="text-gray-600 dark:text-gray-400 ml-2 text-lg">
    one-time setup
  </span>
</div>
<div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-800">
  <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold">
    Yearly renewal: {formatPrice(tier.subscriptionUSD)} / year
  </p>
</div> */}






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
