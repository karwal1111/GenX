import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, X, Copy, CheckCircle2, Code, Share2 } from 'lucide-react';

interface SEOPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SEOPreviewModal: React.FC<SEOPreviewModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GenX Technologies",
    "url": "https://genxtechnologies.ai",
    "logo": "https://genxtechnologies.ai/logo.png",
    "description": "Enterprise Artificial Intelligence & Machine Learning Consulting Firm specializing in Custom LLM Fine-Tuning, Multi-Modal RAG, Edge Computer Vision, and Autonomous AI Agents.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-019-2834",
      "contactType": "consulting & lead enquiry",
      "contactOption": "WhatsApp Direct & Email",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://wa.me/15550192834"
    ]
  };

  const handleCopySchema = () => {
    navigator.clipboard.writeText(JSON.stringify(schemaJson, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8 text-white"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 bg-slate-950 border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">SEO & Lead Gen Optimization</h3>
                <p className="text-xs text-slate-400">
                  Schema.org Structured Data & Meta Tag configuration for search engine lead capture
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

          <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
            {/* Google Search Result Preview */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <div className="text-[10px] uppercase font-bold text-slate-500 mb-1">
                Google Search Result Preview
              </div>
              <div className="text-xs text-slate-400">https://genxtechnologies.ai</div>
              <div className="text-base font-bold text-blue-400 hover:underline cursor-pointer">
                GenX Technologies | Enterprise AI & Machine Learning Consultancy
              </div>
              <div className="text-xs text-slate-300 leading-normal">
                Sleek AI & Machine Learning Consultancy showcase with portfolio gallery, blog insights, AI ROI calculator, contact form, and direct WhatsApp connect.
              </div>
            </div>

            {/* Schema.org Structured Data */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-cyan-400 uppercase tracking-wider">
                <span className="flex items-center space-x-1.5">
                  <Code className="w-4 h-4 text-cyan-400" />
                  <span>Schema.org JSON-LD Structured Data</span>
                </span>
                <button
                  onClick={handleCopySchema}
                  className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 hover:text-white text-[10px] font-semibold flex items-center space-x-1"
                >
                  <Copy className="w-3 h-3" />
                  <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>

              <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-cyan-300 overflow-x-auto">
                {JSON.stringify(schemaJson, null, 2)}
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
