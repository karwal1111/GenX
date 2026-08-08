import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Eye, Bot, TrendingUp, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES_LIST } from '../data/mockData';

interface ServicesSectionProps {
  onRequestProposal: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onRequestProposal,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
      case 'Eye':
        return <Eye className="w-6 h-6 text-cyan-400" />;
      case 'Bot':
        return <Bot className="w-6 h-6 text-cyan-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-cyan-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-cyan-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-950 text-white relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>End-to-End Enterprise AI Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Core AI & ML{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Consulting Offerings
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            From architecture design and model fine-tuning to MLOps deployment and security governance, GenX provides full-lifecycle engineering services.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group p-8 rounded-3xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-xs font-mono text-slate-500 font-bold">
                    0{idx + 1}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <ul className="space-y-2 pt-2 border-t border-slate-800/80">
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80">
                <button
                  onClick={() => onRequestProposal(service.title)}
                  className="w-full py-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 text-cyan-400 hover:text-cyan-300 text-xs font-bold transition-all flex items-center justify-center space-x-2"
                >
                  <span>Request Proposal for {service.title.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
