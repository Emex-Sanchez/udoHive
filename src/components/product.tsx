import { ArrowRight, Bot, Zap, TrendingUp } from 'lucide-react';

export default function AIAgentsLibrary() {

  
  const agents = [
    {
      name: 'Email Assistant Agent',
      price: '$1',
      period: '/month',
      description: 'Automatically sort, label, and respond to routine emails with intelligent categorization.',
      category: 'Productivity',
      usageTime: '24/7 Active',
      popular: false,
    },
    {
      name: 'Social Media Manager',
      price: '$5',
      period: '/month',
      description: 'Schedule posts, analyze engagement, and auto-respond to comments across multiple platforms.',
      category: 'Marketing',
      usageTime: 'Multi-platform',
      popular: false,
    },
    {
      name: 'Lead Qualification Bot',
      price: '$15',
      period: '/month',
      description: 'Automatically score and route leads based on behavior, demographics, and engagement patterns.',
      category: 'Sales',
      usageTime: 'Real-time',
      popular: true,
    },
    {
      name: 'Customer Support AI',
      price: '$29',
      period: '/month',
      description: 'Handle tier-1 support tickets, FAQs, and escalate complex issues to human agents intelligently.',
      category: 'Support',
      usageTime: '24/7 Available',
      popular: false,
    },
    {
      name: 'Data Analysis Agent',
      price: '$49',
      period: '/month',
      description: 'Extract insights from spreadsheets, databases, and generate automated reports with visualizations.',
      category: 'Analytics',
      usageTime: 'On-demand',
      popular: false,
    },
    {
      name: 'Content Creation AI',
      price: '$35',
      period: '/month',
      description: 'Generate blog posts, social content, and marketing copy tailored to your brand voice.',
      category: 'Content',
      usageTime: 'Unlimited',
      popular: false,
    },
    {
      name: 'Inventory Monitor Agent',
      price: '$12',
      period: '/month',
      description: 'Track stock levels, predict shortages, and automatically reorder supplies before you run out.',
      category: 'E-commerce',
      usageTime: 'Continuous',
      popular: false,
    },
    {
      name: 'Meeting Scheduler Bot',
      price: '$8',
      period: '/month',
      description: 'Coordinate calendars, find optimal meeting times, and send automated reminders to participants.',
      category: 'Productivity',
      usageTime: 'Calendar sync',
      popular: false,
    },
    {
      name: 'Invoice Processing AI',
      price: '$25',
      period: '/month',
      description: 'Extract data from invoices, match with POs, flag discrepancies, and route for approval.',
      category: 'Finance',
      usageTime: 'Batch processing',
      popular: false,
    },
  ];

  return (
    <section id="ai-agents" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-bold text-sm tracking-wider">
            PUBLIC AI AGENT LIBRARY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            Ready-to-Deploy AI Agents
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Plug-and-play AI agents for automating tasks across your business. Browse, subscribe, and activate instantly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <article
              key={index}
              className="bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-yellow-400 dark:hover:border-yellow-400 transition-all duration-300 hover:shadow-xl group relative"
            >
              {agent.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 text-sm font-bold z-10">
                  MOST POPULAR
                </div>
              )}

              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-yellow-400/20 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Bot className="w-20 h-20 text-gray-400 dark:text-gray-500 opacity-50" />
                </div>
                <div className="absolute bottom-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 font-bold text-sm">
                  {agent.price}{agent.period}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-yellow-400 text-sm font-bold">
                    {agent.category}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center">
                    <Zap className="w-3 h-3 mr-1" />
                    {agent.usageTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {agent.name}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {agent.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    AI-Powered
                  </div>

                  <button className="text-yellow-400 font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                    Activate
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#ai-agents"
            className="inline-block border-2 border-yellow-400 text-yellow-400 px-8 py-4 font-bold hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300"
          >
            Browse All AI Agents
          </a>
        </div>
      </div>
    </section>
  );
}