import React, { useState } from 'react';
import { Sparkles, MessageSquare, Mail, Globe, PhoneCall, ShieldCheck, ArrowRight, Heart } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenAdvisor: () => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  onOpenAdvisor,
  onOpenConsultation,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setNewsletterEmail('');
    }
  };

  const handleNav = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappNumber = '15550192834';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hi GenX Technologies team, I am interested in exploring an AI consulting project.'
  )}`;

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNav('home')}>
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 via-blue-600 to-indigo-600 text-white shadow-lg">
                <Sparkles className="w-5 h-5 text-cyan-200" />
              </div>
              <span className="text-xl font-extrabold tracking-tight font-mono">
                Gen<span className="text-cyan-400">X</span> Tech
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              GenX Technologies is an enterprise AI & Machine Learning consultancy. We design, fine-tune, and deploy production multi-modal RAG systems, edge computer vision, and autonomous agent workforces.
            </p>

            <div className="flex items-center space-x-3 pt-2 text-xs text-slate-300">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 font-bold hover:bg-emerald-900/60 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Live Chat</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-cyan-300 transition-colors">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-cyan-300 transition-colors">
                  AI Capabilities
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('portfolio')} className="hover:text-cyan-300 transition-colors">
                  Portfolio Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('blog')} className="hover:text-cyan-300 transition-colors">
                  Blog & Insights
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('roi-calculator')} className="hover:text-cyan-300 transition-colors">
                  AI ROI Calculator
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions & Tools */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Interactive Tools
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={onOpenAdvisor} className="hover:text-cyan-300 transition-colors flex items-center space-x-1">
                  <span>AI Solution Advisor (Gemini 3.6)</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenConsultation} className="hover:text-cyan-300 transition-colors">
                  Schedule Strategy Call
                </button>
              </li>
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                  WhatsApp Direct Channel
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              AI Engineering Insights
            </h4>
            <p className="text-xs text-slate-400">
              Subscribe to receive our monthly technical research papers on RAG, LLM fine-tuning, and MLOps.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter work email..."
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:border-cyan-500 outline-none"
              />
              <button
                type="submit"
                className="w-full py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-colors flex items-center justify-center space-x-1"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            {subscribed && (
              <div className="text-[11px] text-emerald-400 font-medium">
                Subscribed successfully to GenX AI Insights!
              </div>
            )}
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} GenX Technologies Inc. All rights reserved.
          </div>

          <div className="flex items-center space-x-6 text-[11px]">
            <span className="text-slate-400">Privacy Policy</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-400">Security & Compliance</span>
            <span className="text-slate-400">•</span>
            <span className="text-cyan-400 font-medium">SOC2 & ISO27001 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
