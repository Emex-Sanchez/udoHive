import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Amara Okafor',
      role: 'CEO, AfriMart Online',
      company: 'E-commerce',
      text: 'udoHive transformed our entire order management system. What used to take hours now happens automatically. Our team can finally focus on growth instead of manual data entry.',
      rating: 5,
    },
    {
      name: 'Kwame Mensah',
      role: 'Operations Director, SwiftMove Logistics',
      company: 'Logistics',
      text: 'The AI chatbot they built handles 70% of our customer inquiries instantly. Our support team loves it, our customers love it, and our costs dropped significantly.',
      rating: 5,
    },
    {
      name: 'Fatima Diallo',
      role: 'Founder, Zenith Consulting',
      company: 'Professional Services',
      text: 'I was skeptical about automation at first, but udoHive made it so simple. Now my invoicing, payments, and client onboarding run like clockwork. Game changer for my business.',
      rating: 5,
    },
    {
      name: 'Chidi Nnamdi',
      role: 'CTO, PayWave Africa',
      company: 'Fintech',
      text: 'Their fraud detection pipeline is incredible. Real-time monitoring of millions of transactions with AI-powered risk scoring. Technical excellence meets practical results.',
      rating: 5,
    },
    {
      name: 'Zainab Hassan',
      role: 'Managing Partner, Heritage Legal',
      company: 'Legal Services',
      text: 'Document automation, client intake, and case management workflows that udoHive built have saved us countless hours. Professional, reliable, and truly understand business needs.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-bold text-sm tracking-wider">
            CLIENT STORIES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real feedback from businesses transformed by automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-8 border-l-4 border-yellow-400 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="font-bold text-gray-900 dark:text-white">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role}
                </div>
                <div className="text-sm text-yellow-400 font-semibold mt-1">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
