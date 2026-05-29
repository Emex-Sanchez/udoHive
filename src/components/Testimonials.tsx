import React from 'react';
import { Lightbulb, Code2, ShieldAlert, Rocket, LucideIcon } from 'lucide-react';

interface HatchingStep {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function Process(): React.JSX.Element {
  const steps: HatchingStep[] = [
    {
      id: 1,
      title: "Identify Workflow Friction",
      description: "We analyze high-frequency corporate tasks, business communication bottlenecks, and repetitive academic workflows across Africa to locate structural automation opportunities.",
      icon: Lightbulb,
    },
    {
      id: 2,
      title: "Rapid Agent Prototyping",
      description: "Our core studio engineering squad builds a high-utility, functional Minimum Viable Product inside weeks—leveraging state-of-the-art models like Gemini and Claude API.",
      icon: Code2,
    },
    {
      id: 3,
      title: "Frictionless Deployment",
      description: "We strip out registration barriers. The app is launched via a secure pay-per-export architecture using localized Paystack payment flows directly in-browser.",
      icon: ShieldAlert,
    },
    {
      id: 4,
      title: "Studio Scale & Spin-Out",
      description: "Once a tool validates transaction velocity, we structure its enterprise subscription modules, establish permanent databases, and spin it out into an independent venture.",
      icon: Rocket,
    },
  ];

  return (
    <section id="process" className="py-24 bg-white dark:bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-bold text-sm tracking-wider uppercase">
            The Company Factory
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            Our Venture Hatching Process
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            How UdoHive conceptualizes, builds, and deploys scalable micro utilities and enterprise systems.
          </p>
        </div>

        {/* Steps Loop Layout Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={step.id} 
                className="relative bg-gray-50 dark:bg-gray-900/40 p-8 border-t-4 border-yellow-400 rounded-b-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm flex flex-col pt-12"
              >
                {/* Visual Step Counter Number Card */}
                <div className="absolute -top-4 left-6 bg-yellow-400 text-gray-900 font-extrabold px-3 py-1 text-xs tracking-wider rounded-sm select-none shadow-sm">
                  {`0${index + 1}`}
                </div>

                {/* Vector Layout Container Icon */}
                <div className="w-12 h-12 bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center rounded-lg mb-4">
                  <IconComponent className="w-6 h-6 text-yellow-400" />
                </div>

                {/* Text Context Items */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
