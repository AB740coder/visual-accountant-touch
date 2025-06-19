
import React from 'react';
import { Calculator, TrendingUp, Shield, FileText, PieChart, Users } from 'lucide-react';

const services = [
  {
    icon: Calculator,
    title: 'Tax Planning & Compliance',
    description: 'Strategic tax optimization and seamless compliance management for individuals and businesses.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: TrendingUp,
    title: 'Financial Advisory',
    description: 'Expert guidance for financial growth, investment strategies, and business development.',
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    icon: Shield,
    title: 'Audit & Assurance',
    description: 'Comprehensive audit services ensuring accuracy, compliance, and stakeholder confidence.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: FileText,
    title: 'Bookkeeping Services',
    description: 'Meticulous record-keeping and financial documentation for transparent business operations.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: PieChart,
    title: 'Management Consulting',
    description: 'Strategic business consulting for operational efficiency and sustainable growth.',
    color: 'from-rose-500 to-rose-600'
  },
  {
    icon: Users,
    title: 'Payroll Management',
    description: 'Complete payroll solutions ensuring accurate, timely, and compliant employee compensation.',
    color: 'from-indigo-500 to-indigo-600'
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">
            Our <span className="text-blue-600 font-medium">Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive financial solutions designed to support your business at every stage of growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
