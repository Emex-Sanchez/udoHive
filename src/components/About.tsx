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
              At udoHive, we are redefining business automation through bold African leadership, 
              human-centered design, and high-performance workflow engineering. We believe the future 
              of digital operations belongs to teams that innovate fearlessly and create solutions built 
              for real-world impact.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              We build fully-integrated automation systems that simplify complex processes, eliminate 
              repetitive work, and keep your operations running smoothly—day and night. From intelligent 
              workflow engines to streamlined business systems, we create solutions that scale with your growth.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 border-l-4 border-yellow-400">
                <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Fast</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Rapid deployment</p>
              </div>

              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 border-l-4 border-yellow-400">
                <Globe className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Global</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">African roots, world reach</p>
              </div>

              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 border-l-4 border-yellow-400">
                <Target className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Precise</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Tailored automation</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-yellow-400/10 transform rotate-3" />
            <div className="relative bg-gray-900 dark:bg-black p-12 border-4 border-yellow-400">
              <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                To be the leading automation agency showcasing African excellence in technology,
                delivering world-class workflow systems that empower businesses to operate smarter,
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
