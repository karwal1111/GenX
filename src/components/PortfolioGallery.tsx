import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, Cpu, ArrowRight, Sparkles, Building2, Globe, CheckCircle2 } from 'lucide-react';
import { CategoryType, PortfolioItem } from '../types';
import { PORTFOLIO_PROJECTS } from '../data/mockData';
import { ProjectDetailModal } from './ProjectDetailModal';

interface PortfolioGalleryProps {
  onRequestSolution: (projectTitle: string) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({
  onRequestSolution,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const categories: CategoryType[] = [
    'All',
    'Generative AI & LLMs',
    'Computer Vision',
    'Predictive Analytics',
    'Autonomous AI Agents',
    'Edge AI & IoT',
  ];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((proj) => {
    const matchesCategory = selectedCategory === 'All' || proj.category === selectedCategory;
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.clientIndustry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="portfolio" className="py-20 bg-slate-950 border-t border-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Proven Enterprise Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            AI & Machine Learning{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Portfolio Gallery
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Explore our production case studies featuring high-speed Computer Vision, multi-modal LLM fine-tuning, and autonomous AI agents.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="space-y-4">
          {/* Search Input & Category Pills */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
            {/* Category Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all ${
                      isActive
                        ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects or tech..."
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:border-cyan-500 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="group relative flex flex-col rounded-2xl bg-slate-900/90 border border-slate-800/90 overflow-hidden hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300"
            >
              {/* Thumbnail Container */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-cyan-500 text-slate-950 text-[10px] font-bold uppercase tracking-wider flex items-center space-x-1 shadow-md">
                    <Sparkles className="w-3 h-3" />
                    <span>Featured Case</span>
                  </div>
                )}

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 font-semibold text-cyan-300">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-950/80 px-2 py-0.5 rounded">
                    {project.duration}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-xs text-slate-400 font-medium flex items-center space-x-1">
                    <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{project.clientIndustry}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>
                </div>

                {/* Highlight Metric Pill */}
                {project.metrics?.[0] && (
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase text-slate-400 font-bold">
                        {project.metrics[0].label}
                      </div>
                      <div className="text-xs text-slate-300 truncate max-w-[150px]">
                        {project.metrics[0].description}
                      </div>
                    </div>
                    <div className="text-base font-mono font-extrabold text-cyan-400">
                      {project.metrics[0].value}
                    </div>
                  </div>
                )}

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] bg-slate-950 text-slate-300 border border-slate-800 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-0.5 rounded text-[10px] bg-slate-950 text-slate-500 font-mono">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>

                {/* Footer Action */}
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-cyan-400 hover:text-cyan-300 font-bold inline-flex items-center space-x-1.5 group-hover:translate-x-1 transition-all"
                  >
                    <span>View Detailed Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">
              No projects found matching category or keyword search.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 px-4 py-2 text-xs font-semibold bg-slate-800 text-cyan-300 rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Case Study Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestSolution={onRequestSolution}
      />
    </section>
  );
};
