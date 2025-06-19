
import React from 'react';
import { Award, Clock, Users, CheckCircle } from 'lucide-react';

const stats = [
  { icon: Users, value: '500+', label: 'Satisfied Clients' },
  { icon: Clock, value: '15+', label: 'Years Experience' },
  { icon: Award, value: '50+', label: 'Awards Won' },
  { icon: CheckCircle, value: '99%', label: 'Success Rate' }
];

const teamMembers = [
  {
    name: 'Senior Partner',
    role: 'Chartered Accountant',
    description: 'Lead partner with extensive experience in financial advisory and tax planning.',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Tax Specialist',
    role: 'Senior Associate',
    description: 'Expert in corporate tax compliance and strategic tax optimization.',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Audit Manager',
    role: 'Certified Public Accountant',
    description: 'Specializes in audit and assurance services for various industries.',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  }
];

const About = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=6000&q=80')] bg-cover bg-center opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-8">
            Excellence in 
            <span className="block text-blue-600 font-medium">Financial Services</span>
          </h2>
          
          <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            With over a decade of experience in chartered accountancy, we've built our reputation on delivering 
            exceptional financial services that drive business success. Our team combines traditional expertise 
            with innovative solutions to meet the evolving needs of modern businesses.
          </p>
          
          <p className="text-lg text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            We believe in building lasting partnerships with our clients, providing not just services, but strategic 
            insights that contribute to sustainable growth and financial prosperity.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
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

        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">
            Our <span className="text-blue-600 font-medium">Team</span>
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Meet the professionals dedicated to your financial success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/95 transition-all duration-300 hover:scale-105 border border-white/20"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 mx-auto mb-6 overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold text-slate-800 mb-2">{member.name}</h4>
              <p className="text-blue-600 font-medium mb-4">{member.role}</p>
              <p className="text-slate-600 leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
