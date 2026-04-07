import { Search, Settings, Rocket, BarChart } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      title: "Discovery & Audit",
      description:
        "We analyze your current workflows, identify bottlenecks, and uncover automation opportunities in your business.",
      icon: Search,
    },
    {
      title: "System Design",
      description:
        "We design a custom automation system tailored to your operations, tools, and growth goals.",
      icon: Settings,
    },
    {
      title: "Build & Integration",
      description:
        "We develop and integrate your automation workflows, connecting all your tools into one seamless system.",
      icon: Rocket,
    },
    {
      title: "Optimize & Scale",
      description:
        "We monitor performance, refine processes, and help you scale efficiently with continuous improvements.",
      icon: BarChart,
    },
  ];

  return (
    <section id="process" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-bold text-sm tracking-wider">
            HOW WE WORK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            Our Automation Process
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A simple, proven system to transform your business operations
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="relative bg-gray-50 dark:bg-gray-800 p-8 border-t-4 border-yellow-400 hover:shadow-xl transition-all duration-300"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-6 bg-yellow-400 text-gray-900 font-bold px-3 py-1 text-sm">
                  {`0${index + 1}`}
                </div>

                {/* Icon */}
                <Icon className="w-10 h-10 text-yellow-400 mb-4" />

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}