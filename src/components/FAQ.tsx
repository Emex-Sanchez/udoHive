import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQ(): React.JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: 'What is an Automation Venture Studio?',
      answer: 'An automation venture studio is a company factory. Instead of taking client briefs or waiting for outside ideas, UdoHive internally designs, develops, and launches single-purpose software solutions that automate repetitive workflows. We build the prototypes, test them with real markets, and scale them out independently.',
    },
    {
      id: 2,
      question: 'How do your Micro Automation Tools work without a login?',
      answer: 'We prioritize instant utility. For tools like Udo-slide, you do not need to create an account or give us your email address. You simply use the interface to build your work, see a live interactive preview on screen, and pay a small one-time fee via Paystack only if you want to export the editable file.',
    },
    {
      id: 3,
      question: 'Are there hidden or automatic subscription renewals?',
      answer: 'Never for our micro-agents. We bypass subscription fatigue entirely. You are only billed when you intentionally click the export button for a generated file. We do not save your card data or run automatic monthly recurring charges.',
    },
    {
      id: 4,
      question: 'How secure are the payment gateways on UdoHive?',
      answer: 'All financial transactions are handled natively by Paystack and Flutterwave, Africa’s leading payment infrastructures. Your payment tokens are heavily encrypted and processed directly through their safe nodes—UdoHive servers never see or hold your bank or card details.',
    },
    {
      id: 5,
      question: 'What is the difference between Udo-slide and your Enterprise systems?',
      answer: 'Udo-slide is a browser-based micro utility for individuals needing an immediate file with no long-term commitment. Enterprise platforms like Udo-Afrika and StockBud handle massive, ongoing company processes. They involve secure user authentication profiles, constant cloud database syncing, and traditional monthly licensing structures.',
    },
    {
      id: 6,
      question: 'How does UdoHive handle data privacy and API security?',
      answer: 'Your inputs are transmitted securely to advanced processing networks (like the Gemini and Claude API layers) through sandboxed server-side environment variables (.env files). For micro-agents, we do not store your uploaded data logs or text files on our servers after your session closes.',
    },
    {
      id: 7,
      question: 'Can I request a custom enterprise automation system for my business?',
      answer: 'Yes. While we focus heavily on launching our independent product lines, our enterprise engineering wing constructs tailored workspace workflows for scale operations. You can register interest via our pre-registration links or contact a studio founder directly.',
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50 dark:bg-black border-t border-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-bold text-sm tracking-wider uppercase">
            Questions & Answers
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Everything you need to know about the UdoHive automation ecosystem
          </p>
        </div>

        {/* FAQ Accordion Loop */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={faq.id} 
              className="bg-white dark:bg-gray-900/40 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-800/80 hover:border-yellow-400 dark:hover:border-yellow-400 transition-all duration-300 rounded-xl overflow-hidden shadow-sm"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)} 
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none transition-colors group"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white pr-8 group-hover:text-yellow-400 transition-colors">
                  {faq.question}
                </h3>
                <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-200 dark:border-gray-700/60 group-hover:border-yellow-400/40 transition-colors">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  ) : (
                    <Plus className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 animate-fade-in">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm border-t border-gray-100 dark:border-gray-800/60 pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Lower Contact Support Trigger */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-500 mb-4 text-sm font-medium">
            Have a unique automation engineering question?
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md shadow-yellow-400/5 text-sm"
          >
            Connect With the Studio
          </a>
        </div>

      </div>
    </section>
  );
}
