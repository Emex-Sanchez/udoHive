import { Code2, Cpu, Webhook, Blocks } from 'lucide-react';

export default function TechStack() {
  const tools = [
    {
      icon: Blocks,
      name: 'n8n',
      description: 'Our core automation engine for building powerful workflows',
      highlight: true,
    },
    {
      icon: Cpu,
      name: 'AI Models',
      description: 'OpenAI, Claude, custom ML models for intelligent processing',
    },
    {
      icon: Webhook,
      name: 'APIs & Webhooks',
      description: 'RESTful APIs, GraphQL, real-time webhook integrations',
    },
    {
      icon: Code2,
      name: 'Custom Code',
      description: 'Python, JavaScript, TypeScript for specialized solutions',
    },
  ];

  const integrations = [
    'Slack', 'Google Workspace', 'Microsoft 365', 'Salesforce', 'HubSpot', 'Stripe',
    'Shopify', 'WooCommerce', 'Airtable', 'Notion', 'Zapier', 'Make',
  ];

  return (
    <section id="tech" className="py-24 bg-gray-900 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-bold text-sm tracking-wider">
            TECHNOLOGY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Our Tech Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powered by industry-leading tools and custom-built solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div
                key={index}
                className={`text-center p-8 border-2 ${
                  tool.highlight
                    ? 'border-yellow-400 bg-yellow-400/5'
                    : 'border-gray-800 bg-gray-800/50'
                } hover:border-yellow-400 transition-all duration-300 hover:scale-105`}
              >
                <div className="w-16 h-16 bg-yellow-400 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
                <p className="text-gray-400 text-sm">{tool.description}</p>
                {tool.highlight && (
                  <div className="mt-4">
                    <span className="inline-block bg-yellow-400 text-gray-900 px-3 py-1 text-xs font-bold">
                      PRIMARY ENGINE
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="bg-gray-800/50 border-2 border-gray-800 p-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Seamless Integrations With
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-700 px-6 py-3 text-gray-300 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300"
              >
                {integration}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
