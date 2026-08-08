import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Bot, ShieldCheck, MessageSquare, TrendingUp, Cpu, CheckCircle2, Award } from 'lucide-react';
import { COMPANY_STATS } from '../data/mockData';

interface HeroProps {
  onExplorePortfolio: () => void;
  onOpenAdvisor: () => void;
  onCalculateROI: () => void;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExplorePortfolio,
  onOpenAdvisor,
  onCalculateROI,
  onOpenConsultation,
}) => {
  const whatsappNumber = '15550192834';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hello GenX Technologies, I would like to explore custom AI consulting opportunities for my company.'
  )}`;

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-slate-950 text-white">
      {/* Background Animated Grid & Glow Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.15),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Subtle Glow Spheres */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-semibold shadow-lg shadow-cyan-950/50 backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span>GenX Technologies • Enterprise AI & ML Consultancy</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400 hidden sm:inline">2026 Production Architecture</span>
          </div>
        </motion.div>

        {/* Main Hero Headline */}
        <div className="mt-8 text-center max-w-4xl mx-auto space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-100 leading-[1.1]"
          >
            Empowering Enterprises with{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Next-Gen AI & Machine Learning
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed"
          >
            We architect fine-tuned LLMs, enterprise Multi-Modal RAG, sub-millisecond edge Computer Vision, and autonomous AI Agent workforces engineered for measurable operational ROI.
          </motion.p>

          {/* CTAs Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-4 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={onOpenAdvisor}
              className="group relative inline-flex items-center space-x-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-200"
            >
              <Bot className="w-5 h-5 text-cyan-200 group-hover:rotate-12 transition-transform" />
              <span>Generate AI Solution Roadmap</span>
              <ArrowRight className="w-4 h-4 text-cyan-200 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExplorePortfolio}
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-cyan-500/50 text-slate-200 hover:text-white text-sm font-semibold transition-all hover:bg-slate-800/80"
            >
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>View AI Portfolio</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/60 text-sm font-bold transition-all shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Connect</span>
            </a>
          </motion.div>

          {/* Quick Sub-actions / Calculator banner link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="pt-2 text-xs text-slate-400 flex items-center justify-center space-x-4"
          >
            <button
              onClick={onCalculateROI}
              className="inline-flex items-center space-x-1.5 text-cyan-400 hover:text-cyan-300 underline underline-offset-4 font-medium"
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Calculate your estimated AI ROI in 60 seconds</span>
            </button>
          </motion.div>
        </div>

        {/* Highlight Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {COMPANY_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm relative overflow-hidden group hover:border-cyan-500/40 transition-colors"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/10 transition-colors" />
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight text-cyan-400">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-bold text-slate-200">
                {stat.label}
              </div>
              <div className="mt-1 text-xs text-slate-400 leading-normal">
                {stat.sub}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Enterprise Security & Compliance Badges */}
        <div className="mt-12 pt-8 border-t border-slate-800/60 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
            Enterprise Grade Security & Industry Certification Standards
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-300">
            <div className="flex items-center space-x-2 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>SOC2 Type II Compliant</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
              <Award className="w-4 h-4 text-blue-400" />
              <span>AWS & GCP AI Partner</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>HIPAA Health Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
