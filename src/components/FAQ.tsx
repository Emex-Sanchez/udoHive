import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What exactly is workflow automation?',
      answer: 'Workflow automation uses tools like n8n to connect your business applications and automatically handle repetitive tasks. Instead of manually copying data between systems, sending emails, or processing orders, automated workflows do this instantly and accurately 24/7.',
    },
    {
      question: 'How do AI agents work?',
      answer: 'AI agents are intelligent programs trained to handle specific tasks like customer support, data analysis, or content generation. They use natural language processing and machine learning to understand requests, make decisions, and take actions just like a human would, but faster and more consistently.',
    },
    {
      question: 'Is n8n better than Zapier or Make?',
      answer: 'n8n offers more flexibility, customization, and cost-effectiveness for complex workflows. Unlike subscription-based tools with execution limits, n8n can be self-hosted for unlimited operations. It also provides advanced logic, custom code support, and better data handling for enterprise needs.',
    },
    {
      question: 'How long does it take to implement automation?',
      answer: 'Simple workflows can be deployed in 1-2 weeks. More complex systems with multiple integrations and AI agents typically take 4-8 weeks. We provide a detailed timeline after understanding your specific requirements during the free consultation.',
    },
    {
      question: 'Will automation work with my existing tools?',
      answer: 'Yes. n8n integrates with 400+ applications including all major business tools (Slack, Google Workspace, Salesforce, Shopify, etc.). We can also build custom integrations for proprietary systems using APIs and webhooks.',
    },
    {
      question: 'What if something breaks?',
      answer: 'All our packages include maintenance periods with monitoring, error handling, and support. We build robust workflows with fallback mechanisms and real-time alerts. Plus, our team is available to quickly resolve any issues that arise.',
    },
    {
      question: 'Do I need technical knowledge to use the automations?',
      answer: 'No. Once deployed, automations run in the background without any technical input needed. We provide documentation and training so your team understands what is happening, but day-to-day operations are completely automatic.',
    },
    {
      question: 'How much can automation actually save?',
      answer: 'Our clients typically see 60-90% reduction in time spent on manual tasks, 40-70% cost savings on operations, and significant improvements in accuracy and speed. The exact ROI depends on your specific workflows and business size.',
    },
    {
      question: 'Can you automate highly specific or niche processes?',
      answer: 'Absolutely. That is where we excel. We specialize in custom automation for unique business processes. If it involves moving data, making decisions, or triggering actions, we can automate it.',
    },
    {
      question: 'What happens after the initial setup?',
      answer: 'After deployment, your automations run continuously. We provide ongoing maintenance, performance monitoring, and optimization as part of your package. You can also add new workflows or modify existing ones as your business evolves.',
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
