import React, { useState } from 'react';

const courses = [
  {
    title: 'Java Fullstack',
    description: 'Java leads in banking, insurance, logistics, transport, retail & more. It assures jobs worldwide. Learn from us with clarity and depth.',
    logo: '☕',
    gradient: 'from-orange-400 to-red-500'
  },
  { 
    title: 'Python Fullstack',
    description: 'From AI to automation, Python dominates. We guide you to master it like a PRO.',
    logo: '🐍',
    gradient: 'from-blue-400 to-indigo-500'
  },
  {
    title: 'AI & ML',
    description: 'Artificial Intelligence & Machine Learning are revolutionizing industries. We nurture your natural intelligence to master AI.',
    logo: '🧠',
    gradient: 'from-purple-400 to-pink-500'
  }
];

const CoursesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 animate-on-scroll fade-in">
            Our Courses
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-on-scroll fade-in">
            Master the technologies that power the world's leading companies
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group animate-on-scroll scale-in glass-card p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="text-6xl mb-6 text-center">
                  {course.logo}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center group-hover:text-teal-600 transition-colors duration-300">
                  {course.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed mb-6">
                  {course.description}
                </p>
                
                <div className={`transition-all duration-300 ${
                  hoveredIndex === index 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}>
                  <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
                    View Course
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;