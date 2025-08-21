import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Users, Rocket } from 'lucide-react';

const metrics = [
  {
    icon: Calendar,
    value: 15,
    suffix: '+',
    label: 'Years in Industry',
    color: 'text-teal-500'
  },
  {
    icon: Users,
    value: 5000,
    suffix: '+',
    label: 'Students Trained',
    color: 'text-blue-500'
  },
  {
    icon: Rocket,
    value: 5,
    suffix: '',
    label: 'Products Under Development',
    color: 'text-purple-500'
  }
];

const MetricsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(metrics.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    metrics.forEach((metric, index) => {
      let start = 0;
      const end = metric.value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(start);
          return newCounts;
        });
      }, 16);
    });
  };

  return (
    <section 
      id="why-skillyheads" 
      className="py-20 px-4 sm:px-6 lg:px-8"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 animate-on-scroll fade-in">
            Why Skillyheads?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-on-scroll fade-in">
            Proven expertise and results that speak for themselves
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center animate-on-scroll scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg flex items-center justify-center ${metric.color} hover:scale-110 transition-transform duration-300`}>
                  <metric.icon size={32} />
                </div>
              </div>
              
              <div className={`text-5xl md:text-6xl font-bold mb-2 ${metric.color}`}>
                {counts[index]}{metric.suffix}
              </div>
              
              <p className="text-lg text-slate-600 font-medium">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;