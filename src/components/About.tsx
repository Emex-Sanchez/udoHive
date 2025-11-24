import { Zap, Globe, Target } from 'lucide-react';
import AfricanPattern from './AfricanPattern';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <AfricanPattern />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block mb-4">
              <span className="text-yellow-400 font-bold text-sm tracking-wider">
                ABOUT UDOHIVE
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              African Innovation Meets
              <span className="text-yellow-400"> Smart Automation</span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              At udoHive, we're pioneering the future of business automation with bold African leadership
              and cutting-edge AI technology. We believe that the next generation of workflow innovation
              comes from diverse perspectives and fearless execution.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Powered by n8n and custom AI solutions, we transform complex business operations into
              seamless automated workflows. From data pipelines to intelligent agents, we build systems
              that work while you focus on growth.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 border-l-4 border-yellow-400">
                <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Fast</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Lightning-quick deployment</p>
              </div>

              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 border-l-4 border-yellow-400">
                <Globe className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Global</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">African roots, world reach</p>
              </div>

              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 border-l-4 border-yellow-400">
                <Target className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Precise</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Custom-built solutions</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-yellow-400/10 transform rotate-3" />
            <div className="relative bg-gray-900 dark:bg-black p-12 border-4 border-yellow-400">
              <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                To be the leading AI automation agency showcasing African excellence in technology,
                delivering world-class workflow solutions that empower businesses to operate smarter,
                faster, and more efficiently.
              </p>
              <div className="border-t-2 border-yellow-400 pt-6">
                <p className="text-yellow-400 font-bold text-lg">
                  "Innovation without borders. Excellence without compromise."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
