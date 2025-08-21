import React from 'react';
import { Users, Code, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Live Classes → By the Engineers',
    description: 'All training handled by experienced engineers with global expertise.',
    delay: '0ms'
  },
  {
    icon: Code,
    title: 'Curated Courses → To the Engineers',
    description: 'Detailed understanding of tools & techniques used in the real world.',
    delay: '100ms'
  },
  {
    icon: Zap,
    title: 'Integrated Learning → For the Engineers',
    description: 'Practical, productive training designed to make you industry-ready.',
    delay: '200ms'
  },
  {
    icon: Shield,
    title: 'Interactive Sessions → Why Skillyheads?',
    description: 'Not just theory — everything taught is practically useful and validated by industry managers.',
    delay: '300ms'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 animate-on-scroll fade-in">
            What You'll Get
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group animate-on-scroll scale-in glass-card p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-teal-500/10 cursor-pointer"
              style={{ animationDelay: feature.delay }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-teal-500 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;