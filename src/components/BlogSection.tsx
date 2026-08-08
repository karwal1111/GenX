import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Clock, Heart, Calendar, ArrowRight, Sparkles, User } from 'lucide-react';
import { BlogCategory, BlogPost } from '../types';
import { BLOG_POSTS } from '../data/mockData';
import { BlogPostModal } from './BlogPostModal';

interface BlogSectionProps {
  onOpenConsultation: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>('All');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const categories: BlogCategory[] = [
    'All',
    'Generative AI',
    'ML Engineering',
    'AI Strategy',
    'Computer Vision',
  ];

  const filteredPosts = BLOG_POSTS.filter((p) =>
    selectedCategory === 'All' ? true : p.category === selectedCategory
  );

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  return (
    <section id="blog" className="py-20 bg-slate-950 border-t border-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>GenX Engineering Insights</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            AI & MLOps{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Thought Leadership
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Technical breakdowns, production deployment field guides, and strategic AI frameworks written by GenX AI architects.
          </p>
        </div>

        {/* Featured Post Card */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative rounded-3xl bg-slate-900/90 border border-slate-800 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-7 relative h-64 lg:h-auto overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-cyan-500 text-slate-950 text-xs font-bold uppercase tracking-wider flex items-center space-x-1 shadow-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Featured Analysis</span>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-xs text-slate-400">
                    <span className="px-2.5 py-1 rounded-md bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-slate-500 mr-1" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {featuredPost.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      className="w-8 h-8 rounded-full object-cover border border-cyan-500/30"
                    />
                    <div className="text-xs">
                      <div className="font-bold text-white">{featuredPost.author.name}</div>
                      <div className="text-slate-400">{featuredPost.author.role}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedPost(featuredPost)}
                    className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 text-xs font-bold hover:bg-cyan-400 transition-colors flex items-center space-x-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="group flex flex-col rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden hover:border-cyan-500/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[10px] font-semibold text-cyan-300">
                  {post.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 text-[11px] text-slate-400">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span className="text-slate-300 font-medium">{post.author.name}</span>
                  </div>

                  <button
                    onClick={() => setSelectedPost(post)}
                    className="text-cyan-400 font-bold hover:text-cyan-300 flex items-center space-x-1"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Blog Article Reader Modal */}
      <BlogPostModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
        onOpenConsultation={onOpenConsultation}
      />
    </section>
  );
};
