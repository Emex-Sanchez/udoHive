import React from 'react';
import { Blocks, Brain, Sparkles, CreditCard, LucideIcon } from 'lucide-react';

interface StudioCoreBlock {
  id: number;
  icon: LucideIcon;
  name: string;
  description: string;
  highlight: boolean;
}

export default function TechStack(): React.JSX.Element {
  const capabilities: StudioCoreBlock[] = [
    {
      id: 1,
      icon: Blocks,
      name: 'Modular UI Framework',
      description: 'Our proprietary frontend engine built with React and TypeScript, optimized for swift browser sessions without database friction.',
      highlight: false,
    },
    {
      id: 2,
      icon: Brain,
      name: 'Google Gemini API',
      description: 'Powers our rapid micro-agents with highly detailed reasoning parameters and real-time execution speeds.',
      highlight: true,
    },
    {
      id: 3,
      icon: Sparkles,
      name: 'Anthropic Claude API',
      description: 'Our core model integration for complex text interpretation, structure planning, and advanced logic maps.',
      highlight: false,
    },
    {
      id: 4,
      icon: CreditCard,
      name: 'Paystack Payment Gateway',
      description: 'Handles high-volume regional Naira transactions instantly using simple, secure single-use pay-per-export code layers.',
      highlight: false,
    },
  ];

  const integrationStack: string[] = [
    'Google Gemini',
    'Anthropic Claude',
    'Paystack Inline JS',
    'Flutterwave Link',
    'Node.js Serverless',
    'React & TypeScript',
    'Tailwind Engine',
    'Vercel Edge Cloud',
    'Render Backend Pools',
    'Dotenv Layer Processing',
    'Git Source Control',
    'Supabase Data Links',
  ];

  return (
    <section id="tech" className="py-24 bg-gray-900 dark:bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-bold text-sm tracking-wider uppercase">
            Technology Engine
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            The Code Core Behind UdoHive Ventures
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We operate an internal automation framework leveraging world-class AI models and secure localized transactional gateways.
          </p>
        </div>

        {/* Studio Core Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {capabilities.map((item) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={item.id} 
                className={`text-center p-8 border-2 ${
                  item.highlight ? 'border-yellow-400 bg-yellow-400/5' : 'border-gray-800 bg-gray-800/50'
                } hover:border-yellow-400 transition-all duration-300 hover:scale-105 rounded-xl flex flex-col justify-between`}
              >
                <div>
                  <div className="w-16 h-16 bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center mx-auto mb-4 rounded-lg">
                    <IconComponent className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.description}</p>
                </div>
                
                {item.highlight && (
                  <div className="mt-6">
                    <span className="inline-block bg-yellow-400 text-gray-900 px-3 py-1 text-[10px] font-black tracking-wider rounded">
                      CORE INTELLIGENCE
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Supported Integrations Block */}
        <div className="bg-gray-800/30 backdrop-blur-sm border-2 border-gray-800/80 p-12 rounded-2xl">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Studio Infrastructure Integration Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {integrationStack.map((name, index) => (
              <div 
                key={index} 
                className="bg-gray-900 border border-gray-800 px-5 py-2.5 text-sm text-gray-400 rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300 font-medium select-none"
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
