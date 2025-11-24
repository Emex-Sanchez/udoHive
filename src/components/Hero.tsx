import { ArrowRight, MessageCircle } from 'lucide-react';
import AfricanPattern from './AfricanPattern';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gray-900 dark:bg-black overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <AfricanPattern />
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-block mb-6">
              <span className="bg-yellow-400 text-gray-900 px-4 py-2 font-bold text-sm tracking-wider">
                AFRO-TECH AUTOMATION
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              African-Powered
              <br />
              <span className="text-yellow-400">Automation</span>
              <br />
              for the Modern World
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with cutting-edge AI workflows and n8n-powered automation.
              We bring African innovation to intelligent digital operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group bg-yellow-400 text-gray-900 px-8 py-4 font-bold text-lg flex items-center justify-center hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
              >
                Book a Free Automation Audit
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://wa.me/+2349031875996"
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-yellow-400 text-yellow-400 px-8 py-4 font-bold text-lg flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Contact on WhatsApp
              </a>
            </div>

            <div className="mt-12 flex items-center space-x-8 text-white">
              <div>
                <div className="text-4xl font-bold text-yellow-400">100+</div>
                <div className="text-sm text-gray-400">Workflows Deployed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400">50+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400">24/7</div>
                <div className="text-sm text-gray-400">AI Operations</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="absolute -inset-4 bg-yellow-400/20 blur-3xl" />
            <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 border-2 border-yellow-400/30">
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-4 animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    <div className="w-3 h-3 bg-yellow-400" />
                    <div className="flex-1 h-4 bg-gray-700" />
                    <div className="w-20 h-4 bg-gray-700" />
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <div className="inline-block bg-yellow-400 text-gray-900 px-6 py-3 font-bold">
                  Automate. Optimize. Scale.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
