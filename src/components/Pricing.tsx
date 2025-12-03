import { ArrowRight, Check } from 'lucide-react';

export default function Pricing() {
  const benefits = [
    'Custom automation tailored to your workflow',
    'AI-driven enhancements designed to match your business goals',
    'Seamless integration with existing tools and systems',
    'End-to-end setup, testing, and deployment',
    'Documentation, team training & ongoing support',
    'Scalable systems built for long-term growth',
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50 dark:bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-bold text-sm tracking-wider">
            PRICING
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            Tailored to Your Business Needs
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Every project is unique. We evaluate your processes, requirements, and desired
            outcomes to provide a solution that fits perfectly.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white dark:bg-gray-900 p-10 border-2 border-gray-200 dark:border-gray-800 hover:border-yellow-400 transition-all duration-300 max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Custom Quote for Your Project
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Pricing is based on workflow complexity, integration requirements, and the 
            level of automation your business needs. Our team ensures you get a solution 
            built for efficiency, reliability, and long-term value.
          </p>

          {/* Benefits */}
          <ul className="space-y-4 mb-10">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-start">
                <Check className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className="block text-center bg-yellow-400 text-gray-900 py-4 font-bold hover:bg-yellow-300 transition-all duration-300"
          >
            Request a Quote
            <ArrowRight className="inline-block ml-2 w-5 h-5" />
          </a>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            All quotes include a complimentary consultation to help assess your goals and 
            automation opportunities.
          </p>
        </div>

      </div>
    </section>
  );
}
