import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Send, MessageSquare, Mail, Phone, Building2, CheckCircle2, Clock, Sparkles, ShieldCheck, RefreshCw, Copy, ExternalLink } from 'lucide-react';
import { EnquiryFormInput, StoredEnquiry } from '../types';

interface ContactSectionProps {
  initialProjectType?: string;
  initialMessage?: string;
  onEnquirySubmitted: (newEnquiry: StoredEnquiry) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialProjectType = 'Custom Generative AI & Fine-Tuned LLMs',
  initialMessage = '',
  onEnquirySubmitted,
}) => {
  const [formData, setFormData] = useState<EnquiryFormInput>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: initialProjectType,
    budget: '$25,000 - $50,000',
    timeline: '1-3 Months',
    message: initialMessage,
    preferredContact: 'WhatsApp',
  });

  useEffect(() => {
    if (initialProjectType) {
      setFormData((prev) => ({ ...prev, projectType: initialProjectType }));
    }
    if (initialMessage) {
      setFormData((prev) => ({ ...prev, message: initialMessage }));
    }
  }, [initialProjectType, initialMessage]);

  const [loading, setLoading] = useState(false);
  const [submittedRefId, setSubmittedRefId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out your Name, Email, and Project Description.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success && data.referenceId) {
        setSubmittedRefId(data.referenceId);

        const newEnquiry: StoredEnquiry = {
          ...formData,
          id: `enq-${Date.now()}`,
          refId: data.referenceId,
          timestamp: new Date().toISOString(),
          status: 'New',
        };

        onEnquirySubmitted(newEnquiry);
      } else {
        throw new Error('Failed to record inquiry');
      }
    } catch (err) {
      // Fallback local registration if server fails
      const fallbackRef = `GENX-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedRefId(fallbackRef);

      const newEnquiry: StoredEnquiry = {
        ...formData,
        id: `enq-${Date.now()}`,
        refId: fallbackRef,
        timestamp: new Date().toISOString(),
        status: 'New',
      };

      onEnquirySubmitted(newEnquiry);
    } finally {
      setLoading(false);
    }
  };

  const handleCopyRef = () => {
    if (submittedRefId) {
      navigator.clipboard.writeText(submittedRefId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const whatsappNumber = '15550192834';
  
  const getWhatsAppPresetUrl = (topicMessage: string) => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(topicMessage)}`;
  };

  const handleSendFormToWhatsApp = () => {
    const text = `Hi GenX Technologies team! I submitted an enquiry on your portal (Ref: ${submittedRefId || 'New Enquiry'}):
Name: ${formData.name}
Company: ${formData.company || 'Enterprise'}
Project: ${formData.projectType}
Budget: ${formData.budget}
Message: ${formData.message}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 border-t border-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Consulting Opportunities & Client Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Connect with{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              GenX AI Consultants
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Schedule a strategic discovery session, request a technical project proposal, or chat directly via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form Column */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
            {!submittedRefId ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                    <span>Project Enquiry Form</span>
                  </h3>
                  <span className="text-[11px] text-slate-400">Average SLA: &lt; 12 Hours</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:border-cyan-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Work Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:border-cyan-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      WhatsApp / Phone Number
                    </label>
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +1 (555) 019-2834"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:border-cyan-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Nexus Capital Ltd"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:border-cyan-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Project Type / Offering
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:border-cyan-500 outline-none"
                    >
                      <option value="Custom Generative AI & Fine-Tuned LLMs">Generative AI & LLMs</option>
                      <option value="Edge Computer Vision & Quality Automation">Computer Vision & Edge AI</option>
                      <option value="Autonomous AI Agents & Workflow Orchestration">Autonomous AI Agents</option>
                      <option value="Predictive Analytics & Forecasting Models">Predictive ML & Analytics</option>
                      <option value="Enterprise AI Governance & Strategic Audit">AI Readiness & Security Audit</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Estimated Budget Bracket
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:border-cyan-500 outline-none"
                    >
                      <option value="$10,000 - $25,000">$10,000 - $25,000 (POC/MVP)</option>
                      <option value="$25,000 - $50,000">$25,000 - $50,000 (Standard)</option>
                      <option value="$50,000 - $100,000">$50,000 - $100,000 (Enterprise Scale)</option>
                      <option value="$100,000+">$100,000+ (Multi-Phase Architecture)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Preferred Contact Channel
                  </label>
                  <div className="flex space-x-4">
                    {(['WhatsApp', 'Email', 'Phone Call'] as const).map((channel) => (
                      <label
                        key={channel}
                        className={`flex-1 p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center space-x-2 cursor-pointer transition-all ${
                          formData.preferredContact === channel
                            ? 'bg-cyan-950/60 border-cyan-500 text-cyan-300'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <input
                          type="radio"
                          name="preferredContact"
                          value={channel}
                          checked={formData.preferredContact === channel}
                          onChange={() => setFormData({ ...formData, preferredContact: channel })}
                          className="hidden"
                        />
                        <span>{channel}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Project Brief & Goals <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your current manual bottlenecks, desired timeline, or AI strategy objectives..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:border-cyan-500 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 hover:from-cyan-400 hover:to-indigo-500 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin text-cyan-200" />
                      <span>Submitting Project Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 text-cyan-200" />
                      <span>Submit Consulting Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* Success Confirmation Box */
              <div className="space-y-6 text-center py-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Inquiry Received Successfully</h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    A GenX Principal AI Architect will review your specifications and reach out via{' '}
                    <strong className="text-cyan-400">{formData.preferredContact}</strong> within 12 business hours.
                  </p>
                </div>

                {/* Reference Badge */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 max-w-sm mx-auto space-y-1">
                  <div className="text-[10px] uppercase text-slate-400 font-bold">
                    Tracking Reference ID
                  </div>
                  <div className="flex items-center justify-center space-x-2 font-mono text-lg font-bold text-cyan-400">
                    <span>{submittedRefId}</span>
                    <button
                      onClick={handleCopyRef}
                      className="p-1 rounded text-slate-400 hover:text-white"
                      title="Copy Reference ID"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  {copied && <div className="text-[10px] text-emerald-400 font-medium">Copied to clipboard!</div>}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleSendFormToWhatsApp}
                    className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Reference to WhatsApp</span>
                  </button>

                  <button
                    onClick={() => setSubmittedRefId(null)}
                    className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* WhatsApp Direct Connect Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Direct Connect Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-950/80 via-slate-900 to-slate-950 border border-emerald-500/30 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">WhatsApp Quick Connect</h3>
                  <div className="flex items-center space-x-2 text-xs text-emerald-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live AI Consultant Line • Active Now</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Need immediate response? Tap any topic below to launch a pre-configured WhatsApp chat with a GenX Lead AI Consultant:
              </p>

              {/* Preset Quick Topic Buttons */}
              <div className="space-y-2.5">
                <a
                  href={getWhatsAppPresetUrl('Hi GenX team, I am interested in building a custom Generative AI & Fine-Tuned LLM pipeline.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 border border-emerald-500/20 hover:border-emerald-400/60 text-xs font-semibold text-slate-200 hover:text-emerald-300 transition-colors"
                >
                  <span>1. Fine-Tuned LLMs & RAG Pipelines</span>
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                </a>

                <a
                  href={getWhatsAppPresetUrl('Hi GenX team, I would like to discuss a Computer Vision defect inspection project.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 border border-emerald-500/20 hover:border-emerald-400/60 text-xs font-semibold text-slate-200 hover:text-emerald-300 transition-colors"
                >
                  <span>2. Computer Vision & Edge AI</span>
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                </a>

                <a
                  href={getWhatsAppPresetUrl('Hi GenX team, I would like to schedule an Executive AI Security & Readiness Audit.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 border border-emerald-500/20 hover:border-emerald-400/60 text-xs font-semibold text-slate-200 hover:text-emerald-300 transition-colors"
                >
                  <span>3. Executive AI Governance & Security Audit</span>
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                </a>
              </div>

              {/* Direct Info */}
              <div className="pt-4 border-t border-slate-800 space-y-3 text-xs text-slate-300">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>consulting@genxtechnologies.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Building2 className="w-4 h-4 text-cyan-400" />
                  <span>GenX AI Tech Tower, Innovation District</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
