import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = '9779381920';

  const quickMessages = [
    'I want to discuss a custom LLM & RAG project.',
    'I need an edge Computer Vision defect inspection model.',
    'I want to book an AI Readiness & Security Audit.',
    'General consulting inquiry about AI implementation.'
  ];

  const handleLaunchWhatsApp = (msg?: string) => {
    const text = msg || 'Hi GenX Technologies team, I am interested in discussing AI consulting opportunities.';
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="mb-4 w-72 sm:w-80 bg-slate-900 border border-emerald-500/40 rounded-2xl shadow-2xl p-4 text-white space-y-3"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-slate-950 font-bold">
                    <MessageSquare className="w-4 h-4 fill-slate-950" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-900" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">GenX AI Consultant</div>
                  <div className="text-[10px] text-emerald-400 font-medium">Online • Responds in &lt;15m</div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Hello! Tap a topic to start a direct WhatsApp chat with our Principal AI Architects:
            </p>

            {/* Quick Topic Buttons */}
            <div className="space-y-1.5">
              {quickMessages.map((msg, idx) => (
                <button
                  key={idx}
                  onClick={() => handleLaunchWhatsApp(msg)}
                  className="w-full text-left p-2 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/50 text-[11px] text-slate-300 hover:text-emerald-300 transition-colors flex items-center justify-between"
                >
                  <span className="truncate mr-2">{msg}</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400 shrink-0" />
                </button>
              ))}
            </div>

            <button
              onClick={() => handleLaunchWhatsApp()}
              className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center justify-center space-x-2 shadow-md"
            >
              <span>Open Blank WhatsApp Chat</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all duration-200"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-7 h-7 fill-slate-950" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white shadow">
          1
        </span>
      </button>
    </div>
  );
};
