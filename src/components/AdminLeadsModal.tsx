import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Inbox, X, Download, MessageSquare, Mail, Phone, Building2, CheckCircle2, Clock, Filter, Trash2, Tag } from 'lucide-react';
import { StoredEnquiry } from '../types';

interface AdminLeadsModalProps {
  isOpen: boolean;
  onClose: () => void;
  enquiries: StoredEnquiry[];
  onUpdateStatus: (id: string, newStatus: StoredEnquiry['status']) => void;
  onClearEnquiries: () => void;
}

export const AdminLeadsModal: React.FC<AdminLeadsModalProps> = ({
  isOpen,
  onClose,
  enquiries,
  onUpdateStatus,
  onClearEnquiries,
}) => {
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [selectedEnquiry, setSelectedEnquiry] = useState<StoredEnquiry | null>(null);

  if (!isOpen) return null;

  const filteredEnquiries = enquiries.filter((e) =>
    filterStatus === 'All' ? true : e.status === filterStatus
  );

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(enquiries, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `GenX_Consulting_Leads_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const whatsappNumber = '15550192834';
  const handleReplyWhatsApp = (enquiry: StoredEnquiry) => {
    const text = `Hi ${enquiry.name}, this is GenX Technologies regarding your AI consulting enquiry (Ref: ${enquiry.refId}) for ${enquiry.company || 'your project'}. We reviewed your request and would love to schedule a discovery call!`;
    const clientPhone = enquiry.phone?.replace(/[^0-9]/g, '') || whatsappNumber;
    window.open(`https://wa.me/${clientPhone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8 text-white"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between p-6 bg-slate-950 border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                <Inbox className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Consulting Inquiries Inbox</h3>
                <p className="text-xs text-slate-400">
                  Manager view for tracking received leads and responding via WhatsApp or Email
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handleExportJSON}
                disabled={enquiries.length === 0}
                className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold flex items-center space-x-1.5 disabled:opacity-50"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export JSON</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
            {/* Filter Pills */}
            <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-800">
              <div className="flex items-center space-x-1.5 text-xs font-semibold">
                {['All', 'New', 'In Review', 'Contacted', 'Closed'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setFilterStatus(st)}
                    className={`px-3 py-1 rounded-lg transition-colors ${
                      filterStatus === st
                        ? 'bg-cyan-500 text-slate-950 font-bold'
                        : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>

              {enquiries.length > 0 && (
                <button
                  onClick={onClearEnquiries}
                  className="text-[11px] text-red-400 hover:text-red-300 flex items-center space-x-1"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Clear All</span>
                </button>
              )}
            </div>

            {/* List of Enquiries */}
            {filteredEnquiries.length === 0 ? (
              <div className="text-center py-12 text-slate-500 text-xs">
                No consulting enquiries recorded yet. Submit a message on the Contact form to see it logged here!
              </div>
            ) : (
              <div className="space-y-3">
                {filteredEnquiries.map((enq) => (
                  <div
                    key={enq.id}
                    className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 transition-colors space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                          {enq.refId}
                        </span>
                        <span className="text-xs font-bold text-white">{enq.name}</span>
                        {enq.company && (
                          <span className="text-xs text-slate-400">({enq.company})</span>
                        )}
                      </div>

                      <div className="flex items-center space-x-2">
                        <select
                          value={enq.status}
                          onChange={(e) => onUpdateStatus(enq.id, e.target.value as any)}
                          className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-bold text-cyan-300 outline-none"
                        >
                          <option value="New">New</option>
                          <option value="In Review">In Review</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Closed">Closed</option>
                        </select>

                        <button
                          onClick={() => handleReplyWhatsApp(enq)}
                          className="px-3 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold flex items-center space-x-1 transition-colors"
                        >
                          <MessageSquare className="w-3 h-3" />
                          <span>WhatsApp Reply</span>
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] text-slate-400 font-mono">
                      <div>Email: <span className="text-slate-200">{enq.email}</span></div>
                      <div>Phone: <span className="text-slate-200">{enq.phone || 'N/A'}</span></div>
                      <div>Budget: <span className="text-slate-200">{enq.budget}</span></div>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800/80 text-xs text-slate-300 font-sans leading-relaxed">
                      <div className="text-[10px] uppercase font-bold text-slate-500 mb-1">
                        Project Brief / Message:
                      </div>
                      {enq.message}
                    </div>

                    <div className="flex justify-between items-center text-[10px] text-slate-500">
                      <span>Submitted: {new Date(enq.timestamp).toLocaleString()}</span>
                      <span>Preferred Contact: {enq.preferredContact}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
