import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Heart, Share2, Clock, Calendar, Bookmark, ArrowRight, Sparkles, MessageSquare, CheckCircle2 } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogPostModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const BlogPostModal: React.FC<BlogPostModalProps> = ({
  post,
  onClose,
  onOpenConsultation,
}) => {
  const [likes, setLikes] = useState<number>(post?.likes || 0);
  const [hasLiked, setHasLiked] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!post) return null;

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
    } else {
      setLikes(likes - 1);
      setHasLiked(false);
    }
  };

  const handleCopyShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappNumber = '15550192834';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hi GenX team, I read your article "${post.title}" and would like to discuss implementing similar AI strategies.`
  )}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8 text-white"
        >
          {/* Header Image */}
          <div className="relative h-60 w-full overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
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
              <div className="flex items-center space-x-3 text-xs">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold">
                  {post.category}
                </span>
                <span className="text-slate-400 flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5 mr-1" />
                  {post.date}
                </span>
                <span className="text-slate-400 flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 mr-1" />
                  {post.readTime}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                {post.title}
              </h2>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
            {/* Author Row */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center space-x-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-cyan-500/30"
                />
                <div>
                  <div className="text-sm font-bold text-white">
                    {post.author.name}
                  </div>
                  <div className="text-xs text-slate-400">
                    {post.author.role}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handleLike}
                  className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-colors ${
                    hasLiked
                      ? 'bg-rose-950/60 border-rose-500/50 text-rose-300'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${hasLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                  <span>{likes}</span>
                </button>

                <button
                  onClick={handleCopyShare}
                  className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-cyan-400 text-xs flex items-center space-x-1 px-3"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copied ? 'Copied!' : 'Share'}</span>
                </button>
              </div>
            </div>

            {/* Key Takeaways Callout */}
            {post.keyTakeaways && post.keyTakeaways.length > 0 && (
              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 space-y-2">
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Executive Key Takeaways</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-200">
                  {post.keyTakeaways.map((t, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Main Article Content */}
            <div className="prose prose-invert max-w-none text-sm text-slate-300 leading-relaxed space-y-4 whitespace-pre-line font-sans">
              {post.content}
            </div>

            {/* Article Tags */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-2">
              {post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
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
              <span>Discuss Article via WhatsApp</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-blue-500 transition-all"
            >
              <span>Consult with Author & GenX Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
