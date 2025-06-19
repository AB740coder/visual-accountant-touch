
import React from 'react';
import { Award, Clock, Users, CheckCircle } from 'lucide-react';

const stats = [
  { icon: Users, value: '500+', label: 'Satisfied Clients' },
  { icon: Clock, value: '15+', label: 'Years Experience' },
  { icon: Award, value: '50+', label: 'Awards Won' },
  { icon: CheckCircle, value: '99%', label: 'Success Rate' }
];

const About = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=6000&q=80')] bg-cover bg-center opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-8">
              Excellence in 
              <span className="block text-blue-600 font-medium">Financial Services</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              With over a decade of experience in chartered accountancy, we've built our reputation on delivering 
              exceptional financial services that drive business success. Our team combines traditional expertise 
              with innovative solutions to meet the evolving needs of modern businesses.
            </p>
            
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              We believe in building lasting partnerships with our clients, providing not just services, but strategic 
              insights that contribute to sustainable growth and financial prosperity.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="text-center p-6 rounded-xl bg-white/70 backdrop-blur-sm border border-white/20 hover:bg-white/90 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex justify-center mb-3">
                    <stat.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-slate-800 mb-2">{stat.value}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-100 to-blue-200 p-8 hover:scale-105 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=4846&q=80"
                alt="Professional workspace"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl hover:rotate-12 transition-transform duration-300">
              <Award className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
