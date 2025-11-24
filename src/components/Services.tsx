import { Workflow, Bot, Link, Database, Wrench, TrendingUp } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Build custom n8n workflows that connect your tools, automate repetitive tasks, and streamline operations end-to-end.',
    },
    {
      icon: Bot,
      title: 'AI Agent Development',
      description: 'Deploy intelligent AI agents that handle customer support, data processing, content generation, and decision-making.',
    },
    {
      icon: Link,
      title: 'System Integrations',
      description: 'Connect your business systems seamlessly with API integrations, webhooks, and custom middleware solutions.',
    },
    {
      icon: Database,
      title: 'Data Pipeline Automation',
      description: 'Extract, transform, and load data automatically across platforms with robust ETL pipelines and real-time syncing.',
    },
    {
      icon: Wrench,
      title: 'Process Optimization',
      description: 'Audit existing workflows, identify bottlenecks, and redesign processes for maximum efficiency and scalability.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Infrastructure',
      description: 'Build automation systems that grow with your business, handling increasing complexity without breaking a sweat.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-bold text-sm tracking-wider">
            WHAT WE DO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive automation solutions powered by n8n and cutting-edge AI technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900 p-8 border-2 border-gray-200 dark:border-gray-800 hover:border-yellow-400 dark:hover:border-yellow-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-yellow-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-gray-900" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block bg-yellow-400 text-gray-900 px-10 py-4 font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
          >
            Get Started with Automation
          </a>
        </div>
      </div>
    </section>
  );
}
