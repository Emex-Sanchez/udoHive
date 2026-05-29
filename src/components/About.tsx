import React from 'react';
import { Zap, ShieldCheck, Flame } from 'lucide-react';
import AfricanPattern from './AfricanPattern';

export default function About(): React.JSX.Element {
  return (
    <section id="about" className="py-24 bg-white dark:bg-black relative overflow-hidden border-t border-gray-900">
      {/* Decorative Traditional Mesh Overlay */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
        <AfricanPattern />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Studio Manifesto and Value Proposition */}
          <div>
            <div className="inline-block mb-4">
              <span className="text-yellow-400 font-bold text-sm tracking-wider uppercase">
                Our Manifesto
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Venture Building <br />Meet <span className="text-yellow-400">Lean Automation</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              At UdoHive, we are transforming the African digital workflow landscape. We do not just build isolated software—we systematically incubate and deploy single-purpose automation engines engineered to eradicate workplace friction.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Our studio architecture operates on a strict dual pipeline: fast-access micro tools that eliminate subscription fatigue with pay-per-export validation, and hardened, enterprise-grade platforms tailored natively for high-scale organizational compliance.
            </p>
            
            {/* Value Vectors Grid */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-900/40 border-l-4 border-yellow-400 rounded-r shadow-sm">
                <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Zero Friction</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">No forced log-ins for individual tools</p>
              </div>
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-900/40 border-l-4 border-yellow-400 rounded-r shadow-sm">
                <ShieldCheck className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Transparent</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">No sneaky automatic card renewals</p>
              </div>
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-900/40 border-l-4 border-yellow-400 rounded-r shadow-sm">
                <Flame className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Localized</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Built for regional context & currency</p>
              </div>
            </div>
          </div>

          {/* Right Column: Mission, Vision, and Structural Taglines */}
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-400/10 transform rotate-3 rounded-lg" />
            <div className="relative bg-gray-900 dark:bg-gray-900/50 backdrop-blur-sm p-12 border-4 border-yellow-400 space-y-10 rounded-lg shadow-2xl">
              
              {/* Mission Statement */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  To systematically develop, fund, and deploy an interconnected web of automation micro-agents and deep business enterprise stacks that empower African operators to build value without friction.
                </p>
              </div>
              
              {/* Geometric Divider Line */}
              <div className="border-t border-yellow-400/20" />
              
              {/* Vision Statement */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  To serve as Africa’s premier automation foundry, defining a new era of business software where usage is fluid, commitments are voluntary, and execution is instant.
                </p>
              </div>
              
              {/* Corporate Signature Tagline */}
              <div className="border-t-2 border-yellow-400 pt-6">
                <p className="text-yellow-400 font-extrabold text-lg tracking-wide uppercase">
                  "No Signups. No Commitments. Just Utility."
                </p>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
