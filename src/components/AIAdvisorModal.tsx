import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, Sparkles, X, CheckCircle2, ArrowRight, MessageSquare, Send, RefreshCw, Cpu, Clock, Layers } from 'lucide-react';
import { AIRoadmapResult, EnquiryFormInput } from '../types';

interface AIAdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitEnquiryFromRoadmap: (enquiryData: Partial<EnquiryFormInput>) => void;
}

export const AIAdvisorModal: React.FC<AIAdvisorModalProps> = ({
  isOpen,
  onClose,
  onSubmitEnquiryFromRoadmap,
}) => {
  const [industry, setIndustry] = useState('FinTech & Banking');
  const [challenge, setChallenge] = useState('');
  const [goal, setGoal] = useState('');
  const [timeline, setTimeline] = useState('1-3 Months');
  const [budget, setBudget] = useState('$25k - $50k');
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [roadmap, setRoadmap] = useState<AIRoadmapResult | null>(null);

  const industriesList = [
    'FinTech & Banking',
    'Healthcare & Life Sciences',
    'Industrial Manufacturing & IoT',
    'E-Commerce & Retail Logistics',
    'Insurance & Legal Risk',
    'SaaS & Software Systems',
    'Energy & Clean Tech',
    'Telecommunications',
  ];

  const presetExamples = [
    {
      label: 'Financial RAG',
      ind: 'FinTech & Banking',
      chal: 'Need to automate compliance audit search across 50,000 regulatory documents and loan agreements without hallucination risks.',
      gl: 'Reduce manual research time by 80% and ensure cited accuracy.'
    },
    {
      label: 'Factory Defect Vision',
      ind: 'Industrial Manufacturing & IoT',
      chal: 'High-speed assembly line produces 100 micro-parts per minute with 4% undetected physical surface defects.',
      gl: 'Sub-10ms edge vision defect detection with 99.5%+ accuracy.'
    },
    {
      label: 'Agentic Support Swarm',
      ind: 'SaaS & Software Systems',
      chal: 'Customer support response times spiking to 45 mins during product launches.',
      gl: 'Deploy autonomous AI agents to resolve 70% tier-1 and tier-2 billing & tech support tickets automatically.'
    }
  ];

  const handleApplyPreset = (preset: typeof presetExamples[0]) => {
    setIndustry(preset.ind);
    setChallenge(preset.chal);
    setGoal(preset.gl);
  };

  const handleGenerateRoadmap = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!challenge.trim()) {
      setError('Please describe your business challenge or requirements.');
      return;
    }

    setLoading(true);
    setError(null);
    setRoadmap(null);

    try {
      const response = await fetch('/api/gemini/advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          industry,
          challenge,
          goal,
          timeline,
          budget
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate roadmap');
      }

      if (data.roadmap) {
        setRoadmap(data.roadmap);
      } else {
        throw new Error('Invalid roadmap data received');
      }
    } catch (err: any) {
      setError(err.message || 'Error generating AI roadmap. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSendToWhatsApp = () => {
    if (!roadmap) return;
    const text = `Hi GenX Technologies team, I generated an AI Solution Roadmap for my business (${industry}):
Challenge: ${challenge}
Expected Architecture: ${roadmap.suggestedArchitecture}
Estimated ROI: ${roadmap.estimatedROI}
I would like to schedule a call to discuss implementing this!`;

    const whatsappNumber = '9779381920';
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleSubmitEnquiry = () => {
    if (!roadmap) return;
    onSubmitEnquiryFromRoadmap({
      company: `${industry} Enterprise`,
      projectType: roadmap.recommendedGenXServices?.[0] || 'AI Consulting & Development',
      budget: budget,
      timeline: timeline,
      message: `[AI Advisor Generated Roadmap]
Challenge: ${challenge}
Desired Goal: ${goal}
Architecture: ${roadmap.suggestedArchitecture}
Estimated ROI: ${roadmap.estimatedROI}`
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8 text-white"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 bg-gradient-to-r from-slate-900 via-slate-800 to-cyan-950/50 border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-xl font-bold text-white">GenX AI Solution Advisor</h3>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold uppercase">
                    Powered by Gemini 3.6 Flash
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Input your business bottleneck to receive an instant architectural roadmap & ROI estimate
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
            {!roadmap ? (
              <form onSubmit={handleGenerateRoadmap} className="space-y-5">
                {/* Quick Presets */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Or Try a Sample Industry Challenge:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {presetExamples.map((preset, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleApplyPreset(preset)}
                        className="text-left p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 hover:border-cyan-500/50 text-xs text-slate-300 hover:text-cyan-300 transition-colors"
                      >
                        <div className="font-bold text-cyan-400 mb-0.5">{preset.label}</div>
                        <div className="text-[11px] text-slate-400 line-clamp-2">{preset.chal}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Industry Sector
                    </label>
                    <select
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none"
                    >
                      {industriesList.map((ind) => (
                        <option key={ind} value={ind}>
                          {ind}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Target Implementation Timeline
                    </label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:border-cyan-500 outline-none"
                    >
                      <option value="Under 1 Month">Rapid MVP (&lt; 1 Month)</option>
                      <option value="1-3 Months">1 - 3 Months (Standard)</option>
                      <option value="3-6 Months">3 - 6 Months (Enterprise Scale)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Describe Your Business Challenge / Manual Bottleneck <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    rows={3}
                    value={challenge}
                    onChange={(e) => setChallenge(e.target.value)}
                    placeholder="e.g. Our legal analysts spend 20 hours a week cross-referencing multi-page regulatory contracts across fragmented databases..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Desired Outcome / Goal (Optional)
                  </label>
                  <input
                    type="text"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    placeholder="e.g. Automate 80% of routine searches with 99.5% citation accuracy"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:border-cyan-500 outline-none"
                  />
                </div>

                {error && (
                  <div className="p-3 rounded-lg bg-red-950/50 border border-red-500/40 text-red-300 text-xs">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-sm shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-indigo-500 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin text-cyan-200" />
                      <span>Architecting GenX AI Roadmap...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 text-cyan-200" />
                      <span>Generate Architectural Roadmap</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* Roadmap Display */
              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 space-y-2">
                  <div className="flex items-center justify-between text-xs text-cyan-300 font-bold uppercase tracking-wider">
                    <span className="flex items-center space-x-1.5">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      <span>GenX AI Strategy Architecture</span>
                    </span>
                    <span>Industry: {industry}</span>
                  </div>
                  <h4 className="text-base font-bold text-white">
                    {roadmap.executiveSummary}
                  </h4>
                </div>

                {/* Architecture Recommendation */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="text-xs font-semibold text-slate-400 flex items-center space-x-2">
                    <Cpu className="w-4 h-4 text-cyan-400" />
                    <span>Recommended AI Architecture & Framework</span>
                  </div>
                  <p className="text-sm text-slate-200 font-mono leading-relaxed">
                    {roadmap.suggestedArchitecture}
                  </p>
                </div>

                {/* Key Phases */}
                <div className="space-y-3">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-2">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    <span>Implementation Roadmap Phases</span>
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {roadmap.keyPhases?.map((p, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                        <div className="text-xs font-bold text-cyan-400 mb-1">{p.phase}</div>
                        <div className="text-xs text-slate-300 leading-normal">{p.deliverable}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Estimated ROI & Tech Stack */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30">
                    <div className="text-xs font-bold uppercase text-emerald-400 mb-1">
                      Projected Financial & Operational ROI
                    </div>
                    <p className="text-sm text-emerald-200 font-semibold">
                      {roadmap.estimatedROI}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="text-xs font-bold uppercase text-slate-400 mb-2">
                      Target Tech Stack
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {roadmap.techStack?.map((t, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded text-[11px] bg-slate-800 text-cyan-300 font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Bar */}
                <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-3 items-center justify-between">
                  <button
                    onClick={() => setRoadmap(null)}
                    className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 text-slate-300 hover:text-white"
                  >
                    Adjust Parameters
                  </button>

                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={handleSendToWhatsApp}
                      className="inline-flex items-center space-x-1.5 px-4 py-2.5 text-xs font-bold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Strategy Chat</span>
                    </button>

                    <button
                      onClick={handleSubmitEnquiry}
                      className="inline-flex items-center space-x-1.5 px-5 py-2.5 text-xs font-bold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md hover:from-cyan-400 hover:to-blue-500 transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit as Project Inquiry</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
