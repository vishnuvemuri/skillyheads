import React from 'react';

const LearnSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-on-scroll slide-in-left">
            <img
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Engineer teaching students in modern training room"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
          
          <div className="order-1 lg:order-2 animate-on-scroll slide-in-right">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Learn from Engineers.<br />
              <span className="text-teal-500">For Engineers.</span>
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              All our training is conducted by experienced engineers working with world-leading MNCs. We show you the right tools, techniques, and methods expected by the industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnSection;