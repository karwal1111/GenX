import React, { useState } from 'react';
import { Sparkles, MessageSquare, Menu, X, Inbox, ChevronRight, PhoneCall, Bot } from 'lucide-react';
import { StoredEnquiry } from '../types';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenAdvisor: () => void;
  onOpenConsultation: () => void;
  onOpenAdminLeads: () => void;
  storedEnquiries: StoredEnquiry[];
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenAdvisor,
  onOpenConsultation,
  onOpenAdminLeads,
  storedEnquiries,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Capabilities' },
    { id: 'portfolio', label: 'AI Portfolio' },
    { id: 'blog', label: 'Blog & Insights' },
    { id: 'roi-calculator', label: 'ROI Calculator' },
    { id: 'contact', label: 'Contact & Enquiry' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappNumber = '15550192834'; // Dedicated consultancy WhatsApp line
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hi GenX Technologies team, I am interested in discussing an AI/ML consulting opportunity for my business.'
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 text-white transition-all">
      {/* Top Banner Bar */}
      <div className="bg-gradient-to-r from-emerald-950/70 via-cyan-950/70 to-slate-950 border-b border-emerald-500/20 px-4 py-1.5 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping mr-1.5" />
              WhatsApp Online
            </span>
            <span className="text-slate-400 hidden sm:inline">
              Average response time: <strong className="text-emerald-300 font-medium">&lt;15 mins</strong>
            </span>
          </div>

          <div className="flex items-center space-x-4 text-slate-400">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Direct WhatsApp Chat</span>
            </a>
            <span className="text-slate-700">|</span>
            <button
              onClick={onOpenAdminLeads}
              className="flex items-center space-x-1 text-slate-300 hover:text-cyan-400 transition-colors"
              title="View received consulting enquiries"
            >
              <Inbox className="w-3.5 h-3.5 text-cyan-400" />
              <span>Inquiries Inbox</span>
              {storedEnquiries.length > 0 && (
                <span className="ml-1 px-1.5 py-0.2 text-[10px] font-bold bg-cyan-500 text-slate-950 rounded-full">
                  {storedEnquiries.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-600 via-blue-600 to-indigo-600 text-white shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <Sparkles className="w-6 h-6 text-cyan-200 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-xl bg-cyan-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="text-xl font-extrabold tracking-tight text-white font-mono">
                  Gen<span className="text-cyan-400">X</span>
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-semibold uppercase tracking-wider">
                  AI/ML
                </span>
              </div>
              <span className="text-[10px] text-slate-400 block tracking-wider font-medium uppercase">
                Technologies
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenAdvisor}
              className="relative group inline-flex items-center space-x-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-900 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-950/40 hover:border-cyan-400 transition-all shadow-sm"
            >
              <Bot className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>AI Solution Advisor</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
            </button>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center space-x-2 px-4 py-2 text-xs font-bold rounded-lg bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white hover:from-cyan-400 hover:to-indigo-500 transition-all shadow-md shadow-cyan-500/20 active:scale-95"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={onOpenAdvisor}
              className="p-2 rounded-lg bg-slate-900 border border-cyan-500/30 text-cyan-400"
              title="AI Advisor"
            >
              <Bot className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2.5 text-sm font-medium rounded-lg transition-colors flex items-center justify-between ${
                  activeTab === item.id
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-semibold'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-600" />
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdvisor();
              }}
              className="w-full flex items-center justify-center space-x-2 py-3 text-sm font-semibold rounded-lg bg-cyan-950/60 border border-cyan-500/40 text-cyan-300"
            >
              <Bot className="w-4 h-4 text-cyan-400" />
              <span>Generate Custom AI Strategy</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center space-x-2 py-3 text-sm font-bold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Schedule Strategic Consultation</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 py-3 text-sm font-bold rounded-lg bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-600/30 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Direct Chat</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
