import { Calendar, ArrowRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: '5 Ways n8n Can Transform Your E-commerce Operations',
      excerpt: 'Discover how automated workflows can eliminate manual tasks and scale your online store efficiently.',
      date: 'Nov 15, 2025',
      category: 'Automation',
      readTime: '5 min read',
    },
    {
      title: 'Building AI Agents for Customer Support: A Complete Guide',
      excerpt: 'Learn how to deploy intelligent chatbots that handle inquiries 24/7 while reducing support costs.',
      date: 'Nov 10, 2025',
      category: 'AI Agents',
      readTime: '8 min read',
    },
    {
      title: 'Why African Tech Startups Need Automation Now',
      excerpt: 'The competitive advantage of early automation adoption in emerging markets and how to get started.',
      date: 'Nov 5, 2025',
      category: 'Innovation',
      readTime: '6 min read',
    },
    {
      title: 'No-Code vs Low-Code: Choosing the Right Automation Path',
      excerpt: 'Understanding the differences and deciding which approach fits your business needs and technical resources.',
      date: 'Oct 28, 2025',
      category: 'Strategy',
      readTime: '7 min read',
    },
    {
      title: 'Data Pipeline Automation: From Chaos to Clarity',
      excerpt: 'How automated ETL processes can turn scattered data into actionable business intelligence.',
      date: 'Oct 20, 2025',
      category: 'Data',
      readTime: '9 min read',
    },
    {
      title: 'The ROI of Workflow Automation: Real Numbers',
      excerpt: 'Case studies showing actual time and cost savings from implementing intelligent automation systems.',
      date: 'Oct 12, 2025',
      category: 'Business',
      readTime: '5 min read',
    },
  ];

  return (
    <section id="blog" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-bold text-sm tracking-wider">
            INSIGHTS & KNOWLEDGE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tips, guides, and insights on AI automation, n8n workflows, and African tech innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-yellow-400 dark:hover:border-yellow-400 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-yellow-400/20 group-hover:scale-110 transition-transform duration-300" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-yellow-400 text-sm font-bold">
                    {post.category}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </div>

                  <button className="text-yellow-400 font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#blog"
            className="inline-block border-2 border-yellow-400 text-yellow-400 px-8 py-4 font-bold hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
}
