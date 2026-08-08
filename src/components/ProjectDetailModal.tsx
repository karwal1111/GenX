import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Cpu, ArrowRight, ExternalLink, Play, Quote, Building2, Globe, Clock, Layers, Sparkles, MessageSquare } from 'lucide-react';
import { PortfolioItem } from '../types';

interface ProjectDetailModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
  onRequestSolution: (projectTitle: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onRequestSolution,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'sandbox'>('overview');
  
  // Interactive Sandbox states
  const [ragQuery, setRagQuery] = useState('What are the compliance requirements for Section 14B under SEC guidelines?');
  const [ragResult, setRagResult] = useState<string | null>(null);
  
  const [visionImage, setVisionImage] = useState<string>('wafer');
  const [visionDetecting, setVisionDetecting] = useState(false);
  const [visionOutput, setVisionOutput] = useState<{ status: string; confidence: string; defectLocation: string } | null>(null);

  const [forecastHorizon, setForecastHorizon] = useState<number>(30);

  if (!project) return null;

  const handleRunRAGSim = () => {
    setRagResult(
      `[GenX RAG Engine Output • Verified Citation]
According to SEC Regulatory Guidelines (Doc Ref: SEC-10K-2025_P14.pdf, Paragraph 3):
"Section 14B mandates quarterly audit logging of all cross-border transactional risk models, requiring continuous row-level access verification with < 5ms provenance trace."
Confidence: 99.8% | Source Chunk Matches: 4 | Latency: 3.8ms`
    );
  };

  const handleRunVisionSim = () => {
    setVisionDetecting(true);
    setVisionOutput(null);
    setTimeout(() => {
      setVisionDetecting(false);
      if (visionImage === 'wafer') {
        setVisionOutput({
          status: 'DEFECT FLAGGED',
          confidence: '99.82%',
          defectLocation: 'Micro-fracture detected at Sector B-12 (5.4 microns)'
        });
      } else {
        setVisionOutput({
          status: 'QUALITY PASS',
          confidence: '99.94%',
          defectLocation: 'No micro-cracks or surface imperfections found.'
        });
      }
    }, 600);
  };

  const whatsappNumber = '15550192834';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hi GenX team, I read your case study on "${project.title}" and would like to discuss a similar project for my company.`
  )}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8 text-white"
        >
          {/* Top Banner Image with Gradient */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-950/80 text-slate-300 hover:text-white border border-slate-700 hover:bg-slate-900 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-6 left-6 right-6 space-y-2">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold">
                  {project.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-900/80 text-slate-300 border border-slate-700 flex items-center space-x-1">
                  <Building2 className="w-3.5 h-3.5 text-slate-400 mr-1" />
                  <span>{project.clientIndustry}</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-900/80 text-slate-300 border border-slate-700 flex items-center space-x-1">
                  <Globe className="w-3.5 h-3.5 text-slate-400 mr-1" />
                  <span>{project.clientRegion}</span>
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {project.title}
              </h2>
              <p className="text-sm text-cyan-300 font-medium">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Modal Navigation Tabs */}
          <div className="flex items-center space-x-2 border-b border-slate-800 px-6 pt-2 bg-slate-950/60 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-3 px-4 border-b-2 transition-colors ${
                activeTab === 'overview'
                  ? 'border-cyan-400 text-cyan-400'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              Case Study Overview
            </button>
            {project.architectureDiagram && (
              <button
                onClick={() => setActiveTab('architecture')}
                className={`py-3 px-4 border-b-2 transition-colors ${
                  activeTab === 'architecture'
                    ? 'border-cyan-400 text-cyan-400'
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                Architectural Blueprint
              </button>
            )}
            {project.interactiveDemoType && (
              <button
                onClick={() => setActiveTab('sandbox')}
                className={`py-3 px-4 border-b-2 transition-colors flex items-center space-x-1.5 ${
                  activeTab === 'sandbox'
                    ? 'border-cyan-400 text-cyan-400'
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Interactive Live Sandbox</span>
              </button>
            )}
          </div>

          {/* Modal Content */}
          <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
            {activeTab === 'overview' && (
              <>
                {/* Metrics Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                      <div className="text-2xl font-extrabold text-cyan-400 font-mono">
                        {m.value}
                      </div>
                      <div className="text-xs font-bold text-slate-200 mt-1">
                        {m.label}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {m.description}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Problem vs Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-red-400">
                      The Client Challenge
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      The GenX Solution
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                    Technologies & Frameworks Deployed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial Quote */}
                {project.clientQuote && (
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-800 relative">
                    <Quote className="w-8 h-8 text-cyan-500/20 absolute top-4 right-4" />
                    <p className="text-sm italic text-slate-200 leading-relaxed">
                      "{project.clientQuote.text}"
                    </p>
                    <div className="mt-3 flex items-center space-x-3">
                      <div>
                        <div className="text-xs font-bold text-cyan-400">
                          {project.clientQuote.author}
                        </div>
                        <div className="text-[11px] text-slate-400">
                          {project.clientQuote.role}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}

            {activeTab === 'architecture' && project.architectureDiagram && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                  <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    <span>System Flow Blueprint</span>
                  </h4>
                  <div className="p-4 rounded-lg bg-slate-900 border border-cyan-500/30 text-xs text-cyan-300 font-mono leading-loose">
                    {project.architectureDiagram}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs text-slate-300">
                  <h5 className="font-bold text-slate-200">Deployment Architecture Notes:</h5>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                    <li>Zero-trust API Gateway with rate-limiting & telemetry monitoring.</li>
                    <li>Row-level vector authorization restricting cross-tenant data visibility.</li>
                    <li>Containerized microservices deployed on Google Cloud Run & Kubernetes with auto-scaling.</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'sandbox' && (
              <div className="space-y-4 p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center space-x-2">
                    <Cpu className="w-4 h-4 text-cyan-400" />
                    <span>Interactive Model Simulator</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Live Demo State
                  </span>
                </div>

                {project.interactiveDemoType === 'rag' && (
                  <div className="space-y-3">
                    <p className="text-xs text-slate-300">
                      Test query retrieval against GenX Compliance Knowledge Vector Index:
                    </p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={ragQuery}
                        onChange={(e) => setRagQuery(e.target.value)}
                        className="flex-1 px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-200 focus:border-cyan-500 outline-none"
                      />
                      <button
                        onClick={handleRunRAGSim}
                        className="px-4 py-2 rounded-lg bg-cyan-600 text-white text-xs font-bold hover:bg-cyan-500 transition-colors"
                      >
                        Execute RAG
                      </button>
                    </div>

                    {ragResult && (
                      <div className="p-3.5 rounded-lg bg-slate-900 border border-cyan-500/40 text-xs text-cyan-200 font-mono whitespace-pre-wrap leading-relaxed">
                        {ragResult}
                      </div>
                    )}
                  </div>
                )}

                {project.interactiveDemoType === 'vision' && (
                  <div className="space-y-3">
                    <p className="text-xs text-slate-300">
                      Select sample manufacturing component to run sub-10ms TensorRT vision inspection:
                    </p>
                    <div className="flex space-x-3">
                      <button
                        onClick={() => setVisionImage('wafer')}
                        className={`px-3 py-2 rounded-lg text-xs font-semibold border ${
                          visionImage === 'wafer'
                            ? 'bg-cyan-950 border-cyan-500 text-cyan-300'
                            : 'bg-slate-900 border-slate-800 text-slate-400'
                        }`}
                      >
                        Sample A (Micro-fracture)
                      </button>
                      <button
                        onClick={() => setVisionImage('clean')}
                        className={`px-3 py-2 rounded-lg text-xs font-semibold border ${
                          visionImage === 'clean'
                            ? 'bg-cyan-950 border-cyan-500 text-cyan-300'
                            : 'bg-slate-900 border-slate-800 text-slate-400'
                        }`}
                      >
                        Sample B (Pristine Wafer)
                      </button>
                    </div>

                    <button
                      onClick={handleRunVisionSim}
                      disabled={visionDetecting}
                      className="w-full py-2.5 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs font-bold"
                    >
                      {visionDetecting ? 'Running TensorRT Inference (120 FPS)...' : 'Run Inspection Check'}
                    </button>

                    {visionOutput && (
                      <div
                        className={`p-3.5 rounded-lg border text-xs font-mono ${
                          visionOutput.status.includes('DEFECT')
                            ? 'bg-red-950/40 border-red-500/40 text-red-300'
                            : 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
                        }`}
                      >
                        <div className="font-bold text-sm mb-1">{visionOutput.status}</div>
                        <div>Confidence Score: {visionOutput.confidence}</div>
                        <div>Details: {visionOutput.defectLocation}</div>
                      </div>
                    )}
                  </div>
                )}

                {project.interactiveDemoType === 'predictive' && (
                  <div className="space-y-3">
                    <p className="text-xs text-slate-300">
                      Adjust forecasting horizon slider to view supply chain load predictions:
                    </p>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-slate-400">
                        <span>Horizon: {forecastHorizon} Days</span>
                        <span>Model: PatchTST Transformer</span>
                      </div>
                      <input
                        type="range"
                        min="7"
                        max="90"
                        value={forecastHorizon}
                        onChange={(e) => setForecastHorizon(Number(e.target.value))}
                        className="w-full accent-cyan-500"
                      />
                    </div>

                    <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 text-xs space-y-1 font-mono text-slate-300">
                      <div className="text-cyan-400 font-bold">
                        Forecast Output ({forecastHorizon}-Day Horizon):
                      </div>
                      <div>Expected Regional Hub SKU Volume: {(forecastHorizon * 1450).toLocaleString()} units</div>
                      <div>Optimized Buffer Safety Stock: {Math.round(forecastHorizon * 85)} units</div>
                      <div>Estimated Stockout Risk: &lt; 0.4%</div>
                    </div>
                  </div>
                )}

                {project.interactiveDemoType === 'agent' && (
                  <div className="space-y-3">
                    <p className="text-xs text-slate-300">
                      Autonomous Multi-Agent Workflow Execution Log:
                    </p>
                    <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono space-y-1 text-slate-300">
                      <div className="text-emerald-400">[Agent 1: Extractor] Extracted customer ID #8921 and dispute reason.</div>
                      <div className="text-cyan-400">[Agent 2: Validation] Checked Salesforce CRM - Subscription tier active.</div>
                      <div className="text-indigo-400">[Agent 3: Billing] Executed refund adjustment $49.00 via API webhook.</div>
                      <div className="text-slate-400">[Agent 4: Supervisor] Sent confirmation message & logged audit trail.</div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer CTAs */}
          <div className="p-6 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-bold hover:bg-emerald-900/60 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Discuss via WhatsApp</span>
            </a>

            <button
              onClick={() => {
                onRequestSolution(project.title);
                onClose();
              }}
              className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white text-xs font-bold shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-indigo-500 transition-all"
            >
              <span>Request Similar AI Solution</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
