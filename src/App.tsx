/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioGallery } from './components/PortfolioGallery';
import { BlogSection } from './components/BlogSection';
import { ROICalculator } from './components/ROICalculator';
import { ContactSection } from './components/ContactSection';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { AIAdvisorModal } from './components/AIAdvisorModal';
import { AdminLeadsModal } from './components/AdminLeadsModal';
import { SEOPreviewModal } from './components/SEOPreviewModal';
import { Footer } from './components/Footer';
import { StoredEnquiry, EnquiryFormInput } from './types';
import { CheckCircle2, Sparkles, MessageSquare, Globe, ShieldCheck } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  
  // Stored Enquiries state
  const [storedEnquiries, setStoredEnquiries] = useState<StoredEnquiry[]>(() => {
    try {
      const saved = localStorage.getItem('genx_enquiries');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('genx_enquiries', JSON.stringify(storedEnquiries));
    } catch (e) {
      // ignore
    }
  }, [storedEnquiries]);

  // Modal triggers
  const [advisorModalOpen, setAdvisorModalOpen] = useState(false);
  const [adminLeadsModalOpen, setAdminLeadsModalOpen] = useState(false);
  const [seoModalOpen, setSeoModalOpen] = useState(false);

  // Pre-fill state for contact section
  const [contactProjectType, setContactProjectType] = useState<string>(
    'Custom Generative AI & Fine-Tuned LLMs'
  );
  const [contactMessage, setContactMessage] = useState<string>('');

  // Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleEnquirySubmitted = (newEnquiry: StoredEnquiry) => {
    setStoredEnquiries((prev) => [newEnquiry, ...prev]);
    showToast(`Inquiry recorded successfully! Ref: ${newEnquiry.refId}`);
  };

  const handleRequestSolutionFromPortfolio = (projectTitle: string) => {
    setContactProjectType('Custom Generative AI & Fine-Tuned LLMs');
    setContactMessage(`I am interested in requesting an AI solution similar to your portfolio case study on "${projectTitle}".`);
    setActiveTab('contact');
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    showToast(`Navigated to Contact Form for "${projectTitle}"`);
  };

  const handleRequestProposalFromService = (serviceTitle: string) => {
    setContactProjectType(serviceTitle);
    setContactMessage(`I would like to request a formal consulting proposal for ${serviceTitle}.`);
    setActiveTab('contact');
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    showToast(`Contact Form prefilled for ${serviceTitle}`);
  };

  const handleOpenConsultationWithROI = (roiSummary: string) => {
    setContactMessage(roiSummary);
    setActiveTab('contact');
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    showToast('ROI calculation attached to Inquiry Form!');
  };

  const handleSubmitEnquiryFromRoadmap = (enquiryData: Partial<EnquiryFormInput>) => {
    if (enquiryData.projectType) setContactProjectType(enquiryData.projectType);
    if (enquiryData.message) setContactMessage(enquiryData.message);
    setActiveTab('contact');
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    showToast('AI Roadmap attached to Inquiry Form!');
  };

  const handleUpdateStatus = (id: string, newStatus: StoredEnquiry['status']) => {
    setStoredEnquiries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, status: newStatus } : e))
    );
    showToast(`Enquiry status updated to "${newStatus}"`);
  };

  const handleClearEnquiries = () => {
    if (window.confirm('Are you sure you want to clear all recorded inquiries?')) {
      setStoredEnquiries([]);
      showToast('Cleared all local inquiries inbox');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 flex items-center space-x-2 px-4 py-3 rounded-xl bg-slate-900 border border-cyan-500/50 text-cyan-300 text-xs font-bold shadow-2xl backdrop-blur-md animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-cyan-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navbar Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenAdvisor={() => setAdvisorModalOpen(true)}
        onOpenConsultation={() => {
          setActiveTab('contact');
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenAdminLeads={() => setAdminLeadsModalOpen(true)}
        storedEnquiries={storedEnquiries}
      />

      {/* Main Page Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onExplorePortfolio={() => {
            setActiveTab('portfolio');
            const el = document.getElementById('portfolio');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenAdvisor={() => setAdvisorModalOpen(true)}
          onCalculateROI={() => {
            setActiveTab('roi-calculator');
            const el = document.getElementById('roi-calculator');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenConsultation={() => {
            setActiveTab('contact');
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Services / Capabilities Section */}
        <ServicesSection onRequestProposal={handleRequestProposalFromService} />

        {/* Portfolio Gallery Section */}
        <PortfolioGallery onRequestSolution={handleRequestSolutionFromPortfolio} />

        {/* Interactive AI ROI Calculator Section */}
        <ROICalculator onOpenConsultationWithROI={handleOpenConsultationWithROI} />

        {/* Blog & Insights Section */}
        <BlogSection
          onOpenConsultation={() => {
            setActiveTab('contact');
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Contact Form & WhatsApp Connect Section */}
        <ContactSection
          initialProjectType={contactProjectType}
          initialMessage={contactMessage}
          onEnquirySubmitted={handleEnquirySubmitted}
        />
      </main>

      {/* SEO & Lead Gen Floating Inspector Button (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setSeoModalOpen(true)}
          className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 text-[11px] font-semibold shadow-lg backdrop-blur-md transition-all"
          title="Inspect SEO Structured Data & Lead Gen Specs"
        >
          <Globe className="w-3.5 h-3.5 text-cyan-400" />
          <span className="hidden sm:inline">SEO & Schema Data</span>
        </button>
      </div>

      {/* WhatsApp Floating Chat Launcher */}
      <WhatsAppFloatingButton />

      {/* Modals */}
      <AIAdvisorModal
        isOpen={advisorModalOpen}
        onClose={() => setAdvisorModalOpen(false)}
        onSubmitEnquiryFromRoadmap={handleSubmitEnquiryFromRoadmap}
      />

      <AdminLeadsModal
        isOpen={adminLeadsModalOpen}
        onClose={() => setAdminLeadsModalOpen(false)}
        enquiries={storedEnquiries}
        onUpdateStatus={handleUpdateStatus}
        onClearEnquiries={handleClearEnquiries}
      />

      <SEOPreviewModal
        isOpen={seoModalOpen}
        onClose={() => setSeoModalOpen(false)}
      />

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenAdvisor={() => setAdvisorModalOpen(true)}
        onOpenConsultation={() => {
          setActiveTab('contact');
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />
    </div>
  );
}
