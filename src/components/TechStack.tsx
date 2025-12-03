import { Code2, Cpu, Webhook, Blocks } from 'lucide-react';

export default function TechStack() {
  const capabilities = [
    {
      icon: Blocks,
      name: 'Automation Engine',
      description: 'Our backbone for orchestrating complex workflows and business processes at scale.',
      highlight: true,
    },
    {
      icon: Cpu,
      name: 'Intelligent Systems',
      description: 'AI-powered logic, decision-making, and smart task execution across workflows.',
    },
    {
      icon: Webhook,
      name: 'Secure Integrations',
      description: 'Fast, reliable connections to the tools and platforms your business already uses.',
    },
    {
      icon: Code2,
      name: 'Custom Development',
      description: 'Purpose-built code and tailored automation logic designed for unique challenges.',
    },
  ];

  const integrations = [
    'Slack', 'Google Workspace', 'Microsoft 365', 'Salesforce', 'HubSpot', 'Stripe',
    'Shopify', 'WooCommerce', 'Airtable', 'Notion', 'Business CRMs', 'Payment Systems',
  ];

  return (
    <section id="tech" className="py-24 bg-gray-900 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="text-yellow-400 font-bold text-sm tracking-wider">
            TECHNOLOGY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            The Engine Behind Our Automation Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine intelligent automation, secure integrations, and custom development to power fast,
            scalable systems that help businesses run smarter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`text-center p-8 border-2 ${
                  item.highlight
                    ? 'border-yellow-400 bg-yellow-400/5'
                    : 'border-gray-800 bg-gray-800/50'
                } hover:border-yellow-400 transition-all duration-300 hover:scale-105`}
              >
                <div className="w-16 h-16 bg-yellow-400 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-gray-900" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>

                {item.highlight && (
                  <div className="mt-4">
                    <span className="inline-block bg-yellow-400 text-gray-900 px-3 py-1 text-xs font-bold">
                      CORE SYSTEM
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="bg-gray-800/50 border-2 border-gray-800 p-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Integrations We Support
          </h3>

          <div className="flex flex-wrap justify-center gap-6">
            {integrations.map((name, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-700 px-6 py-3 text-gray-300 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300"
              >
                {name}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
