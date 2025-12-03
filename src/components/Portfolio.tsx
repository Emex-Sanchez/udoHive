import { ShoppingCart, Truck, Building2, CreditCard, ArrowRight } from 'lucide-react';

export default function Portfolio() {
 const cases = [
  {
    icon: ShoppingCart,
    industry: 'E-commerce',
    company: 'AfriMart Online',
    problem:
      'Order processing was slow, error-prone, and required over 3 hours of manual work every day.',
    solution:
      'Implemented a fully automated order management system handling order intake, inventory updates, payment validation, and delivery coordination.',
    results: [
      '95% reduction in processing time',
      'Zero processing errors',
      '3× faster fulfillment speed',
    ],
    color: 'border-yellow-400',
  },
  {
    icon: Truck,
    industry: 'Logistics',
    company: 'SwiftMove Logistics',
    problem:
      'Support team was overloaded with tracking requests, and route planning required heavy manual effort.',
    solution:
      'Deployed an AI assistant for instant shipment updates and introduced smart automation for optimized route planning.',
    results: [
      '70% drop in support workload',
      '40% savings on fuel and route costs',
      '24/7 self-service customer support',
    ],
    color: 'border-yellow-400',
  },
  {
    icon: Building2,
    industry: 'Professional Services',
    company: 'Zenith Consulting',
    problem:
      'Client onboarding, invoicing, and payment follow-up were all done manually, causing delays and inconsistencies.',
    solution:
      'Integrated their CRM with automated billing flows, onboarding sequences, and real-time payment tracking.',
    results: [
      '60% faster invoicing cycles',
      '90% increase in on-time payments',
      '5+ hours saved weekly',
    ],
    color: 'border-yellow-400',
  },
  {
    icon: CreditCard,
    industry: 'Fintech',
    company: 'PayWave Africa',
    problem:
      'Large-scale transaction monitoring required manual review and slowed down fraud detection.',
    solution:
      'Built a real-time monitoring system supported by automated risk analysis and AI-powered fraud detection.',
    results: [
      '99.7% fraud detection accuracy',
      'Instant transaction monitoring',
      'Scales to 10M+ monthly transactions',
    ],
    color: 'border-yellow-400',
  },
];

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-bold text-sm tracking-wider">
            SUCCESS STORIES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            Case Studies
          </h2>
         <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A showcase of how intelligent automation and AI are transforming real businesses across multiple industries.
        </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((caseStudy, index) => {
            const Icon = caseStudy.icon;
            return (
              <div
                key={index}
                className={`bg-gray-50 dark:bg-gray-800 p-8 border-l-8 ${caseStudy.color} hover:shadow-2xl transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-sm text-yellow-400 font-bold mb-2">
                      {caseStudy.industry}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {caseStudy.company}
                    </h3>
                  </div>
                  <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-gray-900" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Challenge</h4>
                    <p className="text-gray-600 dark:text-gray-300">{caseStudy.problem}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Solution</h4>
                    <p className="text-gray-600 dark:text-gray-300">{caseStudy.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Results</h4>
                    <ul className="space-y-2">
                      {caseStudy.results.map((result, i) => (
                        <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                          <ArrowRight className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
