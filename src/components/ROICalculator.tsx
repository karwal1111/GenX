import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, TrendingUp, DollarSign, Clock, ArrowRight, MessageSquare, CheckCircle2, ShieldCheck, Download, Sparkles } from 'lucide-react';
import { ROICalculatorState, EnquiryFormInput } from '../types';

interface ROICalculatorProps {
  onOpenConsultationWithROI: (roiSummary: string) => void;
}

export const ROICalculator: React.FC<ROICalculatorProps> = ({
  onOpenConsultationWithROI,
}) => {
  const [inputs, setInputs] = useState<ROICalculatorState>({
    industry: 'FinTech & Banking',
    monthlyOpCost: 85000,
    teamSize: 25,
    automationLevel: 45, // percentage
    hourlyRate: 55,
  });

  // Financial Calculations
  const annualOpCost = inputs.monthlyOpCost * 12;
  const annualSavings = Math.round((annualOpCost * (inputs.automationLevel / 100)) * 0.75); // Accounting for implementation overhead
  const hoursSavedPerYear = Math.round((inputs.teamSize * 160 * 12) * (inputs.automationLevel / 100));
  const estimatedGenXCost = Math.round(annualSavings * 0.22); // Estimated project cost approx 22% of year-1 savings
  const paybackMonths = Math.max(1.8, Math.round((estimatedGenXCost / (annualSavings / 12)) * 10) / 10);
  const netFirstYearGain = Math.max(0, annualSavings - estimatedGenXCost);

  const roiSummaryString = `[AI ROI Estimator Summary]
Industry: ${inputs.industry}
Monthly OpEx: $${inputs.monthlyOpCost.toLocaleString()}
Team Size: ${inputs.teamSize} employees
Target Automation: ${inputs.automationLevel}%
Projected Annual Savings: $${annualSavings.toLocaleString()}
Estimated Payback Period: ${paybackMonths} months`;

  const handleSendToWhatsApp = () => {
    const whatsappNumber = '15550192834';
    const text = `Hi GenX team, I calculated an AI ROI estimate for my company (${inputs.industry}):
Target Automation: ${inputs.automationLevel}%
Estimated Annual Savings: $${annualSavings.toLocaleString()}
Estimated Payback: ${paybackMonths} months.
I would like to request an official AI Audit & proposal!`;

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="roi-calculator" className="py-20 bg-slate-950 border-t border-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Quantitative Business Impact</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Interactive AI{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              ROI & Cost Savings Estimator
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Measure how automating routine business processes with GenX fine-tuned LLMs and Computer Vision impacts your annual bottom line.
          </p>
        </div>

        {/* Main Calculator Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
          {/* Controls Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center space-x-2 border-b border-slate-800 pb-3">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span>Configure Operational Parameters</span>
            </h3>

            {/* Industry Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2 uppercase tracking-wider">
                Industry Sector
              </label>
              <select
                value={inputs.industry}
                onChange={(e) => setInputs({ ...inputs, industry: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:border-cyan-500 outline-none"
              >
                <option value="FinTech & Banking">FinTech & Banking</option>
                <option value="Industrial Manufacturing & IoT">Industrial Manufacturing & IoT</option>
                <option value="E-Commerce & Supply Chain">E-Commerce & Supply Chain</option>
                <option value="Healthcare & Life Sciences">Healthcare & Life Sciences</option>
                <option value="SaaS & Telecommunications">SaaS & Telecommunications</option>
                <option value="Insurance & Legal Services">Insurance & Legal Services</option>
              </select>
            </div>

            {/* Monthly OpEx Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-medium">
                <span className="text-slate-300 uppercase tracking-wider font-bold">
                  Monthly Process Operational Expense
                </span>
                <span className="font-mono text-cyan-400 font-bold text-sm">
                  ${inputs.monthlyOpCost.toLocaleString()} / mo
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="300000"
                step="5000"
                value={inputs.monthlyOpCost}
                onChange={(e) => setInputs({ ...inputs, monthlyOpCost: Number(e.target.value) })}
                className="w-full accent-cyan-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>$10k/mo</span>
                <span>$150k/mo</span>
                <span>$300k+/mo</span>
              </div>
            </div>

            {/* Team Size Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-medium">
                <span className="text-slate-300 uppercase tracking-wider font-bold">
                  Team Members Handling Workflow
                </span>
                <span className="font-mono text-cyan-400 font-bold text-sm">
                  {inputs.teamSize} Staff
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="150"
                value={inputs.teamSize}
                onChange={(e) => setInputs({ ...inputs, teamSize: Number(e.target.value) })}
                className="w-full accent-cyan-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>5 employees</span>
                <span>75 employees</span>
                <span>150+ employees</span>
              </div>
            </div>

            {/* Automation Level Target */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-medium">
                <span className="text-slate-300 uppercase tracking-wider font-bold">
                  Desired Automation & AI Augmentation Level
                </span>
                <span className="font-mono text-emerald-400 font-bold text-sm">
                  {inputs.automationLevel}% Automated
                </span>
              </div>
              <input
                type="range"
                min="15"
                max="80"
                value={inputs.automationLevel}
                onChange={(e) => setInputs({ ...inputs, automationLevel: Number(e.target.value) })}
                className="w-full accent-emerald-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>15% (Assistant)</span>
                <span>45% (Hybrid Agent)</span>
                <span>80% (Autonomous)</span>
              </div>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-6 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Projected First-Year ROI Output
              </div>

              {/* Big Savings Number */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/60 to-cyan-950/60 border border-emerald-500/30 text-center space-y-1">
                <div className="text-xs text-emerald-300 font-bold uppercase tracking-wider">
                  Estimated Net Annual Financial Savings
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold text-emerald-400 font-mono tracking-tight">
                  ${annualSavings.toLocaleString()}
                </div>
                <div className="text-xs text-slate-300">
                  Equivalent to reclaiming <strong className="text-cyan-300">{hoursSavedPerYear.toLocaleString()} labor hours</strong> per year
                </div>
              </div>

              {/* Metric Breakdown Cards */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
                  <div className="text-[10px] uppercase font-bold text-slate-400">
                    Est. Payback Period
                  </div>
                  <div className="text-xl font-extrabold text-cyan-400 font-mono mt-0.5">
                    {paybackMonths} Months
                  </div>
                  <div className="text-[10px] text-slate-400">Rapid ROI breakeven</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
                  <div className="text-[10px] uppercase font-bold text-slate-400">
                    First-Year Net Gain
                  </div>
                  <div className="text-xl font-extrabold text-emerald-400 font-mono mt-0.5">
                    ${netFirstYearGain.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-slate-400">After implementation</div>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <button
                onClick={() => onOpenConsultationWithROI(roiSummaryString)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-indigo-500 transition-all flex items-center justify-center space-x-2"
              >
                <Download className="w-4 h-4 text-cyan-200" />
                <span>Request Official AI Audit & Detailed ROI Report</span>
              </button>

              <button
                onClick={handleSendToWhatsApp}
                className="w-full py-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/60 font-bold text-xs transition-colors flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Send ROI Calculation Summary to WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
