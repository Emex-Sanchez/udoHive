import { Mail, MapPin, Phone, Send } from 'lucide-react';
import AfricanPattern from './AfricanPattern';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-1/2 h-full opacity-5">
        <AfricanPattern />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-bold text-sm tracking-wider">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            Let's Automate Your Business
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to transform your operations? Book a free consultation and discover how automation can scale your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Service Interested In
                </label>
                <select className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-yellow-400 focus:outline-none transition-colors">
                  <option>Workflow Automation</option>
                  <option>AI Agent Development</option>
                  <option>System Integrations</option>
                  <option>Data Pipeline Automation</option>
                  <option>Process Optimization</option>
                  <option>Not Sure Yet</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Tell Us About Your Project
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                  placeholder="Describe what you want to automate..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-gray-900 py-4 font-bold text-lg flex items-center justify-center hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-900 dark:bg-black p-8 border-l-8 border-yellow-400">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-yellow-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-white mb-1">Email</div>
                    <a
                      href="mailto:udohive.ai@gmail.com"
                      className="text-gray-300 hover:text-yellow-400 transition-colors"
                    >
                      udohive.ai@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-yellow-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-white mb-1">Phone</div>
                    <a
                      href="tel:+2349031875996"
                      className="text-gray-300 hover:text-yellow-400 transition-colors"
                    >
                      +234-90-3187-5996
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-yellow-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-white mb-1">Location</div>
                    <p className="text-gray-300">
                      Abuja, Nigeria
                      <br />
                      Remote Operations Worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-400 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Free Automation Audit
              </h3>
              <p className="text-gray-900 mb-6">
                Not sure where to start? Book a free 30-minute consultation where we analyze
                your current processes and identify automation opportunities.
              </p>
              <a
                href="#contact"
                className="inline-block bg-gray-900 text-yellow-400 px-6 py-3 font-bold hover:bg-gray-800 transition-colors"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
