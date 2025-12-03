import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    {
      question: 'What exactly is workflow automation?',
      answer:
        'Workflow automation uses technology to connect your business tools and handle repetitive tasks automatically. Instead of doing routine processes manually—like sending emails, updating spreadsheets, or transferring data—automations execute them instantly and accurately in the background.',
    },
    {
      question: 'How do AI agents work?',
      answer:
        'AI agents are intelligent systems designed to perform tasks such as customer support, data processing, or content generation. They understand natural language, make decisions, and execute actions just like a human would—only faster, more consistently, and without fatigue.',
    },
    {
      question: 'Is automation better than hiring more people?',
      answer:
        'Automation doesn’t replace your team—it empowers them. It removes repetitive work so your staff can focus on strategy, creativity, and customer experience. It’s faster, more accurate, and significantly more cost-effective than scaling purely through manpower.',
    },
    {
      question: 'How long does it take to implement automation?',
      answer:
        'Simple automations can be deployed within 1–2 weeks, while larger systems with multiple integrations typically take 4–8 weeks. After a consultation, we provide a clear timeline tailored to your business.',
    },
    {
      question: 'Will automation work with my existing tools?',
      answer:
        'Yes. Modern automation connects seamlessly with CRM platforms, marketing tools, payment systems, spreadsheets, databases, and even custom in-house applications. If your system has an API or webhook, we can integrate it.',
    },
    {
      question: 'What if something breaks?',
      answer:
        'We include monitoring, maintenance, and rapid support. Your workflows are built with safety nets such as retries, alerts, and error handling, ensuring your operations stay stable even if something goes wrong.',
    },
    {
      question: 'Do I need technical knowledge to use the automations?',
      answer:
        'Not at all. Once set up, everything runs automatically. We also provide documentation and training so your team understands how things work without needing technical expertise.',
    },
    {
      question: 'How much time or money can automation save?',
      answer:
        'Most businesses experience a 60–90% reduction in time spent on manual tasks, 40–70% savings on operational costs, and major improvements in speed, accuracy, and consistency. Your exact ROI depends on your workflow.',
    },
    {
      question: 'Can you automate specific or unique business processes?',
      answer:
        'Absolutely. We specialize in custom automation designed for businesses with non-standard or highly specific workflows. If the process involves data, decisions, or actions—we can automate it.',
    },
    {
      question: 'What happens after the initial setup?',
      answer:
        'Your automations continue running 24/7. We provide ongoing maintenance, optimization, and support. You can also request new workflows as your business evolves.',
    },
  ];


  return (
    <section id="faq" className="py-24 bg-gray-50 dark:bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-bold text-sm tracking-wider">
            QUESTIONS & ANSWERS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about automation with udoHive
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 hover:border-yellow-400 dark:hover:border-yellow-400 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white pr-8">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <Minus className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                ) : (
                  <Plus className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Still have questions?
          </p>
          <a
            href="#contact"
            className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 font-bold hover:bg-yellow-300 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
