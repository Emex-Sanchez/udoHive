import { ShoppingCart, Truck, Building2, CreditCard, ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const cases = [
    {
      icon: ShoppingCart,
      industry: 'E-commerce',
      company: 'AfriMart Online',
      problem: 'Manual order processing taking 3+ hours daily with frequent errors and delays',
      solution: 'Built n8n workflow automating order intake, inventory sync, payment verification, and shipping coordination',
      results: ['95% reduction in processing time', '100% order accuracy', '3x faster fulfillment'],
      color: 'border-yellow-400',
    },
    {
      icon: Truck,
      industry: 'Logistics',
      company: 'SwiftMove Logistics',
      problem: 'Customer support overwhelmed with tracking inquiries, manual route planning inefficiencies',
      solution: 'Deployed AI chatbot for instant tracking updates and automated route optimization workflows',
      results: ['70% reduction in support tickets', '40% fuel cost savings', '24/7 customer support'],
      color: 'border-yellow-400',
    },
    {
      icon: Building2,
      industry: 'Small Business',
      company: 'Zenith Consulting',
      problem: 'Invoice generation, payment reminders, and client onboarding all done manually',
      solution: 'Integrated CRM with automated billing, payment tracking, and onboarding sequences',
      results: ['60% faster invoicing', '90% on-time payments', '5 hours saved weekly'],
      color: 'border-yellow-400',
    },
    {
      icon: CreditCard,
      industry: 'Fintech',
      company: 'PayWave Africa',
      problem: 'High-volume transaction monitoring and fraud detection requiring manual review',
      solution: 'Built real-time data pipeline with AI fraud detection and automated risk scoring',
      results: ['99.7% fraud detection rate', 'Real-time monitoring', 'Scalable to 10M+ txns'],
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
            Real automation challenges solved with intelligent workflows
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
