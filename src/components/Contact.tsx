import React from 'react';
import { Mail, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';
import AfricanPattern from './AfricanPattern';

export default function Contact(): React.JSX.Element {
  return (
    <section id="contact" className="bg-gray-900 dark:bg-black relative overflow-hidden border-t border-gray-900 py-24">
      {/* Background Graphic Pattern Grid */}
      <div className="absolute bottom-0 left-0 w-1/2 h-full opacity-5 pointer-events-none">
        <AfricanPattern />
      </div>
      
      <div className="max-w-7xl mx-auto relative px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-bold text-sm tracking-wider uppercase">
            Corporate Communications
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
            Partner With the Studio
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Secure early enterprise access or submit structured integration inquiries. All communications are reviewed directly by our engineering board.
          </p>
        </div>

        {/* Action Blocks Layout Split */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Left Block: Direct Pre-Registration / Form Hub */}
          <div className="flex items-center justify-center h-full">
            <div className="bg-gray-800/40 backdrop-blur-sm p-12 border-2 border-yellow-400/20 hover:border-yellow-400/40 text-center rounded-2xl w-full h-full flex flex-col justify-center items-center shadow-xl transition-colors">
              <span className="text-4xl mb-4">📋</span>
              <h3 className="text-2xl font-bold text-white mb-4">
                Enterprise Intake Hub
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
                Apply for priority validation access to **Udo-Afrika** or **StockBud**, submit secure database configuration briefs, or register corporate organization profiles.
              </p>
              <a 
                href="https://google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-md shadow-yellow-400/5 w-full sm:w-auto text-sm"
              >
                Access Formal Intake Registry
                <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <p className="text-xs text-gray-500 mt-4">
                Submissions are parsed, verified, and assigned internally within 1 business day.
              </p>
            </div>
          </div>

          {/* Right Block: Professional Contact Nodes & Corporate Desk */}
          <div className="space-y-8 flex flex-col justify-between h-full">
            
            {/* Contact Details Segment Card */}
            <div className="bg-gray-800/20 backdrop-blur-sm p-8 border-l-8 border-yellow-400 rounded-r-xl shadow-md flex-1 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-8 tracking-tight">
                Official Directory
              </h3>
              <div className="space-y-8">
                
                {/* Email Channel Block */}
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center rounded-lg mr-4 flex-shrink-0">
                    <Mail className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Primary Communications Desk</div>
                    <a 
                      href="mailto:udohive.ai@gmail.com" 
                      className="text-sm font-semibold text-gray-200 hover:text-yellow-400 transition-colors break-all underline decoration-yellow-400/30 underline-offset-4"
                    >
                      udohive.ai@gmail.com
                    </a>
                  </div>
                </div>

                {/* Geography Operations Block */}
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center rounded-lg mr-4 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Studio Operations Base</div>
                    <p className="text-sm font-semibold text-gray-200 leading-relaxed">
                      Abuja, Nigeria <span className="text-gray-500 font-normal">| Distributed Infrastructure Management Worldwide</span>
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Studio Venture Syndicate Callout Banner */}
            <div className="bg-gray-800/30 border-2 border-gray-800 p-8 rounded-xl shadow-lg flex items-start space-x-4">
              <ShieldCheck className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                  Venture Syndicate & Institutional Routing
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  For capitalization proposals, technological partnerships, or enterprise audit reviews, please send a formal deck or brief directly to our primary communications desk at <span className="text-white font-medium">udohive.ai@gmail.com</span>. Our compliance officer will follow up via email within 48 hours.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
