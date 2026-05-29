import React from 'react';
import { Lightbulb, Code2, CreditCard, ShieldCheck, Zap, Layers, LucideIcon } from 'lucide-react';

interface StudioCapability {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function Services(): React.JSX.Element {
  const capabilities: StudioCapability[] = [
    {
      id: 1,
      icon: Lightbulb,
      title: 'Internal Venture Ideation',
      description: 'We actively track regional market operational gaps, workflow bottlenecks, and shifts in LLM models to invent unique software concepts from scratch.',
    },
    {
      id: 2,
      icon: Code2,
      title: 'Rapid Agent Prototyping',
      description: 'Our in-house engineering squad rapidly ships high-utility Minimum Viable Products—turning advanced AI logic into ready-to-use software features in weeks.',
    },
    {
      id: 3,
      icon: CreditCard,
      title: 'Frictionless Payment Routing',
      description: 'We integrate modular web architectures using Paystack and Flutterwave, enabling single-transaction pay-per-export capabilities with no user registration.',
    },
    {
      id: 4,
      icon: ShieldCheck,
      title: 'Enterprise Architecture Hardening',
      description: 'We build resilient cloud layers with secure user authentication, team nodes, and database architectures for products scaled into subscription models.',
    },
    {
      id: 5,
      icon: Zap,
      title: 'Localized Context Fine-Tuning',
      description: 'We prompt-engineer and coordinate Gemini and Claude models to deeply process regional African workflows, business syntax, currencies, and corporate data layouts.',
    },
    {
      id: 6,
      icon: Layers,
      title: 'Venture Capital Spin-Outs',
      description: 'Once an internal tool validates its user base and generates transaction volume, we provision seed infrastructure and spin it out into an independent business.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-bold text-sm tracking-wider uppercase">
            Studio Engine
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            How We Build Ventures
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            UdoHive operates a predictable, systematic company assembly line optimized for building software utilities across Africa.
          </p>
        </div>

        {/* Studio Capabilities Layout Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability) => {
            const IconComponent = capability.icon;
            return (
              <div 
                key={capability.id} 
                className="group bg-white dark:bg-gray-900 p-8 border-2 border-gray-200 dark:border-gray-800/80 hover:border-yellow-400 dark:hover:border-yellow-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 rounded-xl flex flex-col"
              >
                <div className="w-16 h-16 bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-yellow-400 transition-all duration-300 rounded-lg">
                  <IconComponent className="w-8 h-8 text-yellow-400 group-hover:text-gray-900 transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {capability.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  {capability.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Lower Call-to-Action Link */}
        <div className="mt-16 text-center">
          <a 
            href="#pipelines" 
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-10 py-4 font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md shadow-yellow-400/5"
          >
            Launch an Active Venture Agent
          </a>
        </div>

      </div>
    </section>
  );
}
