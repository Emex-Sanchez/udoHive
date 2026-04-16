import { Mail, MapPin, Phone } from 'lucide-react';
import AfricanPattern from './AfricanPattern';

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-900 dark:bg-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute bottom-0 left-0 w-1/2 h-full opacity-5">
        <AfricanPattern />
      </div>

      <div className="max-w-7xl mx-auto relative px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-yellow-400 font-bold text-sm tracking-wider">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
            Let's Automate Your Business
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your operations? Book a free consultation and discover how automation can scale your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-0">
          {/* n8n Form */}
        <div className="flex items-center justify-center">
            <div className="bg-gray-800/50 backdrop-blur-sm p-12 border-2 border-yellow-400/30 text-center max-w-md w-full">
              
              <h3 className="text-2xl font-bold text-white mb-4">
                Start Your Automation Journey
              </h3>

              <p className="text-gray-300 mb-8">
                Tell us about your business and we’ll identify opportunities to automate and scale your operations.
              </p>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScqcIFy-CMuuiql5-_FvlAyibO5yzwmwT4ng5QikBiubwEVEA/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
              >
                Fill Out Form
              </a>

              <p className="text-sm text-gray-500 mt-4">
                Takes less than 2 minutes
              </p>
            </div>
          </div>

          {/* Contact Info & Audit */}
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
