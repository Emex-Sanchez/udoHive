import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import AfricanPattern from './AfricanPattern';

interface TrackItem {
  id: number;
  icon: string;
  title: string;
  description: string;
  colorClass: string;
}

export default function Hero(): React.JSX.Element {
  const ecosystemTracks: TrackItem[] = [
    { 
      id: 1, 
      icon: '⚡', 
      title: 'Micro Automation Pipeline', 
      description: 'Single-action tools. No registration required. Local pay-per-export billing models.', 
      colorClass: 'bg-yellow-400' 
    },
    { 
      id: 2, 
      icon: '🏢', 
      title: 'Enterprise Core Workflows', 
      description: 'Multi-user authentication, continuous database syncing, and monthly subscription tiers.', 
      colorClass: 'bg-amber-500' 
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gray-900 dark:bg-black overflow-hidden">
      {/* Background Graphic Patterns */}
      <div className="absolute inset-0 opacity-10">
        <AfricanPattern />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Core Studio Value Proposition */}
          <div className="animate-fade-in-up">
            <div className="inline-block mb-6">
              <span className="bg-yellow-400 text-gray-900 px-4 py-2 font-bold text-sm tracking-wider uppercase">
                Automation Venture Studio
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              We Build Task <br />
              <span className="text-yellow-400">Automation</span> <br />
              With Zero Friction.
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              UdoHive engineers specialized AI agents and enterprise workflows for Africa. No accounts. No monthly subscriptions. Try our micro tools completely free and pay in Naira only when you export your results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#pipelines" 
                className="group bg-yellow-400 text-gray-900 px-8 py-4 font-bold text-lg flex items-center justify-center hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
              >
                Explore Active Ventures
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="mailto:udohive.ai@gmail.com" 
                className="group border-2 border-yellow-400 text-yellow-400 px-8 py-4 font-bold text-lg flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300"
              >
                <Mail className="mr-2 w-5 h-5" /> Contact Studio Desk
              </a>
            </div>
          </div>

          {/* Right Column: Visual Component Explaining the Two Tiers */}
          <div className="relative animate-fade-in-right">
            <div className="absolute -inset-4 bg-yellow-400/20 blur-3xl" />
            <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 border-2 border-yellow-400/30">
              <h3 className="text-sm font-bold text-yellow-400 uppercase tracking-widest mb-6">Active Ecosystem Tracks</h3>
              <div className="space-y-6">
                
                {/* Typed mapping of tracking tracks */}
                {ecosystemTracks.map((track) => (
                  <div key={track.id} className="flex items-start space-x-4 p-3 bg-gray-900/40 border border-gray-800 rounded">
                    <div className={`w-3 h-3 ${track.colorClass} mt-1.5 flex-shrink-0`} />
                    <div>
                      <h4 className="font-bold text-white text-sm">
                        <span className="mr-1.5">{track.icon}</span>
                        {track.title}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1">{track.description}</p>
                    </div>
                  </div>
                ))}

              </div>
              <div className="mt-8 text-center">
                <div className="inline-block bg-yellow-400 text-gray-900 px-6 py-3 font-bold text-sm tracking-wide">
                  No Commitment. Instant Execution.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
