import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer id="contact" className="bg-slate-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="text-center mb-16 animate-on-scroll fade-in">
          <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Get the latest updates on new courses, industry insights, and exclusive offers.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-teal-500 focus:outline-none transition-colors duration-200"
              required
            />
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="animate-on-scroll slide-in-left">
            <h3 className="text-2xl font-bold mb-8 text-teal-400">Contact Details</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-2">Skillyheads Pvt. Ltd.</h4>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-300">
                    Beside Teakwood Furniture,<br />
                    3rd Main Road, Magunta Layout,<br />
                    Nellore - 524003
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-teal-400" />
                <div className="space-x-4">
                  <a 
                    href="tel:+918123172331" 
                    className="text-slate-300 hover:text-teal-400 transition-colors duration-200"
                  >
                    +91 81231 72331
                  </a>
                  <a 
                    href="tel:+919159591995" 
                    className="text-slate-300 hover:text-teal-400 transition-colors duration-200"
                  >
                    +91 91595 91995
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-teal-400" />
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-1 sm:space-y-0">
                  <a 
                    href="mailto:contact@skillyheads.com" 
                    className="text-slate-300 hover:text-teal-400 transition-colors duration-200"
                  >
                    contact@skillyheads.com
                  </a>
                  <a 
                    href="mailto:hr@skillyheads.com" 
                    className="text-slate-300 hover:text-teal-400 transition-colors duration-200"
                  >
                    hr@skillyheads.com
                  </a>
                  <a 
                    href="mailto:info@skillyheads.com" 
                    className="text-slate-300 hover:text-teal-400 transition-colors duration-200"
                  >
                    info@skillyheads.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="animate-on-scroll slide-in-right">
            <h3 className="text-2xl font-bold mb-8 text-teal-400">Find Us</h3>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.5234567890123!2d79.9876543!3d14.4567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDI3JzI0LjQiTiA3OcKwNTknMTUuNiJF!5e0!3m2!1sen!2sin!4v1634567890123"
                width="100%"
                height="300"
                style={{ border: 0, filter: 'grayscale(0.3) contrast(1.2)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Skillyheads Location"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 mt-16 pt-8 text-center text-slate-400">
          <p>&copy; 2024 Skillyheads Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;